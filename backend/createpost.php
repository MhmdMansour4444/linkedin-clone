<?php
include("connection.php");

if(isset($_POST['user_id']) && !empty($_POST['user_id'])) {
    $userId = $_POST['user_id'];


    $content = $_POST['content'];
    $imageUrl = $_POST['image_url'];


    $stmt = $mysqli->prepare("INSERT INTO posts (content, post_image, user_id) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $content, $imageUrl, $userId);
    if ($stmt->execute()) {
        $response['status'] = 'success';
        $response['message'] = 'Post created successfully';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Failed to create post';
    }
    $stmt->close();
} else {
    $response['status'] = 'error';
    $response['message'] = 'User ID is missing';
}

header('Content-Type: application/json');
echo json_encode($response);
?>