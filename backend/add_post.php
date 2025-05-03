<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    
    $conn = new mysqli("localhost", "root", "", "blog_db");


    $title = $_POST['title'];
    $author = $_POST['author'];
    $content = $_POST['content'];
    $category = $_POST['category'];
    if ($title && $author && $content) {
        $stmt = $conn->prepare("INSERT INTO posts (title, author, content, category) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $title, $author, $content, $category);
        $stmt->execute();
        echo json_encode(["success" => true, "message" => "Post saved successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
    }
 ?>