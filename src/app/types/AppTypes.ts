interface User {
  id: number;
  username: string;

  email: string,
  provider: string,
  confirmed: boolean,
  blocked: null | boolean | string,
  role: {
    id: number,
    name: string,
    description: string,
    type: string
  },
  "created_at": string,
  "updated_at": string
}

interface Shop {
  id?: number,
  name: string;
  description: string;
  address: string;
  telephone: string;
}

interface NewUser {
  username: string;
  email: string;
  password: string;
}

interface RegisteredUser {
  jwt: string;
  user: {
    id: number, username: string, email: string, role: any
  };
}
