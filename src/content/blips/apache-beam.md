---
title: Apache Beam
description: Apache Beam is a unified model for data processing. It provides a
  unique SDK (in different languages) to process data in batch or streaming
  using different Data processing tools (DataFlow, Spark, Flink, Dask).
opinion: >-
  Using Apache Beam, the data engineer can create ETLs processing logic (like
  read data from files or database and writing it into another file format or
  another data repository or read data, transform them and write the result,
  etc.). This processing logic is **written once** and can be executed in
  different environments: on a local computer (for testing), GCP DataFlow, an
  Apache Spark cluster, Apache Flink, etc. For example, if a data engineer
  create a data pipeline with Apache Beam, it can run it in an Apache Spark
  cluster using the Spark runner or run it on GCP DataFlow. If the same data
  pipeline was written in the Apache Spark native programming model (using
  [RDD](https://spark.apache.org/docs/latest/rdd-programming-guide.html) or
  [Spark SQL](https://spark.apache.org/sql/)), it would not be able to run on
  GCP DataFlow, or Apache Flink (if it is a streaming data pipeline).


  Another advantage of using Apache Beam is that the programmer can leverage parallel computing without handling the orchestration challenges associated with it.


  Apache Beam API provides ways to read or write into most of the established data repositories (files on local or in the cloud, BigQuery, Hive Table, SQL tables, etc.).


  During SynapseBio project, Apache Beam was used to create data pipelines that can be run locally when the dataset is small or in using multiple machines in DataFlow when the dataset is large, without having to rewrite the code. The data pipelines were generally reading from BigQuery tables and files in GCS and writing results in other BigQuery tables and/or files in GCS. It was a strategic decision at the beginning of the project, to be able to reuse the data transformation in case that at some point, the solution is migrated to another Cloud provider and we may need to move from DataFlow to Apache Spark.


  Apache Beam is definitely the solution to develop full code data pipelines to execute on GCP DataFlow. However, the Apache Beam runners may be less optimized than the native programming model for other environments (for example: using RDD or Spark SQL on an Apache Spark cluster), But it could be a good candidate to prototype faster and being able to shift from one environment to the other depending on the future opportunities.
link: https://beam.apache.org/
ring: trial
quadrant: languages-and-frameworks
businessModel:
  - free-tier
projectIds:
  - synapsebio
---
