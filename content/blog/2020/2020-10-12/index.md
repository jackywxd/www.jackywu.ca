---
template: post
title: "Turn on systemd support"
slug: turn-on-systemd-support-for-ocserv
date: "2020-10-12"
category: ocserv
tags: ["ocserv", "systemd", "libsystemd-dev", "ubuntu" ]
---



```bash
configure:
Summary of build options:
  version:              1.1.1
  Host type:            x86_64-pc-linux-gnu
  Install prefix:       /usr/local
  Compiler:             gcc
  CFlags:               -g -O2 -Wall -Wno-strict-aliasing -Wextra -Wno-unused-parameter -Wno-sign-compare -Wno-missing-field-initializers -Wno-implicit-fallthrough -Wno-stringop-truncation
  CWrap testing:        no
  CWrap PAM testing:    no
  CWrap NSS testing:    no

  PAM auth backend:     yes
  Radius auth backend:  radcli
  GSSAPI auth backend:  no
  OIDC Auth backend:    no
  Anyconnect compat:    yes
  TCP wrappers:         yes
  namespaces:           yes
  systemd:              no
  (socket activation)
  worker isolation:     seccomp
  Compression:          yes
  LZ4 compression:      yes
  readline:             yes
  libnl3:               yes
  liboath:              no
  libgeoip:             no
  libmaxminddb:         no
  glibc (sha2crypt):    yes
  local talloc:         yes
  local protobuf-c:     no
  local PCL library:    no
  local http-parser:    no
  seccomp trap:		no
  capture latency stats no
```

