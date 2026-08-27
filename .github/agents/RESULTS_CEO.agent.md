---
name: RESULTS_CEO
description: You are the review of the project source of all project and business informations with critical architecture, containig all rules, guidelines, principles, designs, emplementanion


argument-hint: YOU PROVIDE INFORMATIONS FOR OTHER SMALL AGENTS DO NOT IMPLEMENT GUIDE OTHER AGENTS TO HOW IMPLEMENT IF THEY ARE NOT IN THE PROJECT LINE
 
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->


Chapter Two Problem Analysis and Requirements.

CHAPTER TWO: PROBLEM ANALYSIS AND REQUIREMENTS
2.1 Introduction
This chapter analyzes the existing process of finding NECTA examination results and identifies the requirements of the proposed NECTA Results Finder system. The analysis focuses on the difficulties experienced by students, parents, schools, and other users when searching for examination results.

The chapter also defines the functional and non-functional requirements that will guide the design and development of the Minimum Viable Product (MVP).

2.2 Analysis of the Existing Problem
The current examination-result discovery process provides users with access to official results, but finding a particular result may require several steps.

A typical user may need to:

Identify the examination type.
Identify the examination year.
Find the appropriate result page.
Locate the relevant region, district, or school.
Search through available candidates or enter an index number.
Deal with slow or temporarily unavailable pages during high-traffic periods.
This process becomes more difficult for users who do not know the exact result-page URL or candidate index number.

Key Problem Areas
Problem	Effect on Users
Multiple navigation steps	Takes more time to locate results
High traffic during announcements	Pages may become slow or temporarily inaccessible
Fragmented result pages	Users may struggle to identify the correct page
User does not know index number	Makes direct searching difficult
Different examination years/types	Can cause confusion
Third-party result pages	Users may have difficulty identifying reliable sources
Limited search-oriented experience	Users must navigate information rather than simply search for it
The proposed system therefore focuses on simplifying discovery, rather than replacing the official examination authority.

2.3 Stakeholder Analysis
The system has several stakeholders with different requirements.

2.3.1 Students
Students are the primary users who want to obtain their examination results quickly.

Needs:

Simple search interface.
Index-number search.
School-based search.
Clear result presentation.
Mobile-friendly interface.
Useful error messages.
2.3.2 Parents and Guardians
Parents may want to find the results of their children but may not always know the candidate's index number.

Needs:

School-based search.
Simple navigation.
Minimal technical knowledge required.
Clear examination and year selection.
2.3.3 Schools and Teachers
Schools and teachers may need to locate examination information associated with their institution.

Needs:

School identification.
Examination and year filtering.
Reliable result retrieval.
Clear source identification.
2.3.4 System Administrator
The administrator is responsible for maintaining the platform.

Needs:

Monitor system health.
Monitor retrieval failures.
Manage examination/source configurations.
Monitor suspicious or excessive requests.
Maintain system security.
Update the system when source structures change.
2.3.5 Official Result Source
The official examination-result source is an important external stakeholder because the proposed system depends on publicly accessible result information.

The system must therefore minimize unnecessary requests and respect applicable technical and legal restrictions.

2.4 Existing System Analysis
The existing process can be represented as:

User
  ↓
Search Engine / Official Website
  ↓
Find Examination
  ↓
Find Year
  ↓
Find Result Page
  ↓
Navigate School/Centre
  ↓
Find Candidate
  ↓
View Result
The main weakness is that the process is source-oriented rather than user-oriented.

The user is required to understand how the result information is organized before finding the required information.

2.5 Proposed System Analysis
The proposed system changes the interaction to a search-oriented model.

Option A — Index Number
User
  ↓
Enter Index Number
  ↓
Validate
  ↓
Identify Examination/Year
  ↓
Retrieve Requested Result
  ↓
Display Result
Option B — School
User
  ↓
Select Examination
  ↓
Select Year
  ↓
Select Region
  ↓
Select District
  ↓
Select School
  ↓
Search/Identify Candidate
  ↓
Retrieve Result
  ↓
Display Result
The objective is to reduce unnecessary navigation while keeping the process controlled and secure.

2.6 Functional Requirements
Functional requirements describe what the system must do.

FR-01: Examination Selection
The system shall allow users to select the relevant examination type.

Examples may include:

PSLE
FTNA
CSEE
ACSEE
The actual examinations supported by the MVP shall depend on the availability and suitability of their public result sources.

FR-02: Examination Year Selection
The system shall allow users to select an available examination year.

FR-03: Index Number Input
The system shall provide an input field for users to enter a candidate examination index number.

Examples:

PS170604-001
S1673/3472
P0465/0347
FR-04: Index Number Validation
The system shall validate the submitted index number before initiating retrieval.

Invalid input shall produce a clear error message rather than being sent directly to the retrieval engine.

FR-05: School Search
The system shall allow users to locate a school using a hierarchical selection process:

Region
   ↓
District
   ↓
School
FR-06: Result Retrieval
The system shall retrieve the requested publicly accessible examination-result information when the required source is available.

Retrieval shall be initiated primarily as a result of a legitimate user search.

FR-07: Result Processing
The system shall process the retrieved source information and extract only the information required for the user's request.

The system shall not intentionally reproduce the entire source webpage.

FR-08: Result Display
The system shall present retrieved result information in a clear and readable format.

The interface should distinguish between:

candidate information;
examination information;
result information;
source information;
retrieval status.
FR-09: Error Handling
The system shall provide meaningful messages when:

an index number is invalid;
a result cannot be found;
the source is temporarily unavailable;
the requested examination is unsupported;
the retrieval process fails;
the user sends excessive requests.
FR-10: Source Attribution
The system shall identify the official source from which the examination-result information originates.

The platform shall clearly distinguish itself from the official examination authority.

FR-11: Request Control
The system shall control the number and frequency of retrieval requests generated by users.

This is necessary to protect both the application and the external result source.

FR-12: Administrative Monitoring
The system shall provide basic administrative monitoring for:

retrieval success/failure;
system errors;
unusual request activity;
source availability;
system performance.
Detailed administrative functionality may be expanded in later versions.

2.7 Non-Functional Requirements
Non-functional requirements define how the system should operate.

NFR-01: Usability
The system should be simple enough for users with limited technical knowledge.

A normal result search should require only a small number of clear steps.

NFR-02: Performance
The system should process normal searches efficiently and avoid unnecessary requests to external sources.

Performance should be measured using practical metrics such as:

page response time;
retrieval time;
successful search rate;
timeout rate.
NFR-03: Availability
The application should remain available whenever possible.

However, the system shall clearly communicate when the external result source is unavailable rather than pretending that a result does not exist.

NFR-04: Security
The system shall protect against common web-security threats, including:

SQL injection;
Cross-Site Scripting (XSS);
Cross-Site Request Forgery (CSRF), where applicable;
unauthorized administrative access;
abuse of the retrieval engine;
Server-Side Request Forgery (SSRF);
automated request abuse.
NFR-05: Privacy
The system shall follow data-minimization principles.

Only information required to perform the requested service should be processed and retained.

NFR-06: Scalability
The architecture should allow the system to handle increased numbers of users without requiring a complete redesign.

The retrieval engine should be separated from the user interface so that retrieval capacity can be controlled independently.

NFR-07: Maintainability
The system should be structured so that changes to examination years, result-page structures, or supported examinations can be implemented without rebuilding the entire application.

NFR-08: Reliability
The system should not display incomplete or incorrectly parsed results as valid results.

When reliable extraction cannot be confirmed, the system should report the retrieval failure.

NFR-09: Compatibility
The web application should work effectively on:

modern desktop browsers;
smartphones;
tablets.
The interface should use responsive design.

2.8 MVP Requirements Prioritization
Not every requirement has equal importance during the first development cycle.

A practical prioritization is:

Priority	Requirement	MVP
P0	Index-number search	✅
P0	Result retrieval	✅
P0	Result display	✅
P0	School navigation	✅
P0	Input validation	✅
P0	Basic security	✅
P0	Error handling	✅
P1	Administrator monitoring	✅ Basic
P1	Temporary caching	Optional
P1	Advanced analytics	❌
P2	WhatsApp integration	❌
P2	SMS integration	❌
P2	Mobile application	❌
P2	Advanced result statistics	❌
This prevents feature creep and keeps the first release focused on solving the original problem.

2.9 Key Use Cases
The MVP can initially be represented using four major use cases.

UC-01: Search by Index Number
Actor: Student/Parent/Other User

Process:

Enter index number
       ↓
Validate
       ↓
Identify examination/source
       ↓
Retrieve result
       ↓
Validate retrieved information
       ↓
Display result
UC-02: Find Result by School
Actor: Student/Parent/School User

Process:

Select examination
       ↓
Select year
       ↓
Select region
       ↓
Select district
       ↓
Select school
       ↓
Search/identify candidate
       ↓
Retrieve result
       ↓
Display result
UC-03: Handle Failed Retrieval
Actor: System

Request
   ↓
