import { Concert } from '../shared/models/concert.model';
import { Genre } from '../shared/models/genre.model';

export interface HomeApiResponse {
  concerts: Concert[];
  genres: Genre[];
  success: boolean;
}
