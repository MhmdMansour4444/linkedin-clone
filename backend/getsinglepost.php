<?php

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

