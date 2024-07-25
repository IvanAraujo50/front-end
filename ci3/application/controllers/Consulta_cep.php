<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Consulta_cep extends CI_Controller {

    public function __construct() {
        parent::__construct();
        // Carregar o modelo Consulta_cep_model
        $this->load->model('Consulta_cep_model');
    }

    public function index() {
        $this->load->view('consulta_cep_form'); // Carregar a view com o formulário
    }

    public function consultar() {
        $cep = $this->input->post('cep'); // Receber o CEP enviado pelo formulário

        // Chamar o método do modelo para consultar o CEP
        $dados_cep = $this->Consulta_cep_model->consultar_cep($cep);

        // Exibir os resultados (pode enviar para uma view ou apenas imprimir)
        echo $dados_cep;
    }
}