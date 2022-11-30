var div1 = $('#div1');
var div2 = $('#div2');
var div3 = $('#div3');
var div4 = $('#div4');
var div5 = $('#div5');
var div6 = $('#div6');
var div7 = $('#div7');
var div8 = $('#div8');
var div9 = $('#div9');
var div10 = $('#div10');
var div11 = $('#div11');

var nUno = $('#nUno');
var nDos = $('#nDos');
var nTres = $('#nTres');
var numUno = $('#numUno');
var numDos = $('#numDos');
var numTres = $('#numTres');
var numCuatro = $('#numCuatro');
var numCinco = $('#numCinco');
var numSeis = $('#numSeis');
var numSiete = $('#numSiete');
var numOcho = $('#numOcho');
var numNueve = $('#numNueve');
var numDiez = $('#numDiez');
var ascUno = $('#ascUno');
var ascDos = $('#ascDos');
var ascTres = $('#ascTres');
var ascCuatro = $('#ascCuatro');
var ascCinco = $('#ascCinco');
var desUno = $('#desUno');
var desDos = $('#desDos');
var desTres = $('#desTres');
var desCuatro = $('#desCuatro');
var desCinco = $('#desCinco');
var caracter = $('#caracter');
var sumUno = $('#sumUno');
var sumDos = $('#sumDos');
var sumTres = $('#sumTres');
var sumCuatro = $('#sumCuatro');
var sumCinco = $('#sumCinco');
var sumSeis = $('#sumSeis');
var sumSiete = $('#sumSiete');
var sumOcho = $('#sumOcho');
var sumNueve = $('#sumNueve');
var sumDiez = $('#sumDiez');
var cat1 = $('#cat1');
var cat2 = $('#cat2');
var str = $('#str');
var strLetra = $('#strLetra');
var strUno = $('#strUno');
var strDos = $('#strDos');
var luz = $('#luz');
var agua = $('#agua');
var cable = $('#cable');
var internet = $('#internet');
var gas = $('#gas');
var dividendo = $('#dividendo');
var sueldoDado = $('#sueldoDado');
var salario = $('#salario');
var incentivo = $('#incentivo');
var cantSillas = $('#cantSillas');


var seleccion = $('#seleccion');
var resp = $('#resp');

seleccion.change(function () {
    ocultarDiv();
    limpiarCampos();
    debugger;
    resp.text('');
    switch (seleccion.val()) {
        case "0":

            break;
        case "1":

            div1.show();
            break;
        case "2":

            div2.show();
            break;
        case "3":

            div3.show();
            break;
        case "4":

            div4.show();
            break;
        case "5":

            div5.show();
            break;
        case "6":

            div6.show();
            break;
        case "7":

            div7.show();
            break;
        case "8":

            div8.show();
            break;
        case "9":

            div9.show();
            break;
        case "10":

            div10.show();
            break;
        case "11":

            div11.show();
            break;
        default:
    }
});



