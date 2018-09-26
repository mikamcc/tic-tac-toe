
console.log('loaded');

let gameStillInProgress = true;
let currentTurn = 'X'; // let secondTurn = 'O'; I don't need this as it can flip it.
let moveCount = 0;
let xWin = 0;// store win of X
let oWin = 0;// store win of O

const checkForWin = function(){

  const s0 = $('#0').text();
  const s1 = $('#1').text();
  const s2 = $('#2').text();
  const s3 = $('#3').text();
  const s4 = $('#4').text();
  const s5 = $('#5').text();
  const s6 = $('#6').text();
  const s7 = $('#7').text();
  const s8 = $('#8').text();

    if (
      (s0 === s1 && s0 === s2 && s0.length > 0) ||
      (s3 === s4 && s3 === s5 && s3.length > 0) ||
      (s6 === s7 && s6 === s8 && s6.length > 0) ||
      (s0 === s4 && s0 === s8 && s0.length > 0) ||
      (s2 === s4 && s2 === s6 && s2.length > 0) ||
      (s2 === s4 && s2 === s6 && s2.length > 0) ||
      (s0 === s3 && s0 === s6 && s0.length > 0) ||
      (s1 === s4 && s1 === s7 && s1.length > 0) ||
      (s2 === s5 && s2 === s8 && s2.length > 0)
    ){
        console.log('You win!');
        $('#messageBox').text(`You win, ${ currentTurn }!`); //prints currentTurn X or O
        gameStillInProgress = false;// game is over. user can't click anymore.

        if (currentTurn === 'X') {
          xWin++; // add 1 to the xWin
          $('#xScore').text(xWin);//print score on X:
        } else {
          oWin++;
          $('#oScore').text(oWin);//print score on O:
        }
      }
};//checkForWin function

$('.box').on('click', function (){

  const contents = $(this).text();
  if( !gameStillInProgress ||  contents.length > 0 ){
    // return early from the function to stop the click from being processed
    return;// if if statements are true, won't run any codes below
  }

  moveCount = moveCount+1; // moveCount++;  // moveCount += 1;
  console.log(moveCount);//everytime clicked count it as one

  // set the text contents of the DIV that was clicked,
  // using whatever is in the 'currentTurn' variable
  $(this).text( currentTurn );//this prints currentTurn X or O

  // use currentTurn ('X' or 'O') to set the class for the
  // clicked element, to give it a colour
  $(this).addClass( currentTurn );

  checkForWin();

  // playAIMove();

  if (currentTurn === 'X'){ // this will flip X & O
    currentTurn = 'O';
  } else {
    currentTurn = 'X';
  }


  // The game is a draw if we get to this point and:
  // 1. gameStillInProgress is still true
  // 2. there are no free squares left to click in

  // Check for draw:
  if( gameStillInProgress && moveCount === 9){
    // console.log('Draw!');
    $('#messageBox').text ('Draw!');
  }
}); //on click function

$('#reset').on('click', function () {
  // do everything we need to do to reset the state of the game
  $('.box').empty(); //clear all the text inside the contents
  $('.box').removeClass('O X'); // clear the colour classes
  moveCount = 0;//reset moveCount
  gameStillInProgress = true; //reseting
  $('#messageBox').text('Tic Tac Toe');//reset the heading
});

$('#startAgain').on('click', function () {
  $('.box').empty(); //clear all the text inside the contents
  $('.box').removeClass('O X'); // clear the colour classes
  moveCount = 0;//reset moveCount
  gameStillInProgress = true; //reseting
  $('#messageBox').text('Tic Tac Toe');//reset the heading
  $('.score').empty().text(0);
});
