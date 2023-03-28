"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
exports.userResolvers = {
    role: (parent, _args, _context, _info) => {
        return parent.role.toUpperCase();
    },
};
//# sourceMappingURL=users.resolver.js.map