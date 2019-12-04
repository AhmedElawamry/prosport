<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone']
$formcontent="From: $name \n Message: $message";
$recipient = "info@prosports-eg.com";
$subject = "Courses";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>