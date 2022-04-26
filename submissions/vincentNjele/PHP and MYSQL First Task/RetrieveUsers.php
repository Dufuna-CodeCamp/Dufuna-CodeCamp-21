<?php

include_once("Connection.php");

class Retrieve {

     private $con;

    function __construct()
    {

        $obj = new Connection();
        $this->con = $obj->Dbcon;
        
    }


    function RetrieveUsers() {


        try {


            $select = "SELECT * FROM Customer";

            $result = $this->con->query($select);
    
            if($result->rowCount() > 0) {
    
                return $result;
    
            } else {
    
                echo "There are no records in the database";
            }
    

        } catch(PDOException $e) {

            die("ERROR: Could not execute $select." .$e->getMessage());
        }

       
    }

    function RetrieveUsersOrders($id) {


        try {


            $select = "SELECT * FROM CustomerOrders WHERE CustomerId = $id ";

            $result = $this->con->query($select);
    
            if($result->rowCount() > 0) {
    
                return $result;
    
            } else {
    
                echo "There are no records in the database";
            }
    

        } catch(PDOException $e) {

            die("ERROR: Could not execute $select." .$e->getMessage());
        }

       
    }
}


