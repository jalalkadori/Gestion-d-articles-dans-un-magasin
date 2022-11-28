//  declaration des variables
const form = document.getElementById('form');
const Nom = document.getElementById('nom');
const Marque = document.getElementById('marque');
const Prix = document.getElementById('prix');
const Date = document.getElementById('date');
const Type = document.getElementById('type');
const noPromo = document.getElementById('noPromo');
const Promo = document.getElementById('Promo');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs() {
    const NomValue = document.getElementById('nom').value;
    const MarqueValue = document.getElementById('marque').value;
    const PrixValue = document.getElementById('prix').value;
    const DateValue = document.getElementById('date').value;
    const TypeValue = document.getElementById('type').value;
    const noPromoValue = document.getElementById('noPromo');
    const PromoValue = document.getElementById('Promo');

    if(NomValue === '') {
		setError(Nom, 'Username cannot be blank');
	} else {
		setSuccess(Nom);
	}

}

function setError(input, message) {
	const cell = input.parentElement;
	const span = cell.querySelector('span');
	cell.className = 'cell erreur';
	span.innerText = message;

    // suppButton.setAttribute("class", "supprimer");
}

function setSuccess(input) {
	const cell = input.parentElement;
	cell.className = 'cell valide';
}
	




// function Ajouter() {

//     //creating new table Row 
//     let table = document.querySelector('table');
//     const tBody = document.querySelector('tbody');

    
//     for (let i = 0; i < 1; i++) {
//         const row = document.createElement("tr")
//             for (let j = 0; j < 7; j++) {
//                 const cell = document.createElement("td");
//                 const suppButton = document.createElement("button");
//                 const modiButton = document.createElement("button");
//                 const nomOutput = document.querySelector("#nomOutput");

                
//                 row.appendChild(cell);
//                 // Verification du Nom du produit 
//                 if (j == 0) {
//                     cell.innerText = Nom; 
//                 }
               
//                 // if(j == 1){
//                 //     cell.innerText = Marque;
//                 // }
//                 // if(j == 2){
//                 //     cell.innerText = Prix;
//                 // }
//                 // if(j == 3){
//                 //     cell.innerText = Type;
//                 // }
//                 // if(j == 4){ 
//                 //     cell.innerText = Date;
//                 // }
//                 // if(j == 5){
//                 //     cell.innerText = Nom;
//                 // }
//                 // if(j == 6){
//                 //     // iserer un botton de modification  
//                 //     modiButton.innerText = "Modifier";
//                 //     modiButton.setAttribute("class", "modifier");
//                 //     cell.appendChild(modiButton);
//                 //     // iserer un botton de suppression 
//                 //     suppButton.innerText = "Supprimer";
//                 //     suppButton.setAttribute("class", "supprimer");
//                 //     suppButton.setAttribute("onclick", "deletRow(this)");
//                 //     cell.appendChild(suppButton);
//                 // }
//             }
//         table.appendChild(row);
//     }
// }
//      // Delet function 

// function deletRow(r) {
//         var i = r.parentNode.parentNode.rowIndex;
//         document.getElementById("myTable").deleteRow(i);
// }

    // const btn = document.querySelector('.supprimer');
    // btn.addEventListener("click", function()
    // { btn.closest("tr").remove(); });
    

    
  
   
    
    



    

