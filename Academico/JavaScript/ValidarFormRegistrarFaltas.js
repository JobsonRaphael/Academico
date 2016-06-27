function ValidarForm(){
	C = document.Cadastro;

if(C.aluno.value == 0){
alert("O campo ALUNO deve ser preenchido!");
C.aluno.style.backgroundColor="#FF0000";
C.aluno.focus();
	return false;
}
if(C.disciplina.value == 0){
	alert("Selecione um Disciplina");
	C.disciplina.style.backgroundColor="#FF0000";
	C.disciplina.focus();
	return false;
}
if(C.faltas.value==""){
	alert("Caampo Faltas deve ser preenchido!");
	C.faltas.style.backgroundColor="#FF0000";
	C.faltas.focus();
	return false;
}


return true;	
}