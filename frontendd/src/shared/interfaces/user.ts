export interface UserData {
  id: number;
  username: string;
}

export interface CreateUserPayload {
    username: string;
    password: string; 
}