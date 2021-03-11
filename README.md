# gRPC-Web Dev Tools: Interceptor Edition

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) 
[![GitHub](https://img.shields.io/github/license/jrapoport/grpc-web-devtools?style=flat-square)](https://github.com/jrapoport/grpc-web-devtools/blob/master/LICENSE)


[![Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-☕-6F4E37?style=flat-square)](https://www.buymeacoffee.com/jrapoport)


![gRPC-Web Dev Tools](screenshots/store_light_dark.png)
Now supports dark mode.

# gRPC-Web Interceptor Support

This fork of [grpc-web-devtools](https://github.com/SafetyCulture/grpc-web-devtools)
adds support for native gRPC-Web interceptors.

[SafetyCulture's previous version](https://github.com/SafetyCulture/grpc-web-devtools) 
was incompatible with other gRPC-Web interceptors and broke them — which made 
debugging things like JWT authorization over gRPC-Web impossible.

This version fixes that by reimplementing the extension as a pair of native 
gRPC-Web interceptors. Now you can include the debug interceptors alongside 
the other gRPC-Web interceptors in your chain, and it "just works".

I also added a new icon to indicate when a stream has ended (vs. the call 
returning).

Currently, a unary gRPC-Web callback uses the same internal gRPC-Web code path 
as a streaming call (as opposed to a unary promise). As a result, the unary 
callback appears as a streaming call in the debug panel.

**NOTE: This is a breaking change.**

## NEW Usage
```javascript
const devInterceptors = window.__GRPCWEB_DEVTOOLS__ || (() => {});
const {
  devToolsUnaryInterceptor,
  devToolsStreamInterceptor,
} = devInterceptors();

const opts = {
  unaryInterceptors: [devToolsUnaryInterceptor],
  streamInterceptors: [devToolsStreamInterceptor],
};
const client = new EchoServiceClient('http://myapi.com', null, opts);
```

## Installation

### Chrome

~~Via the [Chrome Web Store](https://chrome.google.com/webstore/detail/grpc-web-developer-tools/ddamlpimmiapbcopeoifjfmoabdbfbjj) (recommended)~~

or

1. build it with `make build`
1. open the **Extension Management** page by navigating to `chrome://extensions`.
1. enable **Developer Mode** by clicking the toggle switch next to "Developer mode".
1. Click the **LOAD UNPACKED** button and select the extension `./build` directory.

### Firefox

~~Via [Firefox Browser Add-Ons](https://addons.mozilla.org/en-US/firefox/addon/grpc-web-developer-tools/) (recommended)~~

or

1. build and package with `make package`
1. enter `about:debugging` in the URL bar of Firefox
1. click **This Firefox** > **Load Temporary Add-on...**
1. select the `grpc-web-devtools.zip` extention file

## Usage

```javascript
const devInterceptors = window.__GRPCWEB_DEVTOOLS__ || (() => {});
const {
  devToolsUnaryInterceptor,
  devToolsStreamInterceptor,
} = devInterceptors();

const opts = {
  unaryInterceptors: [devToolsUnaryInterceptor],
  streamInterceptors: [devToolsStreamInterceptor],
};
const client = new EchoServiceClient('http://myapi.com', null, opts);
```
> NOTE:
> Requires clients use grpc-web >= 1.2.1
> Requires that your generated client(s) use `protoc-gen-grpc-web` >= 1.2.1
> protoc-gen-grpc-web v1.2.1 is bundled

## Example

The example uses `docker-compose` to start a simple gRPC server, JavaScript
client and the Envoy proxy for gRPC-Web:

```bash
make example-up
```

Example will be running on [http://localhost:8080](http://localhost:8080)

To stop the example:

```bash
make example-down
```
