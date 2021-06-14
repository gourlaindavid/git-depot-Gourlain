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
        age= parseInt(prompt("Entrez un âge (terminer par 100)"));console.log(age);
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
    
}