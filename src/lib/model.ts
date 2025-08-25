interface Base {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Meta {
  total: number;
  page: number;
  perPage: number;
  currentPage: number | null;
  lastPage: number;
  firstPage: number;
}

export interface Paginated<Entity> {
  data: Entity[];
  meta: Meta;
}

export interface User extends Base {
  name: string;
  email: string;
  password: string | null;
  address: Address | null;
  responsible: Responsible | null;
  role: string;
}

export interface Address extends Base {
  street: string;
  number: string | null;
  complement: string | null;
  neighborhood: string;
  userId: User["id"];
}

export interface Responsible extends Base {
  mother: string;
  father: string;
  userId: User["id"];
}

export interface Member extends Base {
  cpf: string;
  rg: string;
  birthDate: string;
  extras: string | null;
  registeredById: User["id"];
  userId: User["id"];
  user: User | null;
}
