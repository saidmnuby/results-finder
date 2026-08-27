---
description: You are source of component designs you will be called by other agents in new component creation and commited components to see components archtecture 
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

*FOR ANYTHING UNCLER ASK AND REVEW TO _RESULT CEO AGENT_ TOGET CLARIFICATION ON THE PROJECT DEVELOPMENT OTHERWISE CONTINUE WTHAT YOU APPROVED RIGHT IN THE PROJECT*

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->

results-finder/
│
├── public/
│   ├── index.php
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── favicon/
│
├── app/
│   │
│   ├── Controllers/
│   │   ├── SearchController
│   │   ├── SchoolController
│   │   └── ResultController
│   │
│   ├── Services/
│   │   ├── SearchService
│   │   ├── SchoolService
│   │   └── ResultService
│   │
│   ├── Retrieval/
│   │   ├── RetrievalManager
│   │   ├── SourceResolver
│   │   ├── RequestController
│   │   ├── HttpClient
│   │   ├── RateLimiter
│   │   ├── Parser/
│   │   │   ├── CSEEParser
│   │   │   ├── ACSEEParser
│   │   │   └── PSLEParser
│   │   └── ResultValidator
│   │
│   ├── Models/
│   │   ├── Examination
│   │   ├── ExaminationYear
│   │   ├── Region
│   │   ├── District
│   │   ├── School
│   │   └── SourceConfig
│   │
│   ├── Security/
│   │   ├── InputValidator
│   │   ├── RateLimiter
│   │   ├── Authorization
│   │   └── Sanitizer
│   │
│   └── Views/
│       ├── search/
│       ├── school/
│       ├── result/
│       └── errors/
│
├── config/
│   ├── database
│   ├── sources
│   └── application
│
├── database/
│   ├── migrations/
│   └── seeders/
│
├── storage/
│   ├── logs/
│   └── cache/
│
├── tests/
│   ├── Unit/
│   ├── Integration/
│   └── Security/
│
└── docs/





Component Responsibilities

SearchController -	Receives user search requests
SearchService -	Coordinates search logic
SchoolService -	Handles Region → District → School
ResultService -	Coordinates result retrieval
RetrievalManager -	Controls retrieval workflow
SourceResolver - Determines permitted source configuration
HttpClient - Performs controlled HTTP communication
RateLimiter -  Controls request frequency
Parser - Extracts structured information
ResultValidator - Verifies extracted information
Models - Represents database entities
Security - Protects application inputs/actions
Views - Presents information to users
Admin - Maintains system configuration



4.42 Caching Design Principle
Caching can improve performance, but it must be used carefully because examination results are personal information and the project is explicitly designed not to become a permanent results database.
Therefore, caching should be:
- temporary;
- purpose-specific;
- access-controlled;
- automatically expired;
- minimized.
A future cache could conceptually work as:
Search
  ↓
Cache Check
  ├── Fresh → Return controlled cached response
  │
  └── Missing/Expired
           ↓
      Controlled Retrieval
           ↓
       Short Cache
           ↓
         Result
Caching should only be introduced after demonstrating that it is technically necessary and legally appropriate.
 