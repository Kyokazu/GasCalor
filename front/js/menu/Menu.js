/* global Utilitario, fetch */

/**
 * Clase encargada de realizar las interacciones necesarias con la vista de Menu.
 *
 **/
class Menu {

    /**
     * @method listadoUsuarios
     * Metodo que se encarga de mostrar los usuarios registrados
     */
    static listadoUsuarios() {
        const {...usuario} = Utilitario.getLocal("user") ? JSON.parse(Utilitario.getLocal("user")) : {};
        Utilitario.agregarMascara();
        fetch("listadoUsuarios.html", {
            method: "GET",
        })
                .then(function (response) {
                    return response.text();
                })
                .then(function (vista) {
                    (usuario.rol === 3 || usuario.rol === 2) ?
                            window.location.href = "principal.html" : $("#mostrarcontenido").html(vista);
                })
                .finally(function () {
                    Utilitario.quitarMascara();
                });
    }
    /**
     * @method listadoOrdenes
     * Metodo que se encarga de mostrar las ordenes registradas
     */
    static listadoOrdenes() {
        console.log('ordenes');
        const {...usuario} = Utilitario.getLocal("user") ? JSON.parse(Utilitario.getLocal("user")) : {};
        Utilitario.agregarMascara();
        fetch("listadoOrdenes.html", {
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

    static listadoTipo_Jovenes() {

        Utilitario.agregarMascara();
        fetch("listadoTipo_Jovenes.html", {
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
    static listadoTipo_Publicaciones() {

        Utilitario.agregarMascara();
        fetch("listadoTipo_Publicaciones.html", {
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
    static listadoTipo_Publicaciones_1() {

        Utilitario.agregarMascara();
        fetch("listadoTipo_Publicaciones_1.html", {
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
    static FO_IN_06() {

        Utilitario.agregarMascara();
        fetch("FO_IN_06.html", {
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
    static FO_IN_06_1() {

        Utilitario.agregarMascara();
        cargar_proyectos();
        fetch("FO_IN_06_1.html", {
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
    static FO_IN_09_10() {

        Utilitario.agregarMascara();
        fetch("FO_IN_09_10.html", {
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
    static FO_IN_09_102() {

        Utilitario.agregarMascara();
        fetch("FO_IN_09_102.html", {
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
    static FO_IN_15() {

        Utilitario.agregarMascara();
        fetch("FO_IN_15_1.html", {
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
    static FO_IN_15_1() {

        Utilitario.agregarMascara();
        fetch("FO_IN_15_1.html", {
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
    static FO_IN_16() {

        Utilitario.agregarMascara();
        fetch("FO_IN_16.html", {
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
    static FO_IN_16_1() {

        Utilitario.agregarMascara();
        fetch("FO_IN_16_1.html", {
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
    static FO_IN_12() {

        Utilitario.agregarMascara();
        fetch("FO_IN_12_1.html", {
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

    static Listar_Listas() {

        Utilitario.agregarMascara();
        fetch("Lista_Listas.html", {
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
    static Agregar_Listas() {

        Utilitario.agregarMascara();
        fetch("Agregar_Listas.html", {
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
    static Editar_Listas() {

        Utilitario.agregarMascara();
        fetch("Editar_Listas.html", {
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
    static Lista_Temas() {

        Utilitario.agregarMascara();
        fetch("Lista_Temas.html", {
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
    static Agregar_Temas() {

        Utilitario.agregarMascara();
        fetch("Agregar_Temas.html", {
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
    static Editar_Temas() {

        Utilitario.agregarMascara();
        fetch("Editar_Temas.html", {
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
    static Lista_PreguntaC() {

        Utilitario.agregarMascara();
        fetch("Lista_PreguntaC.html", {
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
    static Lista_PreguntaA() {

        Utilitario.agregarMascara();
        fetch("Lista_PreguntaA.html", {
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
    static Agregar_PreguntaC() {

        Utilitario.agregarMascara();
        fetch("Agregar_PreguntaC.html", {
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
    static Agregar_PreguntaA() {

        Utilitario.agregarMascara();
        fetch("Agregar_PreguntaA.html", {
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
    static Editar_PreguntaA() {

        Utilitario.agregarMascara();
        fetch("Editar_PreguntaA.html", {
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
    static Editar_PreguntaC() {

        Utilitario.agregarMascara();
        fetch("Editar_PreguntaC.html", {
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

    static Cargar_Ordenes() {

        Utilitario.agregarMascara();
        fetch("Seleccionar_archivo_admin.html", {
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

    static ListaOrdenesTecnicos() {

        Utilitario.agregarMascara();
        fetch("Lista_Ordenes_admin.html", {
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

    static Listar_orden() {

        Utilitario.agregarMascara();
        fetch("Lista_Ordenes_admin.html", {
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
    static Lista_ordenes_admin() {

        Utilitario.agregarMascara();
        fetch("Lista_Ordenes_admin.html", {
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
    static verTecnicos() {

        Utilitario.agregarMascara();
        fetch("Lista_Tecnicos.html", {
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
    static editarTecnicos() {

        Utilitario.agregarMascara();
        fetch("Editar_Tecnico.html", {
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
    static agregarTecnicos() {

        Utilitario.agregarMascara();
        fetch("Agregar_Tecnico.html", {
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
    static verLabores() {

        Utilitario.agregarMascara();
        fetch("Lista_Labores.html", {
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
    static agregarLabor() {

        Utilitario.agregarMascara();
        fetch("Agregar_Labor.html", {
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
    static editarLabor() {

        Utilitario.agregarMascara();
        fetch("Editar_Labor.html", {
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
    static listaResultados() {

        Utilitario.agregarMascara();
        fetch("Lista_Resultados.html", {
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
    static listaPreguntas() {

        Utilitario.agregarMascara();
        fetch("Lista_Preguntas.html", {
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
    static FO_IN_12_2() {

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

    static FO_IN_07() {

        Utilitario.agregarMascara();
        fetch("FO_IN_07.html", {
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

    static FO_IN_06_Lista() {

        Utilitario.agregarMascara();
        fetch("FO_IN_06_Lista.html", {
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
    static FO_IN_06_detalles() {

        Utilitario.agregarMascara();
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

    static iniciarSesion2() {


        if ($("#correo").val() === "admin") {
            window.location.replace("admin.html");
            alert("Bienvenido, Usuario ADMIN");
        } else if ($("#correo").val() === "tecnico") {
            window.location.replace("tecnico.html");
            alert("Bienvenido, Usuario Técnico");

        } else {
            alert("Datos de ingreso no válidos");
        }



    }

    //<editor-fold defaultstate="collapsed" desc="Actas">

    //<editor-fold defaultstate="collapsed" desc="Actas">
    /**
     * 
     * @return {undefined}
     */
    static mostrarRangos() {

        Utilitario.agregarMascara();
        fetch("listadoRangos.html", {
            method: "GET",
        })
                .then(function (response) {
                    return response.text();
                })
                .then(function (vista) {
                    $("#mostrarcontenido").html(vista);
                })
                .finally(function () {
                    Utilitario.quitarMascara();
                });
    }
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Actas Danadas">
    static mostrarDanadas() {

        Utilitario.agregarMascara();
        fetch("listadoDanadas.html", {
            method: "GET",
        })
                .then(function (response) {
                    return response.text();
                })
                .then(function (vista) {
                    $("#mostrarcontenido").html(vista);
                })
                .finally(function () {
                    Utilitario.quitarMascara();
                });
    }
    //</editor-fold>


}