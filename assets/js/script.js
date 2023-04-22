let consultar= () => {
    let indicador = 'https://mindicador.cl/api';
    fetch(indicador)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data);
        console.log(data.length);
    })   
}