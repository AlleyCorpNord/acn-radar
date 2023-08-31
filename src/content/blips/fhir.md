---
title: FHIR
description: >-
  The **Fast Healthcare Interoperability Resources** (**FHIR**, pronounced
  "fire") standard is a set of rules and specifications for exchanging
  electronic health care data. It is designed to be flexible and adaptable, so
  that it can be used in a wide range of settings and with different health care
  information systems. The goal of FHIR is to enable the seamless and secure
  exchange of health care information, so that patients can receive the best
  possible care. The standard describes data formats and elements (known as
  "resources") and an application programming interface (API) for exchanging
  electronic health records (EHR). The standard was created by the Health Level
  Seven International (HL7) health-care standards organization.


  For additional information:


  * [Official website](http://hl7.org/fhir/index.html)

  * [Wikipedia entry](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)
opinion: >-
  We believe that a standards based approach for managing Electronic Health
  Record data exchange is key to drive innovation and acceleration in the Health
  industry.  This specification is gaining big momentum due to its adoption by
  big tech companies (Ex:  apple [health
  app](https://www.apple.com/newsroom/2018/01/apple-announces-effortless-solution-bringing-health-records-to-iPhone/),
  microsoft [FHIR
  service](https://learn.microsoft.com/en-us/azure/healthcare-apis/fhir/overview)
  in Azure Health Data Services, and google FHIR support in its [Cloud
  Healthcare
  API](https://cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)).
  The legislation and regulations being adopted in the US (See: [Policies and
  Technology for Interoperability and Burden
  Reduction](https://www.cms.gov/regulations-and-guidance/guidance/interoperability/index))
  are making FHIR compliance mandatory and accelerating its implementation, however in other regions such as
  Europe there is a competition with the [Open EHR Standard](https://openehr.org/).
  
  
  With FHIR a project gets a sophisticated data model for free for information exchange that could help drive the development
  of UI components, APIs, data stores, etc.  This model has a built-in support for extension which makes it flexible for complex
  use cases.
  
  
  It is worth noting that it does come with a complex learning curve and a good health care domain background is required to 
  manage it properly within health care workflows.  Our recommendation is to have SMEs in the product development team with a strong
  background knowledge and experience in the healthcare industry.
  
  
  From our experience we feel that tech teams (developers, testers, analysts) typically start feeling comfortable with the spec after around 3-4 weeks 
  of working with it and it typically takes more than a year to master and deeply understand the spec.
  
  
  The spec also doesn't solve health care coding and terminology challenges and product development teams still need to write the translation layer from one code system to another.




link: http://hl7.org/fhir/index.html
ring: trial
quadrant: techniques
businessModel:
  - open-source
projectIds:
  - chamber-cardio
  - ensage
---
