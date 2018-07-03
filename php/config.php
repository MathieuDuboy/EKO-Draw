<?php
$dbhost = "localhost";
$dbuser = "of2ds84i_robert";
$dbpass = "Pm7xojnz";
$db     = "of2ds84i_wp587";

$connect = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connect raté voici l'erreur : %s\n" . $conn->error);
if (mysqli_connect_errno())
  {
  echo "Gros Fail : " . mysqli_connect_error();
  }
?>
