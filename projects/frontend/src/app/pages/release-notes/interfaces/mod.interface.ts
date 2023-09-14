export interface IMod {
  id: string,
  modName: string;
  releaseDate: string;
  note: INotes[]
}

export interface INotes {
  title: string,
  description: string
}
