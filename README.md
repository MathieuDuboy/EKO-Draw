# EKO-Draw
Possibilité de pouvoir ajouter des points sur une image / Commenter / Modifier / Supprimer

## Initialisation du script : [config.php](https://github.com/MathieuDuboy/EKO-Draw/blob/master/php/config.php)
Modifier ici les identifants de connexion à la base de données SQL.

````
$dbuser = "xxxxx";
$dbpass = "xxxxx";
$db     = "xxxxx";
````

## Création de la table SQL pour stocker les points sur chaque image
Un point (x,y) correspond toujours à une image (dans le cas où il y aurait plusieurs images dans une même page).
````
  `id` int(12) NOT NULL,
  `x` varchar(155) NOT NULL,
  `y` varchar(155) NOT NULL,
  `src` varchar(2000) NOT NULL,
  `message` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
````

````
ALTER TABLE `markers`
  ADD UNIQUE KEY `id` (`id`);
````

## Démonstration : https://mon-chatbot.com/eko/draw_dot/
Sur la démo, vous pouvez : 
- **Ajouter** un point + un Commentaire
- Cliquer sur ce point ajouté pour le **Modifier**
- Cliquer sur ce point ajouté pour le **Supprimer**
- **Visualiser** les autres points ajoutés au fil du temps.

