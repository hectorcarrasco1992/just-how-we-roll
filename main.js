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
    sixes.push(getRandomNumber(6))

    const median = median6()
    const mean = mean6()

    document.querySelector('#d6-rolls-mean').innerText=mean
    document.querySelector('#d6-rolls-median').innerText=median
    
    if(getRandomNumber(6)===1){
        document.querySelector('#d6-roll').src = 'images/d6/1.png';
        
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
    const means = mean12()
    const median = median12()

    document.querySelector('#d12-rolls-mean').innerText=means
    document.querySelector('#d12-rolls-median').innerText=median

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

function roll20(){
    getRandomNumber(20)

    const means20 = mean20()
    const medians20 = median20()

    document.querySelector('#d20-rolls-mean').innerHTML=means20
    document.querySelector('#d20-rolls-median').innerHTML=medians20


    if(getRandomNumber(20)===1){
        document.querySelector('#d20-roll').src = 'images/numbers/1.png'
    }else if(getRandomNumber(20) === 2){
        document.querySelector('#d20-roll').src = 'images/numbers/2.png'
    }else if(getRandomNumber(20)===3){
        document.querySelector('#d20-roll').src = 'images/numbers/3.png'
    }else if(getRandomNumber(20) ===4){
        document.querySelector('#d20-roll').src = 'images/numbers/4.png'
    }else if(getRandomNumber(20)=== 5){
        document.querySelector('#d20-roll').src = 'images/numbers/5.png'
    }else if(getRandomNumber(20)===6){
      document.querySelector('#d20-roll').src='images/numbers/6.png'
    }else if(getRandomNumber(20)===7){
    document.querySelector('#d20-roll').src = 'images/numbers/7.png'
    }
    else if(getRandomNumber(20)===8){
    document.querySelector('#d20-roll').src = 'images/numbers/8.png'
    }
    else if(getRandomNumber(20)===9){
    document.querySelector('#d20-roll').src = 'images/numbers/9.png'
    }
    else if(getRandomNumber(20)===10){
    document.querySelector('#d20-roll').src = 'images/numbers/10.png'
    }
    else if(getRandomNumber(20)===11){
    document.querySelector('#d20-roll').src = 'images/numbers/11.png'
    }
    else if(getRandomNumber(20)===12){
    document.querySelector('#d20-roll').src = 'images/numbers/12.png'
    }
    else if(getRandomNumber(20)===13){
    document.querySelector('#d20-roll').src = 'images/numbers/13.png'
    }
    else if(getRandomNumber(20)===14){
    document.querySelector('#d20-roll').src = 'images/numbers/14.png'
    }
    else if(getRandomNumber(20)===15){
    document.querySelector('#d20-roll').src = 'images/numbers/15.png'
    }
    else if(getRandomNumber(20)===16){
    document.querySelector('#d20-roll').src = 'images/numbers/16.png'
    }
    else if(getRandomNumber(20)===17){
    document.querySelector('#d20-roll').src = 'images/numbers/17.png'
    }
    else if(getRandomNumber(20)===18){
    document.querySelector('#d20-roll').src = 'images/numbers/18.png'
    }
    else if(getRandomNumber(20)===19){
    document.querySelector('#d20-roll').src = 'images/numbers/19.png'
    }
    else if(getRandomNumber(20)===20){
    document.querySelector('#d20-roll').src = 'images/numbers/20.png'
    }
}

function reload(){
    location.reload(true)
}




/*******************
 * EVENT LISTENERS *
 *******************/

 document.querySelector('#d6-roll').addEventListener('click',roll1)
 
 document.querySelector('#d6-roll').addEventListener('click',mean6)

 document.querySelector('#d6-roll').addEventListener('click',median6)
 
 
document.querySelector('#double-d6-roll-1').addEventListener('click',roll2)

 document.querySelector('#double-d6-roll-2').addEventListener('click',roll2ndDice)

 document.querySelector('#d12-roll').addEventListener('click',roll12)
 
 document.querySelector('#d20-roll').addEventListener('click',roll20)

 document.querySelector('#reset-button').addEventListener('click',reload )

    


/****************
 * MATH SECTION *
 ****************/

 function mean6(){
     sixes.push(getRandomNumber(6))
     let sumOf6=0
     for(let i=0;i<sixes.length;i++){
         sumOf6 += sixes[i]
     }
        
     return sumOf6/sixes.length

     
     document.querySelector('#d6-rolls-mean').innerText=sumOf6/sixes.length
  }


 function median6(){
    sixes.push(getRandomNumber(6))
    let med6 = []
     
    for (let i = 0; i < sixes.length; i++){
        med6.push(sixes[i])
        med6.sort()

     mid = Math.floor(med6.length/2)
    }
    
    if(med6.length % 2 === 0){
        med6.push(med6[mid-1])
    }else {
        med6.push(med6[mid])
    }

     return med6[mid]

     document.querySelector('#d6-rolls-median').innerText=med6[mid]

 }

 function mean12(){
    twelves.push(getRandomNumber(12))
    let sumOf12=0
    for(let i=0;i<twelves.length;i++){
        sumOf12 += twelves[i]
    }
       
    return sumOf12/twelves.length

 }

 function median12(){
    twelves.push(getRandomNumber(6))
    let med12 = []
     
    for (let i = 0; i < twelves.length; i++){
        med12.push(twelves[i])
        med12.sort()

     mid = Math.floor(med12.length/2)
    }
    
    if(med12.length % 2 === 0){
        med12.push(med12[mid-1])
    }else {
        med12.push(med12[mid])
    }

     return med12[mid]
 }

 function mean20(){
    twenties.push(getRandomNumber(20))
    let sumOf20=0
    for(let i=0;i<twenties.length;i++){
        sumOf20 += twenties[i]
    }
       
    return sumOf20/twenties.length

 }

 function median20(){
    twenties.push(getRandomNumber(6))
    let med20 = []
     
    for (let i = 0; i < twenties.length; i++){
        med20.push(twenties[i])
        med20.sort()

     mid = Math.floor(med20.length/2)
    }
    
    if(med20.length % 2 === 0){
        med20.push(med20[mid-1])
    }else {
        med20.push(med20[mid])
    }

     return med20[mid]

 }



/*********
 * RESET *
 *********/
