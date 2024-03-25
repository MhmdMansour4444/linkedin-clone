<?php
include("connection.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['text'])) {
    $text = $_POST['text'];
    $image_url = isset($_POST['image_url']) ? $_POST['image_url'] : null;

    $stmt = $mysqli->prepare("INSERT INTO posts (text, image_url) VALUES (?, ?)");
    $stmt->bind_param("ss", $text, $image_url);
    if ($stmt->execute()) {
        $response['status'] = 'success';
        $response['message'] = 'Post created successfully';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Failed to create post';
    }
    $stmt->close();
}


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $mysqli->query("SELECT * FROM posts");
    $posts = [];
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
    $response['status'] = 'success';
    $response['posts'] = $posts;
}


if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['post_id'])) {
    $post_id = $_GET['post_id'];
    $stmt = $mysqli->prepare("SELECT * FROM posts WHERE id = ?");
    $stmt->bind_param("i", $post_id);
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $response['status'] = 'success';
            $response['post'] = $result->fetch_assoc();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Post not found';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Failed to fetch post';
    }
    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($_GET['post_id']) && isset($_POST['text'])) {
    parse_str(file_get_contents("php://input"), $_PUT);
    $post_id = $_GET['post_id'];
    $text = $_PUT['text'];
    $image_url = isset($_PUT['image_url']) ? $_PUT['image_url'] : null; 

    $stmt = $mysqli->prepare("UPDATE posts SET text = ?, image_url = ? WHERE id = ?");
    $stmt->bind_param("ssi", $text, $image_url, $post_id);
    if ($stmt->execute()) {
        $response['status'] = 'success';
        $response['message'] = 'Post updated successfully';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Failed to update post';
    }
    $stmt->close();
}


if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['post_id'])) {
    $post_id = $_GET['post_id'];
    $stmt = $mysqli->prepare("DELETE FROM posts WHERE id = ?");
    $stmt->bind_param("i", $post_id);
    if ($stmt->execute()) {
        $response['status'] = 'success';
        $response['message'] = 'Post deleted successfully';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Failed to delete post';
    }
    $stmt->close();
}

header('Content-Type: application/json');
echo json_encode($response);
?>
