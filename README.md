# LoopBack + webpack build example

This is a fork of the [Getting started with LoopBack](http://docs.strongloop.com/display/LB/Getting+started+with+LoopBack) tutorial demonstrating how to build a LoopBack application with [`webpack`](https://webpack.github.io/). Specifically we handle issues relating to [`loopback-boot`](https://apidocs.strongloop.com/loopback-boot/) and associated dynamic module dependencies.
This is a fork of the [loopback-webpack-example](https://github.com/zamb3zi/loopback-webpack-example) which used new versions of webpack and loopback and didn't use gulp

#### Installation

```bash
git clone git://github.com/zamb3zi/loopback-webpack-example
cd loopback-webpack-example
npm install
npm run build
node build/main.bundle.js
```

---

[More LoopBack examples](https://github.com/strongloop/loopback-example)
