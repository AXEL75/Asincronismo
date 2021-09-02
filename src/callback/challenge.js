let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Función que nos permitirá traer datos de la API
function fetchData(url_api, callback){
    //Generar la referencia al objeto  -- Crear una instancia del XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    //Hacer un lamado a la URL
    xhttp.open('GET', url_api,true);
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4){
             /*
            los estados que puede tener son:
            Estado 0: inicializado
            Estado 1: cargando
            Estado 2: ya se cargó
            Estado 3: ya hay información
            Estado 4: solicitud completa
            PD: recuerda estas trabajando con una API externa, o sea un servidor por lo que
            depende del servidor cuanto demore en cada estado haces un pedido por datos
            (request) y solo es aplicar lógica.
            */
            if(xhttp.status === 200){
            //Verificar estado, aqui un resumen de los casos mas comunes:
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
                callback(null, JSON.parse(xhttp.responseText))
            } else{
                const error = new Error('Error ' + url_api + 'status: ' + xhttp.status);
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}