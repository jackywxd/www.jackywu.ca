---
title: 'Pi-VPN: WiFi AP and VPN Gateway in your pocket'
cover: '/imgs/Pi-VPN.png'
category: 'tech'
tags:
  - Raspberry
  - VPN
  - Pi-VPN
  - wifi
  - AP
  - Linux

date: '2017-11-10'
---

# Pi-VPN: WiFi AP and VPN Gateway in your pocket

The reason I bought Pi Zero W is for one of my personal project: building a WiFi AP and VPN gateway combo device.

For historical reason, I have had my own VPN server for a long time. And as a long time Pi fans, I already built VPN in PI since the first version of Pi. Many people are using OpenVPN but what I am using is SoftEther (https://www.softether.org/), an Open-Source Free ​Cross-platform Multi-protocol VPN Program,
as an academic project from University of Tsukuba.

The whole concept of SoftEther is to virtualizes Ethernet by software-enumeration, or Ethernet virtualization. And the most cool feature of SoftEther is the Layer 2 Ethernet bridging, that allows me to connect a physical network to a virtual Ehternet hub in the remote VPN server throught SSL tunnel!

Pi Zero W is a little tiny device that builds in WiFi. That allows my to run hostaqd to make my Pi a WiFi AP. Meanwhile, it uses the same WiFi card to connect to the Internet and SoftEhter will bridge my local WiFi to remote VPN server throught SSL turnel. So everyone connected my WiFi is automatically protected by VPN! That's probablly the most easy way to use VPN as it is totally transparent to end user.

The overall architecture is shown below.
![Architecture](https://jackywu.ca/imgs/Pi-VPN.png)

Enough for now. I will have more details about my project in the future blogs.
