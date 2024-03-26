<?php
include("connection.php");

$content = $_POST['content'];
$post_image = $_POST['image_url'];
$user_id = $_POST['user_id'];

$stmt = $mysqli->prepare("INSERT INTO posts (content, post_image, user_id) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $content, $post_image, $user_id);
if ($stmt->execute()) {
    $response['status'] = 'success';
    $response['message'] = 'Post created successfully';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Failed to create post';
}
$stmt->close();

header('Content-Type: application/json');
echo json_encode($response);
?>