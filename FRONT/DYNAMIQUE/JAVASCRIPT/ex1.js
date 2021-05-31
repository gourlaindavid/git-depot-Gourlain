var bouton1= document.getElementById("relance");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1()
{
    var nom = prompt("Entrez votre nom");

    var prenom = prompt("Entrez votre prénom");

    var reponse = confirm("Etes-vous un homme?");
    if (reponse == true) 
    {
        alert("Bonjour Monsieur "+nom +prenom);
    }/* 
    else 
    {
        alert("Bonjour Madame" +nom+prenom+/n/n"Bienvenue sur notre site web !");
    }*/
}