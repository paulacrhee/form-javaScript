/*Botón que muestra valoración*/
function valoracion() {
  var valor = document.form.valor.value;
  alert("Has valorado con " + valor + " puntos");
}

/*Botón que muestra cuenta bancaria */
function cuenta() {
  var iban = document.form.iban.value;
  var entidad = document.form.entidad.value;
  var sucursal = document.form.sucursal.value;
  var dc = document.form.dc.value;
  var cuenta = document.form.cuenta.value;

  if (iban.length == 0) {
    alert("Tiene que introducir datos bancarios");
    return 0;
  } else {
    alert(
      "Le informamos que su cuenta bancaria es: ES" +
        iban +
        "-" +
        entidad +
        "-" +
        sucursal +
        "-" +
        dc +
        "-" +
        cuenta
    );
  }
}

/*Botón que muestra día de la semana*/
function dia() {
  const diaSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  var fecha = document.getElementById("fecha").valueAsDate;
  var dia = fecha.getDay();
  alert(
    "La fecha seleccionada en el elemento de fecha es un " + diaSemana[dia]
  );
}

/*Validación del campo código postal y de la provincia*/
function validar() {
  var cpostal = document.getElementById("codigopostal").value,
    provincia = document.getElementById("provincia").value,
    msg1 = document.getElementById("msg1");
  msg2 = document.getElementById("msg2");
  var cp_provincias = {
    01: "Alava",
    02: "Albacete",
    03: "Alicante",
    04: "Almeria",
    05: "Avila",
    06: "Badajoz",
    07: "Baleares",
    08: "Barcelona",
    09: "Burgos",
    10: "Caceres",
    11: "Cadiz",
    12: "Castellon",
    13: "Ciudad Real",
    14: "Cordoba",
    15: "Coruña",
    16: "Cuenca",
    17: "Gerona",
    18: "Granada",
    19: "Guadalajara",
    20: "Guipuzcoa",
    21: "Huelva",
    22: "Huesca",
    23: "Jaen",
    24: "Leon",
    25: "Lerida",
    26: "La Rioja",
    27: "Lugo",
    28: "Madrid",
    29: "Malaga",
    30: "Murcia",
    31: "Navarra",
    32: "Orense",
    33: "Asturias",
    34: "Palencia",
    35: "Las Palmas",
    36: "Pontevedra",
    37: "Salamanca",
    38: "Santa Cruz de Tenerife",
    39: "Cantabria",
    40: "Segovia",
    41: "Sevilla",
    42: "Soria",
    43: "Tarragona",
    44: "Teruel",
    45: "Toledo",
    46: "Valencia",
    47: "Valladolid",
    48: "Vizcaya",
    49: "Zamora",
    50: "Zaragoza",
    51: "Ceuta",
    52: "Melilla",
  };
  var cpostaln = cp_provincias[parseInt(cpostal.substring(0, 2))];

  if (provincia.length !== 0) {
    if (
      /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(cpostal) &&
      cpostal <= 52999 &&
      cpostal >= 1000
    ) {
      msg1.innerHTML =
        "<span style='color: green;'>" +
        "El código postal corresponde a la provincia de " +
        cpostaln +
        "</span>";
    } else if (
      cpostal == null ||
      cpostal.length == 0 ||
      /^\s+$/.test(cpostal)
    ) {
      msg1.innerHTML =
        "<span style='color: red;'>" +
        "El código postal no puede quedar en blanco</span>";
    } else if (/^[A-Z]+$/i.test(cpostal)) {
      msg1.innerHTML =
        "<span style='color: red;'>" +
        "El código postal no puede contener letras</span>";
    } else {
      msg1.innerHTML =
        "<span style='color: red;'>" +
        "El código postal es incorrecto. Vuelve a introducir datos</span>";
    }
  } else {
    msg1.innerHTML =
      "<span style='color: red;'>" +
      "Es necesario introducir la provincia para poder validar el código postal</span>";
  }

  if (provincia == null || provincia.length == 0 || /^\s+$/.test(provincia)) {
    msg2.innerHTML =
      "<span style='color: red;'>" +
      "La provincia no puede quedar en blanco</span>";
  } else if (cpostal.length == 0) {
    msg2.innerHTML =
      "<span style='color: red;'>" +
      "Es necesario introducir el código postal para poder validar provincia</span>";
  } else if (!/^[A-Za-z ]+$/.test(provincia)) {
    msg2.innerHTML =
      "<span style='color: red;'>" +
      "Este campo no puede contener números</span>";
  } else if (cpostal.length == 5 && cpostal <= 52999 && cpostal >= 1000) {
    if (Object.values(cp_provincias).indexOf(provincia) > -1) {
      if (cpostaln === provincia) {
        msg2.innerHTML =
          "<span style='color: green;'>" +
          "El nombre de la provincia es correcto. El código postal " +
          cpostal +
          " corresponde a la provincia de " +
          cpostaln +
          "</span>";
      } else {
        msg2.innerHTML =
          " <span style='color: red;'>" +
          "El código postal dado no corresponde a la provincia introducida. El código postal " +
          cpostal +
          " corresponde a la provincia de " +
          cpostaln +
          " y no a " +
          provincia +
          ". Por favor, vuelva a introducir datos.</span>";
      }
    } else {
      msg2.innerHTML =
        "<span style='color: red;'>" +
        "El nombre de la provincia es erróneo, no corresponde a ninguna provincia</span>";
    }
  } else {
    msg2.innerHTML =
      "<span style='color: red;'>" +
      "El código postal está mal escrito y no es posible verificar provincia. Introduzca un código postal válido</span>";
  }
}
