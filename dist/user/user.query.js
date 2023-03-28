"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const user_type_1 = require("./user.type");
const user = (parent, args, context, info) => {
    const { id } = args;
    return user_type_1.users.find((user) => user.id === id);
};
exports.user = user;
//# sourceMappingURL=user.query.js.map