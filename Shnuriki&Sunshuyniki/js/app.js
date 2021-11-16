const area = document.getElementById('area');
let move = 0;
let result = '';
let contetnWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

area.addEventListener('click', e => {
    if(e.target.clasName ='box') {
        move % 2 === 0 ? e.target.innerHTML = 'Шнурики' : e.target.innerHTML = 'Суншуйники';
        move++; 
        check(); 
    }
})

const check =()=>{
   const boxes = document.getElementsByClassName('box');
 
   const arr = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
   ];
   for (i = 0; i < arr.length; i++){
       if(
           boxes[arr[i][0]].innerHTML == 'Шнурики' && boxes[arr[i][1]].innerHTML == 'Шнурики' && boxes[arr[i][2]].innerHTML == 'Шнурики'
       ){
         result = 'Шнурики'
         prepareResult(result);
       }  else if(
            boxes[arr[i][0]].innerHTML == 'Суншуйники' && boxes[arr[i][1]].innerHTML == 'Суншуйники' && boxes[arr[i][2]].innerHTML == 'Суншуйники'
       ){
         result = 'Суншуйники'
         prepareResult(result);
       }
   }
}


const prepareResult = winner => {
    contetnWrapper.innerHTML = `Победили ${winner}`;
    modalResult.style.display = 'block';
}
const closeModal =  () => {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);