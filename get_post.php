<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    
    $conn = new mysqli("localhost", "root", "", "blog_db");
    
    $result = $conn->query("SELECT id, title, author, content, category FROM posts ORDER BY created_at
    DESC");
    $posts = [];
    
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
    echo json_encode($posts);
 ?>