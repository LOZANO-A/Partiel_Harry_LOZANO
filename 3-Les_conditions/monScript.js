/*let number = 5;
let text = '5';
let isRainingToday = true;
console.log(number == text);
console.log(number === text);
if(isRainingToday)
{
    console.log("Where is my umbrella?")
}
else
{
    console.log("What a sunny day !")
}*/


/*let reponse = prompt("Entrez votre âge ?")
if(reponse > 0){
    if(reponse < 18){
        alert('L utilisateur a ' + reponse + 'an(s), il est mineur!');
    }
    if(reponse > 18 && reponse < 62){
        alert('L’utilisateur a ' + reponse + ' an(s), il est majeur!')
    }
    else{
        alert('L’utilisateur a '+ reponse + ' an(s), il est majeur mais aussi retraité !!')
    }
}*/

let rep = parseInt(prompt("saisir votre age :"))
/* V1
if(rep>0)
{
    if(rep>=18)
    {
        if(rep>=25)
        {
            if(rep>=50)
            {
                if(rep>=62)
                {
                    if(rep>=100)
                    {
                        console.log("il vient d'être centenaire")
                    }
                    else{console.log("il vient d'être retraité")}
                }
                else{console.log("il a un demi siècle")}
            }
            else{console.log("il a un quart de siècle ")}
        }
        else{console.log("il vient d'être majeur")}
    }
    else{console.log("il est mineur")}
}*/

/* V2
if(rep > 0 && rep < 18)
    {console.log("mineur")}
else if(rep >= 18 && rep < 25)
    {console.log("majeur")}
else if(rep >= 25 && rep < 50)
    {console.log("1/4 siècle ")}
else if(rep >= 50 && rep < 62)
    {console.log("1/2 siècle")}
else if(rep >= 62 && rep < 100)
    {console.log("retraité")}
else{console.log("centenaire")}*/

switch(rep)
{
    case 0 : 
        console.log("age invalide");
        break;
    case 18 : 
        console.log("majeur");
        break;
    case 25 : 
        console.log("1/4 de siècle");
        break;
    case 50 : 
        console.log("1/2 siècle");
        break;
    case 62 : 
        console.log("retraite");
        break;
    case 100 :  
        console.log("centenaire");
        break;
}