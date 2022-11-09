export type TFetch = {
  path: string;
  query?: Record<string, unknown>;
  method: string;
  body?: BodyInit;
};

export type TResponse = {
  count: number;
  next: string | null;
  prevous: string | null;
  results: TPokemon[];
};

export type TPokemon = {
  name: string;
  url: string;
  stock?: number;
};
