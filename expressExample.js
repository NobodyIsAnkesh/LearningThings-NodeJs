const express = require('express');
const app = express();

let gameBox = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

let currentPlayer = "Yellow";

app.use('/START', (req, res) => {
    gameBox = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    console.log(gameBox);
    res.send("READY");
});

app.use('/:column', (req, res) => {
    let column = req.params.column - 1;
    let response = "Valid";

    if (column > 6 || column < 0) {
        response = "Invalid";
    }

    response = insertValueAndCheckFinish(currentPlayer, column);
    console.log(gameBox);

    res.send(response);
    if (response === "Valid") {
        currentPlayer = currentPlayer === "Yellow" ? "Red" : "Yellow";
    }
});

function insertValueAndCheckFinish(player, column) {
    let response = "Valid";
    let row;
    for (row = 5; row > -1; row--) {
        if (gameBox[row][column] === 0) {
            gameBox[row][column] = player;
            break;
        }
        else
            continue;
    }
    if (row === -1) {
        response = "Invalid";
        return response;
    }
    response = checkRow(player, row);
    response = checkColumn(player, column);
    response = checkDiagonal(player, row, column);
    return response;
}

function checkDiagonal(player, row, column) {
    //left top to bottom right
    let presentRow = 0;
    let presentColumn = 0;

    if (row > column) {
        presentRow = row - column;
    } else {
        presentColumn = column - row;
    }

    let count = 0;
    if (gameBox[presentRow][presentColumn] === player) {
        count++;
    }
    while (presentRow < 6 && presentColumn < 7) {
        if (gameBox[presentRow][presentColumn] === player) {
            if (gameBox[presentRow - 1][presentColumn - 1] === player) {
                count++;
            }
            else {
                count = 1;
            }
        } else {
            count = 0;
        }
        if (count === 4) {
            return player + " wins";
        }
        presentRow++;
        presentColumn++;
    }

    //left bottom to top right
    if ((row + column) > 5) {
        presentRow = 5;
        presentColumn = row;
    }
    else {
        presentRow = row + column;
        presentColumn = 0;
    }

    count = 0;
    if (gameBox[presentRow][presentColumn] === player) {
        count++;
        presentRow--;
        presentColumn++;
    }

    while (presentRow > -1 && presentColumn < 7) {
        if (gameBox[presentRow][presentColumn] === player) {
            if (gameBox[presentRow + 1][presentColumn - 1] === player) {
                count++;
            }
            else {
                count = 1;
            }
        } else {
            count = 0;
        }
        if (count === 4) {
            return player + " wins";
        }
        presentRow--;
        presentColumn++;
        console.log(count);
    }

    return "Valid";
}

function checkColumn(player, column) {
    let count = 0;
    if (gameBox[0][column] === player) {
        count++;
    }
    for (let i = 1; i < 6; i++) {
        if (gameBox[i][column] === player) {
            if (gameBox[i - 1][column] === player) {
                count++;
            }
            else {
                count = 1;
            }
        } else {
            count = 0;
        }
        if (count === 4) {
            return player + " wins";
        }
    }
    return "Valid";
}

function checkRow(player, row) {
    let count = 0;
    if (gameBox[row][0] === player) {
        count++;
    }
    for (let i = 1; i < 7; i++) {
        if (gameBox[row][i] === player) {
            if (gameBox[row][i - 1] === player) {
                count++;
            }
            else {
                count = 1;
            }
        } else {
            count = 0;
        }
        if (count === 4) {
            return player + " wins";
        }
    }
    return "Valid";
}

app.listen(4000, () => { console.log("server started at 4000") });