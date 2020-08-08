---
title: How to build Subscription business model on top of Apple Subscription
cover: "https://docs-assets.developer.apple.com/published/dcee541a97/65f6ff4c-89cf-4c0a-8871-e14b27113ace.png"
category: "programming"
tags:
  - Apple Receipt
  - In-App Purchase Receipt

date: "2019-11-22"
---

# Validate apple receipt vs INIT_BUY:

## Validate apple receipt AppleResponse:

```json
 "appleResponse": {
        "status": 0,
        "environment": "Production",
        "receipt": {
          "receipt_type": "Production",
          "adam_id": 1375015129,
          "app_item_id": 1375015129,
          "bundle_id": "com.freeramble.smsautosender",
          "application_version": "196",
          "download_id": 34060331106405,
          "version_external_identifier": 833309929,
          "receipt_creation_date": "2019-11-24 17:42:50 Etc/GMT",
          "receipt_creation_date_ms": "1574617370000",
          "receipt_creation_date_pst": "2019-11-24 09:42:50 America/Los_Angeles",
          "request_date": "2019-11-24 17:42:51 Etc/GMT",
          "request_date_ms": "1574617371978",
          "request_date_pst": "2019-11-24 09:42:51 America/Los_Angeles",
          "original_purchase_date": "2019-10-21 03:50:52 Etc/GMT",
          "original_purchase_date_ms": "1571629852000",
          "original_purchase_date_pst": "2019-10-20 20:50:52 America/Los_Angeles",
          "original_application_version": "192",
          "in_app": [
            {
              "quantity": "1",
              "product_id": "com.freeramble.smsautosender.6",
              "transaction_id": "140000650438622",
              "original_transaction_id": "140000650438622",
              "purchase_date": "2019-11-24 17:42:49 Etc/GMT",
              "purchase_date_ms": "1574617369000",
              "purchase_date_pst": "2019-11-24 09:42:49 America/Los_Angeles",
              "original_purchase_date": "2019-11-24 17:42:50 Etc/GMT",
              "original_purchase_date_ms": "1574617370000",
              "original_purchase_date_pst": "2019-11-24 09:42:50 America/Los_Angeles",
              "expires_date": "2019-12-24 17:42:49 Etc/GMT",
              "expires_date_ms": "1577209369000",
              "expires_date_pst": "2019-12-24 09:42:49 America/Los_Angeles",
              "web_order_line_item_id": "140000221703974",
              "is_trial_period": "false",
              "is_in_intro_offer_period": "false"
            }
          ]
        },
        "latest_receipt_info": [
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "140000650438622",
            "original_transaction_id": "140000650438622",
            "purchase_date": "2019-11-24 17:42:49 Etc/GMT",
            "purchase_date_ms": "1574617369000",
            "purchase_date_pst": "2019-11-24 09:42:49 America/Los_Angeles",
            "original_purchase_date": "2019-11-24 17:42:50 Etc/GMT",
            "original_purchase_date_ms": "1574617370000",
            "original_purchase_date_pst": "2019-11-24 09:42:50 America/Los_Angeles",
            "expires_date": "2019-12-24 17:42:49 Etc/GMT",
            "expires_date_ms": "1577209369000",
            "expires_date_pst": "2019-12-24 09:42:49 America/Los_Angeles",
            "web_order_line_item_id": "140000221703974",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          }
        ],
        "latest_receipt": "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",
        "pending_renewal_info": [
          {
            "auto_renew_product_id": "com.freeramble.smsautosender.6",
            "original_transaction_id": "140000650438622",
            "product_id": "com.freeramble.smsautosender.6",
            "auto_renew_status": "1"
          }
        ],
        "sandbox": false,
        "service": "apple"
      },
```

## Apple callback INIT_BUY AppleResponse:

Applecallback body:

