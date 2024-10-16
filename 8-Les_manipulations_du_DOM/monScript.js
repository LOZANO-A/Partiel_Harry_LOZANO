/* Toutes les variables */
let li = document.querySelector("#listeCourses li");
    //TP15
        //crée la variable h2
            let h2 = document.querySelector('h2');
        //Récupère la date
            let dateJour = new Date(Date.now());
            let dateJourFr = dateJour.toLocaleDateString('fr-FR');
        //ajoute la date au titre
            let dateHTML = h2.innerHTML;
            h2.innerHTML += " : " + dateJourFr;
    
    //TP16
        let myInput = document.querySelector('#myInput');
        let btn = document.querySelector('.btn');
        let liste = document.querySelector('#listeCourses');


/* Tous les évènements */
        li.addEventListener('click', ()=>{
    //TP13
            //li.style.backgroundColor = "lightblue";
            //li.style.textDecoration = "line-through";

    //TP14
            li.classList.toggle('itemCheck');
        })

    //TP16
        //ajout avec bouton    
            btn.addEventListener('click', (addProduct));{}
        //ajout avec touche "Entrer"
            document.addEventListener('keyup',function(event){
                if(event.key == 'Enter')
                {
                    addProduct()
                }
            })

    //TP17
        //appel de la fonctino suppression
            li.addEventListener('dblclick', function(){
            //passe en paramètre de suppression l'élement double-cliqué
                rmProduct(li);
            });


/* Les fonctions */
    //TP16
        function addProduct(){
        //récupère la saisie
            let saisie = myInput.value;
        //compare le contenu de la zone de texte
            if(saisie === ""){
                alert('Erreur de saisie');
            }
            else{
                alert('Produit ajouté !');
            //crée un nouvel élément de la liste
                let li = document.createElement('li');
            //attribue le contenue de la saisir au nouvel élément de la liste
                li.textContent = saisie;
            //ajoute un evenement au clic
                li.addEventListener('click', function(){
                    li.classList.toggle('itemCheck');
                })
            //ajout la fonctino suppression au nouveau elements
                li.addEventListener('dblclick', function(){
                    rmProduct(li)
                })
            //ajoute le nouvel element à la liste de courses
                liste.appendChild(li);
            //vide la champ input
                myInput.value ="";
            }
        }

    //TP17
        //supprime avec un paramètre (élement double-cliqué)
            function rmProduct(element){
            //supprime l'element
                liste.removeChild(element)
            //alerte
                alert("Element supprimé");     
            }