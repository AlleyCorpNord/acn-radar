---
title: GCP Artifact Registry
description: GCP Artifact Registry is the new single place to manage all build
  artifacts in GCP. It is notably replacing Container Registry for managing
  Docker images. GCP Artifact Registry also offer the possibility to handle
  build artifacts for Python (similar to a private PyPi), Java (private Maven)
  and Node.js (private npm).
opinion: >-
  GCP Artifact Registry provides an artifact registry that is fully integrated
  with GCP. This is a good choice for a startup building on GCP and benefitting
  from the Google Startup Program.

  GCP Artifact Registry allows to make artifacts available by region, to provide access based on company security policy. Different registries can also be created for different purposes (dev vs prod)


  There are some constraints/limitations to account for when using GCP Artifact Registry:

  * the Python registry cannot automatically mirror the official PyPi.org (like other private PyPi servers allow to)

  * `docker login` command cannot be used to authenticate with the Docker registry


  However, GCP Artifact Registry is a cost-optimized alternative for a  GCP solution, especially with the Google Startup Program.
link: https://cloud.google.com/artifact-registry
ring: trial
quadrant: tools
businessModel:
  - saas
projectIds:
  - synapsebio
---