Source unavailable / retrieval failure
   ↓
Stop controlled retries
   ↓
Inform user
   ↓
Provide appropriate alternative
UC-04: Monitor System
Actor: Administrator

Administrator
     ↓
System Dashboard
     ↓
View retrieval status
     ↓
View errors
     ↓
Identify unusual traffic
     ↓
Take corrective action
2.10 Data Requirements
At the MVP level, the system will require several categories of information.

Examination Data
Examination type
Examination year
Examination source configuration
Geographic Data
Region
District
School Data
School name
School/centre identifier where applicable
Region
District
Search Data
User-submitted index number
Examination
Year
Search timestamp where necessary for security/monitoring
Retrieved Result Data
Only the minimum information required to display the requested result should be processed.

2.11 Constraints Identified During Analysis
Several constraints may affect the project.

Technical Constraints
External result-page structure may change.
Different examinations may use different result formats.
External sources may become temporarily unavailable.
High demand may affect retrieval performance.
Legal and Policy Constraints
Automated retrieval must comply with applicable laws and source policies.
Personal data must be handled appropriately.
The platform must not misrepresent itself as NECTA.
Technical restrictions must not be circumvented.
Operational Constraints
The project may initially have limited server resources.
The MVP should therefore avoid unnecessary background scraping.
Monitoring and rate limiting are required before public deployment.
2.12 Requirements Traceability Principle
Every major system feature should be traceable back to the original problem.

For example:

Identified Problem	System Requirement	MVP Feature
Difficult direct searching	Index-number search	Search box
User doesn't know index number	School navigation	Region → District → School
High external-source traffic	Controlled retrieval	Rate limiter
Fragmented information	Unified interface	Results Finder
Risk of incorrect results	Result validation	Validation layer
Privacy concerns	Data minimization	Limited retention
Source changes	Configurable retrieval	Retrieval module
This creates an important professional SDLC principle:

Every feature should have a reason for existing.

2.13 Chapter Summary
This chapter analyzed the existing examination-result discovery problem and translated it into system requirements. The analysis identified the major stakeholders, existing-process limitations, proposed workflows, functional requirements, non-functional requirements, data requirements, constraints, and MVP priorities.

The most important requirements of the first version are index-number searching, school-based searching, controlled on-demand retrieval, reliable result processing, clear result presentation, security, privacy, and error handling.

The next stage should therefore not jump directly into coding. Chapter Three should establish feasibility and the project development plan—including technical feasibility, legal/operational considerations, required technologies, development methodology, project phases, risks, resources, and an MVP development schedule.

Chapter Three Feasibility and Project Planning.

CHAPTER THREE: FEASIBILITY AND PROJECT PLANNING
3.1 Introduction
This chapter evaluates the feasibility of developing the proposed NECTA Results Finder and establishes a practical plan for developing the Minimum Viable Product (MVP). The feasibility assessment considers whether the proposed system can be developed and operated from technical, operational, economic, legal, and schedule perspectives.

The chapter also defines the proposed development methodology, project phases, resources, major risks, and MVP delivery plan. The purpose is to ensure that development begins with realistic technical and operational expectations rather than proceeding directly to implementation.

3.2 Project Feasibility
3.2.1 Technical Feasibility
The proposed system is technically feasible because its core functionality can be implemented using established web technologies.

The system can be developed using a conventional client-server architecture consisting of:

User Browser
     ↓
Web Application
     ↓
Application Backend
     ↓
Retrieval Engine
     ↓
Permitted Public Result Source
Potential technologies include:

Component	Possible Technology
Frontend	HTML5, CSS3, JavaScript
Backend	PHP / Python
Database	MySQL
Retrieval Engine	Server-side HTTP client/parser
Web Server	Apache / Nginx
Development	VS Code
Version Control	Git / GitHub
Hosting	Suitable PHP/Python-compatible server
The final technology stack should be selected after considering the developer's skills, hosting environment, maintainability, performance, and the technical characteristics of the result sources.

The most significant technical uncertainty is not the ability to build the web application itself, but the stability and permitted use of external result sources. The retrieval component must therefore be designed as an independent module that can be updated when source structures change.

Conclusion: Technically feasible, subject to source accessibility and permitted automated retrieval.

3.3 Operational Feasibility
The system is operationally feasible because it addresses a clearly identifiable user problem: reducing the effort required to locate examination results.

The proposed workflow is intentionally simple:

Index Number
      ↓
Search
      ↓
Result

OR

Region
   ↓
District
   ↓
School
   ↓
Result Search
The system does not require users to understand the technical process used to retrieve the result.

The platform can also operate independently of the official result website's user interface while relying on permitted publicly accessible result information.

However, operational success depends on:

reliable source availability;
appropriate retrieval controls;
effective error handling;
regular maintenance;
monitoring during high-demand periods.
Conclusion: Operationally feasible for the intended MVP.

3.4 Economic Feasibility
The MVP can be developed at relatively low initial cost because it can use widely available open-source technologies.

Potential Development Costs
Resource	Initial Cost Consideration
Development software	Low / Free
HTML, CSS, JavaScript	Free
PHP/Python	Free
MySQL	Free
Git	Free
Development environment	Free
Domain	Required for public deployment
Web hosting/server	Required for public deployment
SSL certificate	Usually available at low/no additional cost
Monitoring	May initially use low-cost/free services
The major recurring costs are expected to arise after deployment, particularly:

hosting;
domain renewal;
server scaling;
monitoring;
maintenance;
security;
increased infrastructure requirements during high-traffic periods.
The MVP should therefore be designed to minimize unnecessary infrastructure consumption.

Conclusion: Economically feasible for an initial prototype and MVP, with operational costs increasing as usage grows.

3.5 Legal and Compliance Feasibility
Legal feasibility is a critical consideration because the system interacts with examination-result information and an external official information source.

The project must operate within applicable Tanzanian laws and regulations and must respect the terms, policies, and technical restrictions governing the relevant source.

The project shall follow these principles:

Retrieve only permitted publicly accessible information.
Do not bypass authentication or access controls.
Do not bypass CAPTCHA or other anti-automation mechanisms.
Do not exploit vulnerabilities.
Do not conduct unnecessary bulk harvesting.
Minimize collection and retention of personal information.
Do not misrepresent the platform as an official NECTA service.
Do not intentionally publish a complete copy of the examination-results database.
Provide appropriate source attribution.
Obtain authorization or appropriate legal guidance where automated access requires permission.
Because legal requirements and source policies may change, legal feasibility must be re-evaluated before public or commercial deployment.

Conclusion: Feasible as a controlled project, provided the system's data-access methods and handling of personal information comply with applicable requirements.

3.6 Schedule Feasibility
The MVP is sufficiently focused to be developed in a manageable development cycle.

A suggested initial schedule is approximately 8 weeks.

Week	Main Activity	Output
1	Project foundation & source investigation	Confirmed problem, scope and source map
2	Detailed requirements & feasibility validation	Final MVP requirements
3	System architecture & database design	Architecture and ERD
4	UI/UX and frontend development	Search interface
5	Backend & database development	Core application
6	Retrieval engine integration	Controlled result retrieval
7	Testing, security & optimization	Tested MVP
8	Deployment, evaluation & documentation	MVP release
This schedule assumes that the required result sources are technically accessible and that no unexpected authorization or infrastructure issues arise.

3.7 Development Methodology
The project will use an iterative Agile-based SDLC rather than a strictly linear development model.

This is appropriate because important technical information about the result sources may only become clear during investigation and prototyping.

The development cycle will be:

Plan
  ↓
Analyze
  ↓
Design
  ↓
Build
  ↓
Test
  ↓
Evaluate
  ↓
Improve
  ↺
Instead of developing the entire system before testing it, the project will produce small working increments.

Proposed Iterations
Iteration 1 — Search Foundation

Examination selection
Year selection
Index-number validation
Basic UI
Iteration 2 — School Discovery

Region
District
School selection
School-result navigation
Iteration 3 — Retrieval Engine

Controlled request handling
Source parsing
Result extraction
Error handling
Iteration 4 — Security & Reliability

Rate limiting
SSRF protection
Input validation
Monitoring
Failure handling
Iteration 5 — MVP Validation

User testing
Performance testing
Security testing
Deployment preparation
3.8 Project Development Phases
The overall SDLC will consist of the following phases:

Phase 1 — Initiation
Establish:

problem;
project purpose;
stakeholders;
boundaries;
MVP;
initial risks.
Phase 2 — Analysis
Determine:

user requirements;
functional requirements;
non-functional requirements;
source requirements;
data requirements;
operational constraints.
Phase 3 — Feasibility & Planning
Evaluate:

technical feasibility;
economic feasibility;
operational feasibility;
legal considerations;
schedule;
risks;
resources.
Phase 4 — System Design
Develop:

system architecture;
database design;
UI/UX design;
retrieval architecture;
security architecture.
Phase 5 — Development
Implement:

