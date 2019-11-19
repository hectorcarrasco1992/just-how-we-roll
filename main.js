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
    
}






/*******************
 * EVENT LISTENERS *
 *******************/

 document.querySelector('#d6-roll').addEventListener('click',roll1)

 document.querySelector('#double-d6-roll-1').addEventListener('click',roll2)

 document.querySelector('#double-d6-roll-2').addEventListener('click',roll2ndDice)

    


/****************
 * MATH SECTION *
 ****************/


/*********
 * RESET *
 *********/
