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

for ( let i = 0; i < team.length; i++){
    const persona = team[i];

    for ( let key in persona){
        console.log(key + ': ' + persona[key]);  //stampa in console (per ogni chiave di persona), la chiave il suo valore 
    }
}
