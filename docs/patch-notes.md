---
title: Patch notes
category: HUNT Cloud
description: Minor and major updates to our services.
---

# Patch notes

**This page contains major and minor updates to our services.**

[[toc]]

This page holds some of the descriptions on how we take care of HUNT Cloud's services. All with the aim of providing the best possible conditions for your scientific explorations.

## Patch note 2.9.1

*2023-08-21*

::: details Do science

<h3>Major changes</h3>

**Visual Studio Code added to HUNT Workbench**

Virtual Studio Code (VS Code) is now available to all [HUNT Workbench](/do-science/hunt-workbench/) users. The application is linked with your lab directory, and Jupyter and python extensions are available by default. [Contact us](/contact) in your Slack lab channel if your require additional extensions.

**Custom IaaS access links**

New access guides tailored for individual lab users are added for unmanaged IaaS and GPU machines. The new guide will ship with new machine orders.

<h3>Minor changes</h3>

**Extended Singularity guide**

We have added a guide on [how to run Singularity](/do-science/tools/technical/singularity/) in your lab environment using Conda. The guide covers: 

* Installation
* Common practices and commands
* Pull, Run Docker image
* Listing running containers
* Stop running container
* Finding your images
* Temporary file storage

**RStudio updated in HUNT Workbench**

RStudio is updated to version 2023.06.1 in HUNT Workbench.

**Updatad Jupyterhub in HUNT Workbench**

Jupyterhub4 is now running on all Workbench sessions.

**Lab Access link update**

We keep improving onboarding experience for new users.

* Users are now guided on how to setup VPN and TOTP (Time-based One-Time Password) in more convenient fasion with trackable progress of your onboarding.

**Extended X2Go guide**

We have updated the [X2Go guide](/do-science/tools/technical/x2go/) with screenshots and tried to clarify how you best can setup your lab session.


<h3>Upcoming features</h3>

* Singularity guide on Nextflow for scientific workflows.

:::




::: details Administer science


<h3>Minor changes</h3>

**Services specification**

Update to the [Services specification](/administer-science/services/specifications/) (2.9) where references to "security" is extended to "security and privacy" as a preparation for the upcoming ISO/IEC 27701-certification.

**Agreement updates**

We have updated the link to the service desk buttons at the bottom of all [service orders](/administer-science/agreements/downloads/).

<h3>Upcoming features</h3>

