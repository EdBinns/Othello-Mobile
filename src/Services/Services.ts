import Axius from 'axios';
import { Coordinate, ReversiBoard, ReversiCell } from '../Models';
import { BoardResponse } from '../Models/GameResponses'


const BaseURL = 'https://backendreversi.azurewebsites.net/';


export let startResponse: BoardResponse;
export let gameStateBack: BoardResponse;
export let gameId: string;
export let createdMatch: boolean;



/*
Esta funcion nos crea la matriz vacia
*/
function generateGameBoard(boardSize: number): ReversiBoard {
    const getEmpties = () => Array(boardSize).fill(ReversiCell.Empty)
    // We do a fill and then a map in order to create new instances
    // of the empties array. Otherwise, each row will reference the
    // same object in memory.
    const fullBoard = Array(boardSize).fill(0).map( getEmpties )
    return fullBoard
}

export async function startMatch(length: number) {
  let board = generateGameBoard(length);

  await Axius.post(BaseURL + 'startGame',
    {
      board: board
    }
  ).then((res) => {
    startResponse = res.data;
  })
}

export async function makeMove(coordinate: Coordinate, actualBoard: ReversiBoard, turn: ReversiCell) {
  await Axius.post(BaseURL + 'makeMove',
    {
      coordinate: coordinate,
      board: actualBoard,
      turn: turn
    }
  ).then((res) => {
    if (res.data.newBoard.length === 0) {
      gameStateBack = {
        sucess: "success",
        code: 200,
        newBoard: actualBoard,
        whiteScore: res.data.whiteScore,
        blackScore: res.data.blackScore,
        status: res.data.turn
      }
    } else {
      gameStateBack = res.data
    }
  });
}

export async function makeMoveAI(actualBoard: ReversiBoard, level: number) {
  await Axius.post(BaseURL + 'AILevel',
    {
      board: actualBoard,
      level: level
    }
  ).then((res) => {
    if (res.data.newBoard.length === 0) {
      gameStateBack = {
        sucess: "success",
        code: 200,
        newBoard: actualBoard,
        whiteScore: res.data.whiteScore,
        blackScore: res.data.blackScore,
        status: res.data.turn
      }
    } else {
      gameStateBack = res.data
    }
  });
}


//Multijugador

export async function CreateRoom(user:any) {
  createdMatch = true;
  await Axius.post(BaseURL + 'createRandomGame',
    {
      board: startResponse.newBoard,
      user: user
    }
  ).then((res) => {
    gameId = res.data;
  })
}

export async function JoinRoomService(user:any, idRoom: string) {
  createdMatch = false;
  gameId = idRoom;
  await Axius.post(BaseURL + 'getGame',
    {
      id: idRoom,
      user: user
    }
  ).then((res) => {
    gameStateBack = res.data;
  })
}

export async function GetActualGameService(idRoom: string) {
  await Axius.post(BaseURL + 'getActualGame',
    {
      id: idRoom
    }
  ).then((res) => {
    gameStateBack = res.data;
  })
}


export async function makeMoveMultiplayer(id:string, coordinate: Coordinate, actualBoard: ReversiBoard, turn: ReversiCell) {
  await Axius.post(BaseURL + 'makeMoveMultiplayer',
    {
      id:id,
      coordinate: coordinate,
      board: actualBoard,
      turn: turn
    }
  ).then((res) => {
    if (res.data.newBoard.length === 0) {
      gameStateBack = {
        sucess: "success",
        code: 200,
        newBoard: actualBoard,
        whiteScore: res.data.whiteScore,
        blackScore: res.data.blackScore,
        status: res.data.turn
      }
    } else {
      gameStateBack = res.data
    }
  });
}