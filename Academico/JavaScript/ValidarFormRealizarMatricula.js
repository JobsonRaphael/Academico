function ValidarForm(){
	
C = document.Cadastro;
if(C.aluno.value == 0){
alert("O campo ALUNO deve ser preenchido!");
C.aluno.style.backgroundColor="#FF0000";
	C.aluno.focus();
	return false;
}
if(C.curso.value == 0){
alert("O campo CURSO deve ser preenchido!");
C.curso.style.backgroundColor="#FF0000";
	C.curso.focus();
	return false;
	
}	
	if(C.turno[0].checked == false && C.turno[1].checked == false){
alert("O campo TURNO deve ser Selecionado!");
C.turno.style.backgroundColor="#FF0000";
C.turno.focus();
return false;
	
	}
	
	
	
	
	
	
	
return true;	
}