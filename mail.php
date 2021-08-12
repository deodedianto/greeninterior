<?php
$name = $_POST["name"];
$email = $_POST["telp"];
$subject = $_POST["tempat"];
// $message = $_POST["message"];


$EmailTo = "deodedianto08@gmail.com";
$Title = "Green Interior Client";

// prepare email body text
$Fields .= "Name: ";
$Fields .= $name;
$Fields .= "\n";

$Fields.= "Telp: ";
$Fields .= $email;
$Fields .= "\n";

$Fields.= "Informasi Tempat: ";
$Fields .= $subject;
$Fields .= "\n";

// $Fields .= "Message: ";
// $Fields .= $message;
// $Fields .= "\n";


// send email
$success = mail($EmailTo,  $Title,  $Fields, "From:".$name);