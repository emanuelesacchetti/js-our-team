const team = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        foto : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        foto : 'angela-caroll-chief-editor.jpg'
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        foto : 'walter-gordon-office-manager.jpg'
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        foto : 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : 'scott-estrada-developer.jpg'
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg'
    }
]

const elementiTeam = document.getElementById('elencoMembriTeam'); //riferimento al dom

for ( let i = 0; i < team.length; i++){  
    const persona = team[i];                          //creo i div per inserire i valori dei membri
    const element = document.createElement('div');
    //element.innerHTML = 'Membro del team: ';
    element.classList.add('card');
    const nomeDom = document.createElement('div');
    nomeDom.classList.add('nome');
    const ruoloDom = document.createElement('div');
    ruoloDom.classList.add('ruolo');
    const imgDom = document.createElement("img");
     

    element.append(imgDom)
    element.append(nomeDom);
    element.append(ruoloDom);
    elementiTeam.append(element);
    
    imgDom.src = `img/${persona.foto}`;
    nomeDom.append(persona.nome);
    ruoloDom.append(persona.ruolo);
    //<img src="img/wayne-barnett-founder-ceo.jpg" alt="">
    for ( let key in persona){
        console.log(key + ': ' + persona[key]);  //stampa in console (per ogni chiave di persona), la chiave il suo valore 
        
        
    }
}   

//<img src='../img/peppapig.jpg'>

function creaImmagine() {
    let img = document.createElement("img");
    img.src = persona[2];
    element.appendChild(img);
  };


