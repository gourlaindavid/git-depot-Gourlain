var tab= new Array();
var condi;
var i= 0;
console.log("ok");
while(condi!=0)
{
    parseInt(condi=window.prompt("Entrez un nombre (Entrez 0 pour terminer les entrer)"));
    if(condi!=0)
    {
        tab[i]=condi;
        i++;
    }
}
console.log("Il y a "+tab.length+" élément rentrer")
var calcul=parseInt(0);
var moy;
for(var e=0; e<tab.length; e++)
{
    calcul=calcul+tab[e];
    
}