frontend;
backend;
database;
retrieval engine;
validation;
security controls.
Phase 6 — Testing
Conduct:

unit testing;
integration testing;
system testing;
security testing;
usability testing;
performance testing.
Phase 7 — Deployment & Evaluation
Deploy the MVP and evaluate:

usability;
reliability;
retrieval success;
response time;
error rate;
user satisfaction.
Phase 8 — Maintenance
Address:

source structure changes;
bugs;
security vulnerabilities;
performance problems;
future requirements.
3.9 Required Resources
3.9.1 Human Resources
For the initial project, one developer can potentially implement the MVP, although a professional production system would benefit from multiple roles.

Potential roles include:

Role	Responsibility
Project Lead	Project coordination and decisions
System Analyst	Requirements and process analysis
Developer	System implementation
UI/UX Designer	Interface and user experience
Tester	Testing and quality assurance
Security Reviewer	Security and privacy review
System Administrator	Deployment and monitoring
For an academic or individual MVP, several of these roles may be performed by the same person.

3.9.2 Software Resources
The project may use:

Visual Studio Code;
Git;
GitHub;
PHP or Python;
MySQL;
Apache/Nginx;
browser developer tools;
testing tools;
HTTP debugging tools.
Preference should be given to established and well-supported technologies.

3.9.3 Hardware Resources
Development requires a computer capable of running:

web development tools;
local web server;
database server;
browser;
testing utilities.
Deployment will require a server capable of handling:

web requests;
database operations;
controlled retrieval requests;
logging;
monitoring.
3.10 Major Project Risks
Because the system depends on an external result source, risk management is particularly important.

Risk	Probability	Impact	Mitigation
Source becomes unavailable	Medium	High	Clear failure handling and retry limits
Source structure changes	High	High	Modular retrieval engine
Excessive user traffic	High during announcements	High	Rate limiting and caching where appropriate
Automated access is restricted	Medium	High	Verify policies and obtain permission if required
Incorrect parsing	Medium	High	Validation and test cases
Data exposure	Low/Medium	High	Data minimization and security controls
Malicious requests	Medium	High	Input validation, rate limiting, SSRF protection
Hosting limitations	Medium	Medium	Resource monitoring and scalable architecture
Project scope expands	High	Medium	Strict MVP boundaries
Search results become outdated	Medium	Medium	Controlled freshness/caching strategy
3.11 Risk Management Strategy
The project will use a preventive risk-management approach.

For each major risk:

Identify
   ↓
Assess
   ↓
Prevent
   ↓
Monitor
   ↓
Respond
The most important principle is that the system should fail safely.

For example, if the external result source changes:

❌ Do not guess the result.

Instead:

✅ Detect extraction failure → stop → log error → inform user → update retrieval module.

3.12 MVP Development Strategy
The first release will focus on proving the project's central value proposition:

Can the system significantly reduce the effort required to locate a requested examination result?

The MVP should therefore contain only the components necessary to prove that concept.

MVP Core
                    WEB UI
                      │
             ┌────────┴────────┐
             │                 │
       INDEX SEARCH      SCHOOL SEARCH
             │                 │
             └────────┬────────┘
                      ↓
               VALIDATION
                      ↓
              RETRIEVAL ENGINE
                      ↓
                SOURCE PARSER
                      ↓
              RESULT VALIDATOR
                      ↓
                RESULT VIEW
Additional features such as analytics, notifications, WhatsApp, SMS, mobile applications and advanced statistics should only be considered after the core workflow has been validated.

3.13 MVP Acceptance Criteria
Before considering the MVP complete, the following conditions should be satisfied:

Search
User can submit a valid index number.
Invalid index numbers are rejected appropriately.
User can select examination and year.
User can navigate Region → District → School.
Retrieval
Requested results can be retrieved when the source is available and permitted.
The system does not perform uncontrolled bulk scraping.
Retrieval failures are handled safely.
Retrieved information is validated before display.
Security
Arbitrary URLs cannot be supplied to the scraper.
Retrieval requests are rate-limited.
Common web vulnerabilities are addressed.
Administrative functions are protected.
Privacy
Unnecessary candidate information is not stored.
Result pages are not intentionally exposed for search-engine indexing.
Data retention is minimized.
Usability
The search process is understandable to a non-technical user.
The interface works on mobile and desktop.
Errors are communicated clearly.
3.14 Project Success Metrics
The MVP should be evaluated using measurable indicators rather than simply asking whether the application "works."

Suggested metrics include:

Metric	Purpose
Search completion rate	Measures how many searches successfully reach a result
Average search steps	Measures ease of discovery
Average retrieval time	Measures system responsiveness
Retrieval success rate	Measures reliability
Source failure rate	Measures dependency risk
Invalid-search rate	Identifies input/user-experience problems
System error rate	Measures technical stability
User satisfaction	Measures practical usefulness
One particularly important KPI should be:

Average number of user interactions required to reach the requested result.

This directly measures whether the project actually solves the original problem.

3.15 Project Planning Principle
The project will follow the principle:

Build the smallest safe system that proves the core problem can be solved, then expand based on evidence.

This prevents the project from becoming unnecessarily large before the fundamental retrieval workflow has been proven.

3.16 Chapter Summary
This chapter established the feasibility and development plan for the NECTA Results Finder. The project has been assessed as technically, operationally and economically feasible for an MVP, subject to verification of the permitted use and technical accessibility of external examination-result sources.

An iterative Agile-based SDLC has been selected to accommodate uncertainty in external result sources and allow progressive validation. The project will begin with a focused MVP containing index-number search, school-based search, controlled result retrieval, result validation, security, privacy and error handling.

The next stage is Chapter Four: System Analysis and Design, where the requirements established in Chapter Two will be transformed into the actual system architecture, use-case model, data flow, database structure, component design, retrieval-engine architecture and user interface structure.

Chapter Four system analysis and design.
this is the core chapter we need to clarify each specific system architecture design (overview, flow and levels), use case design,  mvp db design, security principles &design, proposed component structure. deep according to pre-listed informations

CHAPTER FOUR: SYSTEM ANALYSIS AND DESIGN
4.1 Introduction
This chapter presents the detailed analysis and design of the proposed NECTA Results Finder. It translates the requirements identified in Chapter Two and the feasibility decisions established in Chapter Three into a practical technical design for the Minimum Viable Product (MVP).

The design focuses on the central project objective:

Enable a user to locate a required examination result in a few clear steps without requiring the user to understand the underlying NECTA result-page structure.

The chapter defines the system architecture, processing levels, user interaction, data model, retrieval-engine design, security architecture, component structure, and major system workflows.

A key architectural principle is that the system will not act as a permanent mirror of NECTA results. Result retrieval will be controlled, user-initiated, validated, and limited to information required to satisfy the user's search.

4.2 System Design Objectives
The system design shall achieve the following objectives:

Provide a simple interface for searching examination results.
Support both index-number search and school-based discovery.
Separate the user interface from the retrieval engine.
Prevent users from directly controlling the scraper's destination URLs.
Retrieve results only through controlled server-side processes.
Validate retrieved information before displaying it.
Minimize unnecessary storage of candidate information.
Prevent uncontrolled bulk scraping.
Provide appropriate security and abuse-prevention mechanisms.
Allow individual examination sources to be maintained independently.
Support future expansion without redesigning the entire system.
4.3 Overall System Architecture
The proposed system will use a layered client-server architecture with a controlled retrieval subsystem.

The high-level architecture is:

┌──────────────────────────────────────────────────────────────┐
│                        USER DEVICE                           │
│                 Desktop / Tablet / Mobile                   │
└─────────────────────────────┬────────────────────────────────┘
                              │ HTTPS
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                        │
│                                                              │
│  Search Interface │ School Navigator │ Result Interface      │
└─────────────────────────────┬────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                         │
│                                                              │
│ Search Controller │ Validation │ Business Rules │ Sessions   │
└──────────────┬───────────────────────────────┬───────────────┘
               │                               │
               ▼                               ▼
┌──────────────────────────┐       ┌────────────────────────────┐
│      DATA LAYER          │       │   RETRIEVAL SUBSYSTEM      │
│                          │       │                            │
│ Examination             │       │ Request Controller         │
│ Year                     │       │ Source Resolver            │
│ Region                   │       │ HTTP Client                │
│ District                 │       │ Source Parser              │
│ School                   │       │ Result Validator           │
│ Source Configuration     │       │ Rate Limiter               │
└────────────┬─────────────┘       └─────────────┬──────────────┘
             │                                   │
             │                                   ▼
             │                       ┌───────────────────────────┐
             │                       │ Permitted Public Result  │
             │                       │ Source                    │
             │                       └───────────────────────────┘
             │
             ▼
      Application Database
The architecture intentionally places the retrieval subsystem behind the application layer.

A user therefore cannot directly communicate with an arbitrary external URL through the scraper.

4.4 Architectural Layers
The system is divided into five principal logical layers.

4.4.1 Presentation Layer
This is the part users interact with.

It includes:

