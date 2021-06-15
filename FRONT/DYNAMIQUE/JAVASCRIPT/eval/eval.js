//ex1

var bouton1= document.getElementById("ex1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1()
{
    var moins= 0;
    var entre= 0;
    var plus= 0;
    var age;
    do
    {
        age= parseInt(prompt("Entrez un âge (terminer par 100)"));
        if(age<20)
        {
            moins++;
        }
        if(age>=20 && age<=40)
        {
            entre++;
        }
        if(age>40)
        {
            plus++;
        }
    }while(age!=100)
    console.log(moins);
    console.log(entre);
    console.log(plus);
    document.getElementById("resultat1").innerHTML= (moins+" personnes ont moins de 20 ans<br>"+plus+" personnes ont plus de 40 ans<br>"+entre+" personnes ont entre 20 et 40 ans");
}

//ex2

var affich= "<p>";
var mult;
var x;

var btnmult1= document.getElementById("btnmult1");
btnmult1.addEventListener("click",tblmult(1),);
function tblmult()
{
    document.getElementById("resultat2").innerHTML= ("btn fonctionne");
    for(i=0; i<=10; i++)
    {
        calc=i*x;
        affich= affich+i+" x "+x+" = "+calc+"<br>";
    }
    document.getElementById("resultat2").innerHTML= (affich+"</p>");
}