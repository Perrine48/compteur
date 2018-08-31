/*Apparition des inputs d'ajout et de retrait de point*/
$(document).ready(function() {

/*Variables boutons--------------------------------------------------------- */
    var more1 = $('#more1');
    var less1 = $('#less1');
    var more2 = $('#more2');
    var less2 = $('#less2');

/*Variables formulaires------------------------------------------------------*/
    var add1 = $('#add1');
    var add2 = $('#add2');
    var lost1 = $('#lost1');
    var lost2 = $('#lost2');

/*Fonctions apparition des formulaires --------------------------------------*/
    $(more1).click(function () {
            $(add1).css("display", "block")
        })

    $(less1).click(function () {
            $(lost1).css("display", "block")
        })

    $(more2).click(function () {
            $(add2).css("display", "block")
        })

    $(less2).click(function () {
            $(lost2).css("display", "block")
        })
    })
