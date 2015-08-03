$(document).on('ready',function(){
  var currentNumber=0;
  var numbers = ['',''];
  var operator = '';
  var operators = ['+','-','x','\u00f7'];

  $('span').on('click',function(event){

      event.preventDefault();
      var digit = $(this).html();
      var curScreen = $('#screen').html();

      //Checks to see if the current 'digit' is an operator.
      if(contains(operators,digit)){
        currentNumber = 1;
        operator = digit;
      } else if(digit!=='='){
        numbers[currentNumber]+=digit;
      }
