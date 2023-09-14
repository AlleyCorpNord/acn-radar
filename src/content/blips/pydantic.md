---
title: Pydantic
description: Pydantic is a data validation library for Python. It provides a
  unified framework to define and validate input classes that can be used as
  data contracts for API or CLI in pure Python.
opinion: >-
  Pydantic is widely used in most of the common tools in Python community
  (FastAPI, Django, LangChain, etc.). It uses hints and decorators which make it
  readable and easy to learn. It is also compatible with several schema
  standards in REST API ecosystem (OpenAPI, JSON schema).


  There could be some mismatches when serializing to or deserializing from other schema standards (for `None` values for example). Proper testing has to be done to ensure the appropriate behaviour
link: https://docs.pydantic.dev
ring: adopt
quadrant: languages-and-frameworks
businessModel:
  - open-source
projectIds:
  - synapsebio
---
