export const checkWin = (
    index: number,
    maxColLength: number,
    turn: 0 | 1,
    pieces: (0 | 1)[][],
) => {
    const col = pieces[index];
    const rowPos = col.length - 1;
    const row = pieces.map((col) => col[rowPos]);

    if (checkLine(turn, col)) return true;
    if (checkLine(turn, row)) return true;
    if (checkLine(turn, getDiag(pieces, index, rowPos, maxColLength, false))) return true;
    if (checkLine(turn, getDiag(pieces, index, rowPos, maxColLength, true))) return true;

    return false;
};

const checkLine = (turn: number, arr: (0 | 1)[]) => {
    let limit = 4 
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const piece = arr[i];
        if (piece !== undefined && piece === turn) {
            count++;
            if (count >= limit) break;
        } else count = 0;
    }

    return count >= limit;
};

const getDiag = (pieces: (0 | 1)[][], index: number, rowPos: number, maxColLength: number, inverted: boolean) => {
    const diag = [];
    let x = index - rowPos;
    let y = 0;

    if (!inverted && x < 0) {
        y = Math.abs(x);
        x = 0;
    }

    if (inverted) {
        x = index + rowPos;
        if (x > maxColLength) {
            y = x - maxColLength;
            x = maxColLength;
        }
    }

    for (let i = 0; i < maxColLength; i++) {
        try {
            diag.push(pieces[x + i * (inverted ? -1 : 1)][y + i]);
        } catch (error) {
            break;
        }
    }

    return diag;
};