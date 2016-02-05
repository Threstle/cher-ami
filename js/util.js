
// var DEEPBLUE = "rgba(7,)";

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var DEBUG = location.search.lastIndexOf("dev") != -1;// != null || getParameterByName("debug") !=null;
var PROJET = parseInt( getParameterByName("id") || getParameterByName("scene") );
PROJET = isNaN(PROJET)?0:PROJET;

function scale(x,min,max,nuMin,nuMax){
    var nuX = nuMin - nuMax;
    nuX *= (x-min);
    nuX /= (max - min);
    nuX += nuMax;
    return nuX;
    
}

function lerp ( t, a, b ){ return a + t * ( b - a ); }

function getPosAlongPath(ratio,x1,y1,x2,y2){

        return {x : lerp( ratio, x1,x2),
                y : lerp( ratio, y1,y2) };

    }
