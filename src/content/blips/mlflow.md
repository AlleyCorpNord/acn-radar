---
title: MLflow
description: MLFlow is an open source platform to manage the ML lifecycle. It
  allows to track ML experiments and provides a central model registry. It could
  also help in managing ML projects reproducibility and deploy models.
opinion: >-
  MLflow is a well adopted tool in the ML Practitioners community. It is very
  lightweight and user-friendly. Functionalities are available through Python
  SDK, Rest API and CLI, making it easy to integrate in various contexts. The
  MLflow repository can be used locally or from a deployed server to enable
  collaboration in teams. MLflow is actively maintained by a reliable player in
  the ML community (DataBricks). Recent new features include:

  * Large Language Model-specific experimentations facilities

  * Authentication and authorization (was only available with the paid Databricks offering or in Azure ML before)


  MLflow is also easily deployed in main cloud platforms. Indeed, it is offered as a managed service when using Databricks. It is the experiment tracking tools used in Azure ML. It can be deployed using managed services in AWS and in GCP. In the SynapseBio project, MLflow was deployed using Cloud Run services


  Very interesting features that are missing are data versioning and data lineage. Indeed, data can be logged in experiments, but they are not stand alone component so, it is impossible to track versions or to link them to input or output streams of data.


  Nevertheless, MLflow is really a good open source starting block to build a rapid ML platform solution.
link: https://mlflow.org/
ring: adopt
quadrant: tools
businessModel:
  - open-source
  - on-premise
projectIds:
  - synapsebio
---
