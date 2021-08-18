App
===

> Check out the [documentation about the folder structure](../README.md#app-folder)

Summary:
Contains code (components, business logic, types) that is being used by the special

- This folder is a way to organize what happens in `pages/_app`.
- It also contains app-wide configuration (constants).
- `Multiversal` means code executed "no matter what".


This folder contains the code used to start a Next.js page.

As a Next.js app grows, it contains more and more code within pages/_app, to such a point where it’s difficult to understand all that is happening there. The goal of this folder is to centralize all the business logic executed by pages/_app, while keeping it organized and maintenable. 

This folder contains global styles and “page bootstraps” that are used to initialize the client and server, distinctively. It also contains constants used thorough the app.