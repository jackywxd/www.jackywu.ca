---
title: "Pi Zero W Headless setup"
cover: "/imgs/pi-zero-w.jpg"
category: "tech"
tags:
    - Raspberry
    - pi zero w
    - ssh
    - wifi

date: "07/11/2017"
---

# SSH into Raspberry Pi Zero W

Today I recevied a Pi Zero W which I ordered last week from adafruit. Sweet! So I start playing with it. While I am a long time Raspberry pi player, I thought it should be pretty straight forward. But it ends up taking me few hours just to figure out how to remote SSH into it.

Since this is a headless setup, I need to load the OS, enable Wifi and turn on SSH to allow me to remote ssh into it. Just little google I found a very good document showing the detail steps.
http://desertbot.io/setup-pi-zero-w-headless-wifi/

## Enable ssh

For security reasons, ssh is no longer enabled by default. To enable it, run this command:
```
touch /Volumes/boot/ssh
```

### Add Network Info
Create a new empty file that will hold network info:

```
touch /Volumes/boot/wpa_supplicant.conf
```

Edit the file that you just created and paste this into it (adjusting for the name of your country code, network name and network password):

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="NETWORK-NAME"
    psk="NETWORK-PASSWORD"
}
```

Remind me to login to the other Linux via VirtualBox to edit the sshd config files.
https://slippytrumpet.io/posts/raspberry-pi-zero-w-setup/


```
XUdeMacBook-Pro:aws-git-backed-gatsby-static-site xudongwu$ ssh pi@192.168.31.132
Connection closed by 192.168.31.132 port 22
```


```
XUdeMacBook-Pro:aws-git-backed-gatsby-static-site xudongwu$ nmap 192.168.31.132

Starting Nmap 7.60 ( https://nmap.org ) at 2017-11-07 17:06 PST
Nmap scan report for 192.168.31.132
Host is up (0.048s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE
22/tcp open  ssh

Nmap done: 1 IP address (1 host up) scanned in 8.03 seconds
```


```
XUdeMacBook-Pro:~ xudongwu$ ssh -vv pi@192.168.31.132
OpenSSH_7.5p1, LibreSSL 2.5.4
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 52: Applying options for *
debug2: resolving "192.168.31.132" port 22
debug2: ssh_connect_direct: needpriv 0
debug1: Connecting to 192.168.31.132 [192.168.31.132] port 22.
debug1: Connection established.
debug1: identity file /Users/xudongwu/.ssh/id_rsa type 1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/xudongwu/.ssh/id_rsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/xudongwu/.ssh/id_dsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/xudongwu/.ssh/id_dsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/xudongwu/.ssh/id_ecdsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/xudongwu/.ssh/id_ecdsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/xudongwu/.ssh/id_ed25519 type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/xudongwu/.ssh/id_ed25519-cert type -1
debug1: Enabling compatibility mode for protocol 2.0
debug1: Local version string SSH-2.0-OpenSSH_7.5
debug1: Remote protocol version 2.0, remote software version OpenSSH_7.4p1 Raspbian-10+deb9u1
debug1: match: OpenSSH_7.4p1 Raspbian-10+deb9u1 pat OpenSSH* compat 0x04000000
debug2: fd 3 setting O_NONBLOCK
debug1: Authenticating to 192.168.31.132:22 as 'pi'
debug1: SSH2_MSG_KEXINIT sent
Connection reset by 192.168.31.132 port 22
```

Add below code to rc.local located in /etc folder.
```

#/usr/sbin/dpkg-reconfigure openssh-server

exit 0
```