home/search interface;
examination selection;
year selection;
index-number input;
region selection;
district selection;
school selection;
result display;
error messages.
The presentation layer must not contain scraping logic.

Its responsibility is to:

Collect valid user input and present system responses.

4.4.2 Application Layer
This layer contains the system's business logic.

It determines:

which search method is being used;
whether input is valid;
which examination is selected;
whether the requested examination is supported;
whether a retrieval request is allowed;
how the request should be processed;
what information should be returned.
Example:

User enters:

S1673/3472

        ↓

Application Layer

        ↓

Validate format

        ↓

Determine examination/source

        ↓

Create controlled retrieval request
The application layer is therefore the decision-making layer.

4.4.3 Retrieval Layer
This is the core technical component of the project.

Its responsibility is to retrieve information from the permitted public result source.

It contains:

Request Controller
Source Resolver
HTTP Client
Rate Limiter
Source Parser
Result Extractor
Result Validator
Failure Handler
The retrieval layer must never blindly accept a URL from the user.

4.4.4 Data Layer
The database stores relatively stable system information required to operate the application.

For the MVP, this primarily includes:

examinations;
examination years;
regions;
districts;
schools;
source configurations;
basic system configuration;
controlled operational logs where necessary.
The database should not become a permanent copy of every candidate's examination results.

4.4.5 Security and Control Layer
Security is treated as a cross-cutting concern rather than a single feature.

It operates across:

User
 ↓
Presentation
 ↓
Application
 ↓
Database
 ↓
Retrieval Engine
 ↓
External Source
It includes:

input validation;
authentication for administrators;
authorization;
rate limiting;
SSRF prevention;
CSRF protection where applicable;
secure sessions;
output encoding;
logging;
abuse detection;
data minimization.
4.5 System Architecture Levels
For clarity, the system can be viewed at four levels.

Level 0 — Context Level
At the highest level, the entire application is treated as one system.

                 ┌──────────────────────┐
                 │        USER          │
                 └──────────┬───────────┘
                            │
                     Search Request
                            │
                            ▼
                 ┌──────────────────────┐
                 │  NECTA RESULTS       │
                 │       FINDER         │
                 └──────────┬───────────┘
                            │
                       Result
                            │
                            ▼
                 ┌──────────────────────┐
                 │  USER / STAKEHOLDER  │
                 └──────────────────────┘

                            │
                            │ Controlled
                            │ Retrieval
                            ▼
                 ┌──────────────────────┐
                 │ Permitted Public     │
                 │ Result Source        │
                 └──────────────────────┘
4.6 Level 1 — Major System Processes
The system is decomposed into major processes:

                    USER
                      │
                      ▼
             ┌─────────────────┐
             │ 1. Search       │
             │    Management   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ 2. Validation   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ 3. Retrieval    │
             │    Management   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ 4. Result       │
             │    Processing   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ 5. Result       │
             │    Presentation  │
             └─────────────────┘
4.7 Level 2 — Search Processing
The search process is divided into two paths.

Path A — Index Number
User
 ↓
Enter Index Number
 ↓
Select Examination/Year if required
 ↓
Input Validation
 ↓
Candidate Identifier Normalization
 ↓
Source Resolution
 ↓
Controlled Retrieval
Path B — School
User
 ↓
Select Examination
 ↓
Select Year
 ↓
Select Region
 ↓
Select District
 ↓
Select School
 ↓
Identify Appropriate Result Source
 ↓
User Search / Candidate Selection
 ↓
Controlled Retrieval
4.8 Level 3 — Retrieval Processing
The retrieval process is the most sensitive part of the architecture.

Retrieval Request
       │
       ▼
Request Authorization
       │
       ▼
Rate-Limit Check
       │
       ▼
Source Configuration Lookup
       │
       ▼
Generate Server-Side Request
       │
       ▼
HTTP Request
       │
       ▼
Response Received?
    ┌──┴──┐
   NO     YES
    │       │
    ▼       ▼
Failure   Parse Response
Handler       │
              ▼
        Expected Structure?
          ┌───┴────┐
         NO       YES
          │         │
          ▼         ▼
       Reject    Extract Data
                    │
                    ▼
             Validate Result
                    │
                    ▼
              Return Result
The parser must be designed to fail safely.

If the retrieved page does not match the expected structure, the system should not guess what the result means.

4.9 Use Case Model
The primary actor is the User.

The Administrator is a secondary actor.

The external official/public result source is treated as an external system, not as a normal user.

Main Use Cases
                 ┌─────────────────────────┐
                 │         USER            │
                 └───────────┬─────────────┘
                             │
       ┌─────────────────────┼─────────────────────┐
       │                     │                     │
       ▼                     ▼                     ▼
 Search by Index       Find School Result    View Result
       │                     │
       └──────────┬──────────┘
                  ▼
           Submit Search
                  │
                  ▼
          Retrieve Result
                  │
                  ▼
          Display Result
Administrator Use Cases
                 ADMINISTRATOR
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
 Manage Sources    Monitor System    Review Errors
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                 System Maintenance
4.10 Detailed Use Case: Search by Index Number
UC-01
Name: Search by Index Number

Primary Actor: User

Precondition:

System is available.
User has an examination index number.
Main Flow:

User opens the Results Finder.
User selects the examination where required.
User selects the year where required.
User enters the index number.
System validates the input.
System normalizes the identifier where appropriate.
System identifies the appropriate source configuration.
System checks retrieval limits.
Retrieval engine sends a controlled request.
Source response is received.
Parser extracts the required information.
Result validator verifies the extracted structure.
System displays the result.
Alternative Flows:

Invalid index number → validation error.
Unsupported examination → unsupported-source message.
Result not found → no-result message.
Source unavailable → temporary-unavailability message.
Parsing failure → system error without displaying unreliable data.
4.11 Detailed Use Case: Search by School
UC-02
Name: Find Result by School

Primary Actor: User

Precondition:

Examination and year are supported.
School information is available.
Main Flow:

User selects examination.
User selects year.
User selects region.
System loads districts for that region.
User selects district.
System loads schools for that district.
User selects school.
System identifies the appropriate result source.
User proceeds to the relevant candidate/result search.
System performs controlled retrieval.
System validates retrieved information.
System displays the requested result.
The system should avoid interpreting school selection alone as authorization to harvest every candidate's results.

4.12 Detailed Use Case: Administrator Source Management
UC-03
Name: Manage Result Source Configuration

Primary Actor: Administrator

The administrator may manage configurations such as:

examination;
year;
source identifier;
source type;
parser version;
active/inactive status.
The administrator should not manually alter examination results through the administrative interface.

A configuration change should affect how the system retrieves information, not the content of official results.

4.13 MVP Database Design
The MVP database should be deliberately small.

The database is primarily responsible for metadata and system configuration, not storing the entire NECTA result population.

A conceptual model is:

EXAMINATION
     │
     │ 1:N
     ▼
EXAMINATION_YEAR
     │
     │
     └───────────────┐
                     │
                     ▼
               SOURCE_CONFIG


REGION
  │
  │ 1:N
  ▼
DISTRICT
  │
  │ 1:N
  ▼
SCHOOL
4.14 Proposed MVP Database Entities
4.14.1 examinations
Stores supported examination types.

Field	Purpose
id	Primary key
code	Examination code
name	Examination name
status	Active/inactive
created_at	Creation timestamp
Example:

CSEE → Certificate of Secondary Education Examination
ACSEE → Advanced Certificate of Secondary Education Examination
4.14.2 examination_years
Stores supported years.

Field	Purpose
id	Primary key
examination_id	Related examination
year	Examination year
status	Availability
created_at	Timestamp
Relationship:

Examination 1 ─────── N Examination Years
4.15 Geographic Data Model
regions
Field	Purpose
id	Primary key
name	Region name
code	Region identifier
districts
Field	Purpose
id	Primary key
region_id	Foreign key
name	District name
code	District identifier
Relationship:

Region 1 ─────── N District
4.16 School Data Model
schools
Field	Purpose
id	Primary key
district_id	Foreign key
name	School name
centre_code	School/centre identifier
status	Active/inactive
Relationship:

Region
  │
  ▼
District
  │
  ▼
School
This structure allows the interface to implement:

Region → District → School
without requiring users to search through an unstructured national school list.

4.17 Source Configuration Model
One of the most important design decisions is to avoid hard-coding the retrieval logic throughout the application.

A conceptual source_configs entity can contain:

Field	Purpose
id	Primary key
examination_id	Examination
year_id	Examination year
source_type	Source category
source_identifier	Controlled source reference
parser_version	Parser implementation
status	Active/inactive
last_verified_at	Last verification
The exact implementation should not store arbitrary user-supplied URLs.

Instead:

User Input
   ↓
Examination + Year
   ↓
Database Configuration
   ↓
Known Source
This creates a controlled relationship between the application and external result sources.

4.18 Should the MVP Have a results Table?
Recommended answer: Not as a permanent complete results table.
A table such as:

