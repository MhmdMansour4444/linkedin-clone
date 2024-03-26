<?php
include("connection.php");

$email =$_POST['email'];
$password = $_POST['password'];

$query = $mysqli->prepare("
select user_id, password 
from users 
where email = ?");

$query->bind_param("s", $email);
$query->execute();
$query->store_result();
$query->bind_result($id, $hashed_password);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0){
  $response['status'] = "user not found";
}else{ 
  if (password_verify($password, $hashed_password)){
    $response['status'] = "success";
    $response['user_id'] = $id;
  }else{
    $response['status'] = "incorrect credentials";
  }
} 

echo json_encode($response);