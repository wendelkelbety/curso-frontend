function exercicio(){
    var branco = "preto";
    var preto = "cinza";
    var cinza = "branco";
    var carro = "preto";
    var prestacao = 750;
    var valor = 30000;

    var parcelas = 0;
    var entrada = 3000;
    var totalprestacao = 0;

    var results = [];

    results.push("Operação 10+15, Resultado:"+(10+15));
    results.push("Operação '10'+2, Resultado:"+("10"+2));
    results.push("Operação '10'*2, Resultado:"+("10"*2));
    results.push("Operação '10'/3, Resultado:"+("10"/3));
    results.push("Operação '10'%3, Resultado:"+("10"%3));
    results.push("Operação 10+true, Resultado:"+(10+true));
    results.push("Operação 10=='10', Resultado:"+(10=="10"));
    results.push("Operação 10==='10', Resultado:"+(10==="10"));
    results.push("Operação 10<11, Resultado:"+(10<11));
    results.push("Operação 10>12, Resultado:"+(10>12));
    results.push("Operação 10<=10.1, Resultado:"+(10<=10.1));
    results.push("Operação 10>9.99, Resultado:"+(10>9.99));
    results.push("Operação 10!='dez', Resultado:"+(10!="dez"));
    results.push("Operação 10+true, Resultado:"+(10+true));
    results.push("Operação 'dez'+true, Resultado:"+("dez"+true));
    results.push("Operação 10+false, Resultado:"+(10+false));
    results.push("Operação 10*false, Resultado:"+(10*false));
    results.push("Operação true+true, Resultado:"+(true+true));
    results.push("Operação (10++) ERRO: caught SyntaxError: Invalid left-hand side expression in postfix operation.");
    results.push("Operação (10--) ERRO: caught SyntaxError: Invalid left-hand side expression in postfix operation.");
    /*try{
        //results.push(10++);
    }catch (error){
        results.push("Operação (10++) ERRO: caught SyntaxError: Invalid left-hand side expression in postfix operation.");
    }
    try{
        results.push(10--);
    }catch (error){
        results.push("Operação (10--) ERRO: caught SyntaxError: Invalid left-hand side expression in postfix operation.");
    }*/
    results.push("Operação 1&1, Resultado:"+(1&1));
    results.push("Operação 1&0, Resultado:"+(1&0));
    results.push("Operação 0&0, Resultado:"+(0&0));
    results.push("Operação 1&0, Resultado:"+(1&0));
    results.push("Operação 0/1, Resultado:"+(0/1));
    results.push("Operação 5+5==10, Resultado:"+(5+5==10));
    results.push("Operação '5'+'5'==10, Resultado:"+("5"+"5"==10));
    results.push("Operação '5'*2>9, Resultado:"+("5"*2>9));
    results.push("Operação (10+10)*2, Resultado:"+((10+10)*2));
    results.push("Operação 10+10*2, Resultado:"+(10+10*2));

    results.push("Respota a Pergunta branco=='branco', Resultado:"+(branco=="branco"));
    results.push("Respota a Pergunta branco==cinza, Resultado:"+(branco==cinza));
    results.push("Respota a Pergunta carro==branco, Resultado:"+(branco==branco));
    results.push("Respota a Pergunta var cavalo=carro=='preto'?'cinza':'marron', Resultado:"+(carro=="preto"?"cinza":"marron"));

    valor -= entrada;
    do{
	    parcelas += 1;
    	totalprestacao += prestacao;
    }while (totalprestacao < valor);

    results.push("Prestações: "+parcelas)

    results.push("Soma dos caracteres das variaveis de cores, Resultado:"+((branco+preto+cinza).length));
    for (i = 0; i <= results.length; i++){
        console.log(results[i])
    }
}

exercicio();