export type Generator<T> = { next: () => T };

export type Position = {
    row: number;
    col: number;
};

export type Match<T> = {
    matched: T;
    positions: Position[];
};

export type Board<T> = {
    width: number;
    height: number;
    board: T[][];
};

export type Effect<T> = {
    kind: string;
    match: Match<T>;
};

export type MoveResult<T> = {
    board: Board<T>;
    effects: Effect<T>[];
};

export function create<T>(
    generator: Generator<T>,
    width: number,
    height: number
): Board<T> {
    const board = createArray(width, height, () => generator.next());

    return {
        width,
        height,
        board,
    };
}

export function piece<T>(board: Board<T>, p: Position): T | undefined {

    return board.board?.[p.row]?.[p.col];
}

export function positions<T>(board: Board<T>): Position[] {
    const positions: Position[] = [];
  
    board.board.forEach((row, rowIndex) => {
        row.forEach((_, colIndex) => {
        positions.push({ row: rowIndex, col: colIndex });
      });
    });
  
    return positions;
}


export function canMove<T>(
    board: Board<T>,
    first: Position,
    second: Position
): boolean {
    const isSameRow = first.row === second.row;
    const isSameColumn = first.col === second.col;
    isValidIndex

    // check if the the positions are valid
    if (!isValidIndex(first.row, board.height) ||
        !isValidIndex(first.col, board.width) ||
        !isValidIndex(second.row, board.height) ||
        !isValidIndex(second.col, board.width)
    ) {
        return false;
    }

    // can move if the move is horizontal
    // same row different column 
    // can move if the move is vertical
    // same column different row
    return (!isSameRow && isSameColumn) || (isSameRow && !isSameColumn)
}

export function move<T>(
    generator: Generator<T>,
    board: Board<T>,
    first: Position,
    second: Position
): MoveResult<T> { }

function createArray<T>(width: number, height: number, getValue: () => T) {
    return [...Array(height)].map(() => {
        return [...Array(width)].map(() => getValue());
    });
}

// Generate board with random elements in it
// Create 2 two dimensional array
// Fill it in with values
//

// returns true if the value is between the board boundaries
function isValidIndex(positionIndex: number, boardIndex: number): boolean {
    return positionIndex >= 0 && boardIndex < boardIndex;
}
