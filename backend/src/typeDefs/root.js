import {
    gql
} from 'apollo-server-express';

const root = gql `
	directive @authorize on FIELD_DEFINITION
	directive @guest on FIELD_DEFINITION

	type Query {
		_: String
	}

	type Mutation {
		_: String
	}
`;

export default root;