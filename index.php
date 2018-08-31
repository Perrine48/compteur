<?php require('header.php') ?>

<!-- Premier compteur -------------------------------------------------------->


<form class="compteur1" action="index.php" method="post">
    <input type="number" name="compt1" value="8000" disabled>
    <button type="button" name="more1" id="more1">+</button>
    <button type="button" name="less1" id="less1">-</button>
</form>


<form id="add1" action="index.php" method="post">
    <label for="addOne">Combien de points avez vous gagné ?</label>
    <input type="number" name="addOne">
    <input type="submit" name="addIt1" value="Ajouter">
</form>

<form id="lost1" action="index.php" method="post">
    <label for="lostOne">Combien de points avez vous perdu ?</label>
    <input type="number" name="lostOne">
    <input type="submit" name="lostIt1" value="Retirer">
</form>


<!-- Deuxième compteur -------------------------------------------------------->
<form class="compteur2" action="index.php" method="post">
    <input type="number" name="compt2" value="8000" disabled>
    <button type="button" name="more2" id="more2">+</button>
    <button type="button" name="less2" id="less2">-</button>
</form>

<form id="add2" action="index.php" method="post">
    <label for="addTwo">Combien de points avez vous gagné ?</label>
    <input type="number" name="addTwo">
    <input type="submit" name="addIt2" value="Ajouter">
</form>

<form id="lost2" action="index.php" method="post">
    <label for="lostTwo">Combien de points avez vous perdu ?</label>
    <input type="number" name="lostTwo">
    <input type="submit" name="lostIt2" value="Retirer">
</form>

<?php require('footer.php') ?>