```json
 "body": {
        "latest_receipt": "ewoJInNpZ25hdHVyZSIgPSAiQXp4ZDlIUWJIS2VPK1BVUUV4bUxPdFdVM1BxdWcwZnhZSTdveHRQZllLMzNkU1c3TG1FMm9JSm5uVFVoVnhEenZiNmt5ZG1DL0x2K0JyWkoyWTFWTTQyVW1CQ0FvUlhzbWdCQWxaZ1NaOW5pSnplRXhKN3lLdGFBZ0FmTVZ0NDNjb0g0Z2RnbTFYTGVDRFBtRVgzZ0tVQUNnbll0a0ZFc0ZjRXpLbU5XRWNvd0RLckZocHNwL0o3TUZHTDBjZlgvNDVPUk5VNm40WFB3YkhadVNMeCtNQWJ2SUtIdTFaSnFvNm9HT3I1TC9IeC9UaXVCb1o1bFhocjJXY0ZROVhNMGZIcFNhZzBycXMxNEl5R1lIN1hZMWZnMFpSMVVyLzRyc0txWCt0NzQra2dGTWZTcjRXMzVuNzNmRXMzN3A2d3dyRnErMThvZUE2TTJFNDkyUFRtWE1XOEFBQVdBTUlJRmZEQ0NCR1NnQXdJQkFnSUlEdXRYaCtlZUNZMHdEUVlKS29aSWh2Y05BUUVGQlFBd2daWXhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFLREFwQmNIQnNaU0JKYm1NdU1Td3dLZ1lEVlFRTERDTkJjSEJzWlNCWGIzSnNaSGRwWkdVZ1JHVjJaV3h2Y0dWeUlGSmxiR0YwYVc5dWN6RkVNRUlHQTFVRUF3dzdRWEJ3YkdVZ1YyOXliR1IzYVdSbElFUmxkbVZzYjNCbGNpQlNaV3hoZEdsdmJuTWdRMlZ5ZEdsbWFXTmhkR2x2YmlCQmRYUm9iM0pwZEhrd0hoY05NVFV4TVRFek1ESXhOVEE1V2hjTk1qTXdNakEzTWpFME9EUTNXakNCaVRFM01EVUdBMVVFQXd3dVRXRmpJRUZ3Y0NCVGRHOXlaU0JoYm1RZ2FWUjFibVZ6SUZOMGIzSmxJRkpsWTJWcGNIUWdVMmxuYm1sdVp6RXNNQ29HQTFVRUN3d2pRWEJ3YkdVZ1YyOXliR1IzYVdSbElFUmxkbVZzYjNCbGNpQlNaV3hoZEdsdmJuTXhFekFSQmdOVkJBb01Da0Z3Y0d4bElFbHVZeTR4Q3pBSkJnTlZCQVlUQWxWVE1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBcGMrQi9TV2lnVnZXaCswajJqTWNqdUlqd0tYRUpzczl4cC9zU2cxVmh2K2tBdGVYeWpsVWJYMS9zbFFZbmNRc1VuR09aSHVDem9tNlNkWUk1YlNJY2M4L1cwWXV4c1FkdUFPcFdLSUVQaUY0MWR1MzBJNFNqWU5NV3lwb041UEM4cjBleE5LaERFcFlVcXNTNCszZEg1Z1ZrRFV0d3N3U3lvMUlnZmRZZUZScjZJd3hOaDlLQmd4SFZQTTNrTGl5a29sOVg2U0ZTdUhBbk9DNnBMdUNsMlAwSzVQQi9UNXZ5c0gxUEttUFVockFKUXAyRHQ3K21mNy93bXYxVzE2c2MxRkpDRmFKekVPUXpJNkJBdENnbDdaY3NhRnBhWWVRRUdnbUpqbTRIUkJ6c0FwZHhYUFEzM1k3MkMzWmlCN2o3QWZQNG83UTAvb21WWUh2NGdOSkl3SURBUUFCbzRJQjF6Q0NBZE13UHdZSUt3WUJCUVVIQVFFRU16QXhNQzhHQ0NzR0FRVUZCekFCaGlOb2RIUndPaTh2YjJOemNDNWhjSEJzWlM1amIyMHZiMk56Y0RBekxYZDNaSEl3TkRBZEJnTlZIUTRFRmdRVWthU2MvTVIydDUrZ2l2Uk45WTgyWGUwckJJVXdEQVlEVlIwVEFRSC9CQUl3QURBZkJnTlZIU01FR0RBV2dCU0lKeGNKcWJZWVlJdnM2N3IyUjFuRlVsU2p0ekNDQVI0R0ExVWRJQVNDQVJVd2dnRVJNSUlCRFFZS0tvWklodmRqWkFVR0FUQ0IvakNCd3dZSUt3WUJCUVVIQWdJd2diWU1nYk5TWld4cFlXNWpaU0J2YmlCMGFHbHpJR05sY25ScFptbGpZWFJsSUdKNUlHRnVlU0J3WVhKMGVTQmhjM04xYldWeklHRmpZMlZ3ZEdGdVkyVWdiMllnZEdobElIUm9aVzRnWVhCd2JHbGpZV0pzWlNCemRHRnVaR0Z5WkNCMFpYSnRjeUJoYm1RZ1kyOXVaR2wwYVc5dWN5QnZaaUIxYzJVc0lHTmxjblJwWm1sallYUmxJSEJ2YkdsamVTQmhibVFnWTJWeWRHbG1hV05oZEdsdmJpQndjbUZqZEdsalpTQnpkR0YwWlcxbGJuUnpMakEyQmdnckJnRUZCUWNDQVJZcWFIUjBjRG92TDNkM2R5NWhjSEJzWlM1amIyMHZZMlZ5ZEdsbWFXTmhkR1ZoZFhSb2IzSnBkSGt2TUE0R0ExVWREd0VCL3dRRUF3SUhnREFRQmdvcWhraUc5Mk5rQmdzQkJBSUZBREFOQmdrcWhraUc5dzBCQVFVRkFBT0NBUUVBRGFZYjB5NDk0MXNyQjI1Q2xtelQ2SXhETUlKZjRGelJqYjY5RDcwYS9DV1MyNHlGdzRCWjMrUGkxeTRGRkt3TjI3YTQvdncxTG56THJSZHJqbjhmNUhlNXNXZVZ0Qk5lcGhtR2R2aGFJSlhuWTR3UGMvem83Y1lmcnBuNFpVaGNvT0FvT3NBUU55MjVvQVE1SDNPNXlBWDk4dDUvR2lvcWJpc0IvS0FnWE5ucmZTZW1NL2oxbU9DK1JOdXhUR2Y4YmdwUHllSUdxTktYODZlT2ExR2lXb1IxWmRFV0JHTGp3Vi8xQ0tuUGFObVNBTW5CakxQNGpRQmt1bGhnd0h5dmozWEthYmxiS3RZZGFHNllRdlZNcHpjWm04dzdISG9aUS9PamJiOUlZQVlNTnBJcjdONFl0UkhhTFNQUWp2eWdhWndYRzU2QWV6bEhSVEJoTDhjVHFBPT0iOwoJInB1cmNoYXNlLWluZm8iID0gImV3b0pJbTl5YVdkcGJtRnNMWEIxY21Ob1lYTmxMV1JoZEdVdGNITjBJaUE5SUNJeU1ERTVMVEV4TFRJMElEQTVPalF5T2pVd0lFRnRaWEpwWTJFdlRHOXpYMEZ1WjJWc1pYTWlPd29KSW5GMVlXNTBhWFI1SWlBOUlDSXhJanNLQ1NKemRXSnpZM0pwY0hScGIyNHRaM0p2ZFhBdGFXUmxiblJwWm1sbGNpSWdQU0FpTWpBME9UY3pOaklpT3dvSkluVnVhWEYxWlMxMlpXNWtiM0l0YVdSbGJuUnBabWxsY2lJZ1BTQWlOVU5ETjBSR05FTXROVEZDUVMwMFF6VXpMVUl3T1RJdE56aEZSa0V3TVVVeVJrWXdJanNLQ1NKdmNtbG5hVzVoYkMxd2RYSmphR0Z6WlMxa1lYUmxMVzF6SWlBOUlDSXhOVGMwTmpFM016Y3dNREF3SWpzS0NTSmxlSEJwY21WekxXUmhkR1V0Wm05eWJXRjBkR1ZrSWlBOUlDSXlNREU1TFRFeUxUSTBJREUzT2pReU9qUTVJRVYwWXk5SFRWUWlPd29KSW1sekxXbHVMV2x1ZEhKdkxXOW1abVZ5TFhCbGNtbHZaQ0lnUFNBaVptRnNjMlVpT3dvSkluQjFjbU5vWVhObExXUmhkR1V0YlhNaUlEMGdJakUxTnpRMk1UY3pOamt3TURBaU93b0pJbVY0Y0dseVpYTXRaR0YwWlMxbWIzSnRZWFIwWldRdGNITjBJaUE5SUNJeU1ERTVMVEV5TFRJMElEQTVPalF5T2pRNUlFRnRaWEpwWTJFdlRHOXpYMEZ1WjJWc1pYTWlPd29KSW1sekxYUnlhV0ZzTFhCbGNtbHZaQ0lnUFNBaVptRnNjMlVpT3dvSkltbDBaVzB0YVdRaUlEMGdJakUwTkRreE1UYzVOaklpT3dvSkluVnVhWEYxWlMxcFpHVnVkR2xtYVdWeUlpQTlJQ0l6TjJFM01XRmpaR0U0TWpaaFlXWTROR1ZsTlRVek1qRm1Nemd3T0RNMU5UTXlNVE5pTWpRMklqc0tDU0p2Y21sbmFXNWhiQzEwY21GdWMyRmpkR2x2YmkxcFpDSWdQU0FpTVRRd01EQXdOalV3TkRNNE5qSXlJanNLQ1NKbGVIQnBjbVZ6TFdSaGRHVWlJRDBnSWpFMU56Y3lNRGt6Tmprd01EQWlPd29KSW1Gd2NDMXBkR1Z0TFdsa0lpQTlJQ0l4TXpjMU1ERTFNVEk1SWpzS0NTSjBjbUZ1YzJGamRHbHZiaTFwWkNJZ1BTQWlNVFF3TURBd05qVXdORE00TmpJeUlqc0tDU0ppZG5KeklpQTlJQ0l4T1RZaU93b0pJbmRsWWkxdmNtUmxjaTFzYVc1bExXbDBaVzB0YVdRaUlEMGdJakUwTURBd01ESXlNVGN3TXprM05DSTdDZ2tpZG1WeWMybHZiaTFsZUhSbGNtNWhiQzFwWkdWdWRHbG1hV1Z5SWlBOUlDSTRNek16TURrNU1qa2lPd29KSW1KcFpDSWdQU0FpWTI5dExtWnlaV1Z5WVcxaWJHVXVjMjF6WVhWMGIzTmxibVJsY2lJN0Nna2ljSEp2WkhWamRDMXBaQ0lnUFNBaVkyOXRMbVp5WldWeVlXMWliR1V1YzIxellYVjBiM05sYm1SbGNpNDJJanNLQ1NKd2RYSmphR0Z6WlMxa1lYUmxJaUE5SUNJeU1ERTVMVEV4TFRJMElERTNPalF5T2pRNUlFVjBZeTlIVFZRaU93b0pJbkIxY21Ob1lYTmxMV1JoZEdVdGNITjBJaUE5SUNJeU1ERTVMVEV4TFRJMElEQTVPalF5T2pRNUlFRnRaWEpwWTJFdlRHOXpYMEZ1WjJWc1pYTWlPd29KSW05eWFXZHBibUZzTFhCMWNtTm9ZWE5sTFdSaGRHVWlJRDBnSWpJd01Ua3RNVEV0TWpRZ01UYzZOREk2TlRBZ1JYUmpMMGROVkNJN0NuMD0iOwoJInBvZCIgPSAiMTQiOwoJInNpZ25pbmctc3RhdHVzIiA9ICIwIjsKfQ==",
        "latest_receipt_info": {
          "original_purchase_date_pst": "2019-11-24 09:42:50 America/Los_Angeles",
          "quantity": "1",
          "subscription_group_identifier": "20497362",
          "unique_vendor_identifier": "5CC7DF4C-51BA-4C53-B092-78EFA01E2FF0",
          "original_purchase_date_ms": "1574617370000",
          "expires_date_formatted": "2019-12-24 17:42:49 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1574617369000",
          "expires_date_formatted_pst": "2019-12-24 09:42:49 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1449117962",
          "unique_identifier": "37a71acda826aaf84ee55321f38083553213b246",
          "original_transaction_id": "140000650438622",
          "expires_date": "1577209369000",
          "app_item_id": "1375015129",
          "transaction_id": "140000650438622",
          "bvrs": "196",
          "web_order_line_item_id": "140000221703974",
          "version_external_identifier": "833309929",
          "bid": "com.freeramble.smsautosender",
          "product_id": "com.freeramble.smsautosender.6",
          "purchase_date": "2019-11-24 17:42:49 Etc/GMT",
          "purchase_date_pst": "2019-11-24 09:42:49 America/Los_Angeles",
          "original_purchase_date": "2019-11-24 17:42:50 Etc/GMT"
        },
        "environment": "PROD",
        "auto_renew_status": "true",
        "unified_receipt": {
          "latest_receipt_info": [
            {
              "product_id": "com.freeramble.smsautosender.6",
              "purchase_date": "2019-11-24 17:42:49 Etc/GMT",
              "purchase_date_ms": "1574617369000",
              "original_purchase_date_ms": "1574617370000",
              "transaction_id": "140000650438622",
              "original_transaction_id": "140000650438622",
              "expires_date_pst": "2019-12-24 09:42:49 America/Los_Angeles",
              "expires_date_ms": "1577209369000",
              "original_purchase_date_pst": "2019-11-24 09:42:50 America/Los_Angeles",
              "quantity": "1",
              "web_order_line_item_id": "140000221703974",
              "expires_date": "2019-12-24 17:42:49 Etc/GMT",
              "subscription_group_identifier": "20497362",
              "is_in_intro_offer_period": "false",
              "original_purchase_date": "2019-11-24 17:42:50 Etc/GMT",
              "purchase_date_pst": "2019-11-24 09:42:49 America/Los_Angeles",
              "is_trial_period": "false"
            }
          ],
          "latest_receipt": "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",
          "environment": "Production",
          "status": "OK",
          "pending_renewal_info": [
            {
              "auto_renew_status": "1",
              "original_transaction_id": "140000650438622",
              "product_id": "com.freeramble.smsautosender.6",
              "auto_renew_product_id": "com.freeramble.smsautosender.6"
            }
          ]
        },
        "password": "b9ae2d1987d24d47b062644a7d842ba3",
        "auto_renew_product_id": "com.freeramble.smsautosender.6",
        "notification_type": "INITIAL_BUY"
      },
```

AppleRespone:

```json
   "appleResponse": {
        "auto_renew_status": 1,
        "status": 0,
        "auto_renew_product_id": "com.freeramble.smsautosender.6",
        "receipt": {
          "original_purchase_date_pst": "2019-11-24 09:42:50 America/Los_Angeles",
          "quantity": "1",
          "unique_vendor_identifier": "5CC7DF4C-51BA-4C53-B092-78EFA01E2FF0",
          "bvrs": "196",
          "expires_date_formatted": "2019-12-24 17:42:49 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1574617369000",
          "expires_date_formatted_pst": "2019-12-24 09:42:49 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1449117962",
          "unique_identifier": "37a71acda826aaf84ee55321f38083553213b246",
          "original_transaction_id": "140000650438622",
          "subscription_group_identifier": "20497362",
          "app_item_id": "1375015129",
          "transaction_id": "140000650438622",
          "web_order_line_item_id": "140000221703974",
          "version_external_identifier": "833309929",
          "purchase_date": "2019-11-24 17:42:49 Etc/GMT",
          "product_id": "com.freeramble.smsautosender.6",
          "expires_date": "1577209369000",
          "original_purchase_date": "2019-11-24 17:42:50 Etc/GMT",
          "purchase_date_pst": "2019-11-24 09:42:49 America/Los_Angeles",
          "bid": "com.freeramble.smsautosender",
          "original_purchase_date_ms": "1574617370000"
        },
        "latest_receipt_info": {
          "original_purchase_date_pst": "2019-11-24 09:42:50 America/Los_Angeles",
          "quantity": "1",
          "unique_vendor_identifier": "5CC7DF4C-51BA-4C53-B092-78EFA01E2FF0",
          "bvrs": "196",
          "expires_date_formatted": "2019-12-24 17:42:49 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1574617369000",
          "expires_date_formatted_pst": "2019-12-24 09:42:49 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1449117962",
          "unique_identifier": "37a71acda826aaf84ee55321f38083553213b246",
          "original_transaction_id": "140000650438622",
          "subscription_group_identifier": "20497362",
          "app_item_id": "1375015129",
          "transaction_id": "140000650438622",
          "web_order_line_item_id": "140000221703974",
          "purchase_date": "2019-11-24 17:42:49 Etc/GMT",
          "product_id": "com.freeramble.smsautosender.6",
          "expires_date": "1577209369000",
          "original_purchase_date": "2019-11-24 17:42:50 Etc/GMT",
          "purchase_date_pst": "2019-11-24 09:42:49 America/Los_Angeles",
          "bid": "com.freeramble.smsautosender",
          "original_purchase_date_ms": "1574617370000"
        },
        "latest_receipt": "",
        "sandbox": false,
        "service": "apple"
      },
```

