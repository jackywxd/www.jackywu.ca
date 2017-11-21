---
title: "Enable multiple DHCP range for multiple NIC with DNSMASQ"
cover: "/imgs/dnsmasq.png"
category: "tech"
tags:
    - Linux
    - dnsmasq
    - DHCP

date: "08/11/2017"
---

# Enable multiple DHCP range for multiple NIC with DNSMASQ
Rectenly I need to allocate IP to clients via multiple NICs using dnsmasq in my home server.

Originally I just started multiple dnsmasq daemons with different startup switches, for example:
```
dnsmasq --interface=tap_vpn --except-interface=lo --bind-interfaces --dhcp-range=192.168.250.10,192.168.250.100,12h --conf-file=/dev/null
```

But I just found out that this can be done pretty simple in the same dnsmasq.conf file.

```
interface=wlan1      # Use interface wlan0
interface=wlan0
#listen-address=172.24.1.1 # Explicitly specify the address to listen on
bind-interfaces      # Bind to the interface to make sure we aren't sending things elsewhere
server=8.8.8.8       # Forward DNS requests to Google DNS
domain-needed        # Don't forward short names
bogus-priv           # Never forward addresses in the non-routed address spaces.
dhcp-range=wlan0,172.24.1.50,172.24.1.150,12h # Assign IP addresses between 172.24.1.50 and 172.24.1.150 with a 12 hour lease time
dhcp-range=wlan1,172.24.2.50,172.24.2.150,12h # Assign IP addresses between 172.24.1.50 and 172.24.1.150 with a 12 hour lease time
```