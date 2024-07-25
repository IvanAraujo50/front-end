<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Consulta_cep_model extends CI_Model {

    public function consultar_cep($cep) {
        $url = "https://viacep.com.br/ws/$cep/json/";

        // Inicializar cURL
        $ch = curl_init();

        // Configurar a requisição cURL
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // Executar a requisição cURL
        $response = curl_exec($ch);

        // Fechar a sessão cURL
        curl_close($ch);

        return $response;
    }
}