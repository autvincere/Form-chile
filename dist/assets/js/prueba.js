const
    only_text = /^([A-Za-z]{0,})$/,
    only_numeric = /^([0-9]{0,})$/,
    chk_email = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
    campoNombre = document.querySelector('input[name=nombre]'),
    campoApellidoP = document.querySelector('input[name=apellidop]'),
    campoApellidoM = document.querySelector('input[name=apellidom]'),
    campoComuna = document.querySelector('select[name=region]'),
    campoRut = document.querySelector('input[name=rut]'),
    campoTelefono = document.querySelector('input[name=telefono]'),
    campoMail = document.querySelector('input[name=mail]'),
    campoMailDos = document.querySelector('input[name=mailDos]');
let counter = 0;
let validado = false;


//FUNCION MAYUSCULAS
$('input.mayus').keyup(function () {
    // console.log('estoy en mayus');
    $(this).val($(this).val().toUpperCase());
});

/**
 * multipleEventsListeners.js
 * Add the capability to attach multiple events to an element, just like jQuery does
 * https://gist.github.com/juanbrujo/a1f77db1e6f7cb17b42b
 */

function multipleEventsListeners(elem, events, func) {
    var event = events.split(' ');
    for (var i = 0; i < event.length; i++) {
        elem.addEventListener(event[i], func, false);
    }
}

//NOMBRE
multipleEventsListeners(campoNombre, 'keyup change', function (e) {
    var nombre = this.value;
    //console.log(nombre);

    if (nombre == "") {
        $("div.mensaje").html(
            "<p class='denegado'>Porfavor Ingrese su nombre</p>");
        validado = false;

    } else if (nombre.length > 50) {
        $("div.mensaje").html(
            "<p class='denegado'>su nombre tiene mayor cantidad de los caracteres permitidos</p>");
        validado = false;

    } else if (!only_text.test(nombre)) {
        $("div.mensaje").html(
            "<p class='denegado'>Porfavor Ingrese solo letras</p>");
        validado = false;
    } else {
        $("div.mensaje").html(
            "<p class='correcto'>nombre correcto</p>");
        validado = true;
        counter += 1;
    };

});

//APELLIDOP
multipleEventsListeners(campoApellidoP, 'keyup change', function (e) {
    var apellidoP = this.value;
    //console.log(apellidoP);

    if (apellidoP == "") {
        $("div.mensajep").html(
            "<p class='denegado'>Porfavor Ingrese su apellido paterno</p>");
        validado = false;
    } else if (apellidoP.length > 50) {
        $("div.mensajep").html(
            "<p class='denegado'>su nombre tiene mayor cantidad de los caracteres permitidos</p>");
        validado = false;
    } else if (!only_text.test(apellidoP)) {
        $("div.mensajep").html(
            "<p class='denegado'>Porfavor Ingrese solo letras</p>");
        validado = false;
    } else {
        $("div.mensajep").html(
            "<p class='correcto'>Apellido Paterno correcto</p>");
        validado = true;
        counter += 1;
    };

});

//APELLIDOM
multipleEventsListeners(campoApellidoM, 'keyup change', function (e) {
    var apellidoM = this.value;
    //console.log(apellidoM);

    if (apellidoM == "") {
        $("div.mensajem").html(
            "<p class='denegado'>Porfavor Ingrese su apellido paterno</p>");

    } else if (apellidoM.length > 50) {
        $("div.mensajem").html(
            "<p class='denegado'>su nombre tiene mayor cantidad de los caracteres permitidos</p>");
        validado = false;

    } else if (!only_text.test(apellidoM)) {
        $("div.mensajem").html(
            "<p class='denegado'>Porfavor Ingrese solo letras</p>");
        validado = false;
    } else {
        $("div.mensajem").html(
            "<p class='correcto'>Apellido Paterno correcto</p>");
        validado = true;
        counter += 1;
    };

});

//RUT

// LISTA NEGRA RUT
const listaNegraRut = ['16.013.794-0', '25.612.131-K'];
//CIERRE LISTA NEGRA

