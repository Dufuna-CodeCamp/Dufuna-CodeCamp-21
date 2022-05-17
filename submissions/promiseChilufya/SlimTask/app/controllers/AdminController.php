<?php
namespace App\Controllers;

use App\Models\Admins;
use PDOException;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
require __DIR__ . '/../models/Admin.php';

class AdminController {

    public function index (Request $request, Response $response) {
    
   
        $admin =  new Admins();
        try {
    
            $response->getBody()->write($admin->all()->toJson());
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);
        } catch(PDOException $e) {
        
            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
            
        }
    
    }

    public function create (Request $request, Response $response,$args) {
    
        
         
        $articles =  new Admins();

        $data = $request->getParsedBody();

        $createdAt = date('Y-m-d H:i:s.u');

        $singleArticle = $articles->create([
            'name' =>  isset($data['name']),
            'email_address' => isset($data['email_address']),
            'created_at' => $createdAt,
        ]);

        try {
    
            $singleArticle->save();
            $response->getBody()->write($articles->toJson());
            return $response->withHeader('content-Type', 'application/json')->withStatus(200);

        } catch(PDOException $e) {
        
            $response->getBody()->write(json_encode(["Erro" => $e->getMessage()]));
            return $response->withHeader('content-Type', 'application/json')->withStatus(500);
            
        }
    
    }
}