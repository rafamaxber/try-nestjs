import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query()
  async user() {
    return {
      id: 1,
      username: 'Olá amigos'
    };
  }
}