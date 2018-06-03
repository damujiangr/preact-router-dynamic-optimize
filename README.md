# preact-router-dynamic-optimize
dynamic routing and common chunk for preact
> search `damujiangr:` for details

related: [damujiangr/react-router-dynamic-optimize](https://github.com/damujiangr/react-router-dynamic-optimize)

## Usage
1. command:
```
npm start       // start app
npm run build   // build and analysis
```

1. preact + preact-compat

    Fast 3kB alternative to React with the same modern API.

    [preact getting started](https://preactjs.com/guide/getting-started)

1. preact-router

    Connect your Preact components up to that address bar.

    Note: This is not a preact-compatible version of React Router. 

    [preact-router >>](https://github.com/developit/preact-router)


1. preact-async-route
    
    Lazy loading (code splitting) with preact-router can be implemented easily using the AsyncRoute module.

    [preact-async-route >>](https://github.com/prateekbh/preact-async-route)

1. history

    Manage session history with JavaScript.
    
    [history >>](https://github.com/ReactTraining/history)

1. bundle analysis, plugins: [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
```
// damujiangr: require
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// damujiangr: bundle analyer
new BundleAnalyzerPlugin(),
```
