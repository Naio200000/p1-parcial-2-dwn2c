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


        $usersOBJ = [];
        $usersJSON = file_get_contents('../datos/usuarios.json');
        $users = json_decode($usersJSON);
        foreach ($users as $object) {
            $newObject = new self ();

            $newObject->id = $object->id;
            $newObject->username = $object->username;
            $newObject->password = $object->password;

            $usersOBJ[] = $newObject;

        }

        return $usersOBJ;
    }

        
    /**
     * Busca un usuario segun su nombre de usuario en la BD
     * @param string nombre de usuario
     * @return ?Usuario usuario encontrado o null
     */
    public function usuarioUsername(string $username) :?Usuario {


        $completo = $this->getAllUsers();

        foreach ($completo as $usuario) {
            if ($usuario->username == $username) {
                return $usuario;
            }
        }

        return null; 

    }
    
}