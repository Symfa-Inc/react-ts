export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  loading: boolean;
  user: string | null;
  errors: string | null;
  isAuthenticated: boolean;
}

export interface User {
  name: string;
  email: string;
}
