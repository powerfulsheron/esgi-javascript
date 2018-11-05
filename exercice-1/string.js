function ucfirst(chaine){
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}
console.log(ucfirst("salut"));

function capitalize(chaine){
    chaine = chaine.split(" ");
    for (var i = 0, x = chaine.length; i < x; i++) {
        chaine[i] = ucfirst(chaine[i][0]) + chaine[i].substr(1);
    }
    return chaine.join(" ");
}
console.log(capitalize("salut les amiches"));

function camelCase(chaine){
    return capitalize(chaine).split(" ").join("");
}
console.log(camelCase("salut les amiches"));

function snake_case(chaine){
    return chaine.toLowerCase().split(" ").join("_");
}
console.log(snake_case("salut les amiches"));

function leet(chaine){
    for (var i = 0, x = chaine.length; i < x; i++) {
        if(chaine[i]==='A' || chaine[i]==='a' ){
            chaine=chaine.replaceAt(i,"4");
        }
        else if(chaine[i]==='A' || chaine[i]==='a' ){
            chaine=chaine.replaceAt(i,"4");
        }
        else if(chaine[i]==='O' || chaine[i]==='o' ){
            chaine=chaine.replaceAt(i,"0");
        }
        else if(chaine[i]==='E' || chaine[i]==='e' ){
            chaine=chaine.replaceAt(i,"3");
        }
        else if(chaine[i]==='I' || chaine[i]==='i' ){
            chaine=chaine.replaceAt(i,"1");
        }
        else if(chaine[i]==='U' || chaine[i]==='u' ){
            chaine=chaine.replaceAt(i,"(_)");
        }
        else if(chaine[i]==='Y' || chaine[i]==='y' ){
            chaine=chaine.replaceAt(i,"7");
        }
    }
    return chaine;
}
String.prototype.replaceAt=function(index, replacement) {
    if(replacement=="(_)"){
        return this.substr(0, index) + replacement+ this.substr(index);
    }else{
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }
}
console.log(leet("bonjour ceci est un test avec un ultima y a l'eau"));

function prop_access(){

}

function verlan(chaine){
    chaine = chaine.split(" ");
    for (var i = 0, x = chaine.length; i < x; i++) {
        chaine[i] = reverse(chaine[i]);
        console.log(reverse(chaine[i]));
    }
    return chaine.join(" ");
 }

 function reverse(chaine) {
    var newChaine = "";
    for (var i = chaine.length - 1; i >= 0; i--) {
        newChaine += chaine[i];
    }
    return newChaine;
}
console.log(verlan("Hello world"));

function yoda(chaine){
    if (typeof chaine === "string") {
       return chaine.split(" ").reverse().join(" ")
    }
 }
 console.log(yoda("salut les amiches aux saucisson"));