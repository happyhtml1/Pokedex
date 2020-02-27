$(document).ready(function(){
    
    });

    function consultar(){
        var consulta=$('#consulta').val();  
        $.get("https://pokeapi.co/api/v2/pokemon/"+consulta, function(data){
            if (consulta<=0) {
                
            } else {
                
            $('#imagen').attr("src", data.sprites.front_default);
            $('#name')[0].innerHTML = data.name.toUpperCase();
            $('caracteristicas')[0].innerHTML = data.stats;
        }});
    }

   $('#consulta').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        consultar();  
    }
});

        