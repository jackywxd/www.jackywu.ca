---
title: "Hello World"
cover: "/logos/logo-1024.png"
category: "gatsby"
tags:
    - react
    - gatsby
    - aws
    - blog

date: "07/11/2017"
---
##Hello World!

Finally I start my blog! Not a simple blog but a blog with react, gatsby and the work flow is fully automated with github and AWS codepipeline, codebuild, the static html files are hosted in AWS S3.

The infrastrusture is created 
https://github.com/velomash/aws-git-backed-gatsby-static-site

![image of architecture]
(https://raw.githubusercontent.com/velomash/aws-git-backed-gatsby-static-site/master/architecture.png)

I reused the majarity of the codes from velomash, the only minor changes I made was related to DNS. The original CloudFormation template will create a Hostedzone with Route53 which I think it is not necessary. 