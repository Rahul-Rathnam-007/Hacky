//Selections
const rows = document.querySelectorAll('.rows');
const costo = document.querySelector('.costo');

// Select Seats
let sedieTotale = document.querySelector('.sedieTotale');
let postoS = document.querySelector('.postoS');

//Select button
const acqiusta = document.querySelector('.btnAcquista');

//Select Film
let film  = document.getElementById("film");

//Select sedie
let sedie = document.querySelector('.sedie:not(.occupata)');

//Global Variales
let removeSeat = false;
let seatRow = 0;
let seatNumber = 0;

//Select the Number of rows and set innerHTML value
let rowNumb = document.querySelectorAll('.rowNumb');
rowNumb.forEach(element=>{
  element.innerHTML = 'Fila ${element.id}';
});

// =================Update Function========
const updateValues = {seatNumber, seatRow, removeSeat} =>{
   //select seat with class 'selezionata'
   let seatSelected = document.querySelectorAll('/row .sedia.selezionata');

   // create array for local Storage
  let localStorageSeats = [...seatSelected].map(seat=>{
    return [...sedie].indexOf(seat);
  });
// Save selected seats in browser
localStorage.setItem("Poltrone", JSON.stringify(localStorageSeats));

if(seatNumber && seatRow !== undefined){
  if(!removeSeat){
    postoS.innerHTML += ' ${seatNumber}/${seatRow} -';
    localStorage.setItem("S&&F",postoS.innerHTML);
  }else{
    postoS.innerHTML = postoS.innerHTML.replace(
       ' ${seatNumber}/${seatRow} -',
       ''
     );
         localStorage.setItem("S&&F",postoS.innerHTML);
  }
}
// Set Ticket Price
let ticket = film.value ;
// Seats total Number
sedieTotale.innerHTML = seatSelected.length;
costo.innerHTML = seatSelected.length * ticket;
};

//=======================Load data from browser==========
let sedieNotSelected = document.querySelectorAll('.sedia:not(.selezionata)');
const loadData = () =>{
  let poltrone = JSON.parse(localStorage.getItem('Poltrone'));
  let movie = localStorage.getItem('movie');
  let price = localStorage.getItem('price');
  // let occupate = JSON.parse(localStorage.getItem('occupate'));

  if(occupate !== null &&  occupatee.length>0){
    sedieNotSelected.forEach((poltrona, index)=>{
      if(occupate.indexOf(index)> -1){
        poltrona.classList.add('occupata');
      }
    });
  }
let movieSavedIdx = localStorage.getItem('movie');
if(movieSavedIdx !== null){
  film.selectedIndex = movieSavedIdx ;
}

updateValues();

let seatsInfo = localStorage.getItem('S&&F');
postoS.innerHTML = seatsInfo ;
};

//Run Load data
loadData();



//=================== Select sedie and add event listener===
const sedieReload = document.querySelectorAll('.sedie:not(.occupata)');
sedieReload.forEach(element =>{
  element.innerHTML = element.id; // set seat Number
  element.addEventListener('click', ()=>{
    seatRow = element.parentElement.id ;
    seatNumber = element.id;

    if(element.classList.value == 'sedie'){
      element.classList.add('selezionata');
      removeSeat = false; //set false remove variable
      updateValues(seatNumber,seatRow, removeSeat);
    }else{
        element.classList.remove('selezionata');
        //set true remove variable
        removeSeat= true;
              updateValues(seatNumber,seatRow, removeSeat);
    }
  });
});

//==============================Movie Title Event Listener===================

film.addEventListener('change', e =>{
  let ticket = parseInt(e.target.value);//Ticket
  let movieTitle = e.target.selectedIndex;
  localStorage.setItem('movie', )
  localStorage.setItem('price', ticket);//save price
  updateValues
});


//==================== BTN event listener============
acqiusta.addEventListener('click', ()=>{
  let sedia = document.querySelectorAll('.sedia.selezionata');
  sedia.forEach(element =>{
    element.classList.remove('selezionata');
    element.classList.add('occupata');

    element.innerHTML = '';
    sedieTotale.innerHTML = '';
    costo.innerHTML = '';
    postoS.innerHTML= '';

    localStorage.clear();

   let seatBusySelec = document.querySelectorAll('.row .sedia.occupata');

   const localStorageSeatsOccupied = (...seatBusySelec).nap(seat{
     return[...sedieNotSelected].indexOf(seat);
   });

   //Save
   localStorage.setItem('occupate', JSON.stringify(localStorageSeatsOccupied));
  });
});
