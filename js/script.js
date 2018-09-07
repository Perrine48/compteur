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

/*Variables nombre initial---------------------------------------------------*/
    var init1 = 8000;
    var init2 = 8000;

/*Variables champs compteurs--------------------------------------------------*/
    var compt1 = $('#compt1');
    var compt2 = $('#compt2');

/*Variables contenu champs compteurs------------------------------------------*/
    var incompt1 = $('#compt1').val();
    var incompt2 = $('#compt2').val();

/*Variables boutons validation de l'ajout et du retrait----------------------*/
    var addOne = $('#addOne');
    var removeOne = $('#removeOne');
    var addTwo = $('#addTwo');
    var removeTwo = $('#removeTwo');

/*Fonctions d'ajout de points------------------------------------------------*/
    $(addOne).click(function() {
        var toAdd1 = $('#toAdd1').val();
        init1 += parseInt(toAdd1);
        $(compt1).attr('value', init1);
    })

    $(addTwo).click(function() {
        var toAdd2 = $('#toAdd2').val();
        init2 += parseInt(toAdd2);
        $(compt2).attr('value', init2);
    })

/*Fonctions de retraits de points--------------------------------------------*/
    $(removeOne).click(function() {
        var toRemove1 = $('#toRemove1').val();
        init1 -= parseInt(toRemove1);
        $(compt1).attr('value', init1);
    })

    $(removeTwo).click(function() {
        var toRemove2 = $('#toRemove2').val();
        init2 -= parseInt(toRemove2);
        $(compt2).attr('value', init2);
    })



})
