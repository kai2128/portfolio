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
    "\n    query AboutQuery {\n      abouts(first: 1) {\n        languages\n        overview\n        services\n      }\n    }\n": types.AboutQueryDocument,
    "\n  query ContactQuery {\n    contacts(first: 1){\n      adress\n      googleMapUrl\n      email\n    }\n  }\n": types.ContactQueryDocument,
    "\n  query ProjectQuery {\n    projects {\n      id\n      imgUrl\n      name\n      description\n      tags\n      publishedAt\n      url\n    }\n  }\n": types.ProjectQueryDocument,
    "\nquery SkillQuery {\n  skills(first: 1) {\n    programmingLanguage {\n      ...T\n    }\n    frontend {\n      ...T\n    }\n    backend {\n      ...T\n    }\n    libraries {\n      ...T\n    }\n    game {\n      ...T\n    }\n    mobile {\n      ...T\n    }\n    database {\n      ...T\n    }\n    cicd {\n      ...T\n    }\n    tools {\n      ...T\n    }\n  }\n}\n\nfragment T on Tech {\n  name\n  iconUrl\n}\n": types.SkillQueryDocument,
    "\n query CommentsQuery($first: Int!, $after: String) {\n        commentsConnection(\n          first: $first\n          after: $after\n          orderBy: createdAt_DESC\n          stage: DRAFT\n        ) {\n          edges {\n            cursor\n            node {\n              comment\n              createdAt\n              id\n              name\n            }\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n": types.CommentsQueryDocument,
    "\n  mutation CreateComment ($name: String!, $comment: String!) {\n    createComment(data: {name: $name, comment: $comment}) {\n      id\n      name\n      comment\n      createdAt\n    }\n  }\n": types.CreateCommentDocument,
    "\n mutation PublishComment($id: ID!) {\n  publishComment(where: {id: $id}, to: PUBLISHED){\n      id\n      name\n      comment\n      createdAt\n  }\n}\n": types.PublishCommentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query AboutQuery {\n      abouts(first: 1) {\n        languages\n        overview\n        services\n      }\n    }\n"): (typeof documents)["\n    query AboutQuery {\n      abouts(first: 1) {\n        languages\n        overview\n        services\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ContactQuery {\n    contacts(first: 1){\n      adress\n      googleMapUrl\n      email\n    }\n  }\n"): (typeof documents)["\n  query ContactQuery {\n    contacts(first: 1){\n      adress\n      googleMapUrl\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProjectQuery {\n    projects {\n      id\n      imgUrl\n      name\n      description\n      tags\n      publishedAt\n      url\n    }\n  }\n"): (typeof documents)["\n  query ProjectQuery {\n    projects {\n      id\n      imgUrl\n      name\n      description\n      tags\n      publishedAt\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery SkillQuery {\n  skills(first: 1) {\n    programmingLanguage {\n      ...T\n    }\n    frontend {\n      ...T\n    }\n    backend {\n      ...T\n    }\n    libraries {\n      ...T\n    }\n    game {\n      ...T\n    }\n    mobile {\n      ...T\n    }\n    database {\n      ...T\n    }\n    cicd {\n      ...T\n    }\n    tools {\n      ...T\n    }\n  }\n}\n\nfragment T on Tech {\n  name\n  iconUrl\n}\n"): (typeof documents)["\nquery SkillQuery {\n  skills(first: 1) {\n    programmingLanguage {\n      ...T\n    }\n    frontend {\n      ...T\n    }\n    backend {\n      ...T\n    }\n    libraries {\n      ...T\n    }\n    game {\n      ...T\n    }\n    mobile {\n      ...T\n    }\n    database {\n      ...T\n    }\n    cicd {\n      ...T\n    }\n    tools {\n      ...T\n    }\n  }\n}\n\nfragment T on Tech {\n  name\n  iconUrl\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n query CommentsQuery($first: Int!, $after: String) {\n        commentsConnection(\n          first: $first\n          after: $after\n          orderBy: createdAt_DESC\n          stage: DRAFT\n        ) {\n          edges {\n            cursor\n            node {\n              comment\n              createdAt\n              id\n              name\n            }\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n"): (typeof documents)["\n query CommentsQuery($first: Int!, $after: String) {\n        commentsConnection(\n          first: $first\n          after: $after\n          orderBy: createdAt_DESC\n          stage: DRAFT\n        ) {\n          edges {\n            cursor\n            node {\n              comment\n              createdAt\n              id\n              name\n            }\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateComment ($name: String!, $comment: String!) {\n    createComment(data: {name: $name, comment: $comment}) {\n      id\n      name\n      comment\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateComment ($name: String!, $comment: String!) {\n    createComment(data: {name: $name, comment: $comment}) {\n      id\n      name\n      comment\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n mutation PublishComment($id: ID!) {\n  publishComment(where: {id: $id}, to: PUBLISHED){\n      id\n      name\n      comment\n      createdAt\n  }\n}\n"): (typeof documents)["\n mutation PublishComment($id: ID!) {\n  publishComment(where: {id: $id}, to: PUBLISHED){\n      id\n      name\n      comment\n      createdAt\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;