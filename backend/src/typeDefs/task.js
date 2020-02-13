import { gql } from 'apollo-server-express';

export default gql `
    extend type Query {
        tasks: [Task]
    }

    extend type Mutation {
        addTask(name: String!): Task
        completeTask(taskId: String!): Task
        markAsIncomplete(taskId: String!): Task
        removeTask(taskId: String!): Boolean!
        editName(taskId: String!, name: String!): Task
        editDescription(taskId: String!, description: String!): Task
    }

    type Task {
        id: ID!
        name: String!
        userId: String!
        completed: Boolean!
        description: String
        createdAt: String!
    }
`;