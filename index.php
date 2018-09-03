<?php require('header.php') ?>

<!-- Premier compteur -------------------------------------------------------->

<form class="compteur1" action="index.php" method="post">
        <input type="number" name="compt1" value="8000" disabled id="compt1">
        <button type="button" name="more1" id="more1">+</button>
        <button type="button" name="less1" id="less1">-</button>

        <div id="add1">
            <label for="toAdd1">Combien de points avez vous gagné ?</label>
            <input type="number" name="toAdd1" id="toAdd1">
            <input type="button" name="addOne" value="Ajouter" id="addOne">
            <input type="button" name="annule1" value="Annuler" id="annule1">
        </div>

        <div id="lost1">
            <label for="toRemove1">Combien de points avez vous perdu ?</label>
            <input type="number" name="toRemove1" id="toRemove1">
            <input type="button" name="removeOne" value="Retirer" id="removeOne">
            <input type="button" name="annule2" value="Annuler" id="annule2">
        </div>
</form>

<!-- Deuxième compteur ------------------------------------------------------>
<form class="compteur2" action="index.php" method="post">
        <input type="number" name="compt2" value="8000" disabled id="compt2">
        <button type="button" name="more2" id="more2">+</button>
        <button type="button" name="less2" id="less2">-</button>

    <div id="add2">
        <label for="toAdd2">Combien de points avez vous gagné ?</label>
        <input type="number" name="toAdd2" id="toAdd2">
        <input type="button" name="addTwo" value="Ajouter" id="addTwo">
        <input type="button" name="annule3" value="Annuler" id="annule3">
    </div>

    <div id="lost2">
        <label for="toRemove2">Combien de points avez vous perdu ?</label>
        <input type="number" name="toRemove2" id="toRemove2">
        <input type="button" name="removeTwo" value="Retirer" id="removeTwo">
        <input type="button" name="annule4" value="Annuler" id="annule4">
    </div>
</form>

<?php require('footer.php') ?>
