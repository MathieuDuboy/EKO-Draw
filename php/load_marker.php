<?php
include('config.php');
//init via $connect
$src_image = $_GET["src_image"];
$query     = "SELECT * FROM markers WHERE src = '" . $src_image . "' ";

$result = mysqli_query($connect, $query);
$data   = '{"datas" : [';
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $data .= '{"x" : ' . $row['x'] . ', "y" : ' . $row['y'] . ', "message" : "' . $row['message'] . '" },';
}
$data .= ']}';

$data = str_replace("},]}", "}]}", $data);

echo json_encode($data);
?>
