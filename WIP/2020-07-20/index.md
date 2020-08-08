---
template: post
title: "Refresh-token for Feathers"
slug: feathers-refresh-token
date: "2020-07-20"
category: feathers
tags: ["feathers", "refresh-token", "jwt", "access token"]
---

Recently I need to implement an API backend for a new project. In addition to REST API, it also needs to support user registration, login with Apple ID, Facebook or Google.

https://github.com/jackywxd/feathers-refresh-token

### Key features

Leveraging existing Feathers built-in authentication service and JWT support to implement refresh token functionalities via couple hooks:

issueRefreshToken - issuing refresh token after user authenticated successfully and save it via custom refresh-tokens service
refreshAccessToken - issuing new access token by making a POST request to /refresh-tokens endpoint along with user Id and a valid refresh token
logoutUser - remove the refresh token by making a DELETE request to /refresh-tokens endpoint
