<?php


class Usuario {

    private $id;
    private $username;
    private $password;


    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }



    /**
     * Get the value of username
     */ 
    public function getUsername()
    {
        return $this->username;
    }


    /**
     * Get the value of password
     */ 
    public function getPassword()
    {
        return $this->password;
    }


    private function getAllUsers () {
        
    }

        
    /**
     * Busca un usuario segun su nombre de usuario en la BD
     * @param string nombre de usuario
     * @return ?Usuario usuario encontrado o null
     */
    public function usuarioUsername(string $username) :?Usuario {


        return null;
    }
    
}