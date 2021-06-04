//exercice 1
var bouton1= document.getElementById("ex1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1()
{
    var nb=parseInt(prompt("Entrez un nombre"));
    var multip=parseInt(prompt("Entrez un multiplicateur"));
    var x;
    var y;
    function afficheimg()
    {
        document.write("<img src=papillon.jpg><br>");
    }
    function produit()
    {
        x=nb*nb*nb;
        y=nb*multip;
    }
    afficheimg();
    produit();
    document.write("Le cube de "+nb+" est égal à "+x+"<br>Le produit de "+nb+" x "+multip+" est égal à "+y);
}

//exercice 2
var bouton2= document.getElementById("ex2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2()
{   
    
}

//exercice 3
var bouton3= document.getElementById("ex3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3()
{
    
}

//exercice 4
var bouton4= document.getElementById("ex4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4()
{
    
}

//exercice 5
var bouton5= document.getElementById("ex5");
bouton5.addEventListener("click",clickbtn5);

function clickbtn5()
{
    
}