<?php

namespace DB;

use PDO;

class Database {
    
    private $dbname;
    private $dbUser;
    private $host_name;
    private $password;


    //we use a constructor function to associate the database connection values with our variables
    public function __construct()
    {
        $this->dbname = $_ENV['DB_DBNAME'];
        $this->dbUser = $_ENV['DB_USERNAME'];
        $this->host_name = $_ENV['DB_HOSTNAME'];
        $this->password=$_ENV['DB_PASSWORD'];
    }
        public function connection()
        {
            $conn = new PDO("mysql:host={$this->host_name};dbname={$this->dbname}", $this->dbUser, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $conn;
        }

}

