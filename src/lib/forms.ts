import { sendEmail, isEmailJSConfigured } from "./emailjs";

export type FieldType =
  "text" | "email" | "tel" | "date" | "number" | "textarea" | "select" | "chips" | "checkboxes";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: readonly string[];
  placeholder?: string;
  hint?: string;
  /** Date fields only: accept dates before today. */
  allowPast?: boolean;
  /** Takes half the row on wider screens. */
  half?: boolean;
  /** Only shown when another field has one of these values. */
  showIf?: { field: string; equals: readonly string[] };
}

export interface FormStep {
  title: string;
  fields: FieldDef[];
}

export type FormValues = Record<string, string>;

/** Name of the hidden spam-trap field. Real people never fill it in. */
export const HONEYPOT = "company_website";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-()]{9,16}$/;

export const isVisible = (field: FieldDef, values: FormValues) =>
  !field.showIf || field.showIf.equals.includes(values[field.showIf.field] ?? "");

export function validateField(field: FieldDef, values: FormValues): string | null {
  if (!isVisible(field, values)) return null;
  const v = (values[field.name] ?? "").trim();
  if (field.required && !v) return "This field is required.";
  if (!v) return null;
  if (field.type === "email" && !EMAIL_RE.test(v)) return "Please enter a valid email address.";
  if (field.type === "tel" && !PHONE_RE.test(v)) return "Please enter a valid phone number.";
  if (field.type === "date" && !field.allowPast) {
    const today = new Date().toISOString().split("T")[0];
    if (v < today) return "Please choose a date from today onwards.";
  }
  return null;
}

export function validateStep(step: FormStep, values: FormValues): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const f of step.fields) {
    const e = validateField(f, values);
    if (e) errors[f.name] = e;
  }
  return errors;
}

/** Formats every answered field as "Label: value" lines for the email body. */
export function summarise(
  steps: FormStep[],
  values: FormValues,
): { label: string; value: string }[] {
  return steps
    .flatMap((s) => s.fields)
    .filter((f) => isVisible(f, values) && (values[f.name] ?? "").trim())
    .map((f) => ({ label: f.label, value: values[f.name].trim() }));
}

export class FormConfigError extends Error {}

/**
 * Sends a form through EmailJS using the shared template.
 * The template's fields are reused: `service` carries the form name and topic,
 * and `message` carries every answer.
 */
export async function submitEnquiry({
  formName,
  steps,
  values,
  topicField,
  dateField,
}: {
  formName: string;
  steps: FormStep[];
  values: FormValues;
  topicField?: string;
  dateField?: string;
}): Promise<void> {
  // Silently accept bot submissions without sending anything.
  if (values[HONEYPOT]) return;
  if (!isEmailJSConfigured()) throw new FormConfigError("not_configured");

  const lines = summarise(steps, values).map(({ label, value }) => `${label}: ${value}`);
  const topic = topicField ? values[topicField] : "";

  await sendEmail({
    from_name: values.name ?? "",
    from_email: values.email ?? "",
    phone: values.phone ?? "",
    service: topic ? `[${formName}] ${topic}` : `[${formName}]`,
    date: dateField ? (values[dateField] ?? "") : "",
    message: [`Form: ${formName}`, `Page: ${window.location.href}`, "", ...lines].join("\n"),
  });
}
