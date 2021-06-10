$(document).ready(function () {

    ocultarModalPublicaciones();
    $("#btnUserAct").hide();
});

//----------------------------------TABLA----------------------------------

/**
 * @method iniciarTabla
 * Metodo para instanciar la DataTable
 */


//----------------------------------CRUD----------------------------------


//----------------------------------HELPERS----------------------------------

/**
 * @method listadoEspecialUsuarios
 * Método que se encarga de listar los usuarios a la tabla.
 *
 * @param {Object} usuarios Arreglo con los datos de los usuarios.
 */
function listadoSolicitudes(solicitudes) {
    let tabla = $("#listadoTablaFO_IN_06").DataTable();
    tabla.data().clear();
    tabla.rows.add(solicitudes).draw();
}

/**
 * @method gestionarItem
 * Método que se encarga de abrir el modal con la info de la fila seleccinada
 *
 * @param {Object} btn id de la fila que se desea visualizar.
 */
function gestionarItem(data) {

    /* se quita la parte del correo del usuario porque no se puede editar*/

    $('#id').val(data.id);
    $('#descripcion').val(data.descripcion);
    /* botones y modal */
    $("#btnUserAct").show();
    $("#btnUserReg").hide();
    $("#modalPublicaciones").show();
    $("#tablaPublicaciones").hide();
    /* check de las validaciones de la info cargada */
//    validarNombre();
//    validarTelefono();
//    validarRol();
}

/**
 * @method mostrarModalUsuarios
 * Método que se encarga de abrir el modal para registro o actualizacion
 */
function mostrarModalPublicaciones() {
    $('#groupCorreo').show();
    limpiarcampos();
    $("#btnUserAct").hide();
    $("#btnUserReg").show();
    $("#modalPublicaciones").show();
    $("#tablaPublicaciones").hide();
}

/**
 * @method ocultarModalUsuarios
 * Método que se encarga de cerrar el modal para registro o actualizacion
 */
function ocultarModalPublicaciones() {

    $("#modalPublicaciones").hide();
    $("#tablaPublicaciones").show();
}

/** bloquearCamposDatos() {
 
 $('#txt_Numero_Contrato').;
 $('#combo_proyectos');
 $('#txt_Grupo_investigación');
 $('#txt_Lineas_Investigacion');
 $('#txt_Facultad');
 $('#txt_fecha_ultimo_informe');
 $('#txt_Fecha_inicio');
 $('#txt_Fecha_Fin');
 }
 */

/**
 * @method limpiarcampos
 * Método que se encarga de limpiar los campos del modal para registro o actualizacion
 */
function limpiarcampos() {
    $('#nombre').val('');
    $('#correo').val('');
    $('#telefono').val('');
    $('#rol').val('');
}

$('#foto').change(function (e) {
    if (e.target.files[0].type === "image/png") {
        $("#btnUserAct").attr("disabled", true);
        $("#btnUserReg").attr("disabled", true);
        convertImage(this, 'fotobase');
    } else {
        input = document.getElementById("foto");
        input.value = '';
        return Mensaje.mostrarMsjError(
                "Error",
                "Solo se pueden cargar imagenes con formato png."
                );
    }
});

async function convertImage(input, id) {
    const file = input.files[0];
    $("#" + id).val(await toBase64(file));
    console.log($("#fotobase").val());
    $("#btnUserAct").attr("disabled", false);
    $("#btnUserReg").attr("disabled", false);
}

var toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

//<editor-fold defaultstate="collapsed" desc="CRUD">


function registrarFO_IN_06() {

    ocultarModalPublicaciones();

}

