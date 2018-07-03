<?php
include('config.php');
//init via $connect
$src_image = $_GET["src_image"];
$message   = $_GET["message"];

$x = $_GET["x"];
$y = $_GET["y"];


$query  = "INSERT INTO `markers` (`id`, `x`, `y`, `src`, `message`) VALUES (NULL, '" . $x . "', '" . $y . "', '" . $src_image . "', '" . $message . "');";
$result = mysqli_query($connect, $query);

?>
