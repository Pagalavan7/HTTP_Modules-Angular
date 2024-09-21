export interface LoginUser {
  email: string;
  password: string;
}

export interface User extends LoginUser {
  id?: number;
  name: string;
  phone: string;
  role: 'admin' | 'user' | 'guest';
  status: 'active' | 'inactive';
}
