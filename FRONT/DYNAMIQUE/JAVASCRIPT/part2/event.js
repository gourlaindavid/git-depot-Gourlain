//ex 1 retour de donner
var control= document.getElementById("control");
control.addEventListener("click",clickcontrol);
function clickcontrol()
{
    var donner= document.getElementById("entrer").value;
    alert("Vous avez saisi: '"+donner+"'");
}

//ex2 nb magic

var btnverif= document.getElementById("btnverif");
btnverif.addEventListener("click",clickverif);
function clickverif()
{
    var nbmag=Math.floor(Math.random()*100)+1;
    console.log(nbmag);
    var test=false;
    var propo= document.getElementById("verif").value;
    while(test!=true)
    {
        console.log(propo);
        console.log(test);
        console.log(nbmag);
        if(propo==nbmag)
        {
            test=true;
            alert("Bien jouer");
            break;
        }
        if(propo<nbmag)
        {
            alert("trop petit");
            propo=window.prompt("Entrez votre proposition");
        }
        if(propo>nbmag)
        {
            alert("trop grand");
            propo=window.prompt("Entrez votre proposition");
        }
    }
}