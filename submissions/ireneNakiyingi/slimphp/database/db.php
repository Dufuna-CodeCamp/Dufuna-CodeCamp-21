<?php
namespace DB;
use PDO;
//use mysqli;


class DB {
    private $dbHostnmae;
    private $dbUsername;
    private $dbPassword;
    private $dbName;

    public function __construct (){
        $this->dbHostname= $_ENV['DB_HOSTNAME'];
        $this->dbUsername= $_ENV['DB_USERNAME'];
        $this->dbPassword= $_ENV['DB_PASSWORD'];
        $this->dbName= $_ENV['DB_NAME'];

    }
    public function connect(){
        /*$conn = new mysqli($this->dbHostname,$this->dbUsername,$this->dbPassword,$this->dbName );
        if ($conn-> connect_error){
            die("connect failed");

        } else {
            echo " success";
        };*/
        //$connectionString= "mysql:{$this->dbHostname};{$this->dbName}";
        //$pdo= new PDO($connectionString, $this->dbUsername, $this->dbPassword);
        //$pdo= new PDO( "mysql:'localhost';slim_app_task' ", 'root', 'Treasure12');
        $pdo= new PDO ("mysql:{$this->dbHostname};{$this->dbName}",$this->dbUsername, $this->dbPassword );
        $pdo->query("use slim_app_task");
        $pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        return $pdo;
        }
}
