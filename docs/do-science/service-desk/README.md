---
title: Service desk
category: Service desk
permalink: /do-science/service-desk/
description: This page list predefined HUNT Cloud service orders for active lab users.
sidebarDepth: 1
---

# Service desk for lab users

**This page list predefined service orders that you can request as an active lab user in HUNT Cloud. To place your order, click the blue button and send us a pre-filled email with required information.**

::: tip Save time

Speed up your delivery by (1) send the request from your **organizational email**; and (2) send **one request per email**. 

:::

You can request the following service orders as a lab user in HUNT Cloud:

[[toc]]

Try our service desk in the [administer science](/administer-science/service-desk) section aimed at lab leaders, lab coordinators and data spaces if you can't find what you are looking for.

Send us a [general service request](#general-service-request) if you can not find what you are looking for on this page.


<Product title="Order Import Kista" subtitle="Import data to HUNT Cloud" subtitle-icon="" :description="``" :details="`Showing extra details...`" image="https://cdn.vuetifyjs.com/images/cards/cooking.png" />

<Product title="Order Export Kista" subtitle="Export data from HUNT Cloud" subtitle-icon="" :description="``" :details="``" image="https://cdn.vuetifyjs.com/images/cards/cooking.png" />


## Lab access

::: warning New users

The service orders below are aimed at active lab users. Lab access for new users are ordered by lab leaders or lab coordinators from our [administer science service desk](/administer-science/service-desk/lab-orders/#add-a-new-lab-user).

:::


### HUNT Workbench access

[HUNT Workbench](/do-science/hunt-workbench/) provides smooth access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R, Stata notebook or MATLAB.

<SDButton form="request_workbench_access" />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** HUNT Workbench access key and certificate.
* **Requirement:** (1) Active Signal app on phone. (2) Active license from your host organization for MATLAB and Stata for these to be installed.
* **Next step:** [Prepare your key transfer](/do-science/guides/hunt-workbench-request/).
* **Cost:** Included in the lab subscription.


### HUNT Workbench reissue

Request a new certificate if you have an existing HUNT Workbench and your previous [certificate expired](/do-science/hunt-workbench/troubleshooting/#_403-forbidden-expired-client-certificate).

<SDButton form="request_workbench_reissue" />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** Workbench certificate.
* **Requirement:** (1) Active Signal app on phone.
* **Next step:** [Guide on Workbench reissue](/do-science/guides/hunt-workbench-reissue-certificate/).
* **Cost:** Included in the lab subscription.


### SSH passphrase reset  

Order a [SSH passphrase reset](/do-science/guides/configure-ssh/) that you may need to access your workbench and install software on your home machine.


<SDButton form="request_ssh_pass_reset" />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** Temporary passphrase on Signal.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the passphrase reset](/do-science/guides/configure-ssh/).
* **Cost:** Included in the lab subscription.

### SSH configuration

Click button below if you need your `ssh_config.txt` file to be resent to you (accidental loss, new computer, etc.)

<SDButton form="request_ssh_config" />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** Temporary passphrase on Signal.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the passphrase reset](/do-science/guides/configure-ssh/).
* **Cost:** Included in the lab subscription.

### Deactivate lab access

Head over to the [lab orders page](/administer-science/service-desk/lab-orders#deactivate-lab-user) to deactivate your lab access.

### Request Lab Access reissue

Lost lab access link from your onboarding email ? Here you can order a reissue.

<SDButton form="request_lab_access_link" />

* **Who can order:**</b> Lab user.
* **Required information:** Your username and lab name.
* **Expected response time:** Days.
* **Cost:** Included in the lab subscription.

## System access

### VPN access list

We allow connection from known IP addresses only. This means that your VPN connection may be blocked if you connect from a (for us) unknown network outside Norway. Request access from networks outside Norway can be requested here.

<SDButton form="request_vpn_link" />

* **Who can order:** All active lab users.
* **Required information**: [Your IP4 address](http://ip4.me), location and purpose (see below).
* **Expected response time:** One day.
* **Expected delivery:** Opening communicated on email.
* **Cost:** Included in the lab subscription.

::: details About the required information

* **access_ip**. This is the external IP from your local computer that is visible for us when you connect. [Click here](http://ip4.me) to locate your address. Note that IPs that starts with "10.", "192." and "172." are internal addresses that will not work.
* **access_duration**. State if you request a "permanent" or "temporary" access from the address. Permanent openings will follow your user duration. If you need temporary access during travels or similar, state the desired duration of the opening.
* **access_country**. State from which country you will be connecting.

:::

### VPN certificate reset  

You may need to reset your VPN certificate when you get a new local computer or if you need a new VPN passphrase.

<SDButton form="request_vpn_reset" />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** VPN passphrase on Signal, link to VPN certificate on email.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the VPN reset](/do-science/guides/vpn-certificate-reset/).
* **Cost:** Included in the lab subscription.



### Google authenticator key reset  

You need the [Google Authenticator key](/do-science/guides/google-authenticator-reset/) to access the HUNT Cloud VPN. Click the button below to request a new key (f.e. when you change your phone).

<SDButton form="request_google_auth" />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** New key on Signal.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the key reset](/do-science/guides/google-authenticator-reset/).
* **Cost:** Included in the lab subscription.

## Applications

### MobaXterm configuration file

You may simplify your MobaXterm configuration using a predefined file with credentials and configuration during setup.

<SDButton form="request_mobaxterm_file" />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** File as email attachment.
* **Requirement:** Active SSH connection.
* **Next step:** [MobaXterm configuration guide](/do-science/tools/technical/mobaxterm/).
* **Cost:** Included in the lab subscription.


## General service request

Don't find what you are looking for on the predefined orders above? Don't you worry. Send us a general service request. 

<SDButton form="general_lab_user_request" />

* **Who can order:** All active lab users.
* **Expected response time:** Days.

::: warning General responses are slower

Note that a general lab user request has slower response time than a predefined order. If you don't find what you are looking for here, it might be good to invest some time investigating options in our [administer science](/administer-science/service-desk/) and [govern science](/govern-science/service-desk/) service desk.

:::

::: tip Not an active user? 

[Contact us](/contact) on email for general questions and information on our scientific services and activities.

:::



## FAQ

#### I have not heard back within the expected delivery time, now what? 

::: details Read more

Poke us on [email](/contact) or in your lab channel in Slack if you have not heard back within the expected delivery time of your request. It is good to ensure that we have registered the request, and if we are occupied we will aim to give you a new estimate for delivery.

:::

#### Why do I need to ship one email per request? 

::: details Read more

We use your pre-filled email to start predefined workflows on our side. The automation do not work if several requests are included per email. Therefore, you will be asked to reship requests that include more than one order.

:::

#### Why do I need to ship the email from my organizational email? 

::: details Read more

We use your organizational email for identification and to ensure that you are authorized to make the order. Therefore, you will be asked to reship requests from private emails that is not verified by your organization. 

:::


