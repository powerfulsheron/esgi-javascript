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

function type_check(valeur,type){
    if(type.hasOwnProperty('properties')){
      Object.entries(type.properties).forEach(entry => {
                  console.log(entry);
        if(entry[1].hasOwnProperty('type') && entry[1].type=="object"){
          return type_check(valeur,entry[1]);
        }else{
          //console.log(valeur);
          //console.log(entry);
          return type_check_v2(valeur,entry);
        }
      });
      return true;
    }
    return type_check_v2(valeur,type)
}

var test =
{
  properties:{
    prop1:{type:"number"},
    prop2:{type:"string",enum:["val1","val2"]},
    prop3:{type:"object",properties:{prop31:"number"}},
    prop4:{type:"array",properties:["boolean"]}
  }
}

const type_check = (val, check) => {
    if (check.hasOwnProperty('properties')) {
        return Object.entries(check.properties)
            .filter(([prop, propCheck]) => type_check(val[prop], propCheck))
            .length === Object.values(check.properties).length
        ;
    }
    return type_check_v2(val, check);
};

console.log(type_check("dsqdsqdsqdsq",test));