export interface IUser {
    login: string;
    psw: string;
    email?: string;
    id?: string;
}

export const USER_STORE_NAME = 'user';