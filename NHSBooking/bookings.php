 <?php include 'includes/header.php'; ?>
<?php 
	//Create DB Object
	$db = new Database();
	
	//Create Query
	$query = "SELECT * FROM rooms";
	
	//Run Query
	$rooms = $db->select($query);
	
	//Create Query
	$query = "SELECT * FROM locations";
	
	//Run Query
	$locations = $db->select($query);
	
	//Create Query
	$query = "SELECT * FROM rooms INNER JOIN locations
			  ON rooms.location = locations.location_id
			  WHERE locations.location_id = 1";
	//Run Query
	$Wolverhampton = $db->select($query);
	
	//Create Query
	$query = "SELECT * FROM rooms INNER JOIN locations
			  ON rooms.location = locations.location_id
			  WHERE rooms.id = 1";
	//Run Query
	$roomSpecific = $db->select($query);
	
	$query = "SELECT * FROM bookings";
		
	$searchBooking = $db->select($query);
	
	if(isset($_POST['submit'])){
		$query = "DELETE FROM bookings 
				  WHERE ('$booking_id' == booking_id);";
	    $db->delete($query);
	}

	
?>
<div class="container">
  <div class row>
  <div class="col s12">
	<h4>Bookings:</h4>
  </div>
  </div>
<div class="row">
<?php if($searchBooking) : ?>
<?php while($row = $searchBooking->fetch_assoc()) : ?>
    <div class="col s12 m4">
		<div class="card">
				<div class="card-image">
					<img src="\NHSBooking\MeetingRoom2.jpg">
				</div>
				<span class="card-title">Room <?php echo $row['booking_id'];?></span>
				<p class="card-content">Booked at: <?php echo $row['time'];?><a href="#">
				<br/>
				Duration: <?php echo $row['duration'];?>hr<br/>
				Occupants: <?php echo $row['occupants'];?></a></p>
				
				<div class="card-action">
				<form role="form" method="post" action="bookings.php">
					<a href="#">Cancel</a>
					<a href="#">Change</a>
					</form>
				</div>
		</div>
    </div>
	
	<?php endwhile; ?>	
	</div>
	<?php else : ?>
	<p>There are no posts yet </p>
<?php endif; ?>

		</div>

<?php include 'includes/footer.php'; ?>