$('form').submit(function (event) {
    event.preventDefault();

    switch (seleccion.val()) {
        case "1":

            if (validaIngDatoNumerico(nUno, 'Ingrese el N° 1'))
                return;

            if (validaIngDatoNumerico(nDos, 'Ingrese el N° 2'))
                return;

            if (validaIngDatoNumerico(nTres, 'Ingrese el N° 3'))
                return;

            if (nUno.val().trim() == nDos.val().trim() && nDos.val().trim() == nTres.val().trim()) {
                alert('Los 3 números ingresados con valor: "' + nUno.val().trim() + '" no deben ser iguales');
                nUno.focus();
                return;
            }
            if (nUno.val().trim() == nDos.val().trim()) {
                alert('Los números 1 y 2 con valor: "' + nUno.val().trim() + '" no deben ser iguales');
                nUno.focus();
                return;
            } else if (nUno.val().trim() == nTres.val().trim()) {
                alert('Los números 1 y 3 con valor: "' + nUno.val().trim() + '" no deben ser iguales');
                nUno.focus();
                return;
            } else if (nDos.val().trim() == nTres.val().trim()) {
                alert('Los números 2 y 3 con valor: "' + nDos.val().trim() + '" no deben ser iguales');
                nDos.focus();
                return;
            }

            break;
        case "2":

            if (validaIngDatoNumerico(numUno, 'Ingrese el N° 1'))
                return;
            if (validaIngDatoNumerico(numDos, 'Ingrese el N° 2'))
                return;
            if (validaIngDatoNumerico(numTres, 'Ingrese el N° 3'))
                return;
            if (validaIngDatoNumerico(numCuatro, 'Ingrese el N° 4'))
                return;
            if (validaIngDatoNumerico(numCinco, 'Ingrese el N° 5'))
                return;
            if (validaIngDatoNumerico(numSeis, 'Ingrese el N° 6'))
                return;
            if (validaIngDatoNumerico(numSiete, 'Ingrese el N° 7'))
                return;
            if (validaIngDatoNumerico(numOcho, 'Ingrese el N° 8'))
                return;
            if (validaIngDatoNumerico(numNueve, 'Ingrese el N° 9'))
                return;
            if (validaIngDatoNumerico(numDiez, 'Ingrese el N° 10'))
                return;

            break;
        case "3":

            if (validaIngDatoNumerico(ascUno, 'Ingrese el N° 1'))
                return;
            if (validaIngDatoNumerico(ascDos, 'Ingrese el N° 2'))
                return;
            if (validaIngDatoNumerico(ascTres, 'Ingrese el N° 3'))
                return;
            if (validaIngDatoNumerico(ascCuatro, 'Ingrese el N° 4'))
                return;
            if (validaIngDatoNumerico(ascCinco, 'Ingrese el N° 5'))
                return;
            if (ascUno.val().trim() == ascDos.val().trim() && ascDos.val().trim() == ascTres.val().trim() && ascTres.val().trim() == ascCuatro.val().trim()) {
                alert('Los números son todos iguales, el orden no aplica, debe ingresar al menos un número distinto');
                ascUno.focus();
                return;
            }
            break;
        case "4":

            if (validaIngDatoNumerico(desUno, 'Ingrese el N° 1'))
                return;
            if (validaIngDatoNumerico(desDos, 'Ingrese el N° 2'))
                return;
            if (validaIngDatoNumerico(desTres, 'Ingrese el N° 3'))
                return;
            if (validaIngDatoNumerico(desCuatro, 'Ingrese el N° 4'))
                return;
            if (validaIngDatoNumerico(desCinco, 'Ingrese el N° 5'))
                return;
            if (desUno.val().trim() == desDos.val().trim() && desDos.val().trim() == desTres.val().trim() && desTres.val().trim() == desCuatro.val().trim()) {
                alert('Los números son todos iguales, el orden no aplica, debe ingresar al menos un número distinto');
                desUno.focus();
                return;
            }
            break;
        case "5":

            if (validaIngDat(caracter, 'Caracter'))
                return;

            break;
        case "6":

            if (validaIngDatoNumerico(sumUno, 'Ingrese el N° 1'))
                return;
            if (validaIngDatoNumerico(sumDos, 'Ingrese el N° 2'))
                return;
            if (validaIngDatoNumerico(sumTres, 'Ingrese el N° 3'))
                return;
            if (validaIngDatoNumerico(sumCuatro, 'Ingrese el N° 4'))
                return;
            if (validaIngDatoNumerico(sumCinco, 'Ingrese el N° 5'))
                return;
            if (validaIngDatoNumerico(sumSeis, 'Ingrese el N° 6'))
                return;
            if (validaIngDatoNumerico(sumSiete, 'Ingrese el N° 7'))
                return;
            if (validaIngDatoNumerico(sumOcho, 'Ingrese el N° 8'))
                return;
            if (validaIngDatoNumerico(sumNueve, 'Ingrese el N° 9'))
                return;
            if (validaIngDatoNumerico(sumDiez, 'Ingrese el N° 10'))
                return;
            break;
        case "7":

            if (validaIngDatoNumerico(cat1, 'Ingrese el Cateto 1'))
                return;
            if (validaIngDatoNumerico(cat2, 'Ingrese el Cateto 2'))
                return;
            break;
        case "8":

            if (validaIngDat(str, 'String'))
                return;
            if (validaIngDat(strLetra, 'caracter a buscar'))
                return;
            break;
        case "9":

            if (validaIngDat(strUno, 'String N° 1'))
                return;
            if (validaIngDat(strDos, 'String N° 2'))
                return;
            break;
        case "10":

            if (validaIngDatoNumerico(luz, 'Ingrese el Monto de Luz'))
                return;
            if (validaIngDatoNumerico(agua, 'Ingrese el Monto de Agua'))
                return;
            if (validaIngDatoNumerico(cable, 'Ingrese el Monto de Cable'))
                return;
            if (validaIngDatoNumerico(internet, 'Ingrese el Monto de Internet'))
                return;
            if (validaIngDatoNumerico(gas, 'Ingrese el Monto de Gas'))
                return;
            if (validaIngDatoNumerico(dividendo, 'Ingrese el Monto de Dividendo'))
                return;
            if (validaIngDatoNumerico(sueldoDado, 'Ingrese el Monto del Sueldo'))
                return;

            break;
        case "11":

            if (validaIngDatoFloat(salario, 'Ingrese el Salario del trabajador'))
                return;
            if (validaIngDatoFloat(incentivo, 'Ingrese el monto de incentivo'))
                return;
            if (validaIngDatoNumerico(cantSillas, 'Ingrese la cantidad de sillas'))
                return;
            break;
        default:
    }




    $.ajax({
        type: "POST",
        url: 'ejercicios_p2.php',
        data: $("form").serialize(),
        success: function (data) {
            $('#resp').html(data);
        }
    });
});