latest_receipt_info:
Only returned for receipts containing auto-renewable subscriptions. For iOS 6 style transaction receipts, this is the JSON representation of the receipt for the most recent renewal. For iOS 7 style app receipts, the value of this key is an array containing all in-app purchase transactions. This excludes transactions for a consumable product that have been marked as finished by your app.

```json
    "appleResponse": {
        "auto_renew_status": 1,
        "status": 0,
        "auto_renew_product_id": "com.freeramble.smsautosender.6",
        "receipt": {
          "original_purchase_date_pst": "2019-04-21 17:57:35 America/Los_Angeles",
          "quantity": "1",
          "unique_vendor_identifier": "741F94A5-6792-498C-9B7A-C7DC0ADCF7F0",
          "bvrs": "167",
          "expires_date_formatted": "2019-11-23 10:26:31 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1571822791000",
          "expires_date_formatted_pst": "2019-11-23 02:26:31 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1449117962",
          "unique_identifier": "259d342f3f88077d7e3639b89aba9983e08b923d",
          "original_transaction_id": "70000598578451",
          "subscription_group_identifier": "20497362",
          "app_item_id": "1375015129",
          "transaction_id": "70000679013655",
          "web_order_line_item_id": "70000219982416",
          "purchase_date": "2019-10-23 09:26:31 Etc/GMT",
          "product_id": "com.freeramble.smsautosender.6",
          "expires_date": "1574504791000",
          "original_purchase_date": "2019-04-22 00:57:35 Etc/GMT",
          "purchase_date_pst": "2019-10-23 02:26:31 America/Los_Angeles",
          "bid": "com.freeramble.smsautosender",
          "original_purchase_date_ms": "1555894655000"
        },
        "latest_receipt_info": {
          "original_purchase_date_pst": "2019-04-21 17:57:35 America/Los_Angeles",
          "quantity": "1",
          "unique_vendor_identifier": "741F94A5-6792-498C-9B7A-C7DC0ADCF7F0",
          "bvrs": "167",
          "expires_date_formatted": "2019-12-23 10:26:31 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1574504791000",
          "expires_date_formatted_pst": "2019-12-23 02:26:31 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1449117962",
          "unique_identifier": "259d342f3f88077d7e3639b89aba9983e08b923d",
          "original_transaction_id": "70000598578451",
          "subscription_group_identifier": "20497362",
          "app_item_id": "1375015129",
          "transaction_id": "70000692424886",
          "web_order_line_item_id": "70000228572443",
          "purchase_date": "2019-11-23 10:26:31 Etc/GMT",
          "product_id": "com.freeramble.smsautosender.6",
          "expires_date": "1577096791000",
          "original_purchase_date": "2019-04-22 00:57:35 Etc/GMT",
          "purchase_date_pst": "2019-11-23 02:26:31 America/Los_Angeles",
          "bid": "com.freeramble.smsautosender",
          "original_purchase_date_ms": "1555894655000"
        },
        "latest_receipt": "...",
        "sandbox": false,
        "service": "apple"
      },
```

```json
   "appleResponse": {
        "status": 0,
        "environment": "Production",
        "receipt": {
          "receipt_type": "Production",
          "adam_id": 1375015129,
          "app_item_id": 1375015129,
          "bundle_id": "com.freeramble.smsautosender",
          "application_version": "167",
          "download_id": 37054439464016,
          "version_external_identifier": 830963182,
          "receipt_creation_date": "2019-10-24 00:00:26 Etc/GMT",
          "receipt_creation_date_ms": "1571875226000",
          "receipt_creation_date_pst": "2019-10-23 17:00:26 America/Los_Angeles",
          "request_date": "2019-11-24 00:00:26 Etc/GMT",
          "request_date_ms": "1574553626283",
          "request_date_pst": "2019-11-23 16:00:26 America/Los_Angeles",
          "original_purchase_date": "2019-04-23 05:22:58 Etc/GMT",
          "original_purchase_date_ms": "1555996978000",
          "original_purchase_date_pst": "2019-04-22 22:22:58 America/Los_Angeles",
          "original_application_version": "167",
          "in_app": [
            {
              "quantity": "1",
              "product_id": "com.freeramble.smsautosender.6",
              "transaction_id": "170000593289571",
              "original_transaction_id": "170000593289571",
              "purchase_date": "2019-04-23 05:29:52 Etc/GMT",
              "purchase_date_ms": "1555997392000",
              "purchase_date_pst": "2019-04-22 22:29:52 America/Los_Angeles",
              "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
              "original_purchase_date_ms": "1555997394000",
              "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
              "expires_date": "2019-05-23 05:29:52 Etc/GMT",
              "expires_date_ms": "1558589392000",
              "expires_date_pst": "2019-05-22 22:29:52 America/Los_Angeles",
              "web_order_line_item_id": "170000179663148",
              "is_trial_period": "false",
              "is_in_intro_offer_period": "false"
            },
            {
              "quantity": "1",
              "product_id": "com.freeramble.smsautosender.6",
              "transaction_id": "170000604673649",
              "original_transaction_id": "170000593289571",
              "purchase_date": "2019-05-23 05:29:52 Etc/GMT",
              "purchase_date_ms": "1558589392000",
              "purchase_date_pst": "2019-05-22 22:29:52 America/Los_Angeles",
              "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
              "original_purchase_date_ms": "1555997394000",
              "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
              "expires_date": "2019-06-23 05:29:52 Etc/GMT",
              "expires_date_ms": "1561267792000",
              "expires_date_pst": "2019-06-22 22:29:52 America/Los_Angeles",
              "web_order_line_item_id": "170000179663149",
              "is_trial_period": "false",
              "is_in_intro_offer_period": "false"
            },
            {
              "quantity": "1",
              "product_id": "com.freeramble.smsautosender.6",
              "transaction_id": "170000616651653",
              "original_transaction_id": "170000593289571",
              "purchase_date": "2019-06-23 05:29:52 Etc/GMT",
              "purchase_date_ms": "1561267792000",
              "purchase_date_pst": "2019-06-22 22:29:52 America/Los_Angeles",
              "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
              "original_purchase_date_ms": "1555997394000",
              "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
              "expires_date": "2019-07-23 05:29:52 Etc/GMT",
              "expires_date_ms": "1563859792000",
              "expires_date_pst": "2019-07-22 22:29:52 America/Los_Angeles",
              "web_order_line_item_id": "170000186399715",
              "is_trial_period": "false",
              "is_in_intro_offer_period": "false"
            },
            {
              "quantity": "1",
              "product_id": "com.freeramble.smsautosender.6",
              "transaction_id": "170000628961293",
              "original_transaction_id": "170000593289571",
              "purchase_date": "2019-07-23 05:29:52 Etc/GMT",
              "purchase_date_ms": "1563859792000",
              "purchase_date_pst": "2019-07-22 22:29:52 America/Los_Angeles",
              "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
              "original_purchase_date_ms": "1555997394000",
              "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
              "expires_date": "2019-08-23 05:29:52 Etc/GMT",
              "expires_date_ms": "1566538192000",
              "expires_date_pst": "2019-08-22 22:29:52 America/Los_Angeles",
              "web_order_line_item_id": "170000193442886",
              "is_trial_period": "false",
              "is_in_intro_offer_period": "false"
            },
            {
              "quantity": "1",
              "product_id": "com.freeramble.smsautosender.6",
              "transaction_id": "170000641862948",
              "original_transaction_id": "170000593289571",
              "purchase_date": "2019-08-23 05:29:52 Etc/GMT",
              "purchase_date_ms": "1566538192000",
              "purchase_date_pst": "2019-08-22 22:29:52 America/Los_Angeles",
              "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
              "original_purchase_date_ms": "1555997394000",
              "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
              "expires_date": "2019-09-23 05:29:52 Etc/GMT",
              "expires_date_ms": "1569216592000",
              "expires_date_pst": "2019-09-22 22:29:52 America/Los_Angeles",
              "web_order_line_item_id": "170000200756665",
              "is_trial_period": "false",
              "is_in_intro_offer_period": "false"
            },
            {
              "quantity": "1",
              "product_id": "com.freeramble.smsautosender.6",
              "transaction_id": "170000654758043",
              "original_transaction_id": "170000593289571",
              "purchase_date": "2019-09-23 05:29:52 Etc/GMT",
              "purchase_date_ms": "1569216592000",
              "purchase_date_pst": "2019-09-22 22:29:52 America/Los_Angeles",
              "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
              "original_purchase_date_ms": "1555997394000",
              "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
              "expires_date": "2019-10-23 05:29:52 Etc/GMT",
              "expires_date_ms": "1571808592000",
              "expires_date_pst": "2019-10-22 22:29:52 America/Los_Angeles",
              "web_order_line_item_id": "170000208247111",
              "is_trial_period": "false",
              "is_in_intro_offer_period": "false"
            },
            {
              "quantity": "1",
              "product_id": "com.freeramble.smsautosender.6",
              "transaction_id": "170000667346911",
              "original_transaction_id": "170000593289571",
              "purchase_date": "2019-10-23 05:29:52 Etc/GMT",
              "purchase_date_ms": "1571808592000",
              "purchase_date_pst": "2019-10-22 22:29:52 America/Los_Angeles",
              "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
              "original_purchase_date_ms": "1555997394000",
              "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
              "expires_date": "2019-11-23 06:29:52 Etc/GMT",
              "expires_date_ms": "1574490592000",
              "expires_date_pst": "2019-11-22 22:29:52 America/Los_Angeles",
              "web_order_line_item_id": "170000215911044",
              "is_trial_period": "false",
              "is_in_intro_offer_period": "false"
            }
          ]
        },
        "latest_receipt_info": [
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "170000593289571",
            "original_transaction_id": "170000593289571",
            "purchase_date": "2019-04-23 05:29:52 Etc/GMT",
            "purchase_date_ms": "1555997392000",
            "purchase_date_pst": "2019-04-22 22:29:52 America/Los_Angeles",
            "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
            "original_purchase_date_ms": "1555997394000",
            "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
            "expires_date": "2019-05-23 05:29:52 Etc/GMT",
            "expires_date_ms": "1558589392000",
            "expires_date_pst": "2019-05-22 22:29:52 America/Los_Angeles",
            "web_order_line_item_id": "170000179663148",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          },
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "170000604673649",
            "original_transaction_id": "170000593289571",
            "purchase_date": "2019-05-23 05:29:52 Etc/GMT",
            "purchase_date_ms": "1558589392000",
            "purchase_date_pst": "2019-05-22 22:29:52 America/Los_Angeles",
            "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
            "original_purchase_date_ms": "1555997394000",
            "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
            "expires_date": "2019-06-23 05:29:52 Etc/GMT",
            "expires_date_ms": "1561267792000",
            "expires_date_pst": "2019-06-22 22:29:52 America/Los_Angeles",
            "web_order_line_item_id": "170000179663149",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          },
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "170000616651653",
            "original_transaction_id": "170000593289571",
            "purchase_date": "2019-06-23 05:29:52 Etc/GMT",
            "purchase_date_ms": "1561267792000",
            "purchase_date_pst": "2019-06-22 22:29:52 America/Los_Angeles",
            "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
            "original_purchase_date_ms": "1555997394000",
            "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
            "expires_date": "2019-07-23 05:29:52 Etc/GMT",
            "expires_date_ms": "1563859792000",
            "expires_date_pst": "2019-07-22 22:29:52 America/Los_Angeles",
            "web_order_line_item_id": "170000186399715",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          },
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "170000628961293",
            "original_transaction_id": "170000593289571",
            "purchase_date": "2019-07-23 05:29:52 Etc/GMT",
            "purchase_date_ms": "1563859792000",
            "purchase_date_pst": "2019-07-22 22:29:52 America/Los_Angeles",
            "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
            "original_purchase_date_ms": "1555997394000",
            "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
            "expires_date": "2019-08-23 05:29:52 Etc/GMT",
            "expires_date_ms": "1566538192000",
            "expires_date_pst": "2019-08-22 22:29:52 America/Los_Angeles",
            "web_order_line_item_id": "170000193442886",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          },
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "170000641862948",
            "original_transaction_id": "170000593289571",
            "purchase_date": "2019-08-23 05:29:52 Etc/GMT",
            "purchase_date_ms": "1566538192000",
            "purchase_date_pst": "2019-08-22 22:29:52 America/Los_Angeles",
            "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
            "original_purchase_date_ms": "1555997394000",
            "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
            "expires_date": "2019-09-23 05:29:52 Etc/GMT",
            "expires_date_ms": "1569216592000",
            "expires_date_pst": "2019-09-22 22:29:52 America/Los_Angeles",
            "web_order_line_item_id": "170000200756665",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          },
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "170000654758043",
            "original_transaction_id": "170000593289571",
            "purchase_date": "2019-09-23 05:29:52 Etc/GMT",
            "purchase_date_ms": "1569216592000",
            "purchase_date_pst": "2019-09-22 22:29:52 America/Los_Angeles",
            "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
            "original_purchase_date_ms": "1555997394000",
            "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
            "expires_date": "2019-10-23 05:29:52 Etc/GMT",
            "expires_date_ms": "1571808592000",
            "expires_date_pst": "2019-10-22 22:29:52 America/Los_Angeles",
            "web_order_line_item_id": "170000208247111",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          },
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "170000667346911",
            "original_transaction_id": "170000593289571",
            "purchase_date": "2019-10-23 05:29:52 Etc/GMT",
            "purchase_date_ms": "1571808592000",
            "purchase_date_pst": "2019-10-22 22:29:52 America/Los_Angeles",
            "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
            "original_purchase_date_ms": "1555997394000",
            "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
            "expires_date": "2019-11-23 06:29:52 Etc/GMT",
            "expires_date_ms": "1574490592000",
            "expires_date_pst": "2019-11-22 22:29:52 America/Los_Angeles",
            "web_order_line_item_id": "170000215911044",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          },
          {
            "quantity": "1",
            "product_id": "com.freeramble.smsautosender.6",
            "transaction_id": "170000680881922",
            "original_transaction_id": "170000593289571",
            "purchase_date": "2019-11-23 06:29:52 Etc/GMT",
            "purchase_date_ms": "1574490592000",
            "purchase_date_pst": "2019-11-22 22:29:52 America/Los_Angeles",
            "original_purchase_date": "2019-04-23 05:29:54 Etc/GMT",
            "original_purchase_date_ms": "1555997394000",
            "original_purchase_date_pst": "2019-04-22 22:29:54 America/Los_Angeles",
            "expires_date": "2019-12-23 06:29:52 Etc/GMT",
            "expires_date_ms": "1577082592000",
            "expires_date_pst": "2019-12-22 22:29:52 America/Los_Angeles",
            "web_order_line_item_id": "170000223856544",
            "is_trial_period": "false",
            "is_in_intro_offer_period": "false",
            "subscription_group_identifier": "20497362"
          }
        ],
        "latest_receipt": "",
        "pending_renewal_info": [
          {
            "auto_renew_product_id": "com.freeramble.smsautosender.6",
            "original_transaction_id": "170000593289571",
            "product_id": "com.freeramble.smsautosender.6",
            "auto_renew_status": "1"
          }
        ],
        "sandbox": false,
        "service": "apple"
      },
```

