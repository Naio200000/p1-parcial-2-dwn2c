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
    private function usuarioUsername(string $username) :?Usuario {


        $completo = $this->getAllUsers();

        foreach ($completo as $usuario) {
            if ($usuario->username == $username) {
                return $usuario;
            }
        }

        return null; 

    }
    

    /**
     * Valida el ingreso de un usuario
     * @param string $username el nombre de usuario a verificar
     * @param string $password el password de usuario a verificar
     * @return mixed devuelve el rol del usuario si hay coinsidencias, false si el password es incorrecto y null si no encuentra usuario
     */
    public function log_in(string $usuario, string $password) :mixed {
        $datosUsuario = (new Usuario())->usuarioUsername($usuario);

        if ($datosUsuario) {
            if (password_verify($password, $datosUsuario->getPassword())) {
                return $datosUsuario->getUsername();
            } else {
                return FALSE;
            }
        } else {
            return NULL;
        }
    }
}