function registrarListaPrevia() {


    Mensaje.mostrarMsjExito("Se diligenció la lista de verificación previa a la ejecución con éxito");
    setTimeout(function () {
        window.location.replace("tecnico.html");
    }, 3000);

}
function registrarListaPost() {

    Mensaje.mostrarMsjExito("Se diligenció la lista de verificación posterior a la ejecución con éxito");
    setTimeout(function () {
        window.location.replace("tecnico.html");
    }, 3000);
}
function cargarOrdenes() {


    Mensaje.mostrarMsjExito("Se cargó el archivo con las órdenes con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function crearListaMensaje() {


    Mensaje.mostrarMsjExito("Se creó la lista de verificación con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function crearTemaMensaje() {


    Mensaje.mostrarMsjExito("Se creó el tema con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}

function editarTemaMensaje() {


    Mensaje.mostrarMsjExito("Se editó el tema con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function crearPreguntaAMensaje() {


    Mensaje.mostrarMsjExito("Se creó una pregunta abierta con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function crearPreguntaCMensaje() {


    Mensaje.mostrarMsjExito("Se creó una pregunta cerrada con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function editarPreguntaAMensaje() {


    Mensaje.mostrarMsjExito("Se editó una pregunta abierta con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function editarPreguntaCMensaje() {


    Mensaje.mostrarMsjExito("Se editó una pregunta cerrada con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function agregarTecnicoMensaje() {


    Mensaje.mostrarMsjExito("Se agregó un técnico con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function editarTecnicoMensaje() {


    Mensaje.mostrarMsjExito("Se editó un técnico con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function agregarLaborMensaje() {


    Mensaje.mostrarMsjExito("Se agregó una labor con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}
function editarLaborMensaje() {


    Mensaje.mostrarMsjExito("Se editó una labor con éxito");
    setTimeout(function () {
        window.location.replace("admin.html");
    }, 3000);
}


function listaPrevia() {

    Utilitario.agregarMascara();
    fetch("FO_IN_12_2.html", {
        method: "GET",
    })
            .then(function (response) {
                return response.text();
            })
            .then(function (vista) {
                $("#mostrarcontenido").html(vista);
                /*(usuario.rol == = 1 || usuario.rol === 2) ?
                 window.location.href = "principal.html": $("#mostrarcontenido").html(vista); */
            })
            .finally(function () {
                Utilitario.quitarMascara();
            });
}
function listaPosterior() {

    Utilitario.agregarMascara();
    fetch("FO_IN_15_2.html", {
        method: "GET",
    })
            .then(function (response) {
                return response.text();
            })
            .then(function (vista) {
                $("#mostrarcontenido").html(vista);
                /*(usuario.rol == = 1 || usuario.rol === 2) ?
                 window.location.href = "principal.html": $("#mostrarcontenido").html(vista); */
            })
            .finally(function () {
                Utilitario.quitarMascara();
            });
}



//<editor-fold defaultstate="collapsed" desc="Select Grupos de Investigacion">

function cargar_DatosInfos(id) {
    if (id === "Ins-001") {
        $('#txtNumero').val('Ins-001');
        $('#txtLabor').val('Instalación de Tanque de Gas');
        $('#txtDireccion').val('C.C Ventura Plaza local 221, Cartagena');
        $('#txtEstado').val('Ya se diligenció la lista');
        document.getElementById("btnUserReg").disabled = true;

    }
    if (id === "Man-002") {
        $('#txtNumero').val('Man-002');
        $('#txtLabor').val('Mantenimiento de tubería');
        $('#txtDireccion').val('Av 1 #15-09, Caobos, Cartagena');
        $('#txtEstado').val('Ya se diligenció la lista');
        document.getElementById("btnUserReg").disabled = true;
    }
    if (id === "Rev-003") {
        $('#txtNumero').val('Rev-003');
        $('#txtLabor').val('Revisión de Fuga');
        $('#txtDireccion').val('Calle 7 # 7-77, Santa Marta');
        $('#txtEstado').val('No se ha diligenciado la lista');
        document.getElementById("btnUserReg").disabled = false;
    }
    if (id === "Gen-004") {
        $('#txtNumero').val('Gen-004');
        $('#txtLabor').val('Reemplazo de válvulas');
        $('#txtDireccion').val('Holiday Inn Bocagrande, Cartagena');
        $('#txtEstado').val('No se ha diligenciado la lista');
        document.getElementById("btnUserReg").disabled = false;

    }
    if (id === "Ins-002") {
        $('#txtNumero').val('Ins-002');
        $('#txtLabor').val('Instalacion de tubería');
        $('#txtDireccion').val('Estadio Metropolitano, Barranquilla');
        $('#txtEstado').val('No se ha diligenciado la lista');
        document.getElementById("btnUserReg").disabled = false;
    }
    if (id === "Ins-003") {
        $('#txtNumero').val('Ins-003');
        $('#txtLabor').val('Instalación válvulas de medición');
        $('#txtDireccion').val('Calle 87 Carrera 17, Cabo de la vela');
        $('#txtEstado').val('No se ha diligenciado la lista');
        document.getElementById("btnUserReg").disabled = false;
    }
}
function cargar_DatosInfos2(id) {
    if (id === "Ins-001") {
        $('#txtNumero').val('Ins-001');
        $('#txtLabor').val('Instalación de Tanque de Gas');
        $('#txtDireccion').val('C.C Ventura Plaza local 221, Cartagena');
        $('#txtEstado').val('Ya se diligenció la lista');
        document.getElementById("btnUserReg").disabled = true;

    }
    if (id === "Man-002") {
        $('#txtNumero').val('Man-002');
        $('#txtLabor').val('Mantenimiento de tubería');
        $('#txtDireccion').val('Av 1 #15-09, Caobos, Cartagena');
        $('#txtEstado').val('Ya se diligenció la lista');
        document.getElementById("btnUserReg").disabled = true;
    }
    if (id === "Rev-003") {
        $('#txtNumero').val('Rev-003');
        $('#txtLabor').val('Revisión de Fuga');
        $('#txtDireccion').val('Calle 7 # 7-77, Santa Marta');
        $('#txtEstado').val('No se ha diligenciado la lista antes de ejecutar la orden');
        document.getElementById("btnUserReg").disabled = true;
    }
    if (id === "Gen-004") {
        $('#txtNumero').val('Gen-004');
        $('#txtLabor').val('Reemplazo de válvulas');
        $('#txtDireccion').val('Holiday Inn Bocagrande, Cartagena');
        $('#txtEstado').val('No se ha diligenciado la lista antes de ejecutar la orden');
        document.getElementById("btnUserReg").disabled = true;

    }
    if (id === "Ins-002") {
        $('#txtNumero').val('Ins-002');
        $('#txtLabor').val('Instalacion de tubería');
        $('#txtDireccion').val('Estadio Metropolitano, Barranquilla');
        $('#txtEstado').val('No se ha diligenciado la lista');
        document.getElementById("btnUserReg").disabled = false;
    }
    if (id === "Ins-003") {
        $('#txtNumero').val('Ins-003');
        $('#txtLabor').val('Instalación válvulas de medición');
        $('#txtDireccion').val('Calle 87 Carrera 17, Cabo de la vela');
        $('#txtEstado').val('No se ha diligenciado la lista');
        document.getElementById("btnUserReg").disabled = false;
    }
}
function cargar_DatosInfos3(id) {
    if (id === "shiza") {
        $('#ide').val('1.090.023');
        $('#dir').val('742 Avenida Siempre viva');
        $('#tel').val('3203203203');
        $('#correo').val('shiza@gmail.com');
        $('#cargo').val('Técnico electricistra');
        $('#exp').val('24');
    }
}


//</editor-fold>





//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Select">
function cargarSelectInspector() {

    fetch("../../back/controller/InspectorController_listAll.php", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

        },
    })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(function (data) {
                construirSelectInspector(data.inspector);
            })
            .catch(function (promise) {
                if (promise.json) {
                    promise.json().then(function (response) {
                        let status = promise.status,
                                mensaje = response ? response.mensaje : "";
                        if (status === 401 && mensaje) {
                            Mensaje.mostrarMsjWarning("Advertencia", mensaje, function () {
                                Utilitario.cerrarSesion();
                            });
                        } else if (mensaje) {
                            Mensaje.mostrarMsjError("Error", mensaje);
                        }
                    });
                } else {
                    Mensaje.mostrarMsjError(
                            "Error",
                            "Ocurrió un error inesperado. Intentelo nuevamente por favor."
                            );
                }
            });
}

/**
 * @method construirSelectNacionalidad
 * construye y agrega los tipos al contenedor
 */
function construirSelectInspector(inspectores) {
    $("#inspector").empty();
    let input = $("#inspector");
    for (let index = 0; index < inspectores.length; index++) {
        let inspector = inspectores[index],
                opcion = new Option(inspector.nombre, inspector.id);
        $(opcion).html(inspector.nombre);
        input.append(opcion);
    }


}

//</editor-fold>
