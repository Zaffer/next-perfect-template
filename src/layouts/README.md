Page layouts
===

> Check out the [documentation about the folder structure](../README.md#folder-structure)

Summary:

layouts: Contains the layouts used by pages. See documentation below.

- `core`: Contains reusable/extendable code (components, business logic, data fetching) used by other layouts.
- `default`: Default layout that comes built-in with the strict minimum components (Nav, Footer).
- You can add custom layouts and use them in your pages right away.
- Layouts are flexible, we used the `DemoLayout` in all pages under `pages/[locale]/demo` but **you don't have to**, it was a choice.
- Layouts are usually useful when you want to have a similar UI shared by several pages.
- Layouts are meant to avoid code duplication between pages sharing the same layout and increase code maintainability.