# DID_CHANGE_RENEWAL_PREF

only seems to trigger if the user switches subscription tiers/products.
Indicates the customer made a change in their subscription plan that takes effect at the next renewal. The currently active plan is not affected.

```json
   "body": {
        "latest_receipt": "",
        "latest_receipt_info": {
          "original_purchase_date_pst": "2019-09-18 02:30:23 America/Los_Angeles",
          "quantity": "1",
          "subscription_group_identifier": "20497362",
          "unique_vendor_identifier": "9ED68EE2-EDC6-42E1-BC22-B11B1FA7ED33",
          "original_purchase_date_ms": "1568799023000",
          "expires_date_formatted": "2019-12-18 10:30:22 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1568799022000",
          "expires_date_formatted_pst": "2019-12-18 02:30:22 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1462737151",
          "unique_identifier": "70e30ffd461523f9eb6d44fee27df354b038cf3c",
          "original_transaction_id": "20000606458622",
          "expires_date": "1576665022000",
          "app_item_id": "1375015129",
          "transaction_id": "20000606458622",
          "bvrs": "176",
          "web_order_line_item_id": "20000187620145",
          "version_external_identifier": "832251092",
          "bid": "com.freeramble.smsautosender",
          "product_id": "com.freeramble.smsautosender.7",
          "purchase_date": "2019-09-18 09:30:22 Etc/GMT",
          "purchase_date_pst": "2019-09-18 02:30:22 America/Los_Angeles",
          "original_purchase_date": "2019-09-18 09:30:23 Etc/GMT"
        },
        "environment": "PROD",
        "auto_renew_status": "true",
        "password": "b9ae2d1987d24d47b062644a7d842ba3",
        "auto_renew_product_id": "com.freeramble.smsautosender.7",
        "notification_type": "DID_CHANGE_RENEWAL_PREF"
      },
```

## Multiple subscriptions without changing product:

```json
     "body": {
        "latest_receipt": "...",
        "latest_receipt_info": {
          "original_purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
          "quantity": "1",
          "subscription_group_identifier": "20497362",
          "unique_vendor_identifier": "7F74F46D-5794-4BE4-8CEB-6ACD1247A8D6",
          "original_purchase_date_ms": "1574449429000",
          "expires_date_formatted": "2019-12-22 19:03:49 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1574449429000",
          "expires_date_formatted_pst": "2019-12-22 11:03:49 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1449117962",
          "unique_identifier": "ef8b69d256733aa053268408a014459d94206184",
          "original_transaction_id": "440000599543880",
          "expires_date": "1577041429000",
          "app_item_id": "1375015129",
          "transaction_id": "440000599543880",
          "bvrs": "196",
          "web_order_line_item_id": "440000200533980",
          "version_external_identifier": "833309929",
          "bid": "production_id_indentifier",
          "product_id": "production_id_indentifier.6",
          "purchase_date": "2019-11-22 19:03:49 Etc/GMT",
          "purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
          "original_purchase_date": "2019-11-22 19:03:49 Etc/GMT"
        },
        "environment": "PROD",
        "auto_renew_status": "true",
        "unified_receipt": {
          "latest_receipt_info": [
            {
              "product_id": "production_id_indentifier.11",
              "purchase_date": "2019-11-22 19:29:45 Etc/GMT",
              "purchase_date_ms": "1574450985000",
              "original_purchase_date_ms": "1574450986000",
              "transaction_id": "440000599550228",
              "original_transaction_id": "440000599550228",
              "expires_date_pst": "2020-11-22 11:29:45 America/Los_Angeles",
              "expires_date_ms": "1606073385000",
              "original_purchase_date_pst": "2019-11-22 11:29:46 America/Los_Angeles",
              "quantity": "1",
              "web_order_line_item_id": "440000200538448",
              "expires_date": "2020-11-22 19:29:45 Etc/GMT",
              "subscription_group_identifier": "20548670",
              "is_in_intro_offer_period": "false",
              "original_purchase_date": "2019-11-22 19:29:46 Etc/GMT",
              "purchase_date_pst": "2019-11-22 11:29:45 America/Los_Angeles",
              "is_trial_period": "false"
            },
            {
              "product_id": "production_id_indentifier.6",
              "purchase_date": "2019-11-22 19:03:49 Etc/GMT",
              "purchase_date_ms": "1574449429000",
              "original_purchase_date_ms": "1574449429000",
              "transaction_id": "440000599543880",
              "original_transaction_id": "440000599543880",
              "expires_date_pst": "2019-12-22 11:03:49 America/Los_Angeles",
              "expires_date_ms": "1577041429000",
              "original_purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
              "quantity": "1",
              "web_order_line_item_id": "440000200533980",
              "expires_date": "2019-12-22 19:03:49 Etc/GMT",
              "subscription_group_identifier": "20497362",
              "is_in_intro_offer_period": "false",
              "original_purchase_date": "2019-11-22 19:03:49 Etc/GMT",
              "purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
              "is_trial_period": "false"
            }
          ],
          "latest_receipt": "...",
          "environment": "Production",
          "status": "OK",
          "pending_renewal_info": [
            {
              "auto_renew_status": "1",
              "original_transaction_id": "440000599543880",
              "product_id": "production_id_indentifier.6",
              "auto_renew_product_id": "production_id_indentifier.6"
            },
            {
              "auto_renew_status": "0",
              "original_transaction_id": "440000599550228",
              "product_id": "production_id_indentifier.11",
              "auto_renew_product_id": "production_id_indentifier.11"
            }
          ]
        },
        "password": "...",
        "auto_renew_product_id": "production_id_indentifier.6",
        "notification_type": "DID_CHANGE_RENEWAL_PREF"
      },
```

