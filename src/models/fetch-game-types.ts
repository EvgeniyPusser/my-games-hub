export interface Game {
    id: number;
    name: string;
    background_image: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic?: number;  // safer as optional
  parent_platforms?: { platform: { id: number; name: string } }[];
  // add other properties if needed later
}

export interface FetchGamesResponse {
  results: Game[];
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}
