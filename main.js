
function validarDatos()
{
    let nAltura=0;
    let nLargo=0;
    let nAncho=0;
    nAltura =parseInt(document.getElementById("alto").value) ;
    nLargo = parseInt(document.getElementById("largo").value );
    nAncho = parseInt(document.getElementById("ancho").value );
    if (isNaN(nAltura) || isNaN(nLargo) || isNaN(nAncho).value ) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
      }

}

function resultado()
{
    _perimetroCaraMayor();
    _perimetroCaraMenor();
    _areaTotal();
    _volumen();
    _diagonal();
}

function _perimetroCaraMayor ()
{
    let nAltura =0;
    let nLargo = 0;
    let nAncho = 0;
    let nPerimetroCaraMayor=0;

    nAltura =parseInt(document.getElementById('alto').value);
    nAltura =parseInt(document.getElementById("alto").value) ;
    nLargo = parseInt(document.getElementById("largo").value) ;
    nAncho = parseInt(document.getElementById("ancho").value);
    nPerimetroCaraMayor=(nLargo*2) + (nAltura*2);
    document.getElementById('perimetroCaraMayor').innerHTML = '<h1>Perimetro Cara MAyor: ' + nPerimetroCaraMayor+"</h1>";
}

function _perimetroCaraMenor ()
{
    let nAltura=0;
    let nLargo=0  ;
    let nAncho=0 ;
    let nPerimetroCaraMenor=0;

    
    nAltura =parseInt(document.getElementById("alto").value );
    nLargo = parseInt(document.getElementById("largo").value );
    nAncho = parseInt(document.getElementById("ancho").value);
    nPerimetroCaraMenor=(nAncho*2) + (nAltura*2);
    document.getElementById('perimetroCaraMenor').innerHTML = '<h1>Perimetro Cara Menor: ' + nPerimetroCaraMenor+"</h1>";

}

function _areaTotal()
{
    //Área total = (2*longitud*profundidad) + (2*longitud*altura) + (2*altura*profundidad)
    let nAreaTotal=0;
    let nAltura=0;
    let nLargo=0  ;
    let nAncho=0 ;
        
    nAltura =parseInt(document.getElementById("alto").value) ;
    nLargo = parseInt(document.getElementById("largo").value) ;
    nAncho = parseInt(document.getElementById("ancho").value);

    nAreaTotaL=(2*nLargo*nAncho) + (2*nLargo*nAltura) + (2*nAltura*nAncho);

    document.getElementById('areaTotal').innerHTML = '<h1>Area Total: ' + nAreaTotal+"</h1>";

    
}
    
function _volumen()
{
    let nAltura=0;
    let nLargo=0  ;
    let nAncho=0 ;
    let nVolumen=0;
        
    nAltura =parseInt(document.getElementById("alto").value );
    nLargo = parseInt(document.getElementById("largo").value );
    nAncho = parseInt(document.getElementById("ancho").value) ;

    nVolumen = nAltura * nLargo * nAncho;
    document.getElementById('volumen').innerHTML = '<h1>Volumen: ' + nVolumen+"</h1>";

}
    
function _diagonal()
{
    let nDiagonal=0;
    let nAltura=0;
    let nLargo=0  ;
    let nAncho=0 ;
        
    nAltura = parseInt(document.getElementById("alto").value );
    nLargo = parseInt(document.getElementById("largo").value );
    nAncho = parseInt(document.getElementById("ancho").value );

    cuadA=nAltura*nAltura;
    cuadL=nLargo*nLargo;
    cuadP=nAncho*nAncho;

    nDiagonal = Math.sqrt(cuadA+cuadL+cuadP)

    document.getElementById('diagonal').innerHTML = '<h1>Diagonal: ' + nDiagonal+"</h1>";




}
  
/*
var resultado = Math.sqrt(sumaCuadrados) ;

  // Mostrar el resultado
  document.getElementById('distancia').innerHTML = '<h1>El resultado es: ' + resultado+"</h1>";

<h5>Perimetro cara mayor</h5>
    <input type="text" class="form-control" id="perimetroCaraMayor" >

    <h5>Perimetro cara menor</h5>
    <input type="text" class="form-control" id="perimetroCaraMenor" >

    <h5>Area total</h5>
    <input type="text" class="form-control" id="areaTotal" >

    <h5>Volumen</h5>
    <input type="text" class="form-control" id="volumnen" >

    <h5>Diagonal</h5>
    <input type="text" class="form-control" id="diagonal" >



*/



