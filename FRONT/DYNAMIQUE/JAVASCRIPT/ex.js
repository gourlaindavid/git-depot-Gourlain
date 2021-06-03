//exercice 1
var bouton1= document.getElementById("ex1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1()
{
    var nom = prompt("Invite de script :\n\nEntrez votre nom");
    if(nom==null)
    {
        return;
    }

    var prenom = prompt("Invite de script :\n\nEntrez votre prénom");
    if(prenom==null)
    {
        return;
    }

    var reponse = confirm("Etes-vous un homme?");
    if (reponse == true) 
    {
        alert("Bonjour Monsieur "+nom+" "+prenom+"\n\nBienvenue sur notre site web !");
    }
    else 
    {
        alert("Bonjour Madame "+nom+" "+prenom+"\n\nBienvenue sur notre site web !");
    }
}

//exercice 2
var bouton2= document.getElementById("ex2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2()
{   
    var a="100";
    var b=100;
    var c=1.00;
    var d=true;

    alert("Ceci est une chaine de caractère :"+a);
    b--;
    alert(b);
    c=c+a;
    alert(c);
    d=false;
    alert(d);
}

//exercice 3
var bouton3= document.getElementById("ex3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3()
{
    var nb = prompt("Donnez un nombre");
    if(nb==null)
    {
        return;
    }
    else
    {
        var mod = nb%2;
        if(mod==0)
        {
            alert("nombre pair");
        }
        else
        {
            alert("nombre impair");
        } 
    }
    
}

//exercice 4
var bouton4= document.getElementById("ex4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4()
{
    var age=prompt("Quel est votre âge?");
    if(age<18)
    {
        alert("Vous êtes mineur");
    }
    else
    {
        alert("Vous êtes majeur");
    }
}

//exercice 5
var bouton5= document.getElementById("ex5");
bouton5.addEventListener("click",clickbtn5);

function clickbtn5()
{
    var a=prompt("Entrez un premier nombre");
    var b=prompt("Entrez un deuxième nombre");
    a=parseInt(a);
    b=parseInt(b);
    var ope=prompt("Entrez un opérateur\nExemple: + - * /");
    if(ope!="+" && ope!="-" && ope!="*" && ope!="/")
    {
        alert("Ceci n'est pas un opérateur!");
    }
    else
    {
        switch(ope)
        {
            case "+":
                var result=a+b;
                alert(result);
                break;
            case "-":
                var result=a-b;
                alert(result);
                break;
            case "*":
                var result=a*b;
                alert(result);
                break;
            case "/":
                var result=a/b;
                alert(result);
                break;
        }
    }
}

//exercice 6
var bouton6= document.getElementById("ex6");
bouton6.addEventListener("click",clickbtn6);

function clickbtn6()
{
    var numnom=1;
    var nbnom=0;
    var resnom=" ";
    do
    {   
        var nom=prompt("Saisissez le prénom N°"+numnom);
        /*console.log(nom);
        console.log(resnom);*/
        if(nom!=null)
        {
            resnom=resnom+nom+", ";
            numnom++;
            nbnom++;
        }
    }while(nom!=null)
    alert("Vous avez saisis "+nbnom+" les voici:\n"+resnom);
}

//exercice 7
var bouton7= document.getElementById("ex7");
bouton7.addEventListener("click",clickbtn7);

function clickbtn7()
{
    var final=prompt("Ecrire un nombre");
    var suite=" ";
    var calcul;
    calcul=final;
    while(calcul!=0)
    {
        calcul--;
        suite=suite+calcul+",";
        /*console.log(calcul);
        console.log(suite);*/
    }
    alert("Voici les nombres le précédent:\n"+suite);
}

//exercice 8
var bouton8= document.getElementById("ex8");
bouton8.addEventListener("click",clickbtn8);

function clickbtn8() 
{
    var note=prompt("Saisir un nombre");
    note=parseInt(note);
    var somme=0;
    var nbnote=0;
    while(note!=0)
    {
        somme=somme+note;
        console.log(note);
        console.log(somme);
        note=prompt("Saisir à nouveau un nombre\nEntrez zero une fois toutes les notes entrez")
        note=parseInt(note)
        nbnote++;
    }
    var moyenne=somme/nbnote;
    alert("La somme des notes est "+somme+" et leurs moyennes est "+moyenne);
} 

//exercice 9
var bouton9= document.getElementById("ex9");
bouton9.addEventListener("click",clickbtn9);

function clickbtn9() 
{
    var n=prompt("Entrez un chiffre");
    n=parseInt(n);
    var x=prompt("Entrez un autre chiffre");
    x=parseInt(x)
    var decompt=0;
    var resultant;
    var affich="";
    decompt=parseInt(decompt);
    do
    {
        decompt++;
        resultant=decompt*x;/*console.log(typeof decompt);*/
        affich=affich+decompt+" x "+x+" = "+resultant+"\n";/*console.log(typeof affich);
                                                           console.log(affich);*/
    }while(decompt!=n)
    alert(affich);
}

//exercice 10
var bouton10= document.getElementById("ex10");
bouton10.addEventListener("click",clickbtn10);

function clickbtn10() 
{
    var mot = prompt("Entrez un mot");
    var voyelles = "aeiouyAEIOUY";
    var compteur = 0;
    for (i=0;i<mot.length;i++)
    {
        var lettre = mot.substring(i, i+1);
        if (voyelles.indexOf(lettre) != -1) 
        {
            compteur++;
        }
    }
    alert("Le nombre de voyelles est de : " + compteur);
}