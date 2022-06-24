<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="uft-8" />
		<title>ProjetMoprion</title>
		<link rel="stylesheet" type="text/css" href="styleAccMorpion.css">
	</head>

    <body id='body'>

        <header class=head>
            <?php include('HeaderMorpion.php'); ?>
        </header>

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
		$mysqli->close();
		?>

        echo "Connexion réussie";

        https://lesdocs.fr/lire-et-afficher-une-table-mysql/

        -->


        <section class=tableaux>
                
            <div>
                <table class=tableScores>
                    <thead>
                        <tr>
                            <th class=titreTableScores colspan="3">Nombre de victoires</th>
                        </tr>
                    </thead>
                    <tbody class=result id='scores'>
                        <tr>
                            <td class=scoreCase>Joueur 1  <!-- < ?php echo ligne[player?]; ?> --> </td>
                            <td class=scoreCase>Adrien <!-- < ?php echo ligne[name]; ?> --> </td>
                            <td class=scoreCase>2</td>
                        </tr>
                        <tr>
                            <td class=scoreCase>Joueur 2 <!-- < ?php echo ligne[player?]; ?> --> </td>
                            <td class=scoreCase>Greg <!-- < ?php echo ligne[name]; ?> --> </td>
                            <td class=scoreCase>4</td>
                        </tr>
                        <tr>
                            <td class=scoreCase>Joueur 1 <!-- < ?php echo ligne[player?]; ?> --> </td>
                            <td class=scoreCase>Anaïs <!-- < ?php echo ligne[name]; ?> --> </td>
                            <td class=scoreCase>8</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div class=tourTable>
                <table class=tableJeu id='tableJeu'>
                    <tr>
                        <td id='a1'></td>
                        <td id='a2'></td>
                        <td id='a3'></td>
                    </tr>
                    <tr>
                        <td id='b1'></td>
                        <td id='b2'></td>
                        <td id='b3'></td>
                    </tr>
                    <tr>
                        <td id='c1'></td>
                        <td id='c2'></td>
                        <td id='c3'></td>
                    </tr>
                </table> 
            </div>
                

        </section>

        <div class=victory id='victory'>
            <!--
            <p id='victoryMessage'>Victoire Joueur 1</p> 
            <button id='recButton'><a href="EnregistrerResult.php";">Enregistrer resultat</a>;</button>
            <button id='replayButton'>Rejouer</button> 
            -->
        </div>


        <footer class=border>
                <?php include('FooterMorpion.php'); ?>
        </footer>

    </body>

</html>

<script type="text/javascript" src="MorpionJS.js"></script>