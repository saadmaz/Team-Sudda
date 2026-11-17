# Content

<!-- nav -->

<sub><a href="../README.md">Project README</a> · <a href="README.md">Documentation index</a></sub>

> How to update copy, services, industries, areas, forms and guides on teamsudda.lk. Part of the [project documentation](README.md).

Copy and business data live in data files, so routine updates don't touch page code. Pages, menus, the footer, the sitemap and pre-rendering all read from the same files, so a new entry appears everywhere automatically.

| Task                                  | Where                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------ |
| Phone, email, address or social links | `src/lib/constants/contact.ts`                                           |
| Services (homes and business)         | `src/lib/content/services.ts`: each entry becomes `/services/<slug>`     |
| Industries                            | `src/lib/content/industries.ts`: each entry becomes `/industries/<slug>` |
| Service areas                         | `src/lib/content/areas.ts`: each entry becomes `/areas/<slug>`           |
| Process, commitments and comparison   | `src/lib/content/standard.ts`                                            |
| Form questions                        | `src/lib/content/formDefinitions.ts`                                     |
| Navigation menus                      | `src/lib/content/navigation.ts`                                          |
| Home session packages                 | `src/lib/constants/pricing.ts`                                           |
| Values, mission and vision            | `src/lib/constants/values.ts`                                            |
| Clients, testimonials, gallery        | `clients.ts`, `testimonials.ts`, `gallery.ts` in `src/lib/constants/`    |
| FAQ                                   | `src/lib/constants/faqs.ts`                                              |
| Guides (blog posts)                   | `src/lib/constants/blog.ts`                                              |
| Add a page                            | See [Adding a page](#adding-a-page)                                      |

## Proof and claims

Publish only what can be backed up.

- **Clients:** name a client only with their written permission.
- **Testimonials:** genuine reviews only, with permission to publish the name or an approved identifier. The section stays hidden while the list is empty.
- **Gallery:** real Team Sudda jobs only, with photos taken on site. The gallery and the homepage preview stay hidden while the list is empty.
- **Claims:** don't add certifications, insurance, background checks, kill rates, product certifications or "number one" claims unless the evidence is on file.

## Adding a page

1. Create the page in `src/pages/` and call `usePageMeta({ title, description, path })`. Pre-rendering fails the build if a page has no metadata or no `<h1>`.
2. Register the route in `AppRoutes` in `src/App.tsx`, above the catch-all route.
3. Add the path to `STATIC_ROUTES` in `src/lib/routes.ts` so it's pre-rendered, added to the sitemap and covered by the route tests.
