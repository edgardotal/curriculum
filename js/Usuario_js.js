    $(document).ready(function () {
        $('#btn_usuarios').click(function () {
            $.ajax({
                url: "usuarios.php"
            }).done(function (html) {
                $('#contenido').html(html);
            }).fail(function () {
                alert('Error al cargar modulo');
            });
        });
    });
    function editar(id) {
        $.ajax({
            type: "POST",
            url: "usuarios.php",
            data: {operacion: 'update', id_usuario: id}
        }).done(function (html) {
            $('#contenido').html(html);
        }).false(function () {
            alert('Error al cargar modulo');
        });
    }
    function eliminar(id, este) {
        $.ajax({
            type: "POST",
            url: "PHP/Cud_usuario.php",
            data: {id_usuario: id, operacion: "delete"}
        }).done(function (msg) {
            alert(msg);
            $(este).parent().parent().remove();
        }).fail(function () {
            alert("Error enviando los datos. Intente nuevamente");
        });
    }

