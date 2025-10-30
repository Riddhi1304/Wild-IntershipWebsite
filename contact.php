<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $contact = htmlspecialchars($_POST['contact']);
    $message = htmlspecialchars($_POST['message']);

    $to      = "your-email@example.com"; // Replace with your email
    $subject = "New message from $name via Contact Form";
    $body    = "Name: $name\nEmail: $email\nContact: $contact\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if(mail($to, $subject, $body, $headers)){
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "invalid";
}
?>
