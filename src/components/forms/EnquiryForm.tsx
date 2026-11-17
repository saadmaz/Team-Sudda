import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants/contact";
import {
  FormConfigError,
  HONEYPOT,
  isVisible,
  submitEnquiry,
  summarise,
  validateStep,
  type FieldDef,
  type FormStep,
  type FormValues,
} from "@/lib/forms";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent";

const Field = ({
  field,
  value,
  error,
  onChange,
}: {
  field: FieldDef;
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) => {
  const id = useId();
  const describedBy = error ? `${id}-err` : field.hint ? `${id}-hint` : undefined;
  const common = {
    id,
    name: field.name,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy,
  };
  const today = new Date().toISOString().split("T")[0];

  let control: React.ReactNode;
  switch (field.type) {
    case "textarea":
      control = (
        <textarea
          {...common}
          rows={4}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cn(inputCls, "resize-y")}
        />
      );
      break;
    case "select":
      control = (
        <select
          {...common}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        >
          <option value="">Select…</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      );
      break;
    case "chips":
      control = (
        <div role="radiogroup" aria-labelledby={`${id}-label`} className="flex flex-wrap gap-2">
          {field.options?.map((o) => (
            <button
              key={o}
              type="button"
              role="radio"
              aria-checked={value === o}
              onClick={() => onChange(value === o ? "" : o)}
              className={cn(
                "rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors",
                value === o
                  ? "border-navy bg-navy text-white"
                  : "border-border text-navy hover:border-navy",
              )}
            >
              {o}
            </button>
          ))}
        </div>
      );
      break;
    case "checkboxes": {
      const selected = value ? value.split(", ") : [];
      const toggle = (o: string) =>
        onChange(
          (selected.includes(o) ? selected.filter((s) => s !== o) : [...selected, o]).join(", "),
        );
      control = (
        <div role="group" aria-labelledby={`${id}-label`} className="grid sm:grid-cols-2 gap-2">
          {field.options?.map((o) => (
            <label
              key={o}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm cursor-pointer transition-colors",
                selected.includes(o) ? "border-navy bg-navy/5" : "border-border hover:border-navy",
              )}
            >
              <input
                type="checkbox"
                checked={selected.includes(o)}
                onChange={() => toggle(o)}
                className="h-4 w-4 accent-[hsl(var(--navy))]"
              />
              {o}
            </label>
          ))}
        </div>
      );
      break;
    }
    default:
      control = (
        <input
          {...common}
          type={field.type}
          value={value}
          min={
            field.type === "date" && !field.allowPast
              ? today
              : field.type === "number"
                ? 0
                : undefined
          }
          placeholder={field.placeholder}
          autoComplete={
            field.name === "name"
              ? "name"
              : field.type === "email"
                ? "email"
                : field.type === "tel"
                  ? "tel"
                  : undefined
          }
          inputMode={field.type === "tel" ? "tel" : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        />
      );
  }

  const isGroup = field.type === "chips" || field.type === "checkboxes";
  return (
    <div className={cn(field.half ? "sm:col-span-1" : "sm:col-span-2")}>
      {isGroup ? (
        <div id={`${id}-label`} className="text-sm font-semibold text-navy mb-2">
          {field.label}
          {field.required && <span className="text-destructive"> *</span>}
        </div>
      ) : (
        <label htmlFor={id} className="block text-sm font-semibold text-navy mb-2">
          {field.label}
          {field.required && <span className="text-destructive"> *</span>}
        </label>
      )}
      {control}
      {field.hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted-foreground">
          {field.hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
};

export interface EnquiryFormProps {
  formName: string;
  steps: FormStep[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  topicField?: string;
  dateField?: string;
  initialValues?: FormValues;
  /** Show a review step before sending. Defaults to true for multi-step forms. */
  review?: boolean;
}

export const EnquiryForm = ({
  formName,
  steps,
  submitLabel,
  successTitle,
  successBody,
  topicField,
  dateField,
  initialValues = {},
  review = steps.length > 1,
}: EnquiryFormProps) => {
  const allSteps = review ? [...steps, { title: "Review", fields: [] }] : steps;
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "config">("idle");

  const step = allSteps[stepIndex];
  const isLast = stepIndex === allSteps.length - 1;
  const set = (name: string, v: string) => {
    setValues((prev) => ({ ...prev, [name]: v }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const next = () => {
    const errs = validateStep(step, values);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return false;
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!next()) return;
    if (!isLast) {
      setStepIndex((i) => i + 1);
      return;
    }
    setStatus("sending");
    try {
      await submitEnquiry({ formName, steps, values, topicField, dateField });
      setStatus("sent");
    } catch (err) {
      setStatus(err instanceof FormConfigError ? "config" : "error");
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-10" role="status">
        <div className="mx-auto h-16 w-16 rounded-full bg-yellow-brand grid place-items-center mb-5">
          <Check className="h-8 w-8 text-navy" strokeWidth={3} />
        </div>
        <h2 className="heading-md font-display text-navy">{successTitle}</h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">{successBody}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="navy">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild variant="whatsapp">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {allSteps.length > 1 && (
        <ol className="flex gap-2 mb-8" aria-label="Form progress">
          {allSteps.map((s, i) => (
            <li key={s.title} className="flex-1">
              <div
                className={cn(
                  "h-1.5 rounded-full transition-colors",
                  i <= stepIndex ? "bg-yellow-brand" : "bg-muted",
                )}
              />
              <div
                className={cn(
                  "mt-2 text-[11px] font-semibold uppercase tracking-wider hidden sm:block",
                  i === stepIndex ? "text-navy" : "text-muted-foreground",
                )}
                aria-current={i === stepIndex ? "step" : undefined}
              >
                {i + 1}. {s.title}
              </div>
            </li>
          ))}
        </ol>
      )}

      {allSteps.length > 1 && (
        <h2 className="font-display font-bold text-xl text-navy mb-6 sm:hidden">
          Step {stepIndex + 1} of {allSteps.length}: {step.title}
        </h2>
      )}

      {step.fields.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-5">
          {step.fields
            .filter((f) => isVisible(f, values))
            .map((f) => (
              <Field
                key={f.name}
                field={f}
                value={values[f.name] ?? ""}
                error={errors[f.name]}
                onChange={(v) => set(f.name, v)}
              />
            ))}
        </div>
      ) : (
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            Check the details below, then send. You can go back to change anything.
          </p>
          <dl className="divide-y divide-border rounded-2xl border border-border">
            {summarise(steps, values).map(({ label, value }) => (
              <div key={label} className="grid sm:grid-cols-3 gap-1 px-4 py-3 text-sm">
                <dt className="font-semibold text-navy">{label}</dt>
                <dd className="sm:col-span-2 text-muted-foreground break-words">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Spam trap: hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values[HONEYPOT] ?? ""}
            onChange={(e) => set(HONEYPOT, e.target.value)}
          />
        </label>
      </div>

      {(status === "error" || status === "config") && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm"
        >
          {status === "config"
            ? "Online forms are temporarily unavailable."
            : "Something went wrong sending your details."}{" "}
          Please{" "}
          <a
            href={CONTACT.whatsappUrl}
            className="font-semibold underline"
            target="_blank"
            rel="noreferrer"
          >
            message us on WhatsApp
          </a>{" "}
          or call{" "}
          <a href={`tel:${CONTACT.phone}`} className="font-semibold underline">
            {CONTACT.phoneFormatted}
          </a>
          .
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {stepIndex > 0 ? (
          <Button type="button" variant="outline" onClick={() => setStepIndex((i) => i - 1)}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        ) : (
          <span />
        )}
        <Button type="submit" variant="hero" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : isLast ? (
            submitLabel
          ) : (
            <>
              Continue <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        We use these details only to respond to your enquiry. See our{" "}
        <Link to="/privacy-policy" className="underline">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
};
