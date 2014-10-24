var board, currentPlayer, startPiece, enemy;

var resetBoard = function () {
  board = [
    [' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht'],
    ['wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X '],
    [' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht'],
    [' X ', ' X ', 'RED', ' X ', ' X ', ' X ', ' X ', ' X '],
    [' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X '],
    ['red', ' X ', 'red', ' X ', 'red', ' X ', 'red', ' X '],
    [' X ', 'red', ' X ', 'red', ' X ', 'red', ' X ', 'red'],
    ['red', ' X ', 'red', ' X ', 'red', ' X ', 'red', ' X ']
  ];

  currentPlayer = 'wht'
  enemy = 'red'
};

var play = function() {
  resetBoard();
  displayBoard();
  displayBoardUI();
  // attemptMove(getMove());
};

var input = {}

var getMove = function(startRow, startCol, endRow, endCol) {
  console.log("got your moves ;)")

  input = {
    startRow: charToNum[startRow],
    startCol: startCol,
    endRow: charToNum[endRow],
    endCol: endCol
  };

  startPiece = board[input.startRow][input.startCol]

};


  // is 'capture' move is available?
  var capturePresent = function() {

    // dir = direction of row move; toward Row A (0) or Row H (7)
    // white: increment; red: decrement
    var dir = (currentPlayer === 'wht') ? 1 : -1

    for ( i = 0; i < 65; i++ ) {
      for ( j = 0; j < 65; j++ ) {
        if ( // check board for diagonal sequence of currentPlayer-enemy-emptySpace 
          board[i][j] === currentPlayer 
          && 
          ( (board[i+(1*dir)][j+1] === enemy || board[i+(1*dir)][j+1] === enemy.toUpperCase()) && board[i+(2*dir)][j+2] === ' X ')
          ||
          ( (board[i+(1*dir)][j-1] === enemy || board[i+(1*dir)][j-1] === enemy.toUpperCase()) && board[i+(2*dir)][j-2] === ' X ')
          ) {
          return true;
        }
      }
    }
    return false;
  };  


var attemptMove = function(input) {
  if (input === {quit:true}) {
    resetBoard();
    alert("Quit Game");
  }

  // Is the move on the board?
  var moveOnBoard = function(input) {
    if (
      input.startRow >= 0 && input.startRow < 8
      && input.startCol >= 0 && input.startCol < 8
      && input.endRow >= 0 && input.endRow < 8
      && input.endCol >= 0 && input.endCol < 8
    ) {
      return true;
    } else {
      alert("That move is not on the board! Row should be A-H, Col should be 0-7");
    };
  }

  // CHECKPOINT: applies whether red or white; single or king; regular or capture
  var passLevelOne = function(input) {
    if (
      startPiece.downcase === currentPlayer.downcase // moving currentPlayer's colored piece
      && board[input.endRow][input.endCol] === ' X ' // move to empty row?
      && (input.endRow + input.endCol) % 2 !==0 && (input.endRow + input.endCol) > 0 // move diaganol? *NOTE: does not check direction or distance*
    ) {
      return true;
    } else {
      invalidMove();
    };
  };



  // was capture move made?
  var wasCaptureMoveMade = function(input) {
    // alert("A capture is available. You must capture your enemy")
  };



  // Move in right direction? (non-capture moves)
  var moveRightDirection = function(input) {
    // if single piece (denoted by lowercase letters) can only move forward
    if ( startPiece === startPiece.toLowerCase() ) {
      // wht must move 1 row away from row A 
      if ( startPiece === 'wht' ) {
        return (input.endRow - input.startRow === 1) 
        && Math.abs(input.endCol - input.startCol) === 1
      }
      // red must move 1 row away from row H 
      else if ( startPiece === 'red' ) {
        return (input.startRow - input.endRow === 1) 
        && Math.abs(input.endCol - input.startCol) === 1
      } 
    }
    // if kings (denoted by uppercase letters), can move forward or backward
    else if ( startPiece === startPiece.toUpperCase() ) {
      // can move fwd or backwards
      return Math.abs(input.endRow - input.startRow) === 1
      && Math.abs(input.endCol - input.startCol) === 1
    }
    else {
      invalidMove();
    } 
  };


};

// if valid move (i.e. satisfies all tests above), move the checkers piece 
var makeMove = function(input) {
  if (attemptMove) // true 
  {
    board[endRow][endCol] = currentPlayer 
    board[startRow][startCol] = ' X '
  }
  $(document).trigger('boardChange')
};

// if captured ememy, remove his/her piece
var removePiece = function(row, col) {
  
};




