import { CreateUserInput, User, users } from './user.type';
export const user = (
  parent: any,
  args: { id: string },
  context: any,
  info: any
) => {
  const { id } = args;
  return users.find((user) => user.id === id);
};
