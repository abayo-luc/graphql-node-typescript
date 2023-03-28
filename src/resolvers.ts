import * as user from './user';

// the resolver should expose Query and Mutation
export default {
  Query: {
    ...user.userQueries,
  },
  Mutation: {
    ...user.userMutations,
  },
  User: {
    ...user.userResolvers,
  },
};
