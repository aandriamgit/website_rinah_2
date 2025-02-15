<?php

$name = $_POST["name"];
$email = $_POST["email"];
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

$mail->Username = "MS_t5qlA7@trial-jpzkmgq17ovl059v.mlsender.net";
$mail->Password = "mssp.hc0w0Gd.351ndgwqwrngzqx8.WdrxUeq";

$mail->setFrom($email, $name);
$mail->addAddress("ainarajaonah230@gmail.com");

$mail->Subject = $phone;
$mail->Body = $message;

$mail->send();

echo "email sent";
