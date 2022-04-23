interface User {
  id: number;
  username: string;
  email: string;
  hasAppliedForShopOwnership: boolean;
  provider: string;
  confirmed: boolean;
  blocked: null | boolean | string;
  role: {
    id: number;
    name: string;
    description: string;
    type: string
  };
  "created_at": string;
  "updated_at": string
}

interface Shop {
  id?: number;
  name: string;
  description: string;
  address: string;
  telephone: string;
  images?: Image[]
}

interface NewUser {
  username: string;
  email: string;
  password: string;
}

interface RegisteredUser {
  jwt: string;
  user: {
    id: number; username: string; email: string; role: any
  };
}

interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      name: string;
      url: string;
    };
    large: {
      name: string;
      url: string;
    };
    medium: {
      name: string;
      url: string;
    };
    small: {
      name: string;
      url: string;
    }
  };
  ext: number;
  mime: string;
  size: number;
  url: string;
  created_at: string;
  updated_at: string

}

interface Product {
  id?: number;
  slug?: string;
  name: string;
  description: string;
  isAvailable: boolean;
  price: number;
  shop?: Shop | number;
  images?: Image[];
}

interface CartItem {
  id?: number;
  product: Product;
  quantity: number;
  isActive?: boolean;
}

/**
 * @description a contact represents an entity that provides products that could be purchased
 * @export interface Contact
 * @interface Contact
 */
interface Contact {
  id?: number;
  name: string;
  email?: string;
  organization: string;
  typeOfActivity: string;
  phone: string;
  productDescription: string;
  address: string;
  creator?: User;
  products?: Product[];
}