results
---------
candidate_name
index_number
school
division
grades
...
could easily turn the application into a permanent copy of the examination-results database.

That conflicts with the project's defined boundary.

For the MVP, the preferred model is:

User Search
     ↓
Controlled Retrieval
     ↓
Temporary Processing
     ↓
Validation
     ↓
Display
     ↓
Discard / Short-lived Cache
If performance testing later demonstrates that caching is necessary, a short-lived cache layer can be introduced with explicit retention rules.

4.19 Optional Search/Operational Log
A limited search_logs table may be useful for security and performance monitoring.

Possible fields:

Field	Purpose
id	Primary key
search_type	Index/school
examination_id	Examination
year_id	Year
status	Success/failure
response_time_ms	Performance
created_at	Timestamp
The system should avoid storing complete candidate results in logs.

Where an index number is required for debugging/security, it should be handled according to a defined retention and privacy policy and, where possible, minimized or protected.

4.20 MVP Entity Relationship Overview
The conceptual ERD is:

┌─────────────────┐
│  EXAMINATIONS   │
├─────────────────┤
│ PK id           │
│ code            │
│ name            │
│ status          │
└────────┬────────┘
         │
         │ 1:N
         ▼
┌─────────────────────┐
│ EXAMINATION_YEARS   │
├─────────────────────┤
│ PK id               │
│ FK examination_id   │
│ year                │
│ status              │
└─────────┬───────────┘
          │
          │
          ▼
┌─────────────────────┐
│   SOURCE_CONFIGS    │
├─────────────────────┤
│ PK id               │
│ FK examination_id   │
│ FK year_id          │
│ source_type         │
│ source_identifier   │
│ parser_version      │
│ status              │
└─────────────────────┘


┌─────────────────┐
│     REGIONS     │
├─────────────────┤
│ PK id           │
│ code            │
│ name            │
└────────┬────────┘
         │ 1:N
         ▼
┌─────────────────┐
│    DISTRICTS    │
├─────────────────┤
│ PK id           │
│ FK region_id    │
│ code            │
│ name            │
└────────┬────────┘
         │ 1:N
         ▼
┌─────────────────┐
│     SCHOOLS     │
├─────────────────┤
│ PK id           │
│ FK district_id  │
│ centre_code     │
│ name            │
│ status          │
└─────────────────┘
This is intentionally much smaller than a conventional student/results database.

4.21 Retrieval Engine Architecture
The retrieval engine should be treated as a separate subsystem.

Its proposed structure is:

┌──────────────────────────────────────┐
│         RETRIEVAL ENGINE             │
├──────────────────────────────────────┤
│                                      │
│  1. Request Controller               │
│             ↓                        │
│  2. Source Resolver                  │
│             ↓                        │
│  3. Request Builder                  │
│             ↓                        │
│  4. Rate Limiter                     │
│             ↓                        │
│  5. HTTP Client                      │
│             ↓                        │
│  6. Response Handler                 │
│             ↓                        │
│  7. Source Parser                    │
│             ↓                        │
│  8. Result Extractor                 │
│             ↓                        │
│  9. Result Validator                 │
│             ↓                        │
│ 10. Normalized Result                │
│                                      │
└──────────────────────────────────────┘
Each component should have a clearly defined responsibility.

4.22 Request Controller
The Request Controller receives a request from the application layer.

Example:

{
    examination: CSEE,
    year: 2025,
    index_number: S1673/3472
}
It should verify that the request is structurally valid before passing it forward.

It must not accept:

{
    url: "https://arbitrary-site.example/..."
}
4.23 Source Resolver
The Source Resolver determines which known source configuration should be used.

Conceptually:

Examination
     +
Year
     +
Search Type
     ↓
Source Configuration
This allows the application to support different result structures without rewriting the entire application.

For example:

CSEE 2025 → Parser A
ACSEE 2025 → Parser B
PSLE 2025 → Parser C
The exact parser mapping will be determined during source investigation and implementation.

4.24 HTTP Client
The HTTP Client is responsible for communication with an approved public source.

It should implement:

connection timeout;
response timeout;
controlled headers;
limited retries;
response-size limits;
error handling;
safe connection termination.
The HTTP client should not follow arbitrary redirects to untrusted destinations.

4.25 Source Parser
The parser converts the external source format into an internal representation.

For example:

External Source
      ↓
HTML / permitted response
      ↓
Parser
      ↓
Structured Data
Example internal structure:

Candidate
Index Number
Name
School
Examination
Year
Grades
Division
The actual fields depend on what the official source provides and what the project is legally permitted to process.

4.26 Result Validator
The Result Validator is a critical safety layer.

It verifies that:

expected fields exist;
candidate identifier matches the request;
examination matches;
year matches;
values conform to expected formats;
the response is not obviously incomplete;
the parser has not accidentally extracted unrelated page content.
Only validated results should reach the presentation layer.

4.27 Security Architecture
Security must be incorporated into the architecture rather than added after development.

The security model is:

                 USER
                   │
                   ▼
           ┌───────────────┐
           │ Input         │
           │ Validation    │
           └───────┬───────┘
                   ▼
           ┌───────────────┐
           │ Rate Limiting │
           └───────┬───────┘
                   ▼
           ┌───────────────┐
           │ Authorization │
           │ / Business    │
           │ Rules         │
           └───────┬───────┘
                   ▼
           ┌───────────────┐
           │ Safe Source   │
           │ Resolution    │
           └───────┬───────┘
                   ▼
           ┌───────────────┐
           │ Controlled    │
           │ Retrieval     │
           └───────┬───────┘
                   ▼
           ┌───────────────┐
           │ Result        │
           │ Validation    │
           └───────┬───────┘
                   ▼
                 USER
4.28 Security Principle 1 — Never Trust User Input
All user-controlled values must be treated as untrusted.

This includes:

index numbers;
examination IDs;
year;
region;
district;
school;
query parameters.
Validation should occur on the server even if client-side validation is also implemented.

4.29 Security Principle 2 — No Arbitrary URL Scraping
This is one of the most important security rules.

The system should never allow:

User → URL → Scraper
Instead:

User
 ↓
Validated Search Parameters
 ↓
Application
 ↓
Known Source Configuration
 ↓
Retrieval Engine
This prevents the application from becoming an SSRF proxy.

4.30 Security Principle 3 — Rate Limiting
Rate limiting should exist at multiple levels.

User Level
Limit repeated searches from the same session/IP where appropriate.

Application Level
Limit concurrent retrieval jobs.

Source Level
Maintain conservative request limits for each external source.

Conceptually:

User
 ↓
Request
 ↓
Rate Limit Check
 ├── Allowed → Continue
 └── Denied → Reject / Retry Later
4.31 Security Principle 4 — No Security Bypass
The retrieval subsystem must never be designed to:

bypass CAPTCHA;
bypass authentication;
bypass access restrictions;
exploit vulnerabilities;
evade deliberate IP blocking;
circumvent technical restrictions.
If an official source becomes inaccessible to automated retrieval, the system should fail safely.

4.32 Security Principle 5 — Result Integrity
The system must preserve the integrity of retrieved information.

Retrieved Result
       ↓
Validation
       ↓
Normalization
       ↓
Display
The system should not:

Retrieved Result
       ↓
Guess / Modify
       ↓
Display
If confidence in the extraction is insufficient, the result should not be presented as authoritative.

4.33 Security Principle 6 — Data Minimization
The system should not store information simply because it can.

For the MVP:

Permanent Data
-----------------------------
Examination metadata
Year
Region
District
School
Source configuration


Temporary / Request Data
-----------------------------
Search parameters
Retrieved result
Processing state
The distinction is important because the application needs metadata to operate, but does not necessarily need a permanent database of individual examination results.

4.34 Security Principle 7 — Administrative Isolation
Administrative functionality should be separated from public functionality.

PUBLIC SYSTEM
    │
    ├── Search
    ├── School navigation
    └── View result


ADMIN SYSTEM
    │
    ├── Source configuration
    ├── Monitoring
    ├── Error logs
    └── System maintenance
Administrative operations should require authentication and authorization.

4.35 Security Principle 8 — Safe Error Handling
The system should not expose internal information to users.

Bad:

SQLSTATE[HY000]: ...
/var/www/app/retrieval/parser.php line 172
Better:

"The result could not be retrieved at this time. Please try again later."

Detailed technical information should remain in protected server logs.

4.36 Proposed Component Structure
The application should be modular.

A possible project structure is:

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
The exact folder structure can change according to the selected framework, but the separation of responsibilities should remain.

4.37 Component Responsibilities
Component	Responsibility
SearchController	Receives user search requests
SearchService	Coordinates search logic
SchoolService	Handles Region → District → School
ResultService	Coordinates result retrieval
RetrievalManager	Controls retrieval workflow
SourceResolver	Determines permitted source configuration
HttpClient	Performs controlled HTTP communication
RateLimiter	Controls request frequency
Parser	Extracts structured information
ResultValidator	Verifies extracted information
Models	Represents database entities
Security	Protects application inputs/actions
Views	Presents information to users
Admin	Maintains system configuration
4.38 Separation of Concerns
The architecture must avoid a design such as:

