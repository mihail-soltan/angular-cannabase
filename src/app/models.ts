export interface Strain {
  name: string;
  ocpc: string;
  qr: string;
  url: string;
  image: string;
  seedCompany: SeedCompany;
  genetics: Genetics;
  lineage: any[];
  children: string[];
  createdAt: string;
  updatedAt: string;
}

export interface APIResponse<T> {
    data: Array<T>
}

export interface SeedCompany {
  name: string;
  ocpc: string;
}

export interface Genetics {
  names: boolean;
  ocpc: boolean;
}
