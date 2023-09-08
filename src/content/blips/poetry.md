---
title: Poetry
description: Poetry is a tool for Python packaging and dependency management.
  The aim of Poetry is to have one tool to manage the whole lifecycle of
  a  Python project.
opinion: >-
  Poetry is managing the whole lifecycle of a Python project by using only one
  user-edited project file named `pyproject.toml` (instead of all files needed
  by combining different tools: `requirements.txt`, `setup.py`, `.cfg` files).
  It allows, using one single CLI tool:

  * add, remove versions of Python packages dependencies

  * create reproducible virtual environments during the development of a Python project using pinned versions of the dependencies

  * providing tools to package and publish Python packages


  The drawbacks of using Poetry are:


  * since it is not adopted by all Python programmers, there are some tools that are not compatible with it (Ex.: Dataflow would need a folder with a `requirements.txt` file to deploy it as a Python pipeline project)

  * Packages source repositories (additional to PyPi.org) should be put inside the toml file, this could be an issue if it is a private source repositories that should not be published in GitHub for example.
link: https://python-poetry.org/
ring: trial
quadrant: tools
businessModel:
  - open-source
projectIds:
  - synapsebio
---
