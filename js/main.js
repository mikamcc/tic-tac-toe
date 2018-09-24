
console.log('loaded');

//This is from GA ATM Homework
// $('#checkingDeposit').on ('click',function(){
//   console.log('Checking Deposit botton is clicked!');
// });
//
// $('#savingsDeposit').on ('click', function(){
//   console.log('Saving Deposit botton is clicked!');
// });
//
// $('#checkingAmount[type=text]').on('blur', function(){
//   console.log(" 'enter an amount' was clicked!");
//   console.log($(this).val());
// });

let currentTurn = 'X';
// let secondTurn = 'O';

$('.box').on('click', function (){
  const id = $(this).attr('id');
  // ^ gets us the ID of the DIV that was clicked
  // ('this' contains the DIV that was clicked)
  console.log( id );

  // set the text contents of the DIV that was clicked,
  // using whatever is in the 'currentTurn' variable
  $(this).text( currentTurn );//this prints X

  // currentTurn = 'O';
  // console.log(currentTurn,  currentTurn === 'X' );

  if (currentTurn === 'X'){
    currentTurn = 'O';
  } else {
    currentTurn = 'X';
  }
  if ($('#0').text()=== $('#1').text() &&
    $('#0').text()=== $('#2').text() &&
    $('#1').text()=== $('#2').text() &&
    $('#0').text().length > 0) { //this will check #012 boxes has some text inside or not
      console.log('You win!')
    }


 //  if ($('#0').text() && $('#1').text() && $('#2').text() === 'X'){
 // console.log('You win!');
// }
  })//on click function


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
