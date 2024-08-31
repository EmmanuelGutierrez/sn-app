/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreatePostDto = {
  body: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserDto = {
  birth_date?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type File = {
  _id: Scalars['ID']['output'];
  asset_id?: Maybe<Scalars['String']['output']>;
  bytes: Scalars['Float']['output'];
  createdAt: Scalars['Float']['output'];
  folder?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  original_filename: Scalars['String']['output'];
  public_id: Scalars['String']['output'];
  resource_type: Scalars['String']['output'];
  secure_url: Scalars['String']['output'];
  updatedAt: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type FilterDto = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FollowUserDto = {
  _id: Scalars['ID']['output'];
  followDate: Scalars['Float']['output'];
  user: User;
};

export type LoginInputDto = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  comment: Post;
  createPost: Post;
  followUser: Scalars['Boolean']['output'];
  login: TokenReturnDto;
  register: TokenReturnDto;
  updatePost: Post;
  updateReaction: Post;
};


export type MutationCommentArgs = {
  data: CreatePostDto;
  id: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  data: CreatePostDto;
};


export type MutationFollowUserArgs = {
  userToFollowId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginInputDto;
};


export type MutationRegisterArgs = {
  data: CreateUserDto;
};


export type MutationUpdatePostArgs = {
  data: UpdatePostDto;
};


export type MutationUpdateReactionArgs = {
  id: Scalars['String']['input'];
};

export type Post = {
  _id: Scalars['ID']['output'];
  body: Scalars['String']['output'];
  comments: Array<Post>;
  createdAt: Scalars['Float']['output'];
  images?: Maybe<Array<File>>;
  reactions: Array<User>;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: PostTypes;
  updatedAt: Scalars['Float']['output'];
  user: User;
};

export type PostDataReturnDto = {
  data: Array<Post>;
  inThisPage: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type Query = {
  allFiles: Array<File>;
  allPosts: PostDataReturnDto;
  getComments: Post;
  getOne: Post;
  me: User;
  mePosts: PostDataReturnDto;
  users: Array<User>;
};


export type QueryAllPostsArgs = {
  params: FilterDto;
};


export type QueryGetCommentsArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetOneArgs = {
  id: Scalars['String']['input'];
};


export type QueryMePostsArgs = {
  params: FilterDto;
};

export type TokenReturnDto = {
  token: Scalars['String']['output'];
};

export type UpdatePostDto = {
  id: Scalars['String']['input'];
};

export type User = {
  _id: Scalars['ID']['output'];
  birth_date?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['Float']['output'];
  email: Scalars['String']['output'];
  followers: Array<FollowUserDto>;
  following: Array<FollowUserDto>;
  name: Scalars['String']['output'];
  profile_image?: Maybe<File>;
  role: Roles;
  updatedAt: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

/** post type */
export enum PostTypes {
  Comment = 'COMMENT',
  Post = 'POST'
}

/** Indicates the user role */
export enum Roles {
  Admin = 'ADMIN',
  User = 'USER'
}

export type CreatePostMutationVariables = Exact<{
  data: CreatePostDto;
}>;


export type CreatePostMutation = { createPost: { _id: string } };

export type LoginMutationVariables = Exact<{
  loginUserInput: LoginInputDto;
}>;


export type LoginMutation = { login: { token: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me: { _id: string, name: string, username: string, email: string, birth_date?: number | null, profile_image?: { _id: string, asset_id?: string | null, public_id: string, format: string, resource_type: string, bytes: number, url: string, secure_url: string, folder?: string | null, original_filename: string } | null, following: Array<{ followDate: number, user: { _id: string, username: string } }>, followers: Array<{ followDate: number, user: { _id: string, username: string } }> } };


export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInputDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"asset_id"}},{"kind":"Field","name":{"kind":"Name","value":"public_id"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"resource_type"}},{"kind":"Field","name":{"kind":"Name","value":"bytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"secure_url"}},{"kind":"Field","name":{"kind":"Name","value":"folder"}},{"kind":"Field","name":{"kind":"Name","value":"original_filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followDate"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followDate"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"birth_date"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;