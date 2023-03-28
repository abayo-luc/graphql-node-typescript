export const userResolvers = {
  role: (
    parent: any,
    _args: any,
    _context: any,
    _info: any
  ) => {
    return parent.role.toUpperCase();
  },
};