* Invoices are planned shipped in the first week of September.
* Community membership consent.
* We have been piloting a service to fill out PDF orders in your local browser. You can see an experimental version for our [Internal kista orders](/administer-science/service-desk/lab-orders/#internal-kista). 


:::




::: details Govern science

<h3>Major changes</h3>

We have started the implementation of [ISO/IEC 27701:2019](https://www.iso.org/standard/71670.html) for the planned certification audit with DNV later this year. This first step updates our policies and statement of applicability. 

**Updated Security and and privacy management policy**

We have included 'privacy' in our updated [Security and privacy management policy](/govern-science/policies/#security-and-privacy-management-policy) (v2.4). This document sets the direction for all our security and privacy work. 

**Updated Security and privacy policies**

Our new [Security and privacy policies](https://docs.hdc.ntnu.no/govern-science/policies/#security-and-privacy-policies) version (v4.4) includes 119 new privacy controls from ISO/IEC 27701:2019. The aim is to clarify control objectives aimed to protect information that we control or process on behalf of scientific institutions. 

**Updated Statement of applicability (SoA)**

[The new SoA](/govern-science/compliance/certificates/#statement-of-applicability-soa) includes 85 additional control objectives from ISO/IEC 27701:2019. New objectives are included as 'Planned, not implemented', and objectives that are merged with existing ISO/IEC 27002:2013 controls are adjusted from 'Fully implemented ' to 'Partly implemented' pending internal audits.

<h3>Upcoming features</h3>

* Planning of [Ting #10](/govern-science/tingweek/#tings) agenda and resolutions. [Contact us](/contact) if you have topics that you would like us to include. 
* Including justifications, comments and implementation status for new and merged privacy controls in SoA after on internal audits.
* General updates to our privacy practices related to the ISO/IEC 27701:2019 implementation.

:::


<!-- ================== -->


## Patch note 2.8.2

*2023-06-27*

Dear cloud community, 

Welcome to our first patch note!

We created this page to keep you informed about our activities and progress here at HUNT Cloud. In the below notes, you will read about what is new, what we are currently working on, known issues and more.

For the HUNT Cloud team  
*Jakub*


::: details Do science

<h3>Major changes</h3>

**Workbench guides for SSH reset**

We are introducing the ability for users to reset passphrase directly in Workbench.

* This method works for *new* and *existing* users. 
* Once you request SSH passphrase reset, head over to your Workbench to easily reset your passphrase in a familiar manner. 
* You can find further details in this [guide](/do-science/guides/configure-ssh-workbench/#ssh-passphrase-reset-in-workbench).


**Lab access link**

We are changing the way we approach onboarding of new users. This approach allows you to connect to our services using tailored-to-you copy-paste commands for your initial configuration.

* You can find Lab access link in your onboarding email, or request a new link in our Do science [service desk](/do-science/service-desk/#request-lab-access-reissue)


<h3>Minor changes</h3>

**Azcopy guide**

* We added a quick guide for users who want to transfer files from Azure Storage to their lab. [Click here](/do-science/tools/transfer/azcopy) for details.

<h3>Upcoming features</h3>

* NVMe storage - faster storage type for GPU and CPU intensive workloads.
* User paths - simplify ways to use our services.
* Simplified IaaS access - similar to Lab Access.


:::



::: details Administer science

<h3>Major changes</h3>

**Scientific access**

We are simplifying [Scientific access](/administer-science/scientific-access/) for new scientific centers and scientific groups and have updated the initial onboarding process: 

* [New section](/administer-science/scientific-access/) that describes the scientific onboarding.
* [New scientific access bundle](/administer-science/scientific-access/#order-scientific-access) that combines information needed to add your first Data space and Lab. 
* [FAQ section](/administer-science/scientific-access/faq/) dedicated to scientific access.

<h3>Minor changes</h3>

**Agreement updates**
 
We updated the agreements for [External kista import order](/administer-science/agreements/downloads/#external-kista-import-order) (v2.1) and [External kista export order](/administer-science/agreements/downloads/#external-kista-export-order) (v1.4): 

* Naming of "Internal lab user" included in separate header to improve differentiation from lab leader.

:::



::: details Govern science

<h3>Major changes</h3>

**Organizational access**

We are simplifying [Organizational access](/govern-science/organizational-access/) and have updated the initial onboarding process:

* [New section](/govern-science/organizational-access/) that describes the organizational onboarding.
* [New organizational agreement information form](/govern-science/organizational-access/#request-organizational-agreements) that combines information needed to generate your first data processor agreement and services center agreements. 
* [FAQ section](/govern-science/organizational-access/faq/) dedicated to organizational access.

**Lagtun resolutions**

The new [resolutions from Tingweek #9](/govern-science/tingweek/resolutions/) are adopted:

* Enable reduction of inactive compute resources
* Clarify costs for migration to new systems
* Explore data provider initiated data deliveries 


<h3>Minor changes</h3>

**New Tingweek dates**

[Dates for upcoming Tingweeks](/govern-science/tingweek/dates/): Tingweek #10 (2023-10) and Tingweek #11 (2024-02) are published in the Tingweek section.

:::


<!-- ================== -->


## About


#### Feedback

Found an issue, or want to submit a feedback? Send us a general request form in [Service Desk](/do-science/service-desk/#general-service-request).

#### Schedule

There are no fixed publication schedule for the next Patch note. The intention is to publish a new version whenever we think we have interesting updates to communicate. New notes gets communicated to our cloud community in Slack.


#### Numbering

We use a three digit numbering system on our Patch notes, for example version `2.8.3`. 

| Number | Description | 
| ---- | ---- | 
| 2 | Major services specification update | 
| 8 | Minor services specification update |
| 3 | Patch notes number | 

::: details Click here for details on the numbering

.

#### Major services agreement update 

The first number indicates which major [Services specification](/administer-science/services/specifications/) version the Patch notes are attached to. 

The number references the first digit of the current Services specification version. For example, Services specification version `2.8` will be listed as `2`. 

A major services agreement update indicates that services are changes in a way that need major agreement updates. Such updates are forwarded to all contractual partners on email, and major changes on existing services take effect 90 days after the announcement.

#### Minor services agreement update

The second number indicates which minor [Services specification](/administer-science/services/specifications/) version the Patch note are attached to.

The number references the second digit of the current Services specification version. For example, Services specification version `2.8` will be listed as `8`. 

A minor services agreement update indicate a change in the agreement text, such as clarifications, syntax updates and similar. These changes takes effect when they are communicated on these docs pages, and are not forwarded to contractual partners on email.

#### Patch notes number

The third number indicates which patch version the current note is attached to. Thus, a patch note is always linked to a specific Service specification version.

**Major updates**

Major updates indicates what we think are a substantial update in your user experience of our services. 
Such improvements may not always need updates in legal documents.

**Minor updates**

Minor Patch notes indicates what we think are small (but often important) user experience updates of our services, for example updates of guides, agreements or other good-to-know-about things.

**Upcoming features**

These are features that we have planned to move forward by the time of the notes publication, although they are not always the features that we end up prioritizing over the next period. 

:::
