<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="uft-8" />
		<title>QuestionnairePorjetMoprion</title>
		<link rel="stylesheet" type="text/css" href="styleAccMorpion.css">
	</head>

    <body class=registerBody>

        <h1 class=resultTitle>Enregistrement du Grand Gagnant</h1>

        <fieldset style="margin-bottom: 30px;" id="fieldsetResult">
			<legend>Questionnaire</legend>

            <form action="commandesSQLMorpion.php" method="POST">
                <p>
                    Etiez vous Joueur 1 ou Joueur 2 ?</br>

                    <div>
                        <label for= "player">Joueur 1</label>
                        <input type="radio" name="player" value="Joueur 1" id="player1"></br>								
                    </div>

                    <div>
                        <label for="player">Joueur 2</label>
                        <input type="radio" name="player" value="Joeur 2" id="player2"></br></br>
                    </div>

                    <label for= "player_name">Votre nom :</label>
                    <input type="text" id="player_name" name="name"></br></br> 

                    <input type="submit" name="Envoyer">
                </p>
            </form>

        </fieldset>
        
    </body>

    <script type="text/javascript" src="MorpionJS.js"></script>