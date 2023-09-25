---
title: GCP Artifact Registry
description: GCP Artifact Registry is the new single place to manage all build
  artifacts in GCP. It is notably replacing Container Registry for managing
  Docker images. GCP Artifact Registry also offers the possibility to handle
  build artifacts for Python (similar to a private PyPi), Java (private Maven)
  and Node.js (private npm).
opinion: >-
  GCP Artifact Registry provides an artifact registry that is fully integrated
  with GCP, therefore it is easy to setup roles and permissions for your users
  and applications. This is also a reasonable economic choice for a startup
  building on GCP and benefitting from the Google Startup Program.


  Other advantages of GCP Artifact Registry are that it allows to make artifacts available by region, to provide access based on company security policy. Different registries can also be created for different purposes (dev vs prod)

  In the Docker registry, images are scanned for security vulnerabilities.


  There are some constraints/limitations to account for when using GCP Artifact Registry:

  * the Python registry cannot automatically mirror the official PyPi.org (like other private PyPi servers allow to). However, this could be considered a good practice on a security point of view.

  * `docker login` command cannot be used to authenticate with the Docker registry. This could require some adjustments in CI scripts if migrating from a previous solution that was using it.


  GCP Artifact Registry is competing with offers like Sonatype Nexus Repository (which handle a lot more kind of binary repositories), Github Packages or Gitlab Packages and Registries. However, GCP Artifact Registry is a cost-optimized alternative for a  startup building a GCP solution, especially with the Google Startup Program.
link: https://cloud.google.com/artifact-registry
ring: trial
quadrant: tools
businessModel:
  - saas
projectIds:
  - synapsebio
---
