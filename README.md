## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project folders structure
ref: https://unlyed.github.io/next-right-now/reference/folder-structure

- `.github`: Folder used by GitHub, containing various things.
    - ISSUE_TEMPLATE: Contains the basics (bug report, feature request, question) displayed to people when they’re creating a new issue. Change at your convenience.
    - workflows: Each file in this folder is a GitHub Action workflow.
- `.storybook`: Folder used by Storybook, see “Storybook”.
- `public`: Static files, see “Static file serving.
- `scripts`: Scripts, see “Scripts and utilities.
- `src`: Source code of the app, described in detail below.

The src folder contains all the source files for your Next.js app.
It’s where you should write most of your code.
"It also contains the stories folder, which isn’t used by the Next.js framework, but by Storybook."

## Folder structure
Overview of what each folder under src is about:

- `app`: Contains code (components, business logic, types) that is being used by the special pages/_app.tsx Next.js file.
- `common`: Contains everything that cannot be categorized as a module. See documentation below.
- `layouts`: Contains the layouts used by pages.
- `modules`: Contains related pieces of code (components, types, utils) grouped together. See documentation below.
    - `core`: Contains built-in modules included with the NRN preset you selected. They are being separated from other modules by default, so you can locate your own code faster.
- `pages`: Contains Next.js pages and api folder.
- `stories`: Contains Storybook stories.

