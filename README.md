# Aggregation Service API

#### Getting started

```shell
npm i && npm start
```

#### Get a Product

Wundergraph stitches the WordPress Product ACF fields and the Shopify product data together using the slug coming from WordPress. This is joined as the handle in Shopify. 

With this in mind, all you need to do in order to change the product that is presented is to add a param with the slug to the url such as follows:

```shell
curl http://localhost:9991/operations/Product?="radiowave-shirt"
```

`wundergraph.config.ts` contains the configuration for both APIs to be joined.

## Learn More

Read the [Docs](https://wundergraph.com/docs).

## Deploy to WunderGraph Cloud

[![Deploy to WunderGraph](https://wundergraph.com/button)](https://cloud.wundergraph.com/new/clone?templateName=simple)

## Got Questions?

Join us on [Discord](https://wundergraph.com/discord)!
