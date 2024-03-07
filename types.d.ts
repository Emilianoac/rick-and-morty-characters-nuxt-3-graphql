

interface Character {
  name: string;
  image: string;
  gender?: string;
  species?: string;
  status?: string;
  id: string;
  origin: {
    dimension: string;
  };
  episode?: {
    name?: string;
    air_date?: string;
  }
}