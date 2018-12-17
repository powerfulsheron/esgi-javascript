class Pilote {

    constructor(nom) {
        this.nom = nom;
        var etat = "normal";
        var origine = "";
    }

    receiveData(data){
        etat = data.etat;
        origine = data.origine
    }

    needUpdate(){}

    getState(){
        return etat;
    }
    getOrigine(){
        return origine;
    }

    speak(){
        switch(etat){
            case "ready":
                return "Here we go!";
            case "happy":
                return "Let's have some fun!";
            case "sad":
                return "Outch!!! Damn " + origine;
            case "normal":
                return "";
        }
    }
  }

class Vehicule {
    constructor(conf) {
        this.pilote = conf.pilote;
        this.num = conf.num;
        var arme;
        var distance;
        var ride = function(){

        }
        var getWeapon = function(){

        }
        var fireWeapon = function(){

        }
        var touch = function(emitter){

        }
    }

    receiveData(data){

    }
    needUpdate(){

    }
    display(){

    }

}

class Moto extends Vehicule {

}

class Voiture extends Vehicule {

}