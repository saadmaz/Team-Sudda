# Architecture decision records

<!-- nav -->

<sub><a href="../../README.md">Project README</a> · <a href="../README.md">Documentation index</a></sub>

An architecture decision record (ADR) captures one significant technical decision: what was decided, what else was considered, and why. ADRs are never edited after acceptance; a later ADR supersedes an earlier one instead.

## Writing a new ADR

1. Copy [TEMPLATE.md](TEMPLATE.md) to `NNNN-short-title.md`, using the next free number.
2. Fill it in and set the status to `Proposed`.
3. Open it in a pull request with the change it describes. It becomes `Accepted` when merged.
4. If it replaces an earlier decision, set the earlier ADR's status to `Superseded by ADR-NNNN`.

## Index

| ADR                                               | Decision                          | Status   |
| ------------------------------------------------- | --------------------------------- | -------- |
| [0001](0001-single-page-application-on-vercel.md) | Single-page application on Vercel | Accepted |
| [0002](0002-form-delivery-through-emailjs.md)     | Form delivery through EmailJS     | Accepted |
