$("#calcular").click(function(){
    var valor1 = parseFloat($("#x").val());
    var valor2 = parseFloat($("#y").val());
    var valor3 = parseFloat($("#z").val());

if (valor1 <= valor2 && valor2 <= valor3) {
        resultado = "Valor 1 é " + valor1 +" Valor 2 é " + valor2 +" e Valor 3 é " + valor3;

    } else if (valor1 <= valor3 && valor3 <= valor2) {
        resultado = "Valor 1 é " + valor1 +" Valor 2 é " + valor3 +" e Valor 3 é " + valor2;

    } else if (valor2 <= valor1 && valor1 <= valor3) {
        resultado = "Valor 1 é " + valor2 +" Valor 2 é " + valor1 +" e Valor 3 é " + valor3;

    } else if (valor2 <= valor3 && valor3 <= valor1) {
        resultado = "Valor 1 é " + valor2 +" Valor 2 é " + valor3 +" e Valor 3 é " + valor1;

    } else if (valor3 <= valor1 && valor1 <= valor2) {
        resultado = "Valor 1 é " + valor3 + "Valor 2 é " + valor1 +" e Valor 3 é " + valor2;

    } else {
        resultado = "Valor 1 é " + valor3 +" Valor 2 é " + valor2 +" e Valor 3 é " + valor1;
    }

    

    //var resultado = ["valor 1 é "+ valor1," valor 2 é "+ valor2," valor 3 é "+ valor3];

    $("#txtresultado")
        .html("Valor Final " + resultado)
        .css({"font-weight" : 'body', "font-size" : "20px", "color": "#4b4bbe"});

});