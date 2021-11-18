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
