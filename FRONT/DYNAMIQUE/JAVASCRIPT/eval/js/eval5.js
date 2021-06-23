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
    var condi=document.getElementById("condi");

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
    if(!dtnregex.test(dtn.value))
    {
        event.preventDefault();
        document.getElementById("errdtn").innerHTML= ("<p>Entrez une date de naissance valide</p>");
    }
    if(dtn.value=="")
    {
        event.preventDefault();
        document.getElementById("errdtn").innerHTML= ("<p>Entrez une date de naissance</p>");
    }
    if(dtnregex.test(dtn.value))
    {
        document.getElementById("errdtn").innerHTML="";
    }

    //test code postal
    if(!cpregex.test(cp.value))
    {
        event.preventDefault();
        document.getElementById("errcp").innerHTML= ("<p>Entrez un code postal valide</p>");
    }
    if(cp.value=="")
    {
        event.preventDefault();
        document.getElementById("errcp").innerHTML= ("<p>Entrez un code postal</p>");
    }
    if(cpregex.test(cp.value))
    {
        document.getElementById("errcp").innerHTML="";
    }

    //test email
    if(!mailregex.test(mail.value))
    {
        event.preventDefault();
        document.getElementById("errmail").innerHTML= ("<p>Entrez un email valide</p>");
    }
    if(mail.value=="")
    {
        event.preventDefault();
        document.getElementById("errmail").innerHTML= ("<p>Entrez un email</p>");
    }
    if(mailregex.test(mail.value))
    {
        document.getElementById("errmail").innerHTML="";
    }
    
    //test question 
    if(question.value=="")
    {
        event.preventDefault();
        document.getElementById("errquestion").innerHTML= ("<p>Entrez une question</p>");
    }
    if(question.value!="")
    {
        event.preventDefault();
        document.getElementById("errquestion").innerHTML= "";
    }

    //test condition
    if(condi.check==true)
    {
        document.getElementById("errcondi").innerHTML= "";
    }
    if(condi.check!=true)
    {
        event.preventDefault();
        document.getElementById("errcondi").innerHTML= "Veuillez accepter les conditions d'utilisation";
    }
}
