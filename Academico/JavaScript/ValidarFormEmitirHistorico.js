function ValidarForm(){
	
C = document.Cadastro;
if(C.aluno.value == 0){
alert("Selecione um aluno!");
C.aluno.style.backgroundColor="#FF0000";
C.aluno.focus();
	return false;
}	
	
	
return true;	
}