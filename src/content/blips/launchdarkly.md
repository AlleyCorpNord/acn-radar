---
title: LaunchDarkly
description: >-
  LaunchDarkly is a SaaS platform for developers to manage feature flags. By decoupling feature rollout and code deployment, LaunchDarkly enables developers to test their code live in production, gradually release features to groups of users, and manage flags throughout their entire lifecycle.
opinion: >-
  It has the following strengths:
  
  - Easy to use and accesible to both technical and product teams

  - Auditing and traceability of activation/disactivation of features is built-in

  - It allows to download the full state of feature flags in a product in order to setup local automated tests in a CI/CD pipeline
  

  It has the following weaknesses:

  - Since it is a SaaS if it is unavailable there could be a lot of product chaos.  This could be mitigated by just using it for features that are off by default.

  - They don't support self-hosted option

  - Their environment UX is a bit confusing

  - Getting up and running is fast but things get complex as team sizes scale up


link: https://launchdarkly.com/
ring: trial
quadrant: tools
businessModel:
  - saas
projectIds:
  - capable-health
---