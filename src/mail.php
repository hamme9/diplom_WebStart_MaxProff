<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$phone = $obj['user-phone'];
$type = $obj['type'];
$realty = $obj['realty'];
$rooms = $obj['rooms'];
$square1 = $obj['user-square1'];
$square12 = $obj['user-square12'];

// Формирование самого письма
$title = "Заказ ремонта";

$body = " <h2>Письмо с первой формы</h2>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Номер телефона: </b>$phone</td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Вид ремонта: </b>$type</td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Тип недвижимости: </b>$realty</td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Количество комнат: </b>$rooms</td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Площадь от: </b>$square1</td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Площадь до: </b>$square12</td>
  </tr>
  ";
$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  // $mail->SMTPDebug = 2; 
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

  // Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'arseniyhamme99@gmail.com'; // Логин на почте
  $mail->Password   = 'daoegzgrpuyscgbq'; // Пароль 
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('arseniyhamme99@gmail.com', 'Арсений'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('arseniyhamme99@gmail.com');
  $mail->addAddress('arseniy-2002@bk.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);