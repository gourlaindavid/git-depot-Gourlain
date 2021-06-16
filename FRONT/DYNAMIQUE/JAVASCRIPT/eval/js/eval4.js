var bouton4= document.getElementById("btn4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4()
{
    var pu= parseInt(prompt("Donnez le prix unitaires de l'article"));
    var qtecom= parseInt(prompt("Donnez la quantité commander"));
    var pap;
    var rem;
    var port;
    var tot= pu*qtecom;
    // console.log(pu);
    // console.log(qtecom);
    // console.log(pap);
    // console.log(rem);
    // console.log(port);
    // console.log(tot);
    if(tot>=100 && tot<=200)
    {
        rem= tot*0.95;
    }
    if(tot>200)
    {
        rem= tot*0.90;
    }
    if(tot<100)
    {
        rem=tot;
    }
    // console.log(pu);
    // console.log(qtecom);
    // console.log(pap);
    // console.log(rem);
    // console.log(port);
    // console.log(tot);
    if(rem>=500)
    {
        pap=rem;
    }
    if(rem<500)
    {
        port=rem*0.02;
        if(port<=6)
        {
            port=6;
        }
        pap=rem+port;
    }
    // console.log(pu);
    // console.log(qtecom);
    // console.log(pap);
    // console.log(rem);
    // console.log(port);
    // console.log(tot);
    document.getElementById("resultat4").innerHTML=("<p>Le prix a payer est de "+pap)
}