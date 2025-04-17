export const cpuChoice = (
    pieces: (0 | 1)[][],
    lastPlacedCol: number,
    maxColLength: number,
) => {
    const col = pieces[lastPlacedCol];
    const rowPos = col.length - 1;
    const row = pieces.map((col) => col[rowPos]);

    for (let i = 0; i < pieces.length; i++) {
        const col = pieces[i];
        const rowPos = col.length - 1;
        const row = pieces.map((col) => col[rowPos]);

        let nextMove = null;

        nextMove = checkLine(row);

        if (nextMove !== null) {
            return nextMove;
        }

        let diag1 = getDiag(pieces, i, rowPos, true, maxColLength);
        //console.log(diag1);
        nextMove = checkLine(diag1);
        if (nextMove !== null) {
            return nextMove;
        }

        let diag2 = getDiag(pieces, i, rowPos, false, maxColLength);
        // console.log(diag2);
        nextMove = checkLine(diag2);
        if (nextMove !== null) {
            return nextMove;
        }
    }

    return Math.floor(Math.random() * pieces.length);
};

const checkLine = (arr: (0 | 1)[]) => {
    let count = 0;
    let player = 0;
    let cpu = 1;
    let limit = 4;
    let nextMove = null;

    for (let i = 0; i < arr.length; i++) {
        const piece = arr[i];

        count++;
        if (count >= limit) break;

        if (piece === player) {
            count = 0;
        } else if (piece === undefined && arr[i + 1] === undefined) {
            count = 0;
        } else if (piece === undefined) {
            nextMove = i;
        }
    }

    return count >= limit && nextMove !== null ? nextMove : null;
};

const getDiag = (
    pieces: (0 | 1)[][],
    index: number,
    rowPos: number,
    inverted: boolean,
    maxColLength: number,
) => {
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
