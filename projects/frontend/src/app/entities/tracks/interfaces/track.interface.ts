export interface ITrack {
  id: number;
  name: string;
  details: ITrackDetails[];
};

interface ITrackDetails {
  status: string;
  date: string;
  location: string;
};
