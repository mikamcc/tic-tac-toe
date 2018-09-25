
console.log('loaded');

//This is from GA ATM Homework example
// $('#checkingDeposit').on ('click',function(){
//   console.log('Checking Deposit botton is clicked!');
// });

// $('#checkingAmount[type=text]').on('blur', function(){
//   console.log(" 'enter an amount' was clicked!");
//   console.log($(this).val());
// });

let gameStillInProgress = true;
let currentTurn = 'X';
let moveCount = 0;
// let secondTurn = 'O'; I don't need this as it can flip it.

const checkForWin = function(){
  if ($('#0').text()=== $('#1').text() &&
    $('#0').text()=== $('#2').text() &&
    // $('#1').text()=== $('#2').text() && .. don't need only 2 top lines will do.
    $('#0').text().length > 0) { //if 0,1,2 boxes are empty, it still print "You win" as they are equal (text().lngth === 0).to prevent this happen, put $('#0').text().length > 0)
      console.log('You win!');
      $('#messageBox').text ('You win!');
      gameStillInProgress = false;// game is over. user can't click anymore.
    }
    // Why this code doesn't work?
     //  if ($('#0').text() && $('#1').text() && $('#2').text() === ('X'||'O')){
     // console.log('You win!');
     //in JS, can't do a===b || c, you have to write long way,
     //a===b||a===c
     // }

     else if ($('#3').text()=== $('#4').text() &&
       $('#3').text()=== $('#5').text() &&
       // $('#4').text()=== $('#5').text() &&
       $('#3').text().length > 0) { //this will check whether boxes have some text inside or not
         console.log('You win!');
         gameStillInProgress = false;
       }

     else if ($('#6').text()=== $('#7').text() &&
       $('#6').text()=== $('#8').text() &&
       // $('#7').text()=== $('#8').text() &&
       $('#6').text().length > 0) { //this will check whether boxes have some text inside or not
         console.log('You win!');
         gameStillInProgress = false;
       }

     else if ($('#0').text()=== $('#4').text() &&
       $('#0').text()=== $('#8').text() &&
       // $('#4').text()=== $('#8').text() &&
       $('#0').text().length > 0) { //this will check whether boxes have some text inside or not
         console.log('You win!');
         gameStillInProgress = false;
       }

     else if ($('#2').text()=== $('#4').text() &&
       $('#2').text()=== $('#6').text() &&
       // $('#4').text()=== $('#6').text() &&
       $('#2').text().length > 0) { //this will check whether boxes have some text inside or not
         console.log('You win!');
         gameStillInProgress = false;
       }

     else if ($('#2').text()=== $('#4').text() &&
       $('#2').text()=== $('#6').text() &&
       // $('#4').text()=== $('#6').text() &&
       $('#2').text().length > 0) { //this will check whether boxes have some text inside or not
         console.log('You win!');
         gameStillInProgress = false;
       }

     else if ($('#0').text()=== $('#3').text() &&
       $('#0').text()=== $('#6').text() &&
       // $('#3').text()=== $('#6').text() &&
       $('#0').text().length > 0) { //this will check whether boxes have some text inside or not
         console.log('You win!');
         gameStillInProgress = false;
       }

     else if ($('#1').text()=== $('#4').text() &&
       $('#1').text()=== $('#7').text() &&
       // $('#4').text()=== $('#7').text() &&
       $('#1').text().length > 0) { //this will check whether boxes have some text inside or not
         console.log('You win!');
         gameStillInProgress = false;
       }

     else if ($('#2').text()=== $('#5').text() &&
       $('#2').text()=== $('#8').text() &&
       // $('#5').text()=== $('#8').text() &&
       $('#2').text().length > 0) { //this will check whether boxes have some text inside or not
         console.log('You win!');
         gameStillInProgress = false;
       }
};

$('.box').on('click', function (){

  const contents = $(this).text();
  if( !gameStillInProgress ||  contents.length > 0 ){
    // return early from the function to stop the click from being processed
    return;// if if statements are true, won't run any codes below
  }

  moveCount = moveCount+1; // moveCount++;  // moveCount += 1;
  console.log(moveCount);

  const id = $(this).attr('id');
  // ^ gets us the ID of the DIV that was clicked
  // ('this' contains the DIV that was clicked)
  // console.log( id );

  // set the text contents of the DIV that was clicked,
  // using whatever is in the 'currentTurn' variable
  $(this).text( currentTurn );//this prints X


  if (currentTurn === 'X'){ // this will flip X & O
    currentTurn = 'O';
  } else {
    currentTurn = 'X';
  }

  checkForWin();

  // The game is a draw if we get to this point and:
  // 1. gameStillInProgress is still true
  // 2. there are no free squares left to click in

  // Check for draw:
  if( gameStillInProgress && moveCount === 9){
    // console.log('Draw!');
    $('#messageBox').text ('Draw!');
  }

}); //on click function


//
// if ($('#0').text() && $('#1').text() && $('#2').text()==='X') {
//   console.log('You win!');
// };





//
// //When a box is clicked, print out the console.log
// $('#0').on('click', function (){
//   console.log('Box 0 is clicked');
// });
//
//
// $('#1').on('click', function (){
//   console.log('Box 1 is clicked');
// });
//
// $('#2').on('click', function (){
//   console.log('Box 2 is clicked');
// });
//
// $('#3').on('click', function (){
//   console.log('Box 3 is clicked');
// });
//
// $('#4').on('click', function (){
//   console.log('Box 4 is clicked');
// });
//
// $('#5').on('click', function (){
//   console.log('Box 5 is clicked');
// });
//
// $('#6').on('click', function (){
//   console.log('Box 6 is clicked');
// });
//
// $('#7').on('click', function (){
//   console.log('Box 7 is clicked');
// });
//
// $('#8').on('click', function (){
//   console.log('Box 8 is clicked');
// });
