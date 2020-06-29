function montecarlo(n){
    var dato = n.value;
    dato = prompt("Ingresa el numero de tiros: ");
    var x, y, m=0;
    for (var i=0; i<dato; i++) {
        x = Math.random();
        y = Math.random();
        if (x*x+y*y<1){
            m++;
        }
    }
    var formula = (4*m/dato);
    return document.getElementById("resultado").innerHTML = alert("Pi: "+formula+
            "\n\nError Verdadero: "+ Math.abs(Math.PI-formula));
    }
