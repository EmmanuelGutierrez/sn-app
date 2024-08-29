/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation Login($loginUserInput: LoginInputDto!) {\n  login(loginUserInput: $loginUserInput) {\n    token\n  }\n}": types.LoginDocument,
    "query Me {\n  me {\n    _id\n    name\n    username\n    email\n    profile_image {\n      _id\n      asset_id\n      public_id\n      format\n      resource_type\n      bytes\n      url\n      secure_url\n      folder\n      original_filename\n    }\n    following {\n      followDate\n      user {\n        _id\n        username\n      }\n    }\n    followers {\n      followDate\n      user {\n        _id\n        username\n      }\n    }\n    birth_date\n  }\n}": types.MeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation Login($loginUserInput: LoginInputDto!) {\n  login(loginUserInput: $loginUserInput) {\n    token\n  }\n}"): (typeof documents)["mutation Login($loginUserInput: LoginInputDto!) {\n  login(loginUserInput: $loginUserInput) {\n    token\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Me {\n  me {\n    _id\n    name\n    username\n    email\n    profile_image {\n      _id\n      asset_id\n      public_id\n      format\n      resource_type\n      bytes\n      url\n      secure_url\n      folder\n      original_filename\n    }\n    following {\n      followDate\n      user {\n        _id\n        username\n      }\n    }\n    followers {\n      followDate\n      user {\n        _id\n        username\n      }\n    }\n    birth_date\n  }\n}"): (typeof documents)["query Me {\n  me {\n    _id\n    name\n    username\n    email\n    profile_image {\n      _id\n      asset_id\n      public_id\n      format\n      resource_type\n      bytes\n      url\n      secure_url\n      folder\n      original_filename\n    }\n    following {\n      followDate\n      user {\n        _id\n        username\n      }\n    }\n    followers {\n      followDate\n      user {\n        _id\n        username\n      }\n    }\n    birth_date\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;