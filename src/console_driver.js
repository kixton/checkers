var numToChar = ["a", "b", "c", "d", "e", "f", "g", "h"];
var charToNum = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7
}

var displayBoard = function () {
  var column = [0, 1, 2, 3, 4, 5, 6, 7];
  console.log("  | " + column.join("   "));
  console.log("-----------------------------------");
  for (var i = 0; i < board.length; i++) {
    console.log(numToChar[i] + " |" + board[i].join(" "));
  }
};


var displayBoardUI = function () {
  // loop through board array
  for ( i = 0; i < 8; i++ ) {
    k = numToChar[i]
    for ( j = 0; j < 8; j++ ) {

      // if the board space is not empty, insert a checkers piece
      if ( board[i][j] !== ' X ' ) { 
        // loop thru board array and find the .row (character) and .col values 
        var $insertHere = $( '.row-' + k + ' ' + '.col-' + j); 
        // addClass to identify a piece and color; .removeClass when piece moves
        $( $insertHere ).children().addClass('piece ' + board[i][j])
      };
    }
  }   
};


$(document).ready( function() {

  $('.col', '.row').append('<span></span');

  $('.start').click( function(){
    play();
  } );

  $(document).on('boardChange', function() {
    // can jump again?
    if (currentPlayer === 'wht') { currentPlayer = 'red' }
    else if (currentPlayer === 'red') { currentPlayer = 'wht' }
  });

  $(document).on('pieceTaken', function() {
    alert('HAHA Your piece was taken!');
    console.log('row' + 'col');
  });

  $(document).on('invalidMove', function() {
    alert('Invalid Move!');
  });

  $(document).on('turn', function() {
    alert('Turn');
  });



});