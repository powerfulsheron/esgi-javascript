function ucfirst(chaine){
    if (typeof chaine !== "string") {
        return "";
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}
console.log(ucfirst("salut"));

function capitalize(chaine){
    if (typeof chaine !== "string") {
        return "";
    }
    chaine = chaine.split(" ");
    for (var i = 0, x = chaine.length; i < x; i++) {
        chaine[i] = ucfirst(chaine[i][0]) + chaine[i].substr(1);
    }
    return chaine.join(" ");
}
console.log(capitalize("salut les amiches"));

function camelCase(chaine){
    if (typeof chaine !== "string") {
        return "";
    }
    return capitalize(chaine).split(" ").join("");
}
console.log(camelCase("salut les amiches"));

function snake_case(chaine){
    if (typeof chaine !== "string") {
        return "";
    }
    return chaine.toLowerCase().split(" ").join("_");
}
console.log(snake_case("salut les amiches"));

function verlan(chaine){
    if (typeof chaine !== "string") {
        return "";
    }
    chaine = chaine.split(" ");
    for (var i = 0, x = chaine.length; i < x; i++) {
        chaine[i] = reverse(chaine[i]);
    }
    return chaine.join(" ");
 }

 function reverse(chaine) {
    if (typeof chaine !== "string") {
        return "";
    }
    var newChaine = "";
    for (var i = chaine.length - 1; i >= 0; i--) {
        newChaine += chaine[i];
    }
    return newChaine;
}
console.log(verlan("Hello world"));

function yoda(chaine){
    if (typeof chaine !== "string") {
        return "";
    }
    return chaine.split(" ").reverse().join(" ");
 }
 console.log(yoda("salut les amiches aux saucisson"));

 
var replaceWith = {
    A: "4",
    a: "4",
    E: '3',
    e: '3',
    I: '1',
    i: '1',
    O: '0',
    o: '0', 
    U: '(_)',
    u: '(_)',
    Y: '7',
    y: '7'
};

var str = "bonjour ceci est un test avec un ultima y";

function leet(chaine){
    if (typeof chaine !== "string") {
        return "";
    }
    output = chaine.replace(/A|a|E|e|I|i|O|o|U|u|Y|y/g, function(char){
        return replaceWith[char];
    });
    return output;
}
console.log(leet("salut les amiches aux saucisson"));

var tabulaRecta = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
};

function vig(chaine, cle){
    if(typeof(chaine) !== "string" || typeof(cle) !== "string"){
      return "";
    }
    chaine = chaine.toLowerCase();
    cle = cle.match(/[a-z]/gi).join("").toLowerCase();
    var encryptedText = "";
    var specialCharacterCount = 0;
    for( var i = 0; i < chaine.length; i++ ){
      var keyLetter = (i - specialCharacterCount) % cle.length;
      var keywordIndex = tabulaRecta.a.indexOf(cle[keyLetter]);
      if(tabulaRecta[chaine[i]]){
        encryptedText += tabulaRecta[chaine[i]][keywordIndex];
      }else{
        encryptedText += chaine[i];
        specialCharacterCount++;
      }
    }
    return encryptedText;
}
console.log(vig("wikipedia","crypto"));

const prop_access = (object, propertyPath = '') => {
    if (propertyPath === '' || propertyPath === null) {
        return object;
    }
    if (propertyPath === '' || propertyPath === null) {
        return object;
    }
    if(typeof propertyPath !== "string"){
        return "";
    }
    if (!object) {
        console.log(object + ' not exist');
        return;
    }
    
    let newObj = object;
    let path = '';
    for (let prop of propertyPath.split('.')) {
        path += '.' + prop;
        if (newObj.hasOwnProperty(prop)) {
            newObj = newObj[prop];
        } else {
            console.log(path.slice(1) + ' not exist');
            return;
        }
    }

    return newObj
};

var prairie =
{
  animal : {
    type : {
      name : "chien"
    }
  }

}
var prairie2;

console.log(prop_access(prairie,"animal.type.name"));
console.log(prop_access(prairie,"animal.type.cousin"));
console.log(prop_access(prairie2,"animal.type.name"));
console.log(prop_access(prairie,125));