multipleEventsListeners(campoRut, 'keyup change', function (e) {
    var rut = this.value;
    //console.log(rut);

    //VERIFICACION DE LIsTA NEGRA
    let permitido = listaNegraRut.indexOf(rut);
    console.log(permitido);
    //CIERRE LIsTA NEGRA RUT
    if (permitido === 0) {
        $("div.mensajerr").html("<p class='denegado'>este rut esta en la lista negra</p>");
    }
    else {
        $("div.mensajerr").html("<p class='correcto'>rut no esta en la lista negra</p>");
    }

});

//VALIDACION RUT DOS
$("input[name=rut]").on("mouseenter mouseleave", function () {

    //VERIFICACION DE LIsTA NEGRA
    let permitido = listaNegraRut.indexOf(rut);
    console.log(permitido);
    //CIERRE LISTA NEGRA RUT

    //llamado a funcion de verificacion
    let validaRut = Rut(form1.rut.value);
    if (validaRut == false) {
        $("div.mensajer").html("<p class='denegado'>Ingresa un formato valido porfavor</p>");
        validado = false;
    } else {
        $("div.mensajer").html(
            "<p class='correcto'>rut correcto</p>");
        validado = true;
        counter += 1;
    };
});

//COMUNA 
multipleEventsListeners(campoComuna, 'keyup change', function (e) {
    var comuna = this.value;
    // console.log(comuna);

    if (comuna == 0) {
        $("div.mensajec").html(
            "<p class='denegado'>Porfavor Ingrese una comuna</p>");
        validado = false;

    } else {
        $("div.mensajec").html(
            "<p class='correcto'>comuna correcta</p>");
        validado = true;
        counter += 1;
    };
});

//TELEFONO

// LISTA NEGRA telefono
const listaNegraTelefono = ['56144519', '91614536'];
//CIERRE LISTA NEGRA telefono

multipleEventsListeners(campoTelefono, 'keyup change', function (e) {
    var tel = telefono.value;
    //console.log(tel);

    //VERIFICACION DE LISTA NEGRA TELEFONO
    let permitidoTelefonos = listaNegraTelefono.indexOf(tel);
    console.log(permitidoTelefonos);
    //CIERRE LIsTA NEGRA TELEFONO

    if (permitidoTelefonos == 0) {
        $("div.mensajet").html("<p class='denegado'>este telefono esta en la lista negra</p>");
        validado = false;
    } else if (tel == "") {
        $("div.mensajet").html(
            "<p class='denegado'>Ingresa un telefono porfavor</p>");
        validado = false;
    } else if (!only_numeric.test(tel)) {
        $("div.mensajet").html(
            "<p class='denegado'>Ingresa solo numeros porfavor</p>");
        validado = false;
    } else if (tel.length < 8) {
        $("div.mensajet").html(
            "<p class='denegado'>Teléfono incorrecto, faltan digitos</p>");
        validado = false;
    } else if (tel.length > 8) {
        $("div.mensajet").html(
            "<p class='denegado'>Teléfono incorrecto, tiene muchos digitos</p>");
        validado = false;
    } else {
        $("div.mensajet").html(
            "<p class='correcto'>telefono correcto</p>");
        validado = true;
        counter += 1;
    };
});

//MAIL

// LISTA NEGRA MAIL
const listaNegraMail = ['aut.vincere@gmail.com', 'ed_palma@hotmail.com'];
//CIERRE LISTA NEGRA MAIL

multipleEventsListeners(campoMail, 'keyup change', function (e) {
    var email = mail.value;
    console.log(email);

    //VERIFICACION DE LIsTA NEGRA MAIL
    let permitidoMail = listaNegraMail.indexOf(email);
    console.log(permitidoMail);
    //CIERRE LIsTA NEGRA MAIL

    if (permitidoMail == 0) {
        $("div.mensajee").html("<p class='denegado'>este mail esta en la lista negra</p>");
        validado = false;
    } else if (email == "") {
        $("div.mensajee").html(
            "<p class='denegado'>Ingresa un mail porfavor</p>");
        validado = false;
    } else if (!chk_email.test(email)) {
        $("div.mensajee").html(
            "<p class='denegado'>Ingresa su mail correctamente porfavor</p>");
        validado = false;
    } else {
        $("div.mensajee").html(
            "<p class='correcto'>email correcto</p>");
        validado = true;
        counter += 1;
    };
});

