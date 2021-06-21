function fenvoi()
{
// variables
	var compteur =0 ;
	var mail1 = formulaire.mail1.value;
	var mail2 = formulaire.mail2.value;
	var passe1 = formulaire.passe1.value;
	var passe2 = formulaire.passe2.value;
	var gabarit=new RegExp("[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}");
	// tests
	if (gabarit.test(mail1) ) compteur++; // mail1 correspond t-il au gabarit ?
	if(mail1 == mail2) compteur++;
	if(passe1 == passe2) compteur++;
	if (compteur < 3) {alert("champs mal renseignés");return false; }
	if (compteur==3) {alert("saisies correctes"); return true;}
} // fin fonction 