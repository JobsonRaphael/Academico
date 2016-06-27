function ValidarForm(){
	
C = document.Cadastro;
if(C.nome.value == ""){
alert("O campo NOME deve ser preenchido!");
C.nome.style.backgroundColor="#FF0000";
	return false;
}
if(C.cpf.value == ""){
alert("O campo CPF deve ser preenchido!");
C.cpf.style.backgroundColor="#FF0000";
	return false;
	
}	
	if(C.matricula.value == ""){
alert("O campo MATRÍCULA deve ser preenchido!");
C.matricula.style.backgroundColor="#FF0000";
	return false;
	
	}
	

	
	
return true;	
}