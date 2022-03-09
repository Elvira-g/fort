<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$phone = $data->phone;
// echo "server had something $name email $email phone $phone" ;
$address = "elvira_27@mail.ru";

$title = "Заявка с сайта";
$message = "form from site";
// $message = "Имя:".$name.". E-mail: ".$email.". Телефон: ".$phone.

$result = mail($address, $title, $message);

if ($result) {
    echo "message sent";
} else {
    echo "smth wrong";
}