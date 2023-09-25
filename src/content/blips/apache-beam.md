---
title: Apache Beam
description: Apache Beam is a unified model for data processing. It provides a
  unique SDK (in different languages) to process data in batch or streaming
  using different Data processing tools (DataFlow, Spark, Flink, Dask).
opinion: >-
  Using Apache Beam, the data engineer can create ETLs processing logic (like
  read data from files or database and writing it into another file format or
  another data repository or read data, transform them and write the result,
  etc.). This processing logic is written once and can be executed in different
  environments: on a local computer (for testing), GCP DataFlow, an Apache Spark
  cluster, Apache Flink, etc.


  With the Apache Beam model, the programmer can leverage parallel computing without handling the orchestration challenges associated with it. Apache Beam also integrates very well with different well established data sources (BigQuery, BigTable, etc.).


  During SynapseBio project, Apache Beam was used to create data pipelines that can be run locally when the dataset is small or in using multiple machines in DataFlow when the dataset is large, without having to rewrite the code. The data pipelines were generally reading from BigQuery tables and files in GCS and writing results in other BigQuery tables and/or files in GCS.


  It seems to be generally known that Apache Beam operators are very optimized to run on GCP Dataflow but they may not be as optimized as the native programming model for other environments (for example: using RDD or Spark SQL on an Apache Spark cluster)


  However, it could be a good candidate to prototype faster and being able to shift from one environment to the other depending on the opportunities.
link: https://beam.apache.org/
ring: trial
quadrant: languages-and-frameworks
businessModel:
  - free-tier
projectIds:
  - synapsebio
---
