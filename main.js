/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*************************
 * RANDOM ROLL GENERATOR *
 *************************/


function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}


/*******************
 * YOUR CODE BELOW *
 *******************/
    document.querySelector('#d6-roll').src ='images/d6/1.png'
   
   
   document.querySelector('#double-d6-roll-1').src = 'images/start/d6.png'
  
    document.querySelector('#double-d6-roll-2').src = 'images/start/d6.png'

    document.querySelector('#d12-roll').src = 'images/start/d12.jpeg'

    document.querySelector('#d20-roll').src='images/start/d20.jpg'

   function roll1(){
    getRandomNumber(6)
   
    
    if(getRandomNumber(6)===1){
        document.querySelector('#d6-roll').src = 'images/d6/1.png'
    }else if(getRandomNumber(6) === 2){
        document.querySelector('#d6-roll').src = 'images/d6/2.png'
    }else if(getRandomNumber(6)===3){
        document.querySelector('#d6-roll').src = 'images/d6/3.png'
    }else if(getRandomNumber(6) ===4){
        document.querySelector('#d6-roll').src = 'images/d6/4.png'
    }else if(getRandomNumber(6)=== 5){
        document.querySelector('#d6-roll').src = 'images/d6/5.png'
    }else if(getRandomNumber(6)===6){
      document.querySelector('#d6-roll').src='images/d6/6.png'
    }
}

function roll2(){
    getRandomNumber(6)

    if(getRandomNumber(6)===1){
        document.querySelector('#double-d6-roll-1').src = 'images/d6/1.png'
    }else if(getRandomNumber(6) === 2){
        document.querySelector('#double-d6-roll-1').src = 'images/d6/2.png'
    }else if(getRandomNumber(6)===3){
        document.querySelector('#double-d6-roll-1').src = 'images/d6/3.png'
    }else if(getRandomNumber(6) ===4){
        document.querySelector('#double-d6-roll-1').src = 'images/d6/4.png'
    }else if(getRandomNumber(6)=== 5){
        document.querySelector('#double-d6-roll-1').src = 'images/d6/5.png'
    }else if(getRandomNumber(6)===6){
      document.querySelector('#double-d6-roll-1').src='images/d6/6.png'
    }
}

function roll2ndDice(){
    getRandomNumber(6)


    if(getRandomNumber(6)===1){
        document.querySelector('#double-d6-roll-2').src = 'images/d6/1.png'
    }else if(getRandomNumber(6) === 2){
        document.querySelector('#double-d6-roll-2').src = 'images/d6/2.png'
    }else if(getRandomNumber(6)===3){
        document.querySelector('#double-d6-roll-2').src = 'images/d6/3.png'
    }else if(getRandomNumber(6) ===4){
        document.querySelector('#double-d6-roll-2').src = 'images/d6/4.png'
    }else if(getRandomNumber(6)=== 5){
        document.querySelector('#double-d6-roll-2').src = 'images/d6/5.png'
    }else if(getRandomNumber(6)===6){
      document.querySelector('#double-d6-roll-2').src='images/d6/6.png'
    }
}

function roll12(){
    getRandomNumber(12)

    if(getRandomNumber(12)===1){
        document.querySelector('#d12-roll').src = 'images/numbers/1.png'
    }else if(getRandomNumber(12) === 2){
        document.querySelector('#d12-roll').src = 'images/numbers/2.png'
    }else if(getRandomNumber(12)===3){
        document.querySelector('#d12-roll').src = 'images/numbers/3.png'
    }else if(getRandomNumber(12) ===4){
        document.querySelector('#d12-roll').src = 'images/numbers/4.png'
    }else if(getRandomNumber(12)=== 5){
        document.querySelector('#d12-roll').src = 'images/numbers/5.png'
    }else if(getRandomNumber(12)===6){
      document.querySelector('#d12-roll').src='images/numbers/6.png'
}else if(getRandomNumber(12)===7){
    document.querySelector('#d12-roll').src = 'images/numbers/7.png'
}
else if(getRandomNumber(12)===8){
    document.querySelector('#d12-roll').src = 'images/numbers/8.png'
}
else if(getRandomNumber(12)===9){
    document.querySelector('#d12-roll').src = 'images/numbers/9.png'
}
else if(getRandomNumber(12)===10){
    document.querySelector('#d12-roll').src = 'images/numbers/10.png'
}
else if(getRandomNumber(12)===11){
    document.querySelector('#d12-roll').src = 'images/numbers/11.png'
}
else if(getRandomNumber(12)===12){
    document.querySelector('#d12-roll').src = 'images/numbers/12.png'
}

}




/*******************
 * EVENT LISTENERS *
 *******************/

 document.querySelector('#d6-roll').addEventListener('click',roll1)

 document.querySelector('#double-d6-roll-1').addEventListener('click',roll2)

 document.querySelector('#double-d6-roll-2').addEventListener('click',roll2ndDice)

 document.querySelector('#d12-roll').addEventListener('click',roll12)

    


/****************
 * MATH SECTION *
 ****************/


/*********
 * RESET *
 *********/
