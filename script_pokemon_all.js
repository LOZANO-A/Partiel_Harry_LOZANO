async function getData() {
  const pokedex = await fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => response.json())
    .catch((error) => alert("Erreur : " + error));

  console.log(pokedex);

  for (const pokemon of pokedex) {
    console.log(pokemon);

    let article = document.createElement("article");

    article.innerHTML = `
            <figure>
          <picture>
            <img src="${pokemon.image}" alt="Image Bulbizarre" />
          </picture>
          <figcaption>
            <span class="types">Plante</span>
            <h2>${pokemon.name}</h2>
            <ol>
              <li>Points de vie : 39</li>
              <li>Attaque : 52</li>
              <li>Défense : 43</li>
              <li>Attaque spécial : 60</li>
              <li>Vitesse : 65</li>
            </ol>
          </figcaption>
        </figure>
        `;

    let main = document.querySelector("main");

    main.appendChild(article);
  }
}

getData();
