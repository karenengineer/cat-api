export interface CatCategory {
  id: number;
  name: string
}

export interface CatImage {
  breeds: [];
  categories: CatCategory[];
  height: number;
  id: string;
  url: string;
  width: string
}
