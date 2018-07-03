<?php
$dbhost = "localhost";
$dbuser = "xxxxx";
$dbpass = "xxxxx";
$db     = "xxxxx";

$connect = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connect raté voici l'erreur : %s\n" . $conn->error);
if (mysqli_connect_errno())
  {
  echo "Gros Fail : " . mysqli_connect_error();
  }
?>