function validaIngDatoFloat(campo, texto) {
    debugger;
    if (campo.val().trim() == "") {
        alert(texto);
        campo.val('');
        campo.focus();
        resp.text('');
        return true;

    } else if (!/^(\d|-)?(\d|,)*\.?\d*$/.test(campo.val().trim())) {
        alert('Debe ingresar un valor númerico con o sin decimales.');
        campo.val('');
        campo.focus();
        resp.text('');
        return true;
    }
    return false;
}

function validaIngDatoNumerico(campo, texto) {
    debugger;
    if (campo.val().trim() == "") {
        alert(texto);
        campo.val('');
        campo.focus();
        resp.text('');
        return true;

    } else if (!/^([0-9])*$/.test(campo.val().trim())) {
        alert('Debe ingresar un valor númerico mayor o igual a cero.');
        campo.val('');
        campo.focus();
        resp.text('');
        return true;
    }
    return false;
}
function validaIngDatoString(campo, texto) {
    debugger;
    if (campo.val().trim() == "") {
        alert(texto);
        campo.val('');
        campo.focus();
        resp.text('');
        return true;

    } else if (/^([0-9])*$/.test(campo.val().trim())) {
        alert('Debe ingresar una letra');
        campo.val('');
        campo.focus();
        resp.text('');
        return true;
    }
    return false;
}

function validaIngDat(campo, texto) {

    if (campo.val().trim() == "") {
        alert("Debe ingresar el " + texto);
        campo.val('');
        campo.focus();
        resp.text('');
        return true;
    }
    return false;
}

function ocultarDiv() {
    div1.hide();
    div2.hide();
    div3.hide();
    div4.hide();
    div5.hide();
    div6.hide();
    div7.hide();
    div8.hide();
    div9.hide();
    div10.hide();
    div11.hide();
}
function limpiarCampos() {
    debugger;
    nUno.val('');
    nDos.val('');
    nTres.val('');
    numUno.val('');
    numDos.val('');
    numTres.val('');
    numCuatro.val('');
    numCinco.val('');
    numSeis.val('');
    numSiete.val('');
    numOcho.val('');
    numNueve.val('');
    numDiez.val('');
    ascUno.val('');
    ascDos.val('');
    ascTres.val('');
    ascCuatro.val('');
    ascCinco.val('');
    desUno.val('');
    desDos.val('');
    desTres.val('');
    desCuatro.val('');
    desCinco.val('');
    caracter.val('');
    sumUno.val('');
    sumDos.val('');
    sumTres.val('');
    sumCuatro.val('');
    sumCinco.val('');
    sumSeis.val('');
    sumSiete.val('');
    sumOcho.val('');
    sumNueve.val('');
    sumDiez.val('');
    cat1.val('');
    cat2.val('');
    str.val('');
    strLetra.val('');
    strUno.val('');
    strDos.val('');
    luz.val('');
    agua.val('');
    cable.val('');
    internet.val('');
    gas.val('');
    dividendo.val('');
    sueldoDado.val('');
    salario.val('');
    incentivo.val('');
    cantSillas.val('');
}
$("#caracter").keypress(function () {

    if ($("#caracter").val().trim().length > 0) {
        $("#caracter").val($("#caracter").val().trim().substr(-1, 0));
    }
});
$("#strLetra").keypress(function () {

    if ($("#strLetra").val().trim().length > 0) {
        $("#strLetra").val($("#strLetra").val().trim().substr(-1, 0));
    }
});