# User change upgrade subscription tiers:

## DID_CHANGE_RENEWAL_STATUS

Indicates a change in the subscription renewal status. Check auto_renew_status_change_date_ms and auto_renew_status in the JSON response to know the date and time of the last status update and the current renewal status.

```json
   "body": {
        "latest_receipt": "",
        "latest_receipt_info": {
          "original_purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
          "quantity": "1",
          "subscription_group_identifier": "20497362",
          "unique_vendor_identifier": "7F74F46D-5794-4BE4-8CEB-6ACD1247A8D6",
          "original_purchase_date_ms": "1574449429000",
          "expires_date_formatted": "2019-12-22 19:03:49 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1574449429000",
          "expires_date_formatted_pst": "2019-12-22 11:03:49 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1449117962",
          "unique_identifier": "ef8b69d256733aa053268408a014459d94206184",
          "original_transaction_id": "440000599543880",
          "expires_date": "1577041429000",
          "app_item_id": "1375015129",
          "transaction_id": "440000599543880",
          "bvrs": "196",
          "web_order_line_item_id": "440000200533980",
          "version_external_identifier": "833309929",
          "bid": "com.freeramble.smsautosender",
          "product_id": "com.freeramble.smsautosender.6",
          "purchase_date": "2019-11-22 19:03:49 Etc/GMT",
          "purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
          "original_purchase_date": "2019-11-22 19:03:49 Etc/GMT"
        },
        "environment": "PROD",
        "auto_renew_status": "true",
        "unified_receipt": {
          "latest_receipt_info": [
            {
              "product_id": "com.freeramble.smsautosender.11",
              "purchase_date": "2019-11-22 19:29:45 Etc/GMT",
              "purchase_date_ms": "1574450985000",
              "original_purchase_date_ms": "1574450986000",
              "transaction_id": "440000599550228",
              "original_transaction_id": "440000599550228",
              "expires_date_pst": "2020-11-22 11:29:45 America/Los_Angeles",
              "expires_date_ms": "1606073385000",
              "original_purchase_date_pst": "2019-11-22 11:29:46 America/Los_Angeles",
              "quantity": "1",
              "web_order_line_item_id": "440000200538448",
              "expires_date": "2020-11-22 19:29:45 Etc/GMT",
              "subscription_group_identifier": "20548670",
              "is_in_intro_offer_period": "false",
              "original_purchase_date": "2019-11-22 19:29:46 Etc/GMT",
              "purchase_date_pst": "2019-11-22 11:29:45 America/Los_Angeles",
              "is_trial_period": "false"
            },
            {
              "product_id": "com.freeramble.smsautosender.6",
              "purchase_date": "2019-11-22 19:03:49 Etc/GMT",
              "purchase_date_ms": "1574449429000",
              "original_purchase_date_ms": "1574449429000",
              "transaction_id": "440000599543880",
              "original_transaction_id": "440000599543880",
              "expires_date_pst": "2019-12-22 11:03:49 America/Los_Angeles",
              "expires_date_ms": "1577041429000",
              "original_purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
              "quantity": "1",
              "web_order_line_item_id": "440000200533980",
              "expires_date": "2019-12-22 19:03:49 Etc/GMT",
              "subscription_group_identifier": "20497362",
              "is_in_intro_offer_period": "false",
              "original_purchase_date": "2019-11-22 19:03:49 Etc/GMT",
              "purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
              "is_trial_period": "false"
            }
          ],
          "latest_receipt": "",
          "environment": "Production",
          "status": "OK",
          "pending_renewal_info": [
            {
              "auto_renew_status": "1",
              "original_transaction_id": "440000599543880",
              "product_id": "com.freeramble.smsautosender.6",
              "auto_renew_product_id": "com.freeramble.smsautosender.8"
            },
            {
              "auto_renew_status": "0",
              "original_transaction_id": "440000599550228",
              "product_id": "com.freeramble.smsautosender.11",
              "auto_renew_product_id": "com.freeramble.smsautosender.11"
            }
          ]
        },
        "password": "b9ae2d1987d24d47b062644a7d842ba3",
        "auto_renew_product_id": "com.freeramble.smsautosender.8",
        "notification_type": "DID_CHANGE_RENEWAL_PREF"
      },
```

"notification_type": "DID_CHANGE_RENEWAL_STATUS"

# One subscription

```json
"body": {
  "latest_receipt": "...",
  "auto_renew_status_change_date": "2019-11-20 18:51:30 Etc/GMT",
  "environment": "PROD",
  "auto_renew_status": "false",
  "auto_renew_status_change_date_pst": "2019-11-20 10:51:30 America/Los_Angeles",
  "latest_receipt_info": {
    "original_purchase_date_pst": "2019-11-20 09:53:56 America/Los_Angeles",
    "quantity": "1",
    "subscription_group_identifier": "20497362",
    "unique_vendor_identifier": "235D49B2-5CFE-42F9-8D21-D78F647A95BA",
    "original_purchase_date_ms": "1574272436000",
    "expires_date_formatted": "2019-12-20 17:53:54 Etc/GMT",
    "is_in_intro_offer_period": "false",
    "purchase_date_ms": "1574272434000",
    "expires_date_formatted_pst": "2019-12-20 09:53:54 America/Los_Angeles",
    "is_trial_period": "false",
    "item_id": "1449117962",
    "unique_identifier": "0a6074d6ff5c7ac380a93bf9f4f372707c7a1b52",
    "original_transaction_id": "320000608927590",
    "expires_date": "1576864434000",
    "app_item_id": "1375015129",
    "transaction_id": "320000608927590",
    "bvrs": "196",
    "web_order_line_item_id": "320000209763651",
    "version_external_identifier": "833309929",
    "bid": "production_id_indentifier",
    "product_id": "production_id_indentifier.6",
    "purchase_date": "2019-11-20 17:53:54 Etc/GMT",
    "purchase_date_pst": "2019-11-20 09:53:54 America/Los_Angeles",
    "original_purchase_date": "2019-11-20 17:53:56 Etc/GMT"
  },
  "password": "...",
  "auto_renew_status_change_date_ms": "1574275890000",
  "auto_renew_product_id": "production_id_indentifier.6",
  "notification_type": "DID_CHANGE_RENEWAL_STATUS"
},
```

# Receipts with multiple subscriptions and change product_id:

```json
"body": {
  "latest_receipt": "...",
  "auto_renew_status_change_date": "2019-11-22 19:58:55 Etc/GMT",
  "environment": "PROD",
  "auto_renew_status": "true",
  "auto_renew_status_change_date_pst": "2019-11-22 11:58:55 America/Los_Angeles",
  "latest_receipt_info": {
    "original_purchase_date_pst": "2019-11-22 11:29:46 America/Los_Angeles",
    "quantity": "1",
    "subscription_group_identifier": "20548670",
    "unique_vendor_identifier": "7F74F46D-5794-4BE4-8CEB-6ACD1247A8D6",
    "original_purchase_date_ms": "1574450986000",
    "expires_date_formatted": "2020-11-22 19:29:45 Etc/GMT",
    "is_in_intro_offer_period": "false",
    "purchase_date_ms": "1574450985000",
    "expires_date_formatted_pst": "2020-11-22 11:29:45 America/Los_Angeles",
    "is_trial_period": "false",
    "item_id": "1478996309",
    "unique_identifier": "ef8b69d256733aa053268408a014459d94206184",
    "original_transaction_id": "440000599550228",
    "expires_date": "1606073385000",
    "app_item_id": "1375015129",
    "transaction_id": "440000599550228",
    "bvrs": "196",
    "web_order_line_item_id": "440000200538448",
    "version_external_identifier": "833309929",
    "bid": "production_id_indentifier",
    "product_id": "production_id_indentifier.11",
    "purchase_date": "2019-11-22 19:29:45 Etc/GMT",
    "purchase_date_pst": "2019-11-22 11:29:45 America/Los_Angeles",
    "original_purchase_date": "2019-11-22 19:29:46 Etc/GMT"
  },
  "unified_receipt": {
    "latest_receipt_info": [
      {
        "product_id": "production_id_indentifier.11",
        "purchase_date": "2019-11-22 19:29:45 Etc/GMT",
        "purchase_date_ms": "1574450985000",
        "original_purchase_date_ms": "1574450986000",
        "transaction_id": "440000599550228",
        "original_transaction_id": "440000599550228",
        "expires_date_pst": "2020-11-22 11:29:45 America/Los_Angeles",
        "expires_date_ms": "1606073385000",
        "original_purchase_date_pst": "2019-11-22 11:29:46 America/Los_Angeles",
        "quantity": "1",
        "web_order_line_item_id": "440000200538448",
        "expires_date": "2020-11-22 19:29:45 Etc/GMT",
        "subscription_group_identifier": "20548670",
        "is_in_intro_offer_period": "false",
        "original_purchase_date": "2019-11-22 19:29:46 Etc/GMT",
        "purchase_date_pst": "2019-11-22 11:29:45 America/Los_Angeles",
        "is_trial_period": "false"
      },
      {
        "product_id": "production_id_indentifier.6",
        "purchase_date": "2019-11-22 19:03:49 Etc/GMT",
        "purchase_date_ms": "1574449429000",
        "original_purchase_date_ms": "1574449429000",
        "transaction_id": "440000599543880",
        "original_transaction_id": "440000599543880",
        "expires_date_pst": "2019-12-22 11:03:49 America/Los_Angeles",
        "expires_date_ms": "1577041429000",
        "original_purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
        "quantity": "1",
        "web_order_line_item_id": "440000200533980",
        "expires_date": "2019-12-22 19:03:49 Etc/GMT",
        "subscription_group_identifier": "20497362",
        "is_in_intro_offer_period": "false",
        "original_purchase_date": "2019-11-22 19:03:49 Etc/GMT",
        "purchase_date_pst": "2019-11-22 11:03:49 America/Los_Angeles",
        "is_trial_period": "false"
      }
    ],
    "latest_receipt": "...",
    "environment": "Production",
    "status": "OK",
    "pending_renewal_info": [
      {
        "auto_renew_status": "1",
        "original_transaction_id": "440000599543880",
        "product_id": "production_id_indentifier.6",
        "auto_renew_product_id": "production_id_indentifier.8"
      },
      {
        "auto_renew_status": "1",
        "original_transaction_id": "440000599550228",
        "product_id": "production_id_indentifier.11",
        "auto_renew_product_id": "production_id_indentifier.11"
      }
    ]
  },
  "password": "...",
  "auto_renew_status_change_date_ms": "1574452735000",
  "auto_renew_product_id": "production_id_indentifier.11",
  "notification_type": "DID_CHANGE_RENEWAL_STATUS"
},
```

