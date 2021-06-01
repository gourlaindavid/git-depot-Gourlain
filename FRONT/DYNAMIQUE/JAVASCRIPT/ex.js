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

    document.write("Ceci est une chaine de caractère :"+a);
    b--;
    document.write(b);
    c=a;
    document.write(c);
    d=false;
    document.write(d);
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
    
}
