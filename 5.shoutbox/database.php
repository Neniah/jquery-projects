<?php

//Connect to Mysql
$connection = mysql_connect('localhost', 'admin', 'admin', 'shouts');

if(mysqli_connect_errno()){
  echo 'Failed to Connect' . mysqli_connect_error();
}

 ?>
