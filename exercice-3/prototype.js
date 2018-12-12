String.prototype.ucfirst = function() {
    var input = this;
    return (input.charAt(0).toUpperCase() + input.slice(1));
}

String.prototype.capitalize = function() {
    var input = this;
    input = input.split(" ");
    for (var i = 0, x = input.length; i < x; i++) {
        input[i] = input[i][0].ucfirst() + input[i].substr(1);
    }
    return input.join(" ");
}

String.prototype.camelCase = function() {
    var input = this;
    return input.charAt(0).toLowerCase() + input.capitalize().split(" ").join("").slice(1);
}

String.prototype.snake_case = function() {
    var input = this;
    return input.toLowerCase().split(" ").join("_");
}

String.prototype.reverse = function() {
    var input = this;
    var newChaine = "";
    for (var i = input.length - 1; i >= 0; i--) {
        newChaine += input[i];
    }
    return newChaine;
}

String.prototype.verlan = function() {
    var input = this;
    input = input.split(" ");
    for (var i = 0, x = input.length; i < x; i++) {
        input[i] = input[i].reverse();
    }
    return input.join(" ");
}

String.prototype.yoda = function() {
    var input = this;
    return input.split(" ").reverse().join(" ");
}

String.prototype.leet = function() {
    var input = this;
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
    output = input.replace(/A|a|E|e|I|i|O|o|U|u|Y|y/g, function(char) {
        return replaceWith[char];
    });
    return output;
}

String.prototype.vig = function(cle) {
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
    var input = this;
    if (typeof(cle) !== "string") {
        throw "Parameter is not a string!";
    }
    input = input.toLowerCase();
    cle = cle.match(/[a-z]/gi).join("").toLowerCase();
    var encryptedText = "";
    var specialCharacterCount = 0;
    for (var i = 0; i < input.length; i++) {
        var keyLetter = (i - specialCharacterCount) % cle.length;
        var keywordIndex = tabulaRecta.a.indexOf(cle[keyLetter]);
        if (tabulaRecta[input[i]]) {
            encryptedText += tabulaRecta[input[i]][keywordIndex];
        } else {
            encryptedText += input[i];
            specialCharacterCount++;
        }
    }
    return encryptedText;
}

Object.prototype.prop_access = function(propertyPath = '') {
    if (propertyPath === '' || propertyPath === null) {
        return object;
    }
    if (typeof propertyPath !== "string") {
        return "";
    }
    let newObj = this;
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
}

var prairie =
    {
        animal: {
            type: {
                name: "chien"
            }
        }
    }
var prairie2;

console.log(prairie.prop_access("animal.type.name"));
console.log(prairie.prop_access("animal.type"));
console.log(prairie.prop_access("animal.type.cousin"));
console.log(prairie2.prop_access("animal.type.name"));
console.log(prairie.prop_access(125));