import { graphql } from '@/gql/gql'

export const GET_ABOUT = graphql(`
    query AboutQuery {
      abouts(first: 1) {
        languages
        overview
        services
      }
    }
`)

export const GET_CONTACT = graphql(`
  query ContactQuery {
    contacts(first: 1){
      adress
      googleMapUrl
      email
    }
  }
`)

export const GET_PROJECT = graphql(`
  query ProjectQuery {
    projects(orderBy: date_DESC) {
      id
      imgUrl
      name
      description
      tags
      publishedAt
      url
    }
  }
`)

export const GET_SKILL = graphql(`
query SkillQuery {
  skills(first: 1) {
    programmingLanguage {
      ...T
    }
    frontend {
      ...T
    }
    backend {
      ...T
    }
    libraries {
      ...T
    }
    game {
      ...T
    }
    mobile {
      ...T
    }
    database {
      ...T
    }
    cicd {
      ...T
    }
    tools {
      ...T
    }
  }
}

fragment T on Tech {
  name
  iconUrl
}
`)

export const GET_COMMENTS = graphql(`
 query CommentsQuery($first: Int!, $after: String) {
        commentsConnection(
          first: $first
          after: $after
          orderBy: createdAt_DESC
          stage: DRAFT
        ) {
          edges {
            cursor
            node {
              comment
              createdAt
              id
              name
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
`)

export const CREATE_COMMENT = graphql(`
  mutation CreateComment ($name: String!, $comment: String!) {
    createComment(data: {name: $name, comment: $comment}) {
      id
      name
      comment
      createdAt
    }
  }
`)

export const PUBLISH_COMMENT = graphql(`
 mutation PublishComment($id: ID!) {
  publishComment(where: {id: $id}, to: PUBLISHED){
      id
      name
      comment
      createdAt
  }
}
`)
