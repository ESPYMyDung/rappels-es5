//initialisation tableau
villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//forEach
villes.forEach(function(element){console.log(element);});

//every
lettreADansToutesLesVilles = function(element)
{
    return element.includes('a');
}
console.log("lettreADansToutesLesVilles = " + villes.every(lettreADansToutesLesVilles));

//some
auMoinsUneVilleAvecUnTiret = function(element)
{
    return element.includes('-');
}
console.log("auMoinsUneVilleAvecUnTiret =" + villes.some(auMoinsUneVilleAvecUnTiret));

//filter
villesSansTiretSansEspace  = function(element)
{
    if (!element.includes('-') && !element.includes(" ")) 
        return element;
}
console.log("villesSansTiretSansEspace = " + villes.filter(villesSansTiretSansEspace));

//chainer fonction = filter + map
villesMajusculeSeTerminantParS  = function(element)
{
    if (element.endsWith("s")) 
        return element.toUpperCase();
}
console.log("villesMajusculeSeTerminantParS = " + villes.filter(villesMajusculeSeTerminantParS).map(villesMajusculeSeTerminantParS));
