/*
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

1. definire un array di oggetti {Nome, Ruolo e Foto}
2. stamparlo dinamicamente nell'html
3. utilizzare gli input presenti per creare un nuovo oggetto e pusharlo.
*/

const teamMembers = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: "img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: "img/barbara-ramos-graphic-designer.jpg"
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: "img/walter-gordon-office-manager.jpg"
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: "img/scott-estrada-developer.jpg"
  },
];

const cardContainer = document.querySelector('.team-container');

init();

/**
 * Funzione start del programma
 */
function init() {
  cardContainer.innerHTML = '';
  for(let i in teamMembers){
    CardStamp(i)
  }
}

/**
 * Stampa generica delle carte
 * @param {Number} counter 
 */
function CardStamp(counter) {
  cardContainer.innerHTML += 
 `
    <div class="team-card">
      <div class="card-image">
        <img
          src= ${teamMembers[counter].foto}
          alt="${teamMembers[counter].nome}"
        />
      </div>
      <div class="card-text">
        <h3>${teamMembers[counter].nome}</h3>
        <p>${teamMembers[counter].ruolo}</p>
      </div>
    </div>
 `; 
}


const addBtn = document.getElementById('addMemberButton');
// click che prende le informazioni del form
addBtn.addEventListener('click', function(){
  let memberName = document.getElementById('name').value;
  while(!isNaN(memberName)){
    if (!isNaN(memberName)) {
      memberName = prompt('Hai inserito un numero, riprovare ad inserire il nome')
    }
  }
  let memberRole = document.getElementById('role').value;
  while(!isNaN(memberRole)){
    if (!isNaN(memberRole)) {
      memberRole = prompt('Hai inserito un numero, riprovare ad inserire il ruolo')
    }
  }
  let memberImg = document.getElementById('image').value;
  while(!isNaN(memberImg)){
    if (!isNaN(memberImg)) {
      memberImg = prompt('Hai inserito un numero, riprovare ad inserire il percorso dell\'immagine')
    }
  }
  cardPush(memberName, memberRole, memberImg)
  lastCardStamp();
  formReset();
})


/**
 * Stampa solo l'ultima carta
 */
function lastCardStamp() {
  const lastCard = teamMembers.length - 1;
  console.log(lastCard);
  CardStamp(lastCard)
}

/**
 * Funzione che pusha nell'array i dati del form
 * @param {String} name 
 * @param {String} role 
 * @param {String} img 
 */
function cardPush(name, role, img) {
  teamMembers.push({
    nome: name,
    ruolo: role,
    foto: img
  })
  console.log(teamMembers);
}


/**
 * Reset del form dopo l'inserimento dei dati
 * @param {string} name 
 * @param {string} role 
 * @param {string} img 
 */
function formReset() {
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';
}