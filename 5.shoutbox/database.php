<?php

//Connect to Mysql
$connection = mysql_connect('localhost', 'root', '', 'shotbox');

if(mysqli_connect_errno()){
  echo 'Failed to Connect' . mysqli_connect_error();
}

 ?>
