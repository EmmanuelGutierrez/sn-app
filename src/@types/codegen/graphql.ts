/* eslint-disable */
import { gql } from '@apollo/client';
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
  title: Scalars['String']['input'];
};

export type CreateUserDto = {
  birth_date?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  _id: Scalars['ID']['output'];
  asset_id?: Maybe<Scalars['String']['output']>;
  bytes: Scalars['Float']['output'];
  folder?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  original_filename: Scalars['String']['output'];
  public_id: Scalars['String']['output'];
  resource_type: Scalars['String']['output'];
  secure_url: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FilterDto = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LoginInputDto = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  comment: Post;
  createPost: Post;
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
  __typename?: 'Post';
  _id: Scalars['ID']['output'];
  body: Scalars['String']['output'];
  comments: Array<Post>;
  images?: Maybe<Array<File>>;
  reactions: Array<User>;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: PostTypes;
  user: User;
};

export type PostDataReturnDto = {
  __typename?: 'PostDataReturnDto';
  data: Array<Post>;
  inThisPage: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
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
  __typename?: 'TokenReturnDto';
  token: Scalars['String']['output'];
};

export type UpdatePostDto = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  birth_date?: Maybe<Scalars['Float']['output']>;
  email: Scalars['String']['output'];
  followers: Array<User>;
  following: Array<User>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profile_image?: Maybe<File>;
  role: Roles;
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
  title: Scalars['String']['input'];
};

export type CreateUserDto = {
  birth_date?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  _id: Scalars['ID']['output'];
  asset_id?: Maybe<Scalars['String']['output']>;
  bytes: Scalars['Float']['output'];
  folder?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  original_filename: Scalars['String']['output'];
  public_id: Scalars['String']['output'];
  resource_type: Scalars['String']['output'];
  secure_url: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FilterDto = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LoginInputDto = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  comment: Post;
  createPost: Post;
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
  __typename?: 'Post';
  _id: Scalars['ID']['output'];
  body: Scalars['String']['output'];
  comments: Array<Post>;
  images?: Maybe<Array<File>>;
  reactions: Array<User>;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: PostTypes;
  user: User;
};

export type PostDataReturnDto = {
  __typename?: 'PostDataReturnDto';
  data: Array<Post>;
  inThisPage: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
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
  __typename?: 'TokenReturnDto';
  token: Scalars['String']['output'];
};

export type UpdatePostDto = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  birth_date?: Maybe<Scalars['Float']['output']>;
  email: Scalars['String']['output'];
  followers: Array<User>;
  following: Array<User>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profile_image?: Maybe<File>;
  role: Roles;
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
