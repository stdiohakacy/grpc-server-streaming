// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_user_pb = require('../protos/user_pb.js');

function serialize_user_UserRequest(arg) {
  if (!(arg instanceof protos_user_pb.UserRequest)) {
    throw new Error('Expected argument of type user.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserRequest(buffer_arg) {
  return protos_user_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserResponse(arg) {
  if (!(arg instanceof protos_user_pb.UserResponse)) {
    throw new Error('Expected argument of type user.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserResponse(buffer_arg) {
  return protos_user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  listUser: {
    path: '/user.UserService/listUser',
    requestStream: false,
    responseStream: true,
    requestType: protos_user_pb.UserRequest,
    responseType: protos_user_pb.UserResponse,
    requestSerialize: serialize_user_UserRequest,
    requestDeserialize: deserialize_user_UserRequest,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
