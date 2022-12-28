/** Exercice 1: Instruction If/Else Simple */

// DesInstructions

//Créez 2 variables, x et y. Chacun d'eux doit avoir une valeur numérique différente.
let x = 23
let y = 19

//Écrivez une instruction if/else qui vérifie quel nombre est le plus grand.

if(x>y){
    alert(`${x} est le plus grand`)
}else{
    alert(`${x} est le plus petit`)
}

/** Exercice 2 : Chihuahua */


//1.Créez une variable appelée newDogdont la valeur est "Chihuahua".
let newDog ="Chihuahua"
//2.Vérifiez et affichez le nombre de lettres dans newDog.
alert(newDog.length)
//3.Affichez la newDogvariable en majuscule puis en minuscule (pas besoin de créer de nouvelles variables, juste console.log deux fois).
alert(newDog.toUpperCase())// affiche le contenu de la variable newDog en majuscule
alert(newDog.toLowerCase())// affiche le contenu de la variable en minuscule
//4.Vérifiez si la variable newDogest égale à "Chihuahua"
if(newDog == "Chihuahua"){
    //si c'est le cas, affichez "J'adore les chihuahuas, c'est ma race de chien préférée"
    alert("J'adore les chihuahuas, c'est ma race de chien préférée")
}else{
    //sinon, console.log 'Je m'en fous, je préfère les chats'
    alert('Je m\'en fous, je préfère les chats')
}

/**  Exercice 3 : Pair Ou Impair*/

//1.Invitez l'utilisateur à entrer un nombre et enregistrez-le dans une variable.
let nbr = prompt("Veuillez entrer un nombre svp: ")
//2.Vérifiez si la variable est paire ou impaire.
if(nbr % 2 ==0){
      //a.S'il est pair, afficher : "x est un nombre pair". Où x est le nombre réel choisi par l'utilisateur.
    alert(`${nbr} est un nombre paire`)
}else{
    //b.S'il est impair, afficher : « x est un nombre impair ». Où x est le nombre réel choisi par l'utilisateur.
    alert(`${nbr} est un nombre impaire`)
}


/** Exercice 4 : Discussion De Groupe */

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

//1.À l'aide du tableau ci-dessus, console.log indique le nombre d'utilisateurs connectés au chat de groupe en fonction des règles suivantes :
    if(users.length == 0){
 //a.S'il n'y a pas d'utilisateurs (le tableau des utilisateurs est vide), console.log "personne n'est en ligne".
        console.log("personne n'est en ligne")
    }else if(users.length == 1){
         //b.S'il y a 1 utilisateur, console.log " <name_user>est en ligne".
        console.log(`${users[0]} est en ligne`)
    } else if(users.length==2){
        //c.S'il y a 2 utilisateurs, console.log « <name_user1>et <name_user2>sont en ligne ».
        console.log(`${users[0]} et ${users[1]} sont en ligne`)
    }else if (users.length > 2) {

        //d.S'il y a plus de 2 utilisateurs, console.log les deux premiers noms dans le tableau des utilisateurs et le nombre d'utilisateurs supplémentaires en ligne.

        console.log(`${users[0]} et ${users[1]} sont les deux premiers utilisateurs dans le tableau.Il y a un total de ${users.length} Personnes en ligne.`);
    }




