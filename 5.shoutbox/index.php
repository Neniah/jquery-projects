<?php
//Connect to Mysql
include('database.php');
//Create Select query
$query = "select * from shouts order by id desc";
$shouts = mysqli_query($myConnection, $query);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Shout Box</title>
    <link rel="stylesheet" href="css/style.css" media="screen" title="no title">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>JS ShoutBox</h1>
      </header>
      <div id="shouts">
        <ul>
          <?php while($row = mysqli_fetch_assoc($shouts)) :?>
          <li><?php echo $row['name']?></li>
        <?php endwhile; ?>
        </ul>
      </div>

      <footer>
        <form class="form" method="POST" >
          <label for="name">Name:</label>
          <input type="text" id="name" value="">
          <br>
          <label for="shout">Shout Text:</label>
          <input type="text" id="shout" value="">
          <br>
          <input type="submit" id="submit" value="Shout!!">
        </form>
      </footer>
    </div>
  </body>
</html>