// MAILDOS
//      multipleEventsListeners(campoMailDos, 'keyup change', function (e) {
//           var email = mail.value;
//           var emailDos = mailDos.value;

//           console.log(emailDos);

//      if (emailDos !== email) {
//        $("div.mensajed").html(
//          "<p class='denegado'>ingrese el mismo mail porfavor</p>");
//      }
//      else {
//           $("div.mensajed").html(
//                "<p class='correcto'>email correcto</p>");
//                validado = true;
//      };
// });

// ACEPTACION
// this.checked &&

// $('input[type="checkbox"]').on('change', function(e){
//     validado = true;
//  });

// $('input[type="checkbox"]').prop("disabled", !this.checked);




$('input[type="checkbox"]').on('change', function (e) {
    getCampos();
    if (validado == true) {
        $("button.submit").removeAttr("disabled")
        $("button.submit").addClass('aparece');
        console.log('puedes apretar ENVIAR');
        console.log('el estado del validado es = ' + validado);
    } else {
        $("button.submit").attr("disabled")
        $("button.submit").removeClass('aparece');
        console.log('el estado del validado es = ' + validado);
    }
});

function getCampos(){
	var str="";
	var form = document.getElementById("form-one");
    
    for (i = 0 ; i < form.elements.length; i++)
	{
		// str += "NOMBRE: " + form.elements[i].name + " ";
		// str += "TIPO :  " + form.elements[i].type + " "; 
		str += "VALOR: " + form.elements[i].value + "\n" ;
	}
    console.log(str);
    console.log('el largo de str es: ' + str.length);
}

// function unable()
// {
// var element = document.querySelectorAll("#form-one input[type=text]");
// for ( i = 0; i<element.length; i++){
// 	console.log('los inputs son: ' + element[i] + "<br>");
// }

// }

// var formulario;
// var CamposImput;

// window.onload = function () {
//     // Obtiene el formulario	
//     formulario = document.getElementById("form-one");
//     //Obtiene todos los tags que sean "input"
//     CamposImput = formulario.getElementsByTagName("input");
// }




// var elementos = document.querySelector("input.campo");

//  function validar(){
//     var validado = true;
//     //var campos = elementos.value;
//     for(i=0;i<elementos.length;i++){
//       if(elementos[i].value == "" || elementos[i].value == null){
//       validado = false
//       }
//     }

//     if(validado){
//         console.log('el estado de validado positivo es: '+ validado);
//     }else{
//         console.log('el estado de validado negativo es: '+ validado); 
//     }
//   }

//   $('input[type="checkbox"]').on('change', function (){
//     // validar();
//     let validos = validado.length;
//     if ( validos > 15) {
//         $("button.submit").removeAttr("disabled")
//         $("button.submit").addClass('aparece'); 
//         console.log('puedes apretar ENVIAR');
//         console.log('el estado del counter es = '+ counter);
//    } else {
//        console.log('el estado del counter es = '+ counter);
//    }
// });

//  $('form').on('mouseenter', function(e){
//     if ( counter > 15) {
//          $("button.submit").removeAttr("disabled")
//          $("button.submit").addClass('aparece'); 
//          console.log('puedes apretar ENVIAR');
//          console.log('el estado del counter es = '+ counter);
//     } else {
//         console.log('el estado del counter es = '+ counter);
//     }
// });

//  && counter == 16

// $( "input:radio" ).on("click",function(){
// if (counter == 16){
// $("input[type=submit]").removeAttr("disabled"); 
// }else{
//      console.log('llena todos los campos');
// };