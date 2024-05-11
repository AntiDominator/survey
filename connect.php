<?php  



if(isset($_POST['submit'])){

	

	$firstname = ($_POST['firstname']);
	$lastname = ($_POST['lastname']);
	$gender = ($_POST['gender']);
	$type = ($_POST['type']);
	$rating = ($_POST['rating']);
	$description = ($_POST['description']);

	$data = "Name: $firstname\nlastname: $lastname\ngender: $gender\ntype: $type\nrating: $rating\n$description : $$description\n\n";

	$absolutePathToFile = 
	
	$file = fopen($filePath, 'a');
    
    // Write the data to the file
    fwrite($file, $data);
    
    // Close the file
    fclose($file);
}
?>