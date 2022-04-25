<?php

class Connection {

    private $hostname = "127.0.0.1";
    private $databasename = "FoodBag_Db";
    private $user = "root";
    private $password = "";
    private $dsn;
    public  $Dbcon;

    function __construct()
    {
        $this->dsn = "mysql:host=$this->hostname;dbname=$this->databasename";
        $this->Dbcon = $this->Connect();
    }

    function Connect() {

        try {

            $conn = new PDO($this->dsn,$this->user,$this->password);

            return $conn;

        } catch(PDOException $e) {

            die("ERROR: Could not Connect " .$e->getMessage());
        }

    }


}
