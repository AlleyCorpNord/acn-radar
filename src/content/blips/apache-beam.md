---
title: Apache Beam
description: Apache Beam is a unified model for data processing. It provides a
  unique SDK (in different languages) to process data in batch or streaming
  using different Data processing tools (DataFlow, Spark, Flink, Dask).
opinion: >-
  Using Apache Beam, the data engineer can write its processing logic once and
  execute it in different environments: on a local computer (for testing), GCP
  DataFlow, an Apache Spark cluster, Apache Flink, etc.

  With the Apache Beam model, the programmer can leverage parallel computing without handling the orchestration challenges. Apache Beam also integrates very well with different well established data sources (BigQuery, BigTable, etc.)


  However it is important to note that the Apache Beam model may be not as optimized for in a given environment as the native programming model (for example: Apache Spark)
link: https://beam.apache.org/
ring: adopt
quadrant: languages-and-frameworks
businessModel:
  - free-tier
projectIds:
  - synapsebio
---
