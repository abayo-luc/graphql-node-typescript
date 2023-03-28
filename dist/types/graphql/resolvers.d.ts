declare const _default: {
    Query: {
        user: (parent: any, args: {
            id: string;
        }, context: any, info: any) => {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: string;
        } | undefined;
    };
    Mutation: {
        createUser: (_parent: any, args: {
            input: import("../user/user.type").CreateUserInput;
        }, _context: any, _info: any) => import("../user/user.type").User;
    };
    User: {
        role: (parent: any, _args: any, _context: any, _info: any) => any;
    };
};
export default _default;
