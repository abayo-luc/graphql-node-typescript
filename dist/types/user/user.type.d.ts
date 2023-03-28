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
export declare const users: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}[];
