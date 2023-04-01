const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const userResolvers = {
  role: async (
    parent: any,
    _args: any,
    _context: any,
    _info: any
  ) => {
    await timeout(5000);
    return parent.role.toUpperCase();
  },
};
