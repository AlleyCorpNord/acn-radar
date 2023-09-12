---
title: Monorepo
description: >-
  A monorepo (short for "monolithic repository") is a software development approach in which multiple projects or components are stored within a single version-controlled repository. This is in contrast to the more traditional approach of using separate repositories for each project or component. In a monorepo, all the code, libraries, dependencies, and build configurations for different parts of a larger system are centralized in one place.
opinion: >-
  A monorepo facilites the following:

  - Code Reusability

  - Dependency Management
  
  - Easier Refactoring and Code Maintenance
  
  - Simplified Testing and Continuous Integration

  The success or failure highly depends on the tool that you use, we have found that in Typescrypt+javascript codebases a tool such as:  [turborepo](../blips/turborepo) simplifies the building and deployment of the different packages and apps of the monorepo and handles complex aspects such as partial builds and deployments.

  We haven't found a powerful tool that can handle monorepos that combine modules or components that use different programming languages.
  
  We recommend monorepos in modules and packages that are highly interconnected and follow the same release workflow.  We don't recommend monorepos to mix modules that are being evolved and maintained by independent teams with different release plans.  In general the rule of thumb is if the evolution lifecycle of the different parts is related (Ex:  Same product but different components) then a monorepo is recommended.


link: https://en.wikipedia.org/wiki/Monorepo
ring: adopt
quadrant: techniques
businessModel:
  - open-source
projectIds:
  - chamber-cardio
---
