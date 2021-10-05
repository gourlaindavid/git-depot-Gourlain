//exercice 1
var bouton1= document.getElementById("ex1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1()
{
    var tab= new Array();
    var condi;
    var i= 0;
    console.log("ok");
    while(condi!=0)
    {
        parseInt(condi=window.prompt("Entrez un nombre (Entrez 0 pour terminer les entrer)"));
        if(condi!=0)
        {
            tab[i]=parseInt(condi);
            i++;
        }
    }
    console.log("Il y a "+tab.length+" éléments déclarer")
    var calcul=0;
    var moy;
    for(var e=0; e<tab.length; e++)
    {
        calcul=calcul+tab[e];
        console.log(calcul);
    }
    moy=calcul/tab.length;
    console.log(moy);
}