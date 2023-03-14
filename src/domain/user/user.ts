export interface auth {
    username: string;
    email: string;
    password: string;
    roles: roles[];
  }
  
  interface roles {
    ref: string;
  }
  