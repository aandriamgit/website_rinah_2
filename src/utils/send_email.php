<?php

$name = $_POST["name"];
/* $email = $_POST["email"]; */
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = $_POST["phone"];
$message = $_POST["message"];

require "../../vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.mailersend.net";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = getenv('SMTP_USERNAME');
$mail->Password = getenv('SMTP_PASSWORD');

$mail->setFrom($email, $name);
$mail->addAddress("ainarajaonah230@gmail.com");

$mail->Subject = $phone;
$mail->Body = $message;

$mail->send();

echo "email sent";

?>
