function codificar(){
	var txtorigem = document.getElementById("txtorigem").value;
	txtorigem = txtorigem.replace(/e/g,"enter")
	.replace(/i/g,"imes")
	.replace(/a/g,"ai")
	.replace(/o/g,"ober")
	.replace(/u/g,"ufat");
	console.log(txtorigem);
	document.getElementById("txttransformado").value = txtorigem;
}

function descodificar(){
	var txtorigem = document.getElementById("txtorigem").value;
	txtorigem = txtorigem.replace(/enter/g,"e")
	.replace(/imes/g,"i")
	.replace(/ai/g,"a")
	.replace(/ober/g,"o")
	.replace(/uflat/g,"u");
	console.log(txtorigem);
	document.getElementById("txttransformado").value = txtorigem;

}

function limpar(){
	document.getElementById("txtorigem").value ="";
	document.getElementById("txttransformado").value = "";
}

function copiar(){
	document.getElementById("txttransformado").select();
	document.execCommand("copy");
}

function transformar(){
	var txtorigem = document.getElementById("txtorigem").value;
	var str ="";
	txtorigem = txtorigem.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
	str = txtorigem.replace(/enter/g,"e")
	.replace(/imes/g,"i")
	.replace(/ai/g,"a")
	.replace(/ober/g,"o")
	.replace(/uflat/g,"u");
	if (str.length == txtorigem.length){
		str = txtorigem.replace(/e/g,"enter")
		.replace(/i/g,"imes")
		.replace(/a/g,"ai")
		.replace(/o/g,"ober")
		.replace(/u/g,"ufat");
	}
	document.getElementById("txttransformado").value = str;

}