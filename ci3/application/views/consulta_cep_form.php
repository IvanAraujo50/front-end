<!-- application/views/consulta_cep_form.php -->
<html>
<head>
    <title>Consulta de CEP</title>
</head>
<body>
    <h2>Consulta de CEP</h2>
    <form action="<?= site_url('consulta_cep/consultar') ?>" method="post">
        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" required>
        <button type="submit">Consultar</button>
    </form>
</body>
</html>