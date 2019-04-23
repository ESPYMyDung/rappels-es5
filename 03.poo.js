//fonction constructeur
Personne = function(nom, prenom, pseudo)
{
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function()
    {
        return (this.nom + " " + this.prenom + " : " + this.pseudo);
    }
}

//creation personne
jules = new Personne("LEMAIRE","Jules", "jules77");
paul = new Personne("LEMAIRE", "Paul", "paul44");

console.log(" ");
//affichage jules
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

console.log(" ");
// creation fonction affichage pour personne
affichage = function(pers)
{
    console.log(pers.nom);
console.log(pers.prenom);
console.log(pers.pseudo);
console.log(pers.getNomComplet());
}
affichage(paul);

console.log(" ");
//modifier un objet
jules.pseudo = "jules44";
console.log(jules.getNomComplet());

console.log(" ");
// ajouter une propriete
console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 40;
console.log(jules.age);

console.log(" ");
//ajouter une methode
Personne.prototype.getInitiales = function(){return (this.nom.charAt(0) + this.prenom.charAt(0))};
console.log(jules.getInitiales());

console.log(" ");
//objet sans constructeur
robert = {nom:"LEPREFET", prenom:"Robert", pseudo:"robert77",
        getNomComplet:function()
        {return (this.nom + " " + this.prenom + " : " + this.pseudo);} };
affichage(robert);

//heritage
Client = function(nom, prenom, pseudo, numeroClient)
{
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function()
    {
        return this.numeroClient + " : " + this.nom + " " + this.prenom
    }
}

steve = new Client("LUCAS", "Steve", "steve44", "A01");
affichage(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());