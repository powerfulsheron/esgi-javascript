String.prototype.ucfirst = function (){
    var input = this;
    return (input.charAt(0).toUpperCase() + input.slice(1));
}


var myPath = "animal.type.name";

Object.prototype.prop_access = (path) => {
    var input = this;
    var pathArray = path.split('.');
    for(let i=0; i<pathArray.length; i++){
        if(input[pathArray[i]] === undefined){
            return "path not exist";
        }
        input=input[pathArray[i]];
    }
    return input;
}

(
    {
        animal: {
            type: {
                name: "dog"
            }
        }
    }
).prop_access(myPath);