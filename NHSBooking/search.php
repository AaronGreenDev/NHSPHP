<?php include 'includes/header.php'; ?> 


<?php
$db = new Database();



	$roomLoc = '';
	$date_time = '';

if(isset($_POST['submit'])){



	$roomLoc = $_POST['location'];
	$date_time = $_POST['date_time'];
	
	
		$query = "SELECT * FROM rooms R 
				  JOIN locations L ON L.location_id = R.location 
				  JOIN bookings B ON B.room = R.id
				  WHERE L.location = '$roomLoc' AND B.time = '$date_time' AND B.booked = 0
				 ";
		
		$searchBooking = $db->select($query);
		
	
}


?>
<div class="container">
  <div class="row">
    <form class="col s12" role="form" method="post" action="search.php">
	</div>
      <div class="row">
        <div class="input-field col s12 l6">
          <input placeholder="Location" name="location" id="location" type="text" class="validate">
          <label for="location"></label>
        </div>
      
	   <div class="input-field col s12 l6">
          <input placeholder="Date/time" name="date_time" id="date_time" type="text" class="validate">
          <label for="date_time"></label>
        </div>
		</div>
		<div class="row">
		  <div class="col s12 center">
			<button name="submit" type="submit" class="waves-effect waves-light btn blue">Find Room</button>
			</div>
	    </div>
		
    </form>
  </div>
  <div class="row">
  <div class="col s12">
  <h4>Search Results:</h4>
  </div>
  </div>
<div class="row">
<?php if($searchBooking) : ?>
<?php while($row = $searchBooking->fetch_assoc()) : ?>
    <div class="col s12 m4 l4">
		<div class="card">
				<div class="card-image">
					<img src="\NHSBooking\MeetingRoom.jpg">
				</div>
				<span class="card-title">Room <?php echo $row['room'];?></span>
				<p class="card-content">Location: <?php echo $row['location'];?>
				<br/>
				Available at: <?php echo $row['time'];?>
				<br/>
				Facilities: 
				<br/>
				<a href="#">
				<?php echo $row['facilities'];?></a></p>
				<div class="card-action">
					<a href="#">Info</a>
					<a href="\NHSBooking\addbooking.php">Book</a>
				</div>
		</div>
    </div>
	
	<?php endwhile; ?>	
	</div>
	<?php else : ?>
	<div class="row">
	<div class="col s12 l6"
	<p>No rooms available </p>
	</div>
	</div>
<?php endif; ?>
</div>



<script type="text/javascript" src="js/timePicker.js"></script>
<script type="text/javascript" src="js/datePicker.js"></script
<?php include 'includes/footer.php'; ?>
        