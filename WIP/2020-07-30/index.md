---
template: post
title: "Testing Feathers App with MongoDB"
slug: feathers-testing-with-mongodb
date: "2020-07-30"
category: feathers
tags: ["feathers", "mongodb", "testing", "error"]
---

MongoDB: useUnifiedTopology: false
https://github.com/facebook/jest/issues/9991

Setting useUnifiedTopology: false gets rid of the ReferenceError, but it's going to be deprecated.

DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.

```typescript
export default function (app: Application) {
  mongoose
    .connect(app.get("mongodb"), {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      logger.error(err)
      process.exit(1)
    })

  mongoose.Promise = global.Promise

  app.set("mongooseClient", mongoose)
}
```

```bash
ReferenceError: You are trying to `import` a file after the Jest environment has been torn down.

      at BufferList.Readable (../../node_modules/readable-stream/lib/_stream_readable.js:179:22)
      at BufferList.Duplex (../../node_modules/readable-stream/lib/_stream_duplex.js:67:12)
      at new BufferList (../../node_modules/bl/bl.js:33:16)
      at new MessageStream (../../node_modules/mongodb/lib/cmap/message_stream.js:35:21)
      at new Connection (../../node_modules/mongodb/lib/cmap/connection.js:51:28)

 RUNS  test/services/tenants.test.ts
/Users/jackywu/Projects/autohomekeeper/node_modules/readable-stream/lib/_stream_readable.js:111
  var isDuplex = stream instanceof Duplex;
                        ^
TypeError: Right-hand side of 'instanceof' is not callable
```
