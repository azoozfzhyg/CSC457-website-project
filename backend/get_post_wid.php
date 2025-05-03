<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    
    $conn = new mysqli("localhost", "root", "", "blog_db");
    
    $id = intval($_GET['id']);
    $stmt = $conn->prepare("SELECT id, title, author, content, category FROM posts WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    $stmt->execute();
    
    $result = $stmt->get_result();
    
    $post = $result->fetch_assoc();
    echo json_encode($post);
 ?>