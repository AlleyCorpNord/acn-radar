---
title: Healthjump
description: >-
  Healthjump is a cloud-baed healthcare integration engine. 
  Healthcare integration engines standardize data flow across disparate clinical data systems—like EHRs and revenue cycle management software—to improve workflows, optimize the delivery of care, and streamline the integration and adoption of new technologies. Healthcare integration engines facilitate the exchange of clinical, financial, and operational data, creating transparency and visibility across health care systems and hospital IT applications.
  
  
  Healthcare Integration isn’t just about HL7 integration. With all the systems, devices, applications and databases that need to be connected, you need integration and a healthcare interface engine designed to support old and new technology and standards.

opinion: >-
  We believe that leveraging a Healthcare Integration Engine saves a tremendous amount of time when integrating different third parties and systems in the healthcare industry.  There are different solutions available with different price tags and some of them are very expensive for a small company.  [Redox](https://www.redoxengine.com/) is one of the most popular products in this arena but unfortunately too expensive for our customers and their budgets.
  We think that healthjump is a good balance of price and quality although the product is still missing maturity compared to other more established solutions.  It supports a significant number of integrations with EHR/PM systems as can be seen [here](https://www.healthjump.com/ehr-integrations). 


  The downsides that we saw were the following:


  - Its documentation which felt incomplete in certain areas
  - There are inconsistencies in their API
    - Some attributes are confusing.  Ex. using the Diagnosis [resource](https://apidocs.healthjump.com/#1d97a76b-aa60-4e5f-a28c-509d175d1dd0), you can see both a diagnosisid and a diagnosis_id with a different value and type and it is not clear which one should be used
      - The same is true for encounterid and encounter_id
        - One seems to refer to a HealthJump internal id, and the other to the source system id - which is which though? and also, sometime you'll see source_..._id and ..._id used, instead of a casing difference
    - Data types are inconsistent across resources: e.g. the [Procedure](https://apidocs.healthjump.com/#d62714ce-aaf2-4460-918a-d0345ae8cd2b) encounter_id is a string but the Encounter encounterid is a number
    - Vocabulary is inconsistent. Providers and clinicians are used interchangeably, it is unclear whether patients and clients are distincts, but there is no Patient endpoint suggesting they are the same thing; sometime you' even see a client_patient_id, whereas the values might be different in the data between client and patient
    - There are missing root endpoints as well: the [Attribution](https://apidocs.healthjump.com/#10115124-0b69-49b0-94ab-9b57a909cd58) mention a location_id, but there is no Location endpoint for example
  - We didn't like the fact that they defined their own data model instead of leveraging the FHIR data model to represent EHR

link: https://www.healthjump.com/
ring: assess
quadrant: tools
businessModel:
  - open-source
projectIds:
  - chamber-cardio
---