# User cancel subscription

Indicates that either Apple customer support canceled the subscription or the user upgraded their subscription. The cancellation_date key contains the date and time of the change.

```json
  "body": {
        "latest_expired_receipt": "",
        "latest_expired_receipt_info": {
          "original_purchase_date_pst": "2019-11-12 10:35:48 America/Los_Angeles",
          "cancellation_date_ms": "1574419054000",
          "quantity": "1",
          "subscription_group_identifier": "20545527",
          "cancellation_reason": "0",
          "unique_vendor_identifier": "B2514195-9262-4896-A027-BE6CE5517828",
          "original_purchase_date_ms": "1573583748000",
          "expires_date_formatted": "2020-11-12 18:35:46 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1573583746000",
          "expires_date_formatted_pst": "2020-11-12 10:35:46 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1477424155",
          "unique_identifier": "00008030-001E29390E88802E",
          "original_transaction_id": "90000656077819",
          "expires_date": "1605206146000",
          "app_item_id": "1454502457",
          "transaction_id": "90000656077819",
          "bvrs": "51",
          "web_order_line_item_id": "90000223508035",
          "version_external_identifier": "833310053",
          "bid": "com.freeramble.smsautosenderpro",
          "cancellation_date": "2019-11-22 10:37:34 Etc/GMT",
          "product_id": "com.freeramble.smsautosenderpro.11",
          "purchase_date": "2019-11-12 18:35:46 Etc/GMT",
          "cancellation_date_pst": "2019-11-22 02:37:34 America/Los_Angeles",
          "purchase_date_pst": "2019-11-12 10:35:46 America/Los_Angeles",
          "original_purchase_date": "2019-11-12 18:35:48 Etc/GMT"
        },
        "password": "a49e1d4b3ca24f38b9f1f8465ae73819",
        "cancellation_date": "2019-11-22 10:37:34 Etc/GMT",
        "unified_receipt": {
          "latest_receipt_info": [
            {
              "cancellation_reason": "0",
              "purchase_date": "2019-11-12 18:35:46 Etc/GMT",
              "purchase_date_ms": "1573583746000",
              "original_purchase_date_ms": "1573583748000",
              "transaction_id": "90000656077819",
              "original_transaction_id": "90000656077819",
              "quantity": "1",
              "expires_date_ms": "1605206146000",
              "original_purchase_date_pst": "2019-11-12 10:35:48 America/Los_Angeles",
              "product_id": "com.freeramble.smsautosenderpro.11",
              "cancellation_date": "2019-11-22 10:37:34 Etc/GMT",
              "expires_date_pst": "2020-11-12 10:35:46 America/Los_Angeles",
              "is_in_intro_offer_period": "false",
              "web_order_line_item_id": "90000223508035",
              "expires_date": "2020-11-12 18:35:46 Etc/GMT",
              "subscription_group_identifier": "20545527",
              "cancellation_date_ms": "1574419054000",
              "cancellation_date_pst": "2019-11-22 02:37:34 America/Los_Angeles",
              "original_purchase_date": "2019-11-12 18:35:48 Etc/GMT",
              "purchase_date_pst": "2019-11-12 10:35:46 America/Los_Angeles",
              "is_trial_period": "false"
            }
          ],
          "latest_receipt": "",
          "environment": "Production",
          "status": "OK",
          "pending_renewal_info": [
            {
              "auto_renew_status": "0",
              "original_transaction_id": "90000656077819",
              "product_id": "com.freeramble.smsautosenderpro.11",
              "auto_renew_product_id": "com.freeramble.smsautosenderpro.11"
            }
          ]
        },
        "auto_renew_product_id": "com.freeramble.smsautosenderpro.11",
        "notification_type": "CANCEL",
        "environment": "PROD",
        "auto_renew_status": "false",
        "web_order_line_item_id": "90000223508035",
        "cancellation_date_ms": "1574419054000",
        "cancellation_date_pst": "2019-11-22 02:37:34 America/Los_Angeles"
      },
```

# User cancel

```json
 "body": {
        "unified_receipt": {
          "latest_receipt_info": [
            {
              "cancellation_reason": "0",
              "purchase_date": "2019-11-12 18:08:48 Etc/GMT",
              "purchase_date_ms": "1573582128000",
              "original_purchase_date_ms": "1573582129000",
              "transaction_id": "90000656069099",
              "original_transaction_id": "90000656069099",
              "quantity": "1",
              "expires_date_ms": "1605204528000",
              "original_purchase_date_pst": "2019-11-12 10:08:49 America/Los_Angeles",
              "product_id": "com.freeramble.smsautosender.8",
              "cancellation_date": "2019-11-23 02:37:55 Etc/GMT",
              "expires_date_pst": "2020-11-12 10:08:48 America/Los_Angeles",
              "is_in_intro_offer_period": "false",
              "web_order_line_item_id": "90000223502100",
              "expires_date": "2020-11-12 18:08:48 Etc/GMT",
              "subscription_group_identifier": "20497362",
              "cancellation_date_ms": "1574476675000",
              "cancellation_date_pst": "2019-11-22 18:37:55 America/Los_Angeles",
              "original_purchase_date": "2019-11-12 18:08:49 Etc/GMT",
              "purchase_date_pst": "2019-11-12 10:08:48 America/Los_Angeles",
              "is_trial_period": "false"
            }
          ],
          "latest_receipt": "",
          "environment": "Production",
          "status": "OK",
          "pending_renewal_info": [
            {
              "auto_renew_status": "0",
              "original_transaction_id": "90000656069099",
              "product_id": "com.freeramble.smsautosender.8",
              "auto_renew_product_id": "com.freeramble.smsautosender.8"
            }
          ]
        },
        "auto_renew_status_change_date": "2019-11-23 02:37:55 Etc/GMT",
        "environment": "PROD",
        "auto_renew_status": "false",
        "auto_renew_status_change_date_pst": "2019-11-22 18:37:55 America/Los_Angeles",
        "latest_expired_receipt": "",
        "latest_expired_receipt_info": {
          "original_purchase_date_pst": "2019-11-12 10:08:49 America/Los_Angeles",
          "cancellation_date_ms": "1574476675000",
          "quantity": "1",
          "subscription_group_identifier": "20497362",
          "cancellation_reason": "0",
          "unique_vendor_identifier": "B2514195-9262-4896-A027-BE6CE5517828",
          "original_purchase_date_ms": "1573582129000",
          "expires_date_formatted": "2020-11-12 18:08:48 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1573582128000",
          "expires_date_formatted_pst": "2020-11-12 10:08:48 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1462960761",
          "unique_identifier": "00008030-001E29390E88802E",
          "original_transaction_id": "90000656069099",
          "expires_date": "1605204528000",
          "app_item_id": "1375015129",
          "transaction_id": "90000656069099",
          "bvrs": "196",
          "web_order_line_item_id": "90000223502100",
          "version_external_identifier": "833309929",
          "bid": "com.freeramble.smsautosender",
          "cancellation_date": "2019-11-23 02:37:55 Etc/GMT",
          "product_id": "com.freeramble.smsautosender.8",
          "purchase_date": "2019-11-12 18:08:48 Etc/GMT",
          "cancellation_date_pst": "2019-11-22 18:37:55 America/Los_Angeles",
          "purchase_date_pst": "2019-11-12 10:08:48 America/Los_Angeles",
          "original_purchase_date": "2019-11-12 18:08:49 Etc/GMT"
        },
        "password": "b9ae2d1987d24d47b062644a7d842ba3",
        "auto_renew_status_change_date_ms": "1574476675000",
        "auto_renew_product_id": "com.freeramble.smsautosender.8",
        "notification_type": "DID_CHANGE_RENEWAL_STATUS"
      },
```

# DID_RECOVER

Indicates successful automatic renewal of an expired subscription that failed to renew in the past. Check expires_date to determine the next renewal date and time.

