---
title: ADR
description: Architecture Design Records (ADRs) are a method of documenting
  crucial architectural decisions made during a software project.
opinion: >-
  > Architecture represents the significant design decisions that shape a
  system, where significant is measured by cost of change - [Grady
  Booch](https://en.wikiquote.org/wiki/Grady_Booch)


  As a documentation tool, ADRs strike a good balance between the need to ensure significant decisions are captured and the level of effort required to do so.


  They consist as a series of entries, one per decision, with the following format:


  * **Context**: Why did this change need to happen? What needed to be considered?

  * **Options**: What were the options? What were the pros and cons of each?

  * **Outcome**: What option is adopted, and what are the consequences

  * **Status**: Has the decision been implemented, still being researched, or is deprecated?


  The status allows it to be used as a working / discussion document, as well as a history of past decisions.


  They prove very useful to:


  * onboard new people in the project and have them understand the reasoning behind the current choices

  * spread the load on the architecture work in the team by encouraging a collaborative process

  * help in decision-making later on when a new choice needs to be made (we can go back to the initial decisions and validates what has effectively changed)

  * speed-up review and due-diligence processes


  ADRs can be maintained and authored in a CMS (such as Notion or Confluence), or simply stored as markup files in a git repository. [There are some tools](https://adr.github.io/madr/tooling.html) to help with this, although they are not required.


  See also: [the ADR Process by AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/).
link: https://adr.github.io/madr/
ring: trial
quadrant: techniques
businessModel: null
projectIds:
  - ensage
  - reside-health
---
