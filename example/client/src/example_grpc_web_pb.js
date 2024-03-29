/**
 * @fileoverview gRPC-Web generated client stub for s12.example
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.s12 = {};
proto.s12.example = require('./example_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.s12.example.ExampleServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.s12.example.ExampleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.s12.example.ExampleOneRequest,
 *   !proto.s12.example.ExampleOneResponse>}
 */
const methodDescriptor_ExampleService_ExampleOne = new grpc.web.MethodDescriptor(
  '/s12.example.ExampleService/ExampleOne',
  grpc.web.MethodType.UNARY,
  proto.s12.example.ExampleOneRequest,
  proto.s12.example.ExampleOneResponse,
  /**
   * @param {!proto.s12.example.ExampleOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.s12.example.ExampleOneResponse.deserializeBinary
);


/**
 * @param {!proto.s12.example.ExampleOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.s12.example.ExampleOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.s12.example.ExampleOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.s12.example.ExampleServiceClient.prototype.exampleOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/s12.example.ExampleService/ExampleOne',
      request,
      metadata || {},
      methodDescriptor_ExampleService_ExampleOne,
      callback);
};


/**
 * @param {!proto.s12.example.ExampleOneRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.s12.example.ExampleOneResponse>}
 *     Promise that resolves to the response
 */
proto.s12.example.ExampleServicePromiseClient.prototype.exampleOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/s12.example.ExampleService/ExampleOne',
      request,
      metadata || {},
      methodDescriptor_ExampleService_ExampleOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.s12.example.ExampleTwoRequest,
 *   !proto.s12.example.ExampleTwoResponse>}
 */
const methodDescriptor_ExampleService_ExampleTwo = new grpc.web.MethodDescriptor(
  '/s12.example.ExampleService/ExampleTwo',
  grpc.web.MethodType.UNARY,
  proto.s12.example.ExampleTwoRequest,
  proto.s12.example.ExampleTwoResponse,
  /**
   * @param {!proto.s12.example.ExampleTwoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.s12.example.ExampleTwoResponse.deserializeBinary
);


/**
 * @param {!proto.s12.example.ExampleTwoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.s12.example.ExampleTwoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.s12.example.ExampleTwoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.s12.example.ExampleServiceClient.prototype.exampleTwo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/s12.example.ExampleService/ExampleTwo',
      request,
      metadata || {},
      methodDescriptor_ExampleService_ExampleTwo,
      callback);
};


/**
 * @param {!proto.s12.example.ExampleTwoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.s12.example.ExampleTwoResponse>}
 *     Promise that resolves to the response
 */
proto.s12.example.ExampleServicePromiseClient.prototype.exampleTwo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/s12.example.ExampleService/ExampleTwo',
      request,
      metadata || {},
      methodDescriptor_ExampleService_ExampleTwo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.s12.example.ExampleOneRequest,
 *   !proto.s12.example.ExampleOneResponse>}
 */
const methodDescriptor_ExampleService_AlwaysError = new grpc.web.MethodDescriptor(
  '/s12.example.ExampleService/AlwaysError',
  grpc.web.MethodType.UNARY,
  proto.s12.example.ExampleOneRequest,
  proto.s12.example.ExampleOneResponse,
  /**
   * @param {!proto.s12.example.ExampleOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.s12.example.ExampleOneResponse.deserializeBinary
);


/**
 * @param {!proto.s12.example.ExampleOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.s12.example.ExampleOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.s12.example.ExampleOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.s12.example.ExampleServiceClient.prototype.alwaysError =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/s12.example.ExampleService/AlwaysError',
      request,
      metadata || {},
      methodDescriptor_ExampleService_AlwaysError,
      callback);
};


/**
 * @param {!proto.s12.example.ExampleOneRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.s12.example.ExampleOneResponse>}
 *     Promise that resolves to the response
 */
proto.s12.example.ExampleServicePromiseClient.prototype.alwaysError =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/s12.example.ExampleService/AlwaysError',
      request,
      metadata || {},
      methodDescriptor_ExampleService_AlwaysError);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.s12.example.StreamRequest,
 *   !proto.s12.example.ServerTime>}
 */
const methodDescriptor_ExampleService_StreamingExample = new grpc.web.MethodDescriptor(
  '/s12.example.ExampleService/StreamingExample',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.s12.example.StreamRequest,
  proto.s12.example.ServerTime,
  /**
   * @param {!proto.s12.example.StreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.s12.example.ServerTime.deserializeBinary
);


/**
 * @param {!proto.s12.example.StreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.s12.example.ServerTime>}
 *     The XHR Node Readable Stream
 */
proto.s12.example.ExampleServiceClient.prototype.streamingExample =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/s12.example.ExampleService/StreamingExample',
      request,
      metadata || {},
      methodDescriptor_ExampleService_StreamingExample);
};


/**
 * @param {!proto.s12.example.StreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.s12.example.ServerTime>}
 *     The XHR Node Readable Stream
 */
proto.s12.example.ExampleServicePromiseClient.prototype.streamingExample =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/s12.example.ExampleService/StreamingExample',
      request,
      metadata || {},
      methodDescriptor_ExampleService_StreamingExample);
};


module.exports = proto.s12.example;

