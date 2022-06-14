<?php

include_once 'connection.php';

echo "<h1>customer details table</h1><br>";

$query = "SELECT * FROM customer_list_table";

$the_result=$connection->query($query);

if($the_result->rowCount()>0){
echo '<table>';
    echo '<tr>';
        echo '<th>S/N</th>';
        echo '<th>Full Name</th>';
        echo '<th>Email address</th>';
        echo '<th>Created At</th>';
        echo '<th>Action</th>';
    echo '</tr>';

    while($row= $the_result->fetch())
    {
        echo '<tr>';
            echo "<td>".$row['id']."</td>";
            echo "<td>". $row['full_name']. "</td>";
            echo "<td>". $row['email']."</td>";
            echo "<td>". $row['created_at']. "</td>";
            echo "<td><button>view</button></td>";
        echo '</tr>';
    }
echo '</table>';

    unset($the_result);

}else{
    echo "<br/>No records where found";
}


?>
