$(document).ready(function () {
    iniciarTabla();
    obtenerDatos();
    ocultarModalPublicaciones();
    $("#btnUserAct").hide();
    cargar_solicitudes();
    //cargar_proyectos();
});

//----------------------------------TABLA----------------------------------

/**
 * @method iniciarTabla
 * Metodo para instanciar la DataTable
 */


function iniciarTabla() {


    $("#listadoTablaFO_IN_06_Detalles").DataTable({
        responsive: true,
        ordering: true,
        paging: true,
        searching: true,
        info: true,
        lengthChange: false,
        language: {
            emptyTable: "Sin solicitudes registradas",
            search: "Buscar:",
            info: "_START_ de _MAX_ registros", //_END_ muestra donde acaba _TOTAL_ muestra el total
            infoEmpty: "Ningun registro 0 de 0",
            infoFiltered: "(filtro de _MAX_ registros en total)",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            }
        },
        columns: [
            {
                data: "id",
                className: "text-center",
                orderable: true,
            },
            {
                data: "nombre_proyecto",
                className: "text-center",
                orderable: true,
            },
            {
                data: "fecha_solicitud",
                className: "text-center",
                orderable: true,
            },
            {
                data: "estado_solicitud",
                className: "text-center",
                orderable: true,
            },
        ],
        rowCallback: function (row, data, index) {

//            alert(data.descripcion);
            $(".actualizar", row).click(function () {
                gestionarItem(data.id);
            });
        },
        dom: '<"html5buttons"B>lTfgitp',
        buttons: [{
                extend: "copy",
                className: "btn btn-primary glyphicon glyphicon-duplicate"
            },
            {
                extend: "csv",
                title: "listadoAlumnos",
                className: "btn btn-primary glyphicon glyphicon-save-file"
            },
            {
                extend: "excel",
                title: "listadoAlumnos",
                className: "btn btn-primary glyphicon glyphicon-list-alt"
            },
            {
                extend: "pdf",
                title: "listadoAlumnos",
                className: "btn btn-primary glyphicon glyphicon-file"
            },
            {
                extend: "print",
                className: "btn btn-primary glyphicon glyphicon-print",
                customize: function (win) {
                    $(win.document.body).addClass("white-bg");
                    $(win.document.body).css("font-size", "10px");
                    $(win.document.body)
                            .find("table")
                            .addClass("compact")
                            .css("font-size", "inherit");
                },
            },
        ],
    });

}

//----------------------------------CRUD----------------------------------


function obtenerDatos() {
    Utilitario.agregarMascara();
    fetch("../../back/controller/Solicitud_horas_financiado_List_admin.php", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            //Authorization: Utilitario.getLocal("sesionId"),
        },
    })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(function (data) {
                listadoSolicitudes(data.solicitudes);
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
                            "Ocurri?? un error inesperado. Intentelo nuevamente por favor."
                            );
                }
            })
            .finally(function () {
                Utilitario.quitarMascara();
            });
}

//----------------------------------HELPERS----------------------------------

/**
 * @method listadoEspecialUsuarios
 * M??todo que se encarga de listar los usuarios a la tabla.
 *
 * @param {Object} usuarios Arreglo con los datos de los usuarios.
 */
function listadoSolicitudes(solicitudes) {
    let tabla = $("#listadoTablaFO_IN_06_Detalles").DataTable();
    tabla.data().clear();
    tabla.rows.add(solicitudes).draw();
}

/**
 * @method gestionarItem
 * M??todo que se encarga de abrir el modal con la info de la fila seleccinada
 *
 * @param {Object} btn id de la fila que se desea visualizar.
 */
