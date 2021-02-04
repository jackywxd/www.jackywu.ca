---
template: work
title: AllConncect VPN
slug: allconnect-vpn
date: "2020-01-01T22:12:03.284Z"
description: "Cloud VPN + Enterprise VPN Client"
category: VPN
link: https://getallconnect.com
---

> [AllConnect VPN Link](https://getallconnect.com)

Innovative Elastic VPN Cloud solution by combing the enterprise VPN Client and Cloud VPN backend.

## AnyConnect Client + Cloud VPN Server = AllConnect

### Features:

- AllConnect VPN is a distributed Cloud VPN platform built upon with latest tech stacks and various open-sources projects
- The innovative client-less and disposable VPN server design, PKI-based authentication bring the maximum security to normal people
- Control plane is a cloud-native system implementation with various AWS services, including Lambda, API Gateway, DynamoDB, SES and etc
- Data plane is based on OpenConnect server hosted in VPS and AnyConnect Client
- Subscription business model is implemented with Stripe Payments and Billings

## Tech Stack

Repo: yarn monorepo

### Frontend

- Static Site: Gatsby
- Host: AWS S3
- CDN: AWS CloudFront
- Language: Typescript
- Styling: Material UI
- Framework: React
- State management: Redux-saga

### Backend

- Language: Typescript
- Runtime: Node.js
- Deployment: serverless framework
- Domain: AWS Route 53
- Compute: AWS Lambda
- Network: AWS API Gateway
- User Management: AWS Cognito
- Storage: AWS S3
- Email: AWS SES
- Database: AWS DynamoDB
- Compute Node: AWS Lightsail and others VPS vendor
- User Authentication: FreeRadius

### DevOps

- Source Control: AWS CodeCommit
- CI/CD: AWS CodePipeline
- ELK: logz.io

