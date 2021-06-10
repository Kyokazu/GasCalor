/**
 * Clase encargada de realizar las interacciones necesarias con la vista de Menu.
 *
 **/
class Menu {

    

    static principal() {

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

}