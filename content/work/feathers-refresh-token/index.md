---
template: work
title: feathers-refresh-token
slug: feathers-refresh-token
date: "2020-07"
description: "My first open source project"
category: open-source
link: https://github.com/jackywxd/feathers-refresh-token
---

> [NPM Package Link](https://www.npmjs.com/package/@jackywxd/feathers-refresh-token)

## Refresh tokens hooks for Feathers

Forked from [TheSinding/authentication-refresh-token](https://github.com/TheSinding/authentication-refresh-token)
There are three major differences of my implementation:

1. Implement refresh token via Feathers standalone service
2. The form of refresh token is actual JWT
3. Support all authentication strategies (local, oAuth)
4. Support multi-devices login

## Key features

Leveraging existing Feathers built-in authentication service and JWT support to implement refresh token functionalities via couple hooks:

1. issueRefreshToken - issuing refresh token after user authenticated successfully and save it via custom refresh-tokens service
2. refreshAccessToken - issuing new access token by making a POST request to /refresh-tokens endpoint along with user Id and a valid refresh token
3. revokeRefreshToken - revoke refresh token by making PATCH request to /refresh-tokens endpoint
4. logoutUser - remove the refresh token by making a DELETE request to /refresh-tokens endpoint