search.php
   ↓
SQL
   ↓
scraping
   ↓
HTML parsing
   ↓
result formatting
   ↓
HTML output
all inside one file.

Instead:

Controller
    ↓
Service
    ↓
Retrieval Manager
    ↓
Source Resolver
    ↓
HTTP Client
    ↓
Parser
    ↓
Validator
    ↓
Result Service
    ↓
View
This makes the system easier to test, maintain and modify.

4.39 Search Request Lifecycle
A complete user request should follow this lifecycle:

1. USER
   │
   │ Search
   ▼
2. PRESENTATION
   │
   │ validated form
   ▼
3. CONTROLLER
   │
   ▼
4. APPLICATION SERVICE
   │
   ├── validate
   ├── normalize
   └── determine search type
   │
   ▼
5. RETRIEVAL MANAGER
   │
   ├── rate-limit
   ├── resolve source
   └── create controlled request
   │
   ▼
6. HTTP CLIENT
   │
   ▼
7. EXTERNAL SOURCE
   │
   ▼
8. PARSER
   │
   ▼
9. RESULT VALIDATOR
   │
   ▼
10. RESULT SERVICE
   │
   ▼
11. PRESENTATION
   │
   ▼
12. USER
This lifecycle represents the core architecture of the project.

4.40 Failure Architecture
Failure handling is part of the system design rather than an afterthought.

Possible failures include:

Invalid Input
     ↓
Validation Error

No Result
     ↓
Not Found

Source Timeout
     ↓
Temporary Unavailability

Source Changed
     ↓
Parser Failure

Too Many Requests
     ↓
Rate Limit Response

Unexpected Data
     ↓
Validation Failure
The system must distinguish these conditions instead of returning one generic "result not found" message.

For example:

Result Not Found

is different from:

Official result source temporarily unavailable.

That distinction improves both usability and system diagnostics.

4.41 Scalability Design
Although the MVP may initially operate on a single server, the architecture should permit future separation.

MVP
Web Server
   │
   ├── Application
   ├── Database
   └── Retrieval Engine
Future Scale
             Load Balancer
                   │
          ┌────────┴────────┐
          ▼                 ▼
     Web Server 1      Web Server 2
          │                 │
          └────────┬────────┘
                   ▼
             Application
                   │
             ┌─────┴─────┐
             ▼           ▼
        Database      Retrieval
                      Workers
                          │
                          ▼
                    External Source
The retrieval subsystem can eventually be moved into controlled worker processes if traffic increases.

4.42 Caching Design Principle
Caching can improve performance, but it must be used carefully because examination results are personal information and the project is explicitly designed not to become a permanent results database.

Therefore, caching should be:

temporary;
purpose-specific;
access-controlled;
automatically expired;
minimized.
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

4.43 Design Principle: Source Independence
The system should not assume that all examinations use identical result-page structures.

Instead:

              Retrieval Manager
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    Parser A      Parser B      Parser C
        │            │            │
     Source A     Source B     Source C
This is particularly important because different examination types or years may have different page structures.

The application should therefore depend on a common internal result model, while individual parsers handle source-specific structures.

4.44 Common Internal Result Model
Regardless of the external format, the retrieval layer should normalize information into a common internal representation.

Conceptually:

Result
├── examination
├── year
├── candidate
│   ├── index_number
│   └── name
├── school
├── subjects/grades
├── division/result
└── source_metadata
Not every examination must populate every field.

The important principle is:

External source structure should not dictate the entire application's internal architecture.

4.45 Design Principle: Fail Closed
The retrieval subsystem should follow a fail-closed approach.

If something unexpected occurs:

Unexpected Source
       ↓
Cannot Validate
       ↓
DO NOT DISPLAY AS VALID RESULT
       ↓
Log Technical Error
       ↓
Inform User
This is particularly important for an examination-result system because displaying an incorrectly parsed result could be more harmful than displaying no result.

4.46 Final MVP Architecture
The complete MVP architecture can therefore be summarized as:

                         ┌───────────────────┐
                         │       USER        │
                         └─────────┬─────────┘
                                   │
                                   ▼
                    ┌─────────────────────────┐
                    │   PRESENTATION LAYER    │
                    │                         │
                    │ Index Search            │
                    │ School Search           │
                    │ Result View             │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    APPLICATION LAYER    │
                    │                         │
                    │ Controllers             │
                    │ Validation              │
                    │ Business Rules          │
                    │ Search Services          │
                    └────────────┬────────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 │                               │
                 ▼                               ▼
      ┌─────────────────────┐        ┌────────────────────────┐
      │     DATA LAYER      │        │   RETRIEVAL ENGINE     │
      │                     │        │                        │
      │ Examination         │        │ Request Controller     │
      │ Years               │        │ Source Resolver        │
      │ Regions             │        │ Rate Limiter           │
      │ Districts           │        │ HTTP Client            │
      │ Schools             │        │ Parser                 │
      │ Source Config       │        │ Result Validator       │
      └─────────────────────┘        └────────────┬───────────┘
                                                  │
                                                  ▼
                                    ┌─────────────────────────┐
                                    │ PERMITTED PUBLIC SOURCE│
                                    └─────────────────────────┘
4.47 Chapter Summary
This chapter transformed the project's requirements into a concrete technical design.

The proposed architecture separates the system into presentation, application, retrieval, data, and security concerns. The two principal user journeys—index-number search and Region → District → School search—are represented as independent but converging workflows.

The MVP database deliberately focuses on examination metadata, geographic hierarchy, school information, and controlled source configuration, rather than maintaining a permanent database containing all candidate results.

The retrieval engine is designed as an independent subsystem consisting of a Request Controller, Source Resolver, Rate Limiter, HTTP Client, Parser, and Result Validator. This separation is essential because external result sources may change independently of the application.

Security is embedded throughout the architecture through input validation, SSRF prevention, rate limiting, secure administration, data minimization, result integrity, safe error handling, and fail-closed processing.

Most importantly, the architecture preserves the project's original boundary:

The platform is a controlled result-discovery system, not an unauthorized mirror of the NECTA results database.

The next SDLC stage can now move from architecture into Chapter Five: System Development and Implementation, where these components can be translated into the actual database schema, backend modules, frontend interfaces, retrieval-engine implementation, and MVP code structure.

Chapter 5 and practical activity &project prompting document for  AI coding processes..

CHAPTER FIVE: SYSTEM DEVELOPMENT AND IMPLEMENTATION
5.1 Introduction
This chapter describes how the NECTA Results Finder MVP will be transformed from the approved system design into a working software system. Development will follow an iterative approach in which each major component is implemented, tested, and integrated before moving to the next component.

The implementation will follow the architecture defined in Chapter Four and maintain the project's established boundaries, particularly around controlled result retrieval, data minimization, security, and source protection.

The development process will not begin with the complete scraper. The system will first establish the application foundation, database, user interface, validation, and retrieval interfaces. The retrieval engine will then be integrated under controlled conditions.

5.2 Development Environment
The development environment will consist of the following major components:

Component	Proposed Technology
Operating System	Windows
Code Editor	Visual Studio Code
Frontend	HTML5, CSS3, JavaScript
Backend	PHP or Python
Database	MySQL
Web Server	Apache/Nginx
Version Control	Git
Repository	GitHub
Browser Testing	Chrome/Edge/Firefox
API/HTTP Testing	Appropriate HTTP testing tools
The final backend framework should be selected before implementation and kept consistent throughout the MVP.

5.3 Development Strategy
Development will follow an incremental implementation sequence:

Project Setup
      ↓
Database
      ↓
Basic UI
      ↓
Search Validation
      ↓
School Navigation
      ↓
Backend Services
      ↓
Retrieval Engine Interface
      ↓
Controlled Source Integration
      ↓
Result Validation
      ↓
Security
      ↓
Testing
      ↓
MVP
This sequence deliberately prevents the retrieval engine from becoming the first and only component of the project.

5.4 Implementation Phases
Phase 1: Project Initialization
Activities:

Create project repository.
Establish development environment.
Configure backend.
Configure database connection.
Establish environment variables.
Create base application structure.
Configure Git.
Create development documentation.
Expected result:

A clean, runnable application skeleton.

Phase 2: Database Implementation
The conceptual database designed in Chapter Four will be converted into an actual relational database.

Initial tables:

examinations
examination_years
regions
districts
schools
source_configs
search_logs
Relationships must follow the approved ERD.

At this stage, candidate examination results should not be bulk-imported into the database.

5.5 Database Migration and Seed Data
Database migrations should be used where supported.

Example logical sequence:

Create examinations
        ↓
Create examination_years
        ↓
Create regions
        ↓
Create districts
        ↓
Create schools
        ↓
Create source_configs
        ↓
Create search_logs
Seed data should initially contain only the information required to demonstrate the MVP.

For example:

