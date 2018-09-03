/*Apparition des inputs d'ajout et de retrait de point*/
$(document).ready(function() {

/*Variables boutons--------------------------------------------------------- */
    var more1 = $('#more1');
    var less1 = $('#less1');
    var more2 = $('#more2');
    var less2 = $('#less2');

    var annule1 = $('#annule1');
    var annule2 = $('#annule2');
    var annule3 = $('#annule3');
    var annule4 = $('#annule4');

/*Variables formulaires------------------------------------------------------*/
    var add1 = $('#add1');
    var add2 = $('#add2');
    var lost1 = $('#lost1');
    var lost2 = $('#lost2');

/*Fonctions apparition des formulaires --------------------------------------*/
    $(more1).click(function () {
            $(add1).css("display", "block")

            if ($(lost1).css("display", "block")) {
                $(lost1).css("display", "none")
            }
        })

    $(less1).click(function () {
            $(lost1).css("display", "block")

            if ($(add1).css("display", "block")) {
                $(add1).css("display", "none")
            }
        })

    $(more2).click(function () {
            $(add2).css("display", "block")

            if ($(lost2).css("display", "block")) {
                $(lost2).css("display", "none")
            }
        })

    $(less2).click(function () {
            $(lost2).css("display", "block")

            if ($(add2).css("display", "block")) {
                $(add2).css("display", "none")
            }
        })

/*Fonctions disparition des formulaires -------------------------------------*/
    $(annule1).click(function () {
            $(add1).css("display", "none")
        })

    $(annule2).click(function () {
            $(lost1).css("display", "none")
        })

    $(annule3).click(function () {
            $(add2).css("display", "none")
        })

    $(annule4).click(function () {
            $(lost2).css("display", "none")
        })

/*Ajouts et retrait de points------------------------------------------------*/

/*Variables des champs compteurs---------------------------------------------*/
    var compt1 = $('#compt1').val();
    var compt2 = $('#compt2').val();

/*Variables boutons validation de l'ajout et du retrait----------------------*/
    var addOne = $('#addOne');
    var removeOne = $('#removeOne');
    var addTwo = $('#addTwo');
    var removeTwo = $('#removeTwo');

/*Variables champs de valeur à ajouter ou à retirer--------------------------*/
    var toAdd1 = $('#toAdd1').val();
    var toRemove1 = $('#toRemove1').val();
    var toAdd2 = $('#toAdd2').val();
    var toRemove2 = $('#toRemove2').val();

/*Fonctions d'ajout de points------------------------------------------------*/
    $(addOne).click(function() {
        compt1 += toAdd1;
    })

    $(addTwo).click(function() {
        compt2 += toAdd2;
    })

/*Fonctions de retraits de points--------------------------------------------*/
    $(removeOne).click(function() {
        compt1 -= toRemove1;
    })

    $(removeTwo).click(function() {
        compt2 -= toRemove2;
    })

})
