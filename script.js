// déclaration de variable
//let prenom = 'Nzumba';
//const age = 22;
//console.log(age);
console.log(typeof age);
console.log(typeof prenom);
console.log(prenom + " " + age);
console.log (`je m'appelle ${prenom}, j'ai ${age} ans`);
console.log(`je m'appel ${prenom} et j'ai ${age} ans de plus`);
console.log('il fait beau aujoud\'hui');


let tab = ['mango',23, false,['go', 'please']];
console.log(tab);
console.log(tab[3][1]);
//objet
let personne = {
    postnom :'Diavewa',
    age: 20,
    jour: 29,
    adresse: {
        rue: 'des ecalptus',
        ville: 'lubumbashi',

    }
};
console.log(personne['postnom']);
console.log(personne ['adresse']['rue']['ville']);

//condition switch.
let vehicule= prompt('quelle est la voiture de votre choix'['toyota, mercedes benz, peugeot']);
let km = prompt ('combien de kilometre');
const prix= ({
    toyota: 0.40,
    mercedesbenz: 0.05,
    peugeot: 0.35
});

switch (vehicule) {
    case 'toyota': {
        alert('vous payerez: ' + prix.toyota  * km + '$');
        break;
    }
    case 'mercedesbenz': {
        alert('vous payerez: ' + prix.mercedesbenz  * km + '$');
        break;
    }
    case 'peugeot': {
        alert('vous payerez: ' + prix.peugeot  * km + ' $');
        break;
    }
    default:
        alert('veillez saisir le point proposé');
}