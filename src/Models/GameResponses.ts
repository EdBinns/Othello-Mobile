import { ReversiBoard } from ".";

export interface BoardResponse {
  sucess: string;
  code: number;
  newBoard: ReversiBoard;
  whiteScore: number;
  blackScore: number;
  status: number;
}