CSEE
2025
Dar es Salaam
Kinondoni
Selected Schools
The initial dataset should be treated as development data until its source and accuracy have been verified.

5.6 Frontend Implementation
The frontend will implement two primary user journeys.

Search A
Enter Index Number
        ↓
Search
        ↓
Result
Search B
Examination
      ↓
Year
      ↓
Region
      ↓
District
      ↓
School
      ↓
Search / Result
The interface should prioritize:

simplicity;
mobile responsiveness;
clear labels;
minimal steps;
understandable errors;
accessibility.
5.7 Backend Implementation
The backend will expose controlled application services rather than exposing the retrieval engine directly.

Conceptually:

Frontend
    ↓
Controller
    ↓
Service
    ↓
Validation
    ↓
Retrieval Manager
    ↓
Result Validator
    ↓
Response
The backend will be responsible for enforcing project rules regardless of what the frontend sends.

5.8 Index Number Processing
Index-number processing will follow:

Raw Input
    ↓
Trim
    ↓
Normalize
    ↓
Format Validation
    ↓
Examination/Year Resolution
    ↓
Controlled Search
The system should support only formats that have been explicitly defined and tested.

It should not assume that every string resembling an index number is valid.

5.9 School Search Implementation
The school-search interface will use dependent selections.

Region selected
      ↓
Load districts
      ↓
District selected
      ↓
Load schools
      ↓
School selected
      ↓
Continue search
This prevents the user from being presented with an unnecessarily large national school list.

The database will provide the geographic hierarchy.

5.10 Retrieval Engine Implementation
The retrieval engine will be developed as an independent module.

Its implementation sequence will be:

Retrieval Interface
       ↓
Request Controller
       ↓
Source Resolver
       ↓
Rate Limiter
       ↓
HTTP Client
       ↓
Parser
       ↓
Result Validator
       ↓
Normalized Result
Each component should be testable independently.

5.11 Source Adapter Model
Instead of putting all source-specific logic in one scraper, the system should use a source-adapter approach.

Conceptually:

                    Retrieval Manager
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
       Source Adapter A Source Adapter B Source Adapter C
             │             │             │
             ▼             ▼             ▼
          Source A      Source B      Source C
Each adapter is responsible for understanding one particular source structure.

This makes future maintenance significantly easier.

5.12 Controlled Retrieval
Every retrieval request must pass through the control layer.

User Request
     ↓
Is request valid?
     │
    YES
     ↓
Is source supported?
     │
    YES
     ↓
Rate limit passed?
     │
    YES
     ↓
Known source configuration?
     │
    YES
     ↓
Controlled request
Any failure should stop the process rather than attempting uncontrolled alternatives.

5.13 Result Normalization
Different sources may present information differently.

The application should therefore convert retrieved information into a standard internal representation.

Example:

{
    examination,
    year,
    index_number,
    candidate_name,
    school,
    subjects,
    grades,
    division,
    source,
    retrieved_at
}
Only fields actually available and permitted should be populated.

The internal model should not invent missing information.

5.14 Result Validation
Before display:

Retrieved Data
      ↓
Schema Validation
      ↓
Candidate Identifier Check
      ↓
Examination Check
      ↓
Year Check
      ↓
Required Fields Check
      ↓
Display
If validation fails:

Do NOT display result
        ↓
Record technical failure
        ↓
Return safe user message
5.15 Security Implementation
Security controls will be implemented throughout development.

Required controls
Server-side input validation.
Parameterized database queries.
Output encoding.
Secure sessions.
CSRF protection where applicable.
Authentication for administration.
Role-based authorization.
Rate limiting.
SSRF prevention.
Request timeout.
Redirect restrictions.
Secure secrets management.
Error-message sanitization.
Security logging.
5.16 Administrative Interface
The MVP administrator interface should remain small.

It may provide:

Dashboard
 ├── System Status
 ├── Source Status
 ├── Retrieval Errors
 ├── Request Statistics
 └── Source Configuration
It should not provide a facility for administrators to manually fabricate or modify examination results.

5.17 Logging
The system should maintain technical logs for:

retrieval success/failure;
response time;
parser errors;
application errors;
security events;
excessive requests.
Logs should avoid unnecessarily storing complete examination results.

A useful event might be:

2026-08-25 21:40
Search Type: INDEX
Source: CSEE-2025
Status: SUCCESS
Response: 1.8s
rather than storing an unnecessary full candidate record.

5.18 Git-Based Development Workflow
Development should use version control from the first day.

Recommended workflow:

main
 │
 ├── development
 │      │
 │      ├── feature/database
 │      ├── feature/search-ui
 │      ├── feature/school-search
 │      ├── feature/retrieval-engine
 │      └── feature/security
 │
 └── release/mvp
Each feature should be implemented and tested independently before integration.

5.19 AI-Assisted Development Strategy
AI coding tools may be used as development assistants, but they must operate under the project's architecture and rules.

AI should not independently redefine the project architecture or introduce functionality that violates the established boundaries.

The development process should be:

PROJECT SPECIFICATION
       ↓
AI DEVELOPMENT PROMPT
       ↓
AI GENERATED IMPLEMENTATION
       ↓
DEVELOPER REVIEW
       ↓
TEST
       ↓
SECURITY REVIEW
       ↓
INTEGRATE
AI-generated code must be treated as untrusted code until reviewed and tested.

5.20 Practical Development Activities
The following practical activities will be performed during implementation.

Activity 1 — Create Repository
Create:

necta-results-finder
Establish:

README;
.gitignore;
environment configuration;
project directories;
development branch.
Activity 2 — Build Database
Implement the approved MVP schema.

Verify:

primary keys;
foreign keys;
uniqueness;
indexes;
referential integrity.
Activity 3 — Build Search UI
Create the first working interface:

NECTA RESULTS FINDER

[ Examination ▼ ]

[ Year ▼ ]

[ Enter Index Number             ]

              [ SEARCH ]
Activity 4 — Build School Navigator
Implement:

Region ▼
District ▼
School ▼

[ CONTINUE ]
Test that selecting one level correctly limits the next level.

Activity 5 — Build Backend API/Routes
Implement controlled routes such as conceptually:

/search/index
/search/school
/locations/regions
/locations/districts
/locations/schools
/result
The exact routing depends on the selected framework.

Activity 6 — Implement Retrieval Interface
Before connecting to a real source, create a controlled retrieval abstraction.

For example:

retrieveResult(request)
The application should depend on this interface rather than directly depending on scraping code.

Activity 7 — Implement Source Adapter
Only after the source structure and access conditions have been verified should the first source adapter be implemented.

The adapter should:

Receive validated parameters.
Construct only an approved request.
Send a controlled request.
Parse the response.
Normalize the result.
Validate it.
Return a structured response.
Activity 8 — Implement Error Handling
Test:

invalid index number;
nonexistent candidate;
unsupported year;
unavailable source;
timeout;
unexpected source structure;
excessive requests.
Activity 9 — Implement Security
Perform:

input validation tests;
SQL injection tests;
XSS tests;
SSRF tests;
rate-limit tests;
authorization tests;
session tests.
Activity 10 — MVP User Testing
Give the application to several test users and measure:

time to find result;
number of interactions;
errors encountered;
points of confusion;
mobile usability.
5.21 AI CODING PROCESS & PROJECT PROMPTING DOCUMENT
The following document should be maintained separately as the AI Development Control Document. It ensures that AI coding assistants work within the approved project architecture instead of generating unrelated code.

AI DEVELOPMENT CONTROL DOCUMENT
Project Identity
Project: NECTA Results Finder

Development Stage: MVP

Development Principle:

Build a secure, modular, user-oriented result-discovery system that retrieves requested publicly accessible examination-result information through controlled processes.

AI Role
The AI coding assistant acts as:

software architect assistant;
programmer;
code reviewer;
debugging assistant;
testing assistant;
documentation assistant.
The AI is not authorized to redefine the project's legal boundaries or introduce unrestricted scraping functionality.

AI RULES
Rule 1 — Respect the Architecture
Always follow:

Presentation
     ↓
Application
     ↓
Retrieval Manager
     ↓
Source Adapter
     ↓
External Source
Do not bypass application controls.

Rule 2 — Never Create Arbitrary Scraping
Never implement:

POST /scrape
{
    "url": "user supplied URL"
}
Instead, use predefined source configurations.

Rule 3 — No Security Bypass
Never generate code intended to:

bypass CAPTCHA;
bypass login;
defeat access controls;
circumvent rate limits;
exploit vulnerabilities;
evade blocking mechanisms.
If a requested implementation requires such behavior, stop and flag the issue.

Rule 4 — No Bulk Harvesting
Do not implement background crawlers that automatically collect all schools/candidates/results.

The default workflow is:

User Search
     ↓
One Controlled Retrieval
     ↓
Process
     ↓
Return
Rule 5 — Minimal Data
Do not create permanent candidate-result storage unless explicitly approved as a later architectural change.