```json
    "body": {
        "latest_receipt": "",
        "latest_receipt_info": {
            "original_purchase_date_pst": "2019-10-20 10:57:00 America/Los_Angeles",
            "quantity": "1",
            "subscription_group_identifier": "20497362",
            "unique_vendor_identifier": "FA94297B-19D5-4647-81BC-151428E72D31",
            "original_purchase_date_ms": "1571594220000",
            "expires_date_formatted": "2019-12-22 01:06:10 Etc/GMT",
            "is_in_intro_offer_period": "false",
            "purchase_date_ms": "1574384770000",
            "expires_date_formatted_pst": "2019-12-21 17:06:10 America/Los_Angeles",
            "is_trial_period": "false",
            "item_id": "1449117962",
            "unique_identifier": "779cf25e790f3a59fff2d3e9e4b82cbc7dc50d58",
            "original_transaction_id": "540000431393678",
            "expires_date": "1576976770000",
            "app_item_id": "1375015129",
            "transaction_id": "540000442622764",
            "bvrs": "192",
            "web_order_line_item_id": "540000144929628",
            "version_external_identifier": "833235728",
            "bid": "com.freeramble.smsautosender",
            "product_id": "com.freeramble.smsautosender.6",
            "purchase_date": "2019-11-22 01:06:10 Etc/GMT",
            "purchase_date_pst": "2019-11-21 17:06:10 America/Los_Angeles",
            "original_purchase_date": "2019-10-20 17:57:00 Etc/GMT"
        },
        "environment": "PROD",
        "auto_renew_status": "true",
        "unified_receipt": {
            "latest_receipt_info": [
                {
                    "product_id": "com.freeramble.smsautosender.6",
                    "purchase_date": "2019-11-22 01:06:10 Etc/GMT",
                    "purchase_date_ms": "1574384770000",
                    "original_purchase_date_ms": "1571594220000",
                    "transaction_id": "540000442622764",
                    "original_transaction_id": "540000431393678",
                    "expires_date_pst": "2019-12-21 17:06:10 America/Los_Angeles",
                    "expires_date_ms": "1576976770000",
                    "original_purchase_date_pst": "2019-10-20 10:57:00 America/Los_Angeles",
                    "quantity": "1",
                    "web_order_line_item_id": "540000144929628",
                    "expires_date": "2019-12-22 01:06:10 Etc/GMT",
                    "subscription_group_identifier": "20497362",
                    "is_in_intro_offer_period": "false",
                    "original_purchase_date": "2019-10-20 17:57:00 Etc/GMT",
                    "purchase_date_pst": "2019-11-21 17:06:10 America/Los_Angeles",
                    "is_trial_period": "false"
                },
                {
                    "product_id": "com.freeramble.smsautosender.6",
                    "purchase_date": "2019-10-20 17:56:56 Etc/GMT",
                    "purchase_date_ms": "1571594216000",
                    "original_purchase_date_ms": "1571594220000",
                    "transaction_id": "540000431393678",
                    "original_transaction_id": "540000431393678",
                    "expires_date_pst": "2019-11-20 10:56:56 America/Los_Angeles",
                    "expires_date_ms": "1574276216000",
                    "original_purchase_date_pst": "2019-10-20 10:57:00 America/Los_Angeles",
                    "quantity": "1",
                    "web_order_line_item_id": "540000144929627",
                    "expires_date": "2019-11-20 18:56:56 Etc/GMT",
                    "subscription_group_identifier": "20497362",
                    "is_in_intro_offer_period": "false",
                    "original_purchase_date": "2019-10-20 17:57:00 Etc/GMT",
                    "purchase_date_pst": "2019-10-20 10:56:56 America/Los_Angeles",
                    "is_trial_period": "false"
                }
            ],
            "latest_receipt": "",
            "environment": "Production",
            "status": "OK",
            "pending_renewal_info": [
                {
                    "auto_renew_status": "1",
                    "original_transaction_id": "540000431393678",
                    "product_id": "com.freeramble.smsautosender.6",
                    "auto_renew_product_id": "com.freeramble.smsautosender.6"
                }
            ]
        },
        "password": "...",
        "auto_renew_product_id": "com.freeramble.smsautosender.6",
        "notification_type": "DID_RECOVER"
    }
```

# RENEWAL

Indicates successful automatic renewal of an expired subscription that failed to renew in the past. Check expires_date to determine the next renewal date and time.

```json
 "body": {
        "latest_receipt": "...",
        "latest_receipt_info": {
          "original_purchase_date_pst": "2019-09-02 03:31:16 America/Los_Angeles",
          "quantity": "1",
          "subscription_group_identifier": "20545527",
          "unique_vendor_identifier": "297C35B1-34B6-407F-97F4-BC67F89D5325",
          "original_purchase_date_ms": "1567420276000",
          "expires_date_formatted": "2019-11-23 18:20:38 Etc/GMT",
          "is_in_intro_offer_period": "false",
          "purchase_date_ms": "1574532938000",
          "expires_date_formatted_pst": "2019-11-23 10:20:38 America/Los_Angeles",
          "is_trial_period": "false",
          "item_id": "1477422734",
          "unique_identifier": "0c7cdd4a7342b13e3a59aa7e57a161ead5b1002d",
          "original_transaction_id": "1000000563776136",
          "expires_date": "1574533238000",
          "transaction_id": "1000000596464234",
          "bvrs": "26",
          "web_order_line_item_id": "1000000048482587",
          "version_external_identifier": "0",
          "bid": "com.freeramble.smsautosenderpro",
          "product_id": "com.freeramble.smsautosenderpro.9",
          "purchase_date": "2019-11-23 18:15:38 Etc/GMT",
          "purchase_date_pst": "2019-11-23 10:15:38 America/Los_Angeles",
          "original_purchase_date": "2019-09-02 10:31:16 Etc/GMT"
        },
        "environment": "Sandbox",
        "auto_renew_status": "true",
        "password": "...",
        "auto_renew_product_id": "com.freeramble.smsautosenderpro.9",
        "notification_type": "RENEWAL"
      },
```

# User with two separated subscription group:

Apple response with one product_id_1:

```json
{
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1454502457,
    "app_item_id": 1454502457,
    "bundle_id": "com.freeramble.smsautosenderpro",
    "application_version": "48",
    "download_id": 72057197886892,
    "version_external_identifier": 833235891,
    "receipt_creation_date": "2019-11-24 01:26:19 Etc/GMT",
    "receipt_creation_date_ms": "1574558779000",
    "receipt_creation_date_pst": "2019-11-23 17:26:19 America/Los_Angeles",
    "request_date": "2019-11-24 05:11:23 Etc/GMT",
    "request_date_ms": "1574572283535",
    "request_date_pst": "2019-11-23 21:11:23 America/Los_Angeles",
    "original_purchase_date": "2019-10-23 23:35:34 Etc/GMT",
    "original_purchase_date_ms": "1571873734000",
    "original_purchase_date_pst": "2019-10-23 16:35:34 America/Los_Angeles",
    "original_application_version": "48",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "com.freeramble.smsautosenderpro.6",
        "transaction_id": "320000598147150",
        "original_transaction_id": "320000598147150",
        "purchase_date": "2019-10-23 23:46:30 Etc/GMT",
        "purchase_date_ms": "1571874390000",
        "purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
        "original_purchase_date": "2019-10-23 23:46:30 Etc/GMT",
        "original_purchase_date_ms": "1571874390000",
        "original_purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
        "expires_date": "2019-11-24 00:46:30 Etc/GMT",
        "expires_date_ms": "1574556390000",
        "expires_date_pst": "2019-11-23 16:46:30 America/Los_Angeles",
        "web_order_line_item_id": "320000203084974",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      },
      {
        "quantity": "1",
        "product_id": "com.freeramble.smsautosenderpro.6",
        "transaction_id": "320000610061455",
        "original_transaction_id": "320000598147150",
        "purchase_date": "2019-11-24 00:46:30 Etc/GMT",
        "purchase_date_ms": "1574556390000",
        "purchase_date_pst": "2019-11-23 16:46:30 America/Los_Angeles",
        "original_purchase_date": "2019-10-23 23:46:30 Etc/GMT",
        "original_purchase_date_ms": "1571874390000",
        "original_purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
        "expires_date": "2019-12-24 00:46:30 Etc/GMT",
        "expires_date_ms": "1577148390000",
        "expires_date_pst": "2019-12-23 16:46:30 America/Los_Angeles",
        "web_order_line_item_id": "320000203084975",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      },
      {
        "quantity": "1",
        "product_id": "com.freeramble.smsautosenderpro.9",
        "transaction_id": "320000598149193",
        "original_transaction_id": "320000598149193",
        "purchase_date": "2019-10-23 23:54:49 Etc/GMT",
        "purchase_date_ms": "1571874889000",
        "purchase_date_pst": "2019-10-23 16:54:49 America/Los_Angeles",
        "original_purchase_date": "2019-10-23 23:54:50 Etc/GMT",
        "original_purchase_date_ms": "1571874890000",
        "original_purchase_date_pst": "2019-10-23 16:54:50 America/Los_Angeles",
        "expires_date": "2019-11-24 00:54:49 Etc/GMT",
        "expires_date_ms": "1574556889000",
        "expires_date_pst": "2019-11-23 16:54:49 America/Los_Angeles",
        "web_order_line_item_id": "320000203086116",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      },
      {
        "quantity": "1",
        "product_id": "com.freeramble.smsautosenderpro.9",
        "transaction_id": "320000610064135",
        "original_transaction_id": "320000598149193",
        "purchase_date": "2019-11-24 00:54:49 Etc/GMT",
        "purchase_date_ms": "1574556889000",
        "purchase_date_pst": "2019-11-23 16:54:49 America/Los_Angeles",
        "original_purchase_date": "2019-10-23 23:54:50 Etc/GMT",
        "original_purchase_date_ms": "1571874890000",
        "original_purchase_date_pst": "2019-10-23 16:54:50 America/Los_Angeles",
        "expires_date": "2019-12-24 00:54:49 Etc/GMT",
        "expires_date_ms": "1577148889000",
        "expires_date_pst": "2019-12-23 16:54:49 America/Los_Angeles",
        "web_order_line_item_id": "320000203086117",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "com.freeramble.smsautosenderpro.6",
      "transaction_id": "320000598147150",
      "original_transaction_id": "320000598147150",
      "purchase_date": "2019-10-23 23:46:30 Etc/GMT",
      "purchase_date_ms": "1571874390000",
      "purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
      "original_purchase_date": "2019-10-23 23:46:30 Etc/GMT",
      "original_purchase_date_ms": "1571874390000",
      "original_purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
      "expires_date": "2019-11-24 00:46:30 Etc/GMT",
      "expires_date_ms": "1574556390000",
      "expires_date_pst": "2019-11-23 16:46:30 America/Los_Angeles",
      "web_order_line_item_id": "320000203084974",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20511867"
    },
    {
      "quantity": "1",
      "product_id": "com.freeramble.smsautosenderpro.9",
      "transaction_id": "320000598149193",
      "original_transaction_id": "320000598149193",
      "purchase_date": "2019-10-23 23:54:49 Etc/GMT",
      "purchase_date_ms": "1571874889000",
      "purchase_date_pst": "2019-10-23 16:54:49 America/Los_Angeles",
      "original_purchase_date": "2019-10-23 23:54:50 Etc/GMT",
      "original_purchase_date_ms": "1571874890000",
      "original_purchase_date_pst": "2019-10-23 16:54:50 America/Los_Angeles",
      "expires_date": "2019-11-24 00:54:49 Etc/GMT",
      "expires_date_ms": "1574556889000",
      "expires_date_pst": "2019-11-23 16:54:49 America/Los_Angeles",
      "web_order_line_item_id": "320000203086116",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20545527"
    },
    {
      "quantity": "1",
      "product_id": "com.freeramble.smsautosenderpro.6",
      "transaction_id": "320000610061455",
      "original_transaction_id": "320000598147150",
      "purchase_date": "2019-11-24 00:46:30 Etc/GMT",
      "purchase_date_ms": "1574556390000",
      "purchase_date_pst": "2019-11-23 16:46:30 America/Los_Angeles",
      "original_purchase_date": "2019-10-23 23:46:30 Etc/GMT",
      "original_purchase_date_ms": "1571874390000",
      "original_purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
      "expires_date": "2019-12-24 00:46:30 Etc/GMT",
      "expires_date_ms": "1577148390000",
      "expires_date_pst": "2019-12-23 16:46:30 America/Los_Angeles",
      "web_order_line_item_id": "320000203084975",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20511867"
    },
    {
      "quantity": "1",
      "product_id": "com.freeramble.smsautosenderpro.9",
      "transaction_id": "320000610064135",
      "original_transaction_id": "320000598149193",
      "purchase_date": "2019-11-24 00:54:49 Etc/GMT",
      "purchase_date_ms": "1574556889000",
      "purchase_date_pst": "2019-11-23 16:54:49 America/Los_Angeles",
      "original_purchase_date": "2019-10-23 23:54:50 Etc/GMT",
      "original_purchase_date_ms": "1571874890000",
      "original_purchase_date_pst": "2019-10-23 16:54:50 America/Los_Angeles",
      "expires_date": "2019-12-24 00:54:49 Etc/GMT",
      "expires_date_ms": "1577148889000",
      "expires_date_pst": "2019-12-23 16:54:49 America/Los_Angeles",
      "web_order_line_item_id": "320000203086117",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20545527"
    }
  ],
  "latest_receipt": "...",
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "com.freeramble.smsautosenderpro.6",
      "original_transaction_id": "320000598147150",
      "product_id": "com.freeramble.smsautosenderpro.6",
      "auto_renew_status": "1"
    },
    {
      "auto_renew_product_id": "com.freeramble.smsautosenderpro.9",
      "original_transaction_id": "320000598149193",
      "product_id": "com.freeramble.smsautosenderpro.9",
      "auto_renew_status": "1"
    }
  ]
}
```