function gestionarItem(data) {

    Utilitario.agregarMascara();
    cargar_proyectos();
    fetch("FO_IN_06_1_detalles.html", {
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

/**
 * @method mostrarModalUsuarios
 * M??todo que se encarga de abrir el modal para registro o actualizacion
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
 * M??todo que se encarga de cerrar el modal para registro o actualizacion
 */
function ocultarModalPublicaciones() {

    $("#modalPublicaciones").hide();
    $("#tablaPublicaciones").show();
}

/** bloquearCamposDatos() {
 
 $('#txt_Numero_Contrato').;
 $('#combo_proyectos');
 $('#txt_Grupo_investigaci??n');
 $('#txt_Lineas_Investigacion');
 $('#txt_Facultad');
 $('#txt_fecha_ultimo_informe');
 $('#txt_Fecha_inicio');
 $('#txt_Fecha_Fin');
 }
 */

/**
 * @method limpiarcampos
 * M??todo que se encarga de limpiar los campos del modal para registro o actualizacion
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
    Mensaje.mostrarMsjExito("Registro realizado con ??xito");
    ocultarModalPublicaciones();

}


function registrar_contrato_FO_IN_06() {
    var combo = document.getElementById("combo_proyectos");
    var selected = combo.options[combo.selectedIndex].text;
    let ordenes = {
        id_proyecto: $('#combo_proyectos').val(),
        numero_contrato: $('#txt_Numero_Contrato').val(),
        nombre_proyecto: selected,
        grupo_investigacion: $('#txt_Grupo_investigaci??n').val(),
        linea_investigacion: $('#txt_Lineas_Investigacion').val(),
        facultad: $('#txt_Facultad').val(),
        fecha_ultimo_informe: $('#txt_fecha_ultimo_informe').val(),
        fecha_inicio: $('#txt_Fecha_inicio').val(),
        fecha_terminacion: $('#txt_Fecha_Fin').val()

    };

    Utilitario.agregarMascara();
    fetch("../../back/controller/Solicitud_horas_financiado_insert.php", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            //Authorization: Utilitario.getLocal("sesionId"),
        },
        body: JSON.stringify(ordenes),
    })

            .then(function (response) {

                if (response.ok) {

                    return response.json();
                }
                throw response;
            })
            .then(function (data) {
                Mensaje.mostrarMsjExito("Datos confirmados", data.mensaje);
                $('#id_hidden_solicitud').val(data.id);
                obtenerDatos();

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
                            "Ocurri?? un error inesperado. Intentelo nuevamente por favor."
                            );
                }
            })
            .finally(function () {
                Utilitario.quitarMascara();
            });

}

function registrarOtroInvestigador() {

    let ordenes = {
        nombre_investigador: $('#txt_Nombre_Investigador').val(),
        horas_semana: $('#txt_Numero_Solicitadas').val(),
        tipo_investigador: $('#combo_condicion').val(),
        id_solicitud_horas_financiado: $('#id_hidden_solicitud').val(),

    };
    Utilitario.agregarMascara();
    fetch("../../back/controller/InvestigadorController_Insert.php", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            //Authorization: Utilitario.getLocal("sesionId"),
        },
        body: JSON.stringify(ordenes),
    })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(function (data) {

                Mensaje.mostrarMsjExito("Registro Exitoso", data.mensaje);
                obtenerDatos();
                ocultarModalPublicaciones();
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
                            "Ocurri?? un error inesperado. Intentelo nuevamente por favor."
                            );
                }
            })
            .finally(function () {
                Utilitario.quitarMascara();
            });

}


//<editor-fold defaultstate="collapsed" desc="Select Grupos de Investigacion">

function cargar_DatosInfos(id) {
    cargar_solicitudes2(id);

}
function cargar_solicitudes() {

    fetch("../../back/controller/Solicitud_horas_financiado_List_admin.php", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Plataform: "web",
        },
    })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(function (data) {
                console.log(data.solicitudes);
                construirSelectProyectos(data.solicitudes);
            })
            .catch(function (promise) {
                if (promise.json) {
                    promise.json().then(function (response) {
                        let status = promise.status,
                                mensaje = response ? response.mensaje : "";
                        if (status === 401 && mensaje) {
                            Mensaje.mostrarMsjWarning("Advertencia", mensaje, function () {
                                Utilitario2.cerrarSesion();
                            });
                        } else if (mensaje) {
                            Mensaje.mostrarMsjError("Error", mensaje);
                        }
                    });
                } else {
                    Mensaje.mostrarMsjError(
                            "Error",
                            "Ocurri?? un error inesperado. Intentelo nuevamente por favor."
                            );
                }
            });
}
function cargar_solicitudes2(id) {

    fetch("../../back/controller/Solicitud_horas_financiado_List_adminTodo.php", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Plataform: "web",
        },
    })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(function (data) {
                console.log(data.proyectos);
                construirSelectProyectos2(data.proyectos, id);
            })
            .catch(function (promise) {
                if (promise.json) {
                    promise.json().then(function (response) {
                        let status = promise.status,
                                mensaje = response ? response.mensaje : "";
                        if (status === 401 && mensaje) {
                            Mensaje.mostrarMsjWarning("Advertencia", mensaje, function () {
                                Utilitario2.cerrarSesion();
                            });
                        } else if (mensaje) {
                            Mensaje.mostrarMsjError("Error", mensaje);
                        }
                    });
                } else {
                    Mensaje.mostrarMsjError(
                            "Error",
                            "Ocurri?? un error inesperado. Intentelo nuevamente por favor."
                            );
                }
            });
}

function construirSelectProyectos(pro) {
    $("#combo_proyectos").empty();
    let input = $("#combo_proyectos");
    let opcion = new Option("Seleccione la solicitud", "-1");
    $(opcion).html("Seleccione la solicitud");
    input.append(opcion);
    for (let index = 0; index < pro.length; index++) {
        let gpI = pro[index],
                opcion = new Option(gpI.nombre_proyecto, gpI.id);
        $(opcion).html(gpI.nombre_proyecto);
        input.append(opcion);
    }
}
function construirSelectProyectos2(pro, id) {
    $("#combo_proyectos").empty();
    let input = $("#combo_proyectos");
    let opcion = new Option("Seleccione la solicitud", "-1");
    $(opcion).html("Seleccione la solicitud");
    input.append(opcion);
    for (let index = 0; index < pro.length; index++) {
        let gpI = pro[index],
                opcion = new Option(gpI.nombre_proyecto, gpI.id);
        if (gpI.id === id) {
            $(opcion).html(gpI.nombre_proyecto);
            input.append(opcion);
        }
    }
}

//</editor-fold>


function DeleteOrder(id) {
    Mensaje.mostrarMsjConfirmacion(
            'Eliminar Orden',
            'Este proceso es irreversible , ??esta seguro que desea eliminar la Orden?',
            function () {
                eliminarTp(id);
            }
    );
}


/**
 * @method AlumnoEliminar
 * M??todo que se encarga de eliminar el estudiante de todas la bd
 */
function eliminarTp(id) {

    let data = {
        id: id,

    };
    Utilitario.agregarMascara();
    fetch("../../back/controller/Tipo_publicacionesController_Delete.php", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
    })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(function (data) {

                Mensaje.mostrarMsjExito("Registro Exitoso", data.mensaje);

                ocultarModalPublicaciones();
                obtenerDatos();
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
                            "Ocurri?? un error inesperado. Intentelo nuevamente por favor."
                            );
                }
            })
            .finally(function () {
                Utilitario.quitarMascara();
            });

}



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
                            "Ocurri?? un error inesperado. Intentelo nuevamente por favor."
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
