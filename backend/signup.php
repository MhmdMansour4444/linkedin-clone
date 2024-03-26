<?php
include("connection.php");

$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$email = $_POST['email'];
$password = $_POST['password'];

$check_user = $mysqli -> prepare('select * from users where email = ?');
$check_user->bind_param('s', $email);
$check_user->execute();
$check_user->store_result();
$user_exists = $check_user->num_rows();

if ($user_exists === 0){
  $hashed_password = password_hash($password, PASSWORD_BCRYPT);

  $query = $mysqli->prepare('
  insert into users (user_id, email, password, f_name, l_name, education, experience, skills, bio) 
  values (null, ?, ?, ?, ?, null, null, null, null)');
  $query->bind_param('ssss', $email, $hashed_password, $f_name, $l_name);
  $query->execute();
  $response['status'] = "success";
  $response['message'] = "user was created successfully";
}else{
  $response['status'] = "failed";
  $response['message'] = "user already exists";
}

echo json_encode($response);