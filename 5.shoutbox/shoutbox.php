<?php include 'database.php';?>
<?php
//var_dump($_POST);
if(isset($_POST['name']) && isset($_POST['shout'])){
  //$name = mysqli_real_escape_string($connection, $_POST['name']);
  //$shout = mysqli_real_escape_string($connection, $_POST['shout']);
  //$date = mysqli_real_escape_string($connection, $_POST['date']);

  $name = $_POST['name'];
  $shout = $_POST['shout'];
  $date = $_POST['date'];

  // Set Timezone
  date_default_timezone_set('Europe/Madrid');
  $date = date('h:i:s a',time());

  $query = "Insert into shouts (name, shout, date) values ('$name','$shout', '$date')";

  if(!mysqli_query($myConnection, $query)){
    echo 'Error'. mysqli_error($myConnection);

  } else{
    echo '<li>'. $name.': '.$shout.' ['.$date.'] </li>';
  }
}else{
  echo 'No manda el post...';
}

?>
