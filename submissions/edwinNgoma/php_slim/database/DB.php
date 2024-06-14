<?php

    namespace DB;

    use PDO;

    class DB {
        private $dbHostname;
        private $dbUsername;
        private $dbPassword;
        private $dbName;

        public function __construct(){

            $this->dbHostname = $_ENV['DB_HOSTNAME']; 
            
            $this->dbUsername = $_ENV['DB_USERNAME']; 

            $this->dbPassword = $_ENV['DB_PASSWORD']; 

            $this->dbName = $_ENV['DB_NAME']; 
        }

        public function connect(){

            $connectionString = "mysql:host={$this->dbHostname};dbname={$this->dbName}";
            $pdo = new PDO($connectionString, $this->dbUsername, $this->dbPassword);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $pdo;

        }

    }