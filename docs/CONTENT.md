# Content

> How to update copy, services, pricing and the blog on teamsudda.lk. Part of the [project documentation](README.md).

All copy and business data lives in [`src/lib/constants/`](../src/lib/constants), so routine updates don't touch page code.

| Task                                  | Where                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Phone, email, address or social links | `src/lib/constants/contact.ts`                                                                         |
| Services                              | `src/lib/constants/services.ts`                                                                        |
| Pricing plans                         | `src/lib/constants/pricing.ts`                                                                         |
| Team members                          | `src/lib/constants/team.ts`                                                                            |
| Testimonials and client logos         | `testimonials.ts`, `clients.ts`                                                                        |
| FAQ                                   | `src/lib/constants/faqs.ts`                                                                            |
| Blog posts                            | `src/lib/constants/blog.ts`                                                                            |
| Add a page                            | Create it in `src/pages/`, register it in `src/App.tsx` above the catch-all route, and call `useSEO()` |
