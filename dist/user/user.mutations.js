"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_type_1 = require("./user.type");
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
const createUser = (_parent, args, _context, _info) => {
    const { input } = args;
    const newUser = {
        id: String(user_type_1.users.length),
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
        role: input.role,
    };
    user_type_1.users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
//# sourceMappingURL=user.mutations.js.map