Rule 6 — Validate Everything
All external and user input must be treated as untrusted.

Rule 7 — Fail Closed
If the source response cannot be confidently interpreted:

Do not guess.

Return a controlled error.

Rule 8 — Explain Before Major Changes
Before modifying:

database schema;
architecture;
security model;
retrieval workflow;
the AI should explain the proposed change and its effect on existing components.

Rule 9 — Small Changes
AI should implement one logical feature at a time.

Preferred:

Task → Code → Test → Review → Commit
Not:

"Build the entire application."
Rule 10 — Never Hide Errors
Do not suppress exceptions merely to make the application appear functional.

STANDARD AI CODING PROMPT
Use the following as the base prompt for every coding session:

NECTA RESULTS FINDER — AI DEVELOPMENT CONTEXT
You are an AI software-development assistant working on the NECTA Results Finder MVP.

PROJECT PURPOSE
The system is an independent examination-results discovery platform designed to reduce the number of steps required for users to locate publicly accessible NECTA examination-result information.

The MVP has two primary search methods:

Search by candidate examination index number.

Find a result through Examination → Year → Region → District → School.

APPROVED ARCHITECTURE
Use the following architecture:

Presentation Layer
→ Application Layer
→ Retrieval Manager
→ Source Resolver
→ Source Adapter
→ Controlled HTTP Client
→ Parser
→ Result Validator
→ Application Response

The database stores examination metadata, examination years, geographic information, schools, source configuration, and limited operational logs.

The system must NOT be designed as a permanent mirror of the complete NECTA results database.

CORE SECURITY RULES
Never accept arbitrary URLs from users for scraping.

Never implement CAPTCHA bypassing.

Never bypass authentication or access controls.

Never circumvent rate limits or technical restrictions.

Never exploit vulnerabilities in external systems.

Never implement uncontrolled bulk scraping.

Validate all user input server-side.

Protect against SQL injection, XSS, CSRF where applicable, SSRF, abuse and unauthorized administration.

Use parameterized database queries.

Fail closed when retrieved information cannot be reliably validated.

DATA PRINCIPLE
Use data minimization.

Prefer:

User search
→ controlled retrieval
→ process
→ validate
→ display
→ discard or short-lived cache where explicitly justified.

Do not introduce permanent candidate-result storage without explicit architectural approval.

SOURCE PRINCIPLE
External result sources are treated as controlled dependencies.

Source-specific logic must be isolated in source adapters.

Do not hard-code source-specific scraping logic throughout controllers, views or database code.

DEVELOPMENT RULE
Implement one feature at a time.

For every requested feature:

Explain the implementation approach briefly.

Identify affected components.

Implement only the requested scope.

Preserve existing architecture.

Provide tests.

Identify security considerations.

Identify assumptions or unresolved issues.

CODE QUALITY
Use:

clear naming;

modular design;

single responsibility;

reusable services;

secure defaults;

meaningful error handling;

comments only where they explain non-obvious logic;

environment variables for secrets;

version-controlled migrations.

Do not introduce unnecessary dependencies.

IMPORTANT
If a requested implementation conflicts with the approved architecture, privacy requirements, security requirements, or project boundary, do not silently implement it.

Explain the conflict and propose a compliant alternative.

Current task:

[PASTE ONE SPECIFIC DEVELOPMENT TASK HERE]

5.22 Feature-Level Prompt Template
For actual coding, use smaller prompts.

FEATURE IMPLEMENTATION PROMPT
Feature
[FEATURE NAME]

Objective
[ONE CLEAR SENTENCE DESCRIBING WHAT THE FEATURE MUST DO]

Existing Architecture
[DESCRIBE THE RELEVANT EXISTING COMPONENTS]

Requirements
[Requirement]

[Requirement]

[Requirement]

Inputs
[List inputs]

Expected Output
[Describe expected output]

Constraints
Follow the approved NECTA Results Finder architecture.

Do not modify unrelated components.

Do not introduce arbitrary URL scraping.

Do not bypass external security mechanisms.

Do not introduce permanent candidate-result storage.

Validate all input.

Fail safely when information cannot be validated.

Security Requirements
[List feature-specific security requirements]

Testing Requirements
Create tests for:

valid input;

invalid input;

missing input;

expected success;

expected failure;

security abuse cases.

Deliverables
Provide:

Implementation.

Files changed.

Database changes, if any.

Tests.

Security considerations.

Any assumptions or unresolved issues.

Do not implement functionality outside this feature.

5.23 AI Debugging Prompt
When debugging, avoid telling the AI:

"Fix everything."

Instead:

DEBUGGING TASK
Problem
[DESCRIBE THE EXACT ERROR]

Expected Behavior
[WHAT SHOULD HAPPEN]

Actual Behavior
[WHAT CURRENTLY HAPPENS]

Error
[PASTE EXACT ERROR]

Relevant Files
[LIST FILES]

Recent Changes
[DESCRIBE WHAT CHANGED]

Task
Identify the most likely root cause before modifying code.

Then:

Explain the root cause.

Identify the affected component.

Propose the smallest appropriate fix.

Implement the fix.

Do not modify unrelated functionality.

Provide a regression test.

Check whether the fix introduces security or architectural problems.

5.24 AI Code Review Prompt
CODE REVIEW TASK — NECTA RESULTS FINDER
Review the supplied implementation against the approved project architecture.

Check specifically for:

Architecture
Separation of concerns

Correct component responsibility

Unnecessary coupling

Maintainability

Security
SQL injection

XSS

CSRF where applicable

SSRF

Authentication/authorization

Input validation

Rate limiting

Unsafe redirects

Sensitive information exposure

Retrieval Safety
Arbitrary URL handling

Uncontrolled scraping

Excessive requests

Retry loops

Missing timeouts

Unsafe redirects

Failure handling

Data Protection
Unnecessary result storage

Excessive logging

Sensitive information retention

Public indexing risks

Reliability
Incorrect parsing

Missing validation

Silent failures

Incorrect assumptions

Output
Classify findings as:

CRITICAL
HIGH
MEDIUM
LOW
INFO

For every finding provide:

Problem

Why it matters

Affected component

Recommended fix

Do not rewrite the entire application unless specifically requested.

5.25 Practical AI Development Cycle
The actual development process should look like this:

PROJECT SPECIFICATION
        │
        ▼
SELECT ONE FEATURE
        │
        ▼
WRITE FEATURE PROMPT
        │
        ▼
AI ANALYSIS
        │
        ▼
AI IMPLEMENTATION
        │
        ▼
RUN TESTS
        │
        ▼
SECURITY REVIEW
        │
        ▼
HUMAN REVIEW
        │
        ▼
GIT COMMIT
        │
        ▼
NEXT FEATURE
This is considerably safer than asking an AI:

"Build me a complete NECTA scraper."

The latter approach risks creating a technically functional but architecturally uncontrolled system.

5.26 Recommended First Coding Tasks
The actual implementation should begin in this order:

Sprint 1 — Foundation
Repository initialization.
Backend project initialization.
Environment configuration.
Database connection.
Database migrations.
Base application layout.
Git workflow.
Sprint 2 — Search Interface
Examination selector.
Year selector.
Index-number input.
Validation.
Basic result-state interface.
Sprint 3 — School Discovery
Region API/query.
District dependency.
School dependency.
School selection.
Search workflow.
Sprint 4 — Retrieval Architecture
Retrieval interface.
Source configuration.
Source resolver.
HTTP client abstraction.
Rate limiter.
Parser interface.
Result validator.
Sprint 5 — First Controlled Source Integration
Verify source accessibility and applicable restrictions.
Implement one source adapter.
Test retrieval.
Test parsing.
Test result validation.
Integrate with frontend.
Sprint 6 — Security & Reliability
SSRF protection.
Request limits.
Timeout handling.
Error handling.
Security tests.
Logging.
Sprint 7 — MVP Testing
Unit testing.
Integration testing.
End-to-end testing.
Mobile testing.
Performance testing.
User testing.
Sprint 8 — MVP Release
Production configuration.
Deployment.
Monitoring.
Final security review.
Documentation.
MVP evaluation.
5.27 Chapter Summary
Chapter Five establishes the practical implementation process for converting the approved design into the NECTA Results Finder MVP. Development will proceed incrementally, beginning with the application and database foundation before implementing the controlled retrieval engine.

AI-assisted development will be permitted as a productivity tool but will operate under explicit architectural, security, privacy, and legal constraints. Every AI-generated feature must be reviewed, tested, and integrated deliberately.

The most important implementation principle is:

Do not build the scraper first. Build the system around the scraper.

This ensures that the retrieval engine remains one controlled component of a professional software system rather than becoming the entire project.

The next SDLC chapter should be Chapter Six: Testing, Security and Quality Assurance, where we define the actual test strategy, test cases, security verification, retrieval accuracy testing, performance/load testing, usability testing, and MVP acceptance procedure.

wait

Sure 👍🏽. I’ll pause here.

We won’t continue to Chapter Six or implementation until you say continue.
