---
title: Apache Beam
description: Apache Beam is a unified model for data processing. It provides a
  unique SDK (in different languages) to process data in batch or streaming
  using different Data processing tools (DataFlow, Spark, Flink, Dask).
opinion: >-
  Using Apache Beam, the data engineer can write its processing logic once and
  execute it in different environments: on a local computer (for testing), GCP
  DataFlow, an Apache Spark cluster, Apache Flink, etc. With the Apache Beam
  model, the programmer can leverage parallel computing without handling the
  orchestration challenges. Apache Beam also integrates very well with different
  well established data sources (BigQuery, BigTable, etc.).


  In our current experience, using Apache Beam, it was possible to create data pipelines, test them on a single CPU with a subset of data from BigQuery (`SELECT ... from ... LIMIT n`) using the direct runner and then, with the full dataset, scale up to multiple CPUs running on GCP Dataflow. 


  It is worth noting that it was not possible to test the parallel capabilities with the direct runner (using multiple CPUs on your local machine) because of some limitations on how the provided Apache Beam BigQuery input/output classes are implemented for the direct runner. It seems to be generally known that Apache Beam operators are very optimized to run on GCP Dataflow but they may not be as optimized as the native programming model for other environments (for example: using RDD or Spark SQL on an Apache Spark cluster)


  However it could be good candidate to prototype faster and being able to shift from one environment to the other depending on the opportunities.
link: https://beam.apache.org/
ring: trial
quadrant: languages-and-frameworks
businessModel:
  - free-tier
projectIds:
  - synapsebio
---
