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

    if(digit==='C'){
      $('#screen').html('');
      numbers = ['',''];
      operator = '';
      currentNumber=0;
    } else {
      $('#screen').html(curScreen+digit);
    }

    if(digit==='='){
      var answer = solve(numbers,operator);
      $('#screen').html(answer);
      numbers[0]=answer;
      numbers[1]='';
      operator = '';
    }
    console.log('numbers',numbers);
    console.log('operator',operator);
  });
});
