<?php
include('config.php');
//init via $connect
$src_image = $_GET["src_image"];
$message   = $_GET["message"];

$x = $_GET["x"];
$y = $_GET["y"];


$query  = "DELETE FROM `markers` WHERE `markers`.`x` = '" . $x . "' AND `markers`.`y` = '" . $y . "' AND `markers`.`src` = '" . $src_image . "' ";
$result = mysqli_query($connect, $query);
?>
