<?php

$to      = 'sales2@uvo-ohrana.ru';
$subject = 'Lead from site - uvo-ohrana.ru';

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: no-reply@uvo-ohrana.ru';
$headers[] = 'Bcc: test-mail@websterstd.com';

$headers = implode("\r\n", $headers);

$message = "<tr><td><b>Name:</b> </td><td>". filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS) ."</td></tr>";
$message .= "<tr><td><b>Phone:</b> </td><td>". filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_FULL_SPECIAL_CHARS) ."</td></tr>";
if( filter_has_var(INPUT_POST, 'email') ) $message .= "<tr><td><b>Email:</b> </td><td>". filter_input(INPUT_POST, 'email', FILTER_SANITIZE_FULL_SPECIAL_CHARS) ."</td></tr>";

$message = "<table>$message</table>";

echo json_encode(['status' => mail($to, $subject, $message, $headers), 'result' => 'Functions "mail" don\'t work.']);