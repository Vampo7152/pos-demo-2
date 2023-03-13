## Solana HH Vietnam POS activation

This is a POS store for the Solana HackerHouse - Vietnam edition, where attendees can buy amazing merch and refreshments paying in SOL and SPL tokens! Getting $SMAO cashback on each successful order and also enjoying discounts for holding a SAMO NFT or the Attendance NFT (available to mint at the IRL site)

## Specifications

The IRL payment experinces for this site is powered by [CandyPay](https://candypay.fun) and this store follows these particular specifications- 

- Product details available: [Landing Page](https://github.com/Vampo7152/hh-vietnam-special/blob/main/pages/index.tsx) & [Details Page](https://github.com/Vampo7152/hh-vietnam-special/blob/main/pages/items/%5Bid%5D.tsx)
- `100%` Discount available for the holders of `Attendance NFT`(available to mint IRL at event gates), details available [here](https://github.com/Vampo7152/hh-vietnam-special/blob/db8d0099a4ed75753b8fe89d14702648fb87dfa9/pages/api/create-session.ts#L10-L23)
- Merchant account uses webhook service for airdropping 5 $SAMO cashback for each dollar spent on the store, directly to the user wallet address. Source code for webhook service available [here](https://github.com/Vampo7152/hh-vietnam-webhook)

## Deploy on Vercel

The easiest way to deploy this store is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Make sure to provide the merchant's API Key in the following key values: 
```bash
NEXT_PUBLIC_CANDYPAY_PUBLIC_API_KEY

CANDYPAY_PRIVATE_API_KEY
```
