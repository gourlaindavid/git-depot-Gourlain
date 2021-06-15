var bouton2= document.getElementById("btn2");
bouton2.addEventListener("click",clickbtn2);
var calc;
var affich= "<p>";

function clickbtn2()
{
    var x=prompt("Quel chiffre souhaiter vous multiplier?");
    x=parseInt(x);
    for(i=0; i<=10; i++)
    {
        calc= i*x;
        affich= affich+i+" x "+x+" = "+calc+"<br>";
    }
    affich= affich+"</p>";
    document.getElementById("resultat2").innerHTML= (affich);
}