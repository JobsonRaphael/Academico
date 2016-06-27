function ValidarForm(){
	
C = document.Cadastro;
if(C.professor.value == "0"){
alert("O campo PROFESSOR deve ser preenchido!");
C.professor.style.backgroundColor="#FF0000";
	C.professor.focus();
	return false;
}
if(C.nomedoprojeto.value==""){
	alert("O campo TÍTULO DO PROJETO deve ser preenchido!");
	C.nomedoprojeto.style.backgroundColor="#FF0000";
	C.nomedoprojeto.focus();
	return false;
	
}	
	
	
	
	
return true;	
}