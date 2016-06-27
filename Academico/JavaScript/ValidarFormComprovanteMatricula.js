function ValidarForm(){

C = document.Cadastro;
if(C.aluno.value == 0){
	alert("Selecione um ALUNO!");
	C.aluno.backgroundColor="#FF0000";
	C.aluno.focus();
	return false;
	
}
if(C.semestre.value == ""){
alert("Preencha o Campo SEMESTRE!");
C.semestre.style.backgroundColor="#FF0000";
C.semestre.focus();
return false;	
	
	
}




	
	
	
 
return true;	
}