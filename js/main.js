
let gameStillInProgress = true;
let currentTurn = 'X'; // let secondTurn = 'O'; I don't need this as it can flip it.
let moveCount = 0;
let xWin = 0;// store win of X
let oWin = 0;// store win of O
let board = [
  null, null, null,
  null, null, null,
  null, null, null,
];

const switchPlayer = function(){
  if (currentTurn === 'X'){ // this will flip X & O
    currentTurn = 'O';
  } else {
    currentTurn = 'X';
  }
};


const getFreeCells = function(){ //extract id for empty box and store the id to freeSquareIDs
  let freeSquareIDs = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null){
      freeSquareIDs.push(i);//
    }
  }
  return freeSquareIDs;
};

const getRandomElementFromArray = function( array ){ //get random element from array
  const randomFloat = Math.random() * array.length;// gives you random number from 0 - array.length
  const randomFreeIndex = Math.floor( randomFloat );//get rid of decimal
  const randomElement = array[ randomFreeIndex ]; //getting value of an array with index = randomFreeIndex. this value stores in randomElement
  return randomElement;
};

const playAIMove = function(currentPlayer){ //

  let availableCells = getFreeCells();//get availeble cells using getFreeCells function
  // console.log('availableCells', availableCells);
  const randomID = getRandomElementFromArray( availableCells );//pull one of the availabel elements out of an array at random

  $(`#${randomID}`)   // select the DIV with the id of the randomID, e.g. '#5'
     .text( currentPlayer )  // sets the contets of that DIV
     .addClass( currentPlayer );  // add a class to that DIV which sets the text colour

  board[ randomID ] = currentTurn;  //update our board array to contain the AI's move

  // console.log(randomCellID);
  // board[ randomCellID ] = currentPlayer;//4
  // console.log(board);
  // find the free squares which the AI player can choose from for its move
  // [
  //   'X',  null, null,
  //   null,  'O', null,
  //   null, null,  'X',
  // ];

  // => output should be [1,2,3,5,6,7]
};

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
    //console.log('You win!');
    $('#messageBox').text(`You win, ${ currentTurn } !`); //prints currentTurn X or O
    gameStillInProgress = false;// game is over. user can't click anymore.

    if (currentTurn === 'X') {
      xWin++; // add 1 to the xWin
      $('#xScore').text(xWin);//print score on X in html:
    } else {
      oWin++;
      $('#oScore').text(oWin);//print score on O in html:
    }
  }
};//checkForWin function

$('.box').on('click', function (){
  const contents = $(this).text();
  if( !gameStillInProgress ||  contents.length > 0 ){
    // return early from the function to stop the click from being processed
    return;// if if statements are true, won't run any codes below
  }

  moveCount = moveCount+1; // moveCount++;  // moveCount += 1;//everytime clicked count it as one


//these are all human move
  // set the text contents of the DIV that was clicked,
  // using whatever is in the 'currentTurn' variable
  $(this).text( currentTurn );//this prints currentTurn X or O

  // get the id of the box that was clicked (convert to integer)
  const id =  parseInt( this.id );
  // use the id as an index into our board array,
  // to save the current player's symbol (X or O) into the rigt position
  board[ id ] = currentTurn;

  // use currentTurn ('X' or 'O') to set the class for the clicked element, to give it a colour
  $(this).addClass( currentTurn );//set the color of pick
  checkForWin();
  switchPlayer();

  if( gameStillInProgress ){
    playAIMove(currentTurn);
    checkForWin();
    switchPlayer();
  }
  // The game is a draw if we get to this point and:
  // 1. gameStillInProgress is still true
  // 2. there are no free squares left to click in

  // Check for draw:
  if( gameStillInProgress && moveCount === 9){
    $('#messageBox').text ('Draw!');
  }
}); //on click function

const resetGameState = function() {
  // do everything we need to do to reset the state of the game
  $('.box').empty(); //clear all the text inside the contents
  $('.box').removeClass('O X'); // clear the colour classes
  moveCount = 0;//reset moveCount
  gameStillInProgress = true; //reseting
  currentTurn = 'X';
  $('#messageBox').text('Tic Tac Toe');//reset the heading
  board = [
    null, null, null,
    null, null, null,
    null, null, null,
  ];
};

$('#reset').on('click', resetGameState);

$('#clearScore').on('click', function () { //clear score button
  resetGameState();
  $('.score').text(0);//reset the score display to 0
  xWin = 0;
  oWin = 0;
});
