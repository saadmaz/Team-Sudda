import { describe, expect, it } from "vitest";
import { SERVICES } from "@/lib/content/services";
import { INDUSTRIES } from "@/lib/content/industries";
import { AREAS } from "@/lib/content/areas";
import {
  BUSINESS_QUOTE_STEPS,
  CAREERS_STEPS,
  CONTACT_STEPS,
  FEEDBACK_STEPS,
  HOME_BOOKING_STEPS,
} from "@/lib/content/formDefinitions";
import { summarise, validateField, validateStep, type FieldDef } from "@/lib/forms";

const unique = (xs: string[]) => new Set(xs).size === xs.length;

describe("content integrity", () => {
  it("has unique slugs", () => {
    expect(unique(SERVICES.map((s) => s.slug))).toBe(true);
    expect(unique(INDUSTRIES.map((i) => i.slug))).toBe(true);
    expect(unique(AREAS.map((a) => a.slug))).toBe(true);
  });

  it("only links to services that exist", () => {
    const slugs = new Set(SERVICES.map((s) => s.slug));
    for (const s of SERVICES)
      for (const r of s.related) expect(slugs, `${s.slug} → ${r}`).toContain(r);
    for (const i of INDUSTRIES)
      for (const r of i.services) expect(slugs, `${i.slug} → ${r}`).toContain(r);
  });

  it("gives every service a checklist", () => {
    for (const s of SERVICES) expect(s.includes.length, s.slug).toBeGreaterThan(2);
  });

  it("asks every form for a name and phone number", () => {
    for (const steps of [
      HOME_BOOKING_STEPS,
      BUSINESS_QUOTE_STEPS,
      CAREERS_STEPS,
      CONTACT_STEPS,
      FEEDBACK_STEPS,
    ]) {
      const fields = steps.flatMap((s) => s.fields);
      expect(fields.find((f) => f.name === "name")?.required).toBe(true);
      expect(fields.find((f) => f.name === "phone")?.required).toBe(true);
      expect(unique(fields.map((f) => f.name))).toBe(true);
    }
  });
});

describe("form validation", () => {
  const phone: FieldDef = { name: "phone", label: "Phone", type: "tel", required: true };
  const email: FieldDef = { name: "email", label: "Email", type: "email" };
  const date: FieldDef = { name: "date", label: "Date", type: "date" };

  it("requires required fields", () => {
    expect(validateField(phone, {})).toBeTruthy();
    expect(validateField(phone, { phone: "077 123 4567" })).toBeNull();
    expect(validateField(phone, { phone: "+94 77 123 4567" })).toBeNull();
    expect(validateField(phone, { phone: "123" })).toBeTruthy();
  });

  it("validates optional emails only when given", () => {
    expect(validateField(email, {})).toBeNull();
    expect(validateField(email, { email: "nope" })).toBeTruthy();
    expect(validateField(email, { email: "a@b.lk" })).toBeNull();
  });

  it("rejects past dates unless allowed", () => {
    expect(validateField(date, { date: "2000-01-01" })).toBeTruthy();
    expect(validateField({ ...date, allowPast: true }, { date: "2000-01-01" })).toBeNull();
  });

  it("skips hidden conditional fields", () => {
    const step = FEEDBACK_STEPS[0];
    const recleaning = step.fields.find((f) => f.name === "recleaning")!;
    expect(validateField({ ...recleaning, required: true }, { type: "Compliment" })).toBeNull();
    expect(validateField({ ...recleaning, required: true }, { type: "Complaint" })).toBeTruthy();
  });

  it("summarises only answered, visible fields", () => {
    const values = {
      type: "Compliment",
      recleaning: "Yes",
      message: "Great",
      name: "A",
      phone: "0771234567",
    };
    const labels = summarise(FEEDBACK_STEPS, values).map((l) => l.label);
    expect(labels).toContain("Details");
    expect(labels).not.toContain("Would you like us to come back and re-clean?");
    expect(Object.keys(validateStep(FEEDBACK_STEPS[0], values))).toHaveLength(0);
  });
});