```json
{
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1454502457,
    "app_item_id": 1454502457,
    "bundle_id": "com.freeramble.smsautosenderpro",
    "application_version": "48",
    "download_id": 72057197886892,
    "version_external_identifier": 833235891,
    "receipt_creation_date": "2019-11-24 01:26:17 Etc/GMT",
    "receipt_creation_date_ms": "1574558777000",
    "receipt_creation_date_pst": "2019-11-23 17:26:17 America/Los_Angeles",
    "request_date": "2019-11-24 05:07:07 Etc/GMT",
    "request_date_ms": "1574572027972",
    "request_date_pst": "2019-11-23 21:07:07 America/Los_Angeles",
    "original_purchase_date": "2019-10-23 23:35:34 Etc/GMT",
    "original_purchase_date_ms": "1571873734000",
    "original_purchase_date_pst": "2019-10-23 16:35:34 America/Los_Angeles",
    "original_application_version": "48",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "com.freeramble.smsautosenderpro.6",
        "transaction_id": "320000598147150",
        "original_transaction_id": "320000598147150",
        "purchase_date": "2019-10-23 23:46:30 Etc/GMT",
        "purchase_date_ms": "1571874390000",
        "purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
        "original_purchase_date": "2019-10-23 23:46:30 Etc/GMT",
        "original_purchase_date_ms": "1571874390000",
        "original_purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
        "expires_date": "2019-11-24 00:46:30 Etc/GMT",
        "expires_date_ms": "1574556390000",
        "expires_date_pst": "2019-11-23 16:46:30 America/Los_Angeles",
        "web_order_line_item_id": "320000203084974",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      },
      {
        "quantity": "1",
        "product_id": "com.freeramble.smsautosenderpro.6",
        "transaction_id": "320000610061455",
        "original_transaction_id": "320000598147150",
        "purchase_date": "2019-11-24 00:46:30 Etc/GMT",
        "purchase_date_ms": "1574556390000",
        "purchase_date_pst": "2019-11-23 16:46:30 America/Los_Angeles",
        "original_purchase_date": "2019-10-23 23:46:30 Etc/GMT",
        "original_purchase_date_ms": "1571874390000",
        "original_purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
        "expires_date": "2019-12-24 00:46:30 Etc/GMT",
        "expires_date_ms": "1577148390000",
        "expires_date_pst": "2019-12-23 16:46:30 America/Los_Angeles",
        "web_order_line_item_id": "320000203084975",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      },
      {
        "quantity": "1",
        "product_id": "com.freeramble.smsautosenderpro.9",
        "transaction_id": "320000598149193",
        "original_transaction_id": "320000598149193",
        "purchase_date": "2019-10-23 23:54:49 Etc/GMT",
        "purchase_date_ms": "1571874889000",
        "purchase_date_pst": "2019-10-23 16:54:49 America/Los_Angeles",
        "original_purchase_date": "2019-10-23 23:54:50 Etc/GMT",
        "original_purchase_date_ms": "1571874890000",
        "original_purchase_date_pst": "2019-10-23 16:54:50 America/Los_Angeles",
        "expires_date": "2019-11-24 00:54:49 Etc/GMT",
        "expires_date_ms": "1574556889000",
        "expires_date_pst": "2019-11-23 16:54:49 America/Los_Angeles",
        "web_order_line_item_id": "320000203086116",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      },
      {
        "quantity": "1",
        "product_id": "com.freeramble.smsautosenderpro.9",
        "transaction_id": "320000610064135",
        "original_transaction_id": "320000598149193",
        "purchase_date": "2019-11-24 00:54:49 Etc/GMT",
        "purchase_date_ms": "1574556889000",
        "purchase_date_pst": "2019-11-23 16:54:49 America/Los_Angeles",
        "original_purchase_date": "2019-10-23 23:54:50 Etc/GMT",
        "original_purchase_date_ms": "1571874890000",
        "original_purchase_date_pst": "2019-10-23 16:54:50 America/Los_Angeles",
        "expires_date": "2019-12-24 00:54:49 Etc/GMT",
        "expires_date_ms": "1577148889000",
        "expires_date_pst": "2019-12-23 16:54:49 America/Los_Angeles",
        "web_order_line_item_id": "320000203086117",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "com.freeramble.smsautosenderpro.6",
      "transaction_id": "320000598147150",
      "original_transaction_id": "320000598147150",
      "purchase_date": "2019-10-23 23:46:30 Etc/GMT",
      "purchase_date_ms": "1571874390000",
      "purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
      "original_purchase_date": "2019-10-23 23:46:30 Etc/GMT",
      "original_purchase_date_ms": "1571874390000",
      "original_purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
      "expires_date": "2019-11-24 00:46:30 Etc/GMT",
      "expires_date_ms": "1574556390000",
      "expires_date_pst": "2019-11-23 16:46:30 America/Los_Angeles",
      "web_order_line_item_id": "320000203084974",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20511867"
    },
    {
      "quantity": "1",
      "product_id": "com.freeramble.smsautosenderpro.9",
      "transaction_id": "320000598149193",
      "original_transaction_id": "320000598149193",
      "purchase_date": "2019-10-23 23:54:49 Etc/GMT",
      "purchase_date_ms": "1571874889000",
      "purchase_date_pst": "2019-10-23 16:54:49 America/Los_Angeles",
      "original_purchase_date": "2019-10-23 23:54:50 Etc/GMT",
      "original_purchase_date_ms": "1571874890000",
      "original_purchase_date_pst": "2019-10-23 16:54:50 America/Los_Angeles",
      "expires_date": "2019-11-24 00:54:49 Etc/GMT",
      "expires_date_ms": "1574556889000",
      "expires_date_pst": "2019-11-23 16:54:49 America/Los_Angeles",
      "web_order_line_item_id": "320000203086116",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20545527"
    },
    {
      "quantity": "1",
      "product_id": "com.freeramble.smsautosenderpro.6",
      "transaction_id": "320000610061455",
      "original_transaction_id": "320000598147150",
      "purchase_date": "2019-11-24 00:46:30 Etc/GMT",
      "purchase_date_ms": "1574556390000",
      "purchase_date_pst": "2019-11-23 16:46:30 America/Los_Angeles",
      "original_purchase_date": "2019-10-23 23:46:30 Etc/GMT",
      "original_purchase_date_ms": "1571874390000",
      "original_purchase_date_pst": "2019-10-23 16:46:30 America/Los_Angeles",
      "expires_date": "2019-12-24 00:46:30 Etc/GMT",
      "expires_date_ms": "1577148390000",
      "expires_date_pst": "2019-12-23 16:46:30 America/Los_Angeles",
      "web_order_line_item_id": "320000203084975",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20511867"
    },
    {
      "quantity": "1",
      "product_id": "com.freeramble.smsautosenderpro.9",
      "transaction_id": "320000610064135",
      "original_transaction_id": "320000598149193",
      "purchase_date": "2019-11-24 00:54:49 Etc/GMT",
      "purchase_date_ms": "1574556889000",
      "purchase_date_pst": "2019-11-23 16:54:49 America/Los_Angeles",
      "original_purchase_date": "2019-10-23 23:54:50 Etc/GMT",
      "original_purchase_date_ms": "1571874890000",
      "original_purchase_date_pst": "2019-10-23 16:54:50 America/Los_Angeles",
      "expires_date": "2019-12-24 00:54:49 Etc/GMT",
      "expires_date_ms": "1577148889000",
      "expires_date_pst": "2019-12-23 16:54:49 America/Los_Angeles",
      "web_order_line_item_id": "320000203086117",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20545527"
    }
  ],
  "latest_receipt": "...",
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "com.freeramble.smsautosenderpro.6",
      "original_transaction_id": "320000598147150",
      "product_id": "com.freeramble.smsautosenderpro.6",
      "auto_renew_status": "1"
    },
    {
      "auto_renew_product_id": "com.freeramble.smsautosenderpro.9",
      "original_transaction_id": "320000598149193",
      "product_id": "com.freeramble.smsautosenderpro.9",
      "auto_renew_status": "1"
    }
  ]
}
```

Reference:
https://developer.apple.com/documentation/appstoreservernotifications/notification_type
