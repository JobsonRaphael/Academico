function ValidarForm(){
	
C = document.Cadastro;
if(C.aluno.value == 0){
alert("O campo ALUNO deve ser preenchido!");
C.aluno.style.backgroundColor="#FF0000";
	C.aluno.focus();
	return false;
}
if(C.disciplina.value == 0){
alert("O campo DISCIPLINA deve ser preenchido!");
C.disciplina.style.backgroundColor="#FF0000";
	C.disciplina.focus();
	return false;
}
if(C.unidade[0].checked == false && C.unidade[1].checked == false ){
	C.unidade[0].focus();
	alert("Selecione uma Unidade!");
return false;	
}
if(C.nota.value == ""){
	C.nota.focus();
	alert("Digite a Nota do Aluno");
	C.nota.style.backgroundColor="#FF0000";
	return false;
}

	
	
return true;	
}