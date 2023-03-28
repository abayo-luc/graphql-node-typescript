import { CreateUserInput, User } from './user.type';
/**
 * @description In GraphQL, each resolver function can receive up to four parameters: parent (or root), args, context, and info.
 * The parent parameter refers to the result returned by the resolver function for the parent field.
 * In other words, when resolving a nested field, the parent resolver's result is
 * passed as the parent parameter to the resolver function for the nested field.
 * @param _parent
 * @param args
 * @param _context
 * @param _info
 * @returns
 */
export declare const createUser: (_parent: any, args: {
    input: CreateUserInput;
}, _context: any, _info: any) => User;
