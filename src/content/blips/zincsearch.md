---
title: zincSearch
description: >-
  ZincSearch is a search engine that does full text indexing. It is a lightweight alternative to Elasticsearch and runs using a fraction of the resources. It uses [bluge](https://github.com/blugelabs/bluge) as the underlying indexing library.
opinion: >-
  It has the following strengths:
  
  - It is compliant with Elastic Search specification (mappings, settings, indexes)

  - Very performant

  - It is very memory efficient since it uses generators leveraging python streams

  - It supports docker out-of-the-box as well as helm charts for kubernetes

  - Its runtime is simple:  just one golang binary without a dedicated indexer nor querier

  It has the following weaknesses:

  - No built-in High Availability

  - It is not a cloud managed services and more heavy-lifting is required to operate it

  - etcd is required

link: 
  - https://github.com/zincsearch/zincsearch
ring: adopt
quadrant: tools
businessModel:
  - open-source
projectIds:
  - auxa-health
---