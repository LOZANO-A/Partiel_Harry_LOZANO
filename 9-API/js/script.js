async function getData() {
//TP18 - Question 2 ##################################
    const pokedex = await fetch("./data/data.json")
      .then((response) => response.json())
      .catch((error) => alert("Erreur : " + error));
    //console.log(pokedex);
//#################################################### 
    for (const pokemon of pokedex) {
      console.log(pokemon);
 //TP18 - Question 3.1 ################################# 
      let article = document.createElement("article");
//######################################################

//TP18 - Question 3.2 et 3.3 ############################################

type=[];
for(let elem of pokemeon.apiTypes)
    {
        type[]=elem.name;
    }    

article.innerHTML = `
            <figure>
                <picture>
                    <img src="${pokemon.image}" alt="Image Bulbizarre" />
                </picture>
                <figcaption>
                    <span class="types">${pokemon.apiTypes[0].name}</span>
                    <h2>${pokemon.name}</h2>
                    <ol>
                        <li>Points de vie : ${pokemon.stats.HP}</li>
                        <li>Attaque : ${pokemon.stats.attack}</li>
                        <li>Défense : ${pokemon.stats.defense}</li>
                        <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
                        <li>Vitesse : ${pokemon.stats.speed}</li>
                    </ol>
                </figcaption>
            </figure>
          `;
//######################################################################  

//TP18 - Question 3.4 #################################################
      let main = document.querySelector("main");
//#####################################################################

//TP18 - Question 3.5 #################################################
      main.appendChild(article);
//#####################################################################
    }
  }
  
  getData();
  