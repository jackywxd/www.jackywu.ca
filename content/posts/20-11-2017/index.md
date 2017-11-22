---
title: "Twilio SIP Trunking 408 Issue"
cover: "/imgs/twilio-408.png"
category: "tech"
tags:
    - Freeswitch
    - Twilio
    - SIP Trunking
    - 408 error 

date: "21/11/2017"
---

# Twilio SIP Trunking 408 Issue

Today when I worked on a new Freeswitch server and tried to configure the SIP truncking with Twilio, I found out that I can recieved call from Twilio but I cannot make call throught Twilio gateway.

In Freeswitch log file it simply said:
```
Originate Failed.  Cause: RECOVERY_ON_TIMER_EXPIRE
```

Then I turn on the SIP trace using fs_cli: 

```
fs_cli
sofia global siptrace on
```

And what I found in the SIP trace is that Twilio gateway for some reason return 408 Request Timeout. I ended up spenting whole day tried to resolve this issue without any luck. I guess today is just not my day. That's just part of life... 

![twilio 408 error](https://jackywu.ca/imgs/twilio-408.png)