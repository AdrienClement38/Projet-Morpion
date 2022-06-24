<?php 

    $player = $_POST['player'];
    $name = $_POST['name'];

    $user = [
        'mail' => $mail, 
        'name' => $name];

    foreach ($user as $users) {
            
    }

    echo '<h2>Rappel des infos</h2>';


    echo '<table style = "background-color : rgb(103, 112, 106,0.2); border : 2px solid black;">
        <tr>
            <td>Joueur n° : </td>
            <td>' . $player . '</td>
        </tr>
        <tr>
            <td>Nom : </td>
            <td>' . $name . '</td>
        </tr>
   </table>';
?>

 <!--

Connexion BDD - Page web avec contenu à afficher dans le tableau scores
Mais erreur et cache toute la partie tableaux

< ?php
    $mysqli = new mysqli('mysql:host=localhost;dbname=resultats_morpion;charset=utf8', 'root', 'root');
    $mysqli->set_charset("utf8");
    $requete = "SELECT * FROM scores_users";
    $resultat = $mysqli->query($requete);
    while ($ligne = $resultat->fetch_assoc()) {
        echo $ligne['player ?'] . ' ' . $ligne['name'] . ' ' . $ligne['score'] . '<br>';
    }

        $sql = "INSERT INTO scores_users (player ?, name) VALUES ($player, $name)";
    if (mysqli_query($sql)) {
        echo "Nouveau enregistrement créé avec succès";
    }

    $mysqli->close();
?>

echo "Connexion réussie";

https://lesdocs.fr/lire-et-afficher-une-table-mysql/

https://www.hostinger.fr/tutoriels/comment-inserer-des-donnees-dans-une-table-mysql-via-php#:~:text=ligne%20num%C3%A9ro%2019%20%3A-,%24sql%20%3D%20%22INSERT%20INTO%20Etudiants%20(prenom%2C%20nom%2C,la%20base%20de%20donn%C3%A9es%20sp%C3%A9cifi%C3%A9e.

-->