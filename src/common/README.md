Common
===

> Check out the [documentation about the folder structure](../README.md#common-folder)

Summary:

common: Contains everything that cannot be categorized as a module. See documentation below.

- This folder uses an MVC-ish design pattern, where you split your files in separated folders, depending on their kind.
- This folder is great to quickly write some piece of code, you don't need to think a lot about how organized your code should be, and can get started quickly.
- If you don't know or are unsure whether to go for `common` or `modules`, pick `common`. You can always change your mind later.

Here is how we decide if we should use a module:

- It should be composed of, at least, 2 different entities.
- Entities are: Types, Components, Utilities, Hooks, Contexts, etc.
- We know the module is small now, but it’s going to grow soon.
- Exceptionally, if it’s related to a 3rd party (e.g: modules/sentry), it can be a module.
- Exceptionally, if we feel like it should be a module, then we go for it (it doesn’t really matter anyway!).