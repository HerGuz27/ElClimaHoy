//creamos el objeto app

var app = {};

//nuestra api key

app.apikey = "3e721eaf25ea49d95df9ff787f1618d1919a85";

//en la URL indicamos la ciudad, en este ejemplo q=Malaga

app.url = "http://api.openweathermap.org/data/2.5/weather?q=Malaga&amp;APPID=" + app.apikey + "&amp;units=metric";

app.cargaDatos = function(){

    $.ajax({
    
    url: app.url,
    
    success: function( data ) {
    
    //guardamos en la variable datos dentro del objeto app toda la información “en bruto”
    
    app.datos = data;
    
    
    //a continuación lanzamos la función procesaDatos que se encarga del manipulado de los datos
    
    app.procesaDatos();
    
    },
    
    //algo no ha ido bien, por simplificar el ejemplo no vamos a analizar los tipos de error, solo mostramos un mensaje
    
    //en el mundo real analizaríamos el error que nos devuelve la API para actuar de una manera u otra
    
    error: function(){
    
    alert("¡Ups! No puedo obtener información de la API");
    
    }
    
    });
    
    }