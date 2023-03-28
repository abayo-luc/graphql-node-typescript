// this it to keep my interface separated from the logic: better maintainability
export interface CreateUserInput {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export const users = [
  {
    id: '1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'admin',
  },
  {
    id: '2',
    email: 'jane.doe@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    role: 'user',
  },
  {
    id: '3',
    email: 'bob.smith@example.com',
    firstName: 'Bob',
    lastName: 'Smith',
    role: 'user',
  },
];
