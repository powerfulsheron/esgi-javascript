function type_check_v1(valeur,type){
    if(type==typeof valeur || valeur instanceof Object || valeur instanceof Array){
        return true;
    }else{
        return false;
    }
}

function type_check_v2(valeur,objectType){
    if(objectType.hasOwnProperty('type')){
        if(objectType.hasOwnProperty('value')){
            if(objectType.value==valeur){
                return true;
            }
            return false;
        }else if(type_check_v1(valeur,objectType)){
            return true;
        }
        return false;
    }else if(objectType.hasOwnProperty('enum')){
        if(objectType.enum.includes(valeur)){
            return true;
        }
    }
}
console.log(type_check_v2(3,{enum:["foo","bar",3]}));
console.log(type_check_v2({prop1:1},{type:"object"}));
console.log(type_check_v2("foo",{type:"string",value:"foo"}));
console.log(type_check_v2("bar",{type:"string",value:"foo"}));