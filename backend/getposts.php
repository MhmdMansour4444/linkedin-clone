<?php
include("connection.php");

$result = $mysqli->query("SELECT u.f_name ,u.l_name, u.user_id, p.post_id, p.content, p.post_image FROM posts p JOIN users u on p.user_id = u.user_id");
$posts = [];
while ($row = $result->fetch_assoc()) {
    $posts[] = $row;
}
$response['status'] = 'success';
$response['posts'] = $posts;

header('Content-Type: application/json');
echo json_encode($response);
?>