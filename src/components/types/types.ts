export interface ProductLink {
  ozon: string;
  wildberries: string;
  yandex: string;
}

export interface Product {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  storage: string;
  shelfLife: string;
  netWeight: string;
  gost: string;
  links: ProductLink;
}
