var bouton5= document.getElementById("envoie");
bouton5.addEventListener("click",verif);

function verif(event)
{
    //expression regulière
    var nomregex= /^[A-Za-z]+$/;
    var prenomregex= /^[A-Za-z]+$/;
    var dtnregex= /^[0-9][0-9]?\/[0-9][0-9]?\/[0-9]0-9?$/;
    var cpregex= /^[0-9][0-9][0-9][0-9][0-9]$/;
    var mailregex= /^[A-Za-z0-9]+@[a-z0-9]{2,}.[a-z]{2,5}$/;
    
    //récup des données de formulaire
    var nom=document.getElementById("nom");
    var prenom=document.getElementById("prenom");
    var dtn=document.getElementById("date");
    var cp=document.getElementById("cp");
    var mail=document.getElementById("mail");
    var question=document.getElementById("question");

    //test nom
    if(!nomregex.test(nom.value))
    {
        event.preventDefault();
        document.getElementById("errnom").innerHTML= ("<p>Entrez un nom valide</p>");
    }
    if(nom.value=="")
    {
        event.preventDefault();
        document.getElementById("errnom").innerHTML= ("<p>Entrez un nom</p>");
    }
    if(nomregex.test(nom.value))
    {
        document.getElementById("errnom").innerHTML="";
    }

    //test prénom
    if(!prenomregex.test(prenom.value))
    {
        event.preventDefault();
        document.getElementById("errprenom").innerHTML= ("<p>Entrez un prenom valide</p>");
    }
    if(prenom.value=="")
    {
        event.preventDefault();
        document.getElementById("errprenom").innerHTML= ("<p>Entrez un prenom</p>");
    }
    if(prenomregex.test(prenom.value))
    {
        document.getElementById("errprenom").innerHTML="";
    }

    //test date de naissance
    
}
