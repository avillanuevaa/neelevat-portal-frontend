import {IMod} from "./mod.interface";

export interface IReleaseNote {
  id: string,
  name: string;
  mod: IMod[];
};
