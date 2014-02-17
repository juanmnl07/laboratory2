function valdar_formulario(){
 	validar_campos_requeridos();
}

 function validar_campos_requeridos() {
   	if(document.getElementById("primer-campo").value == ""){
     	jQuery("#primer-campo").css({
     		"background-color":"#F9E7E7",
     		"border":"1px solid #FF0000",
     	});
     }
     if(document.getElementById("segundo-campo").value == ""){
     	jQuery("#segundo-campo").css({
     		"background-color":"#F9E7E7",
     		"border":"1px solid #FF0000",
     	});
     }
     if(document.getElementById("monto-numero").value == ""){
     	jQuery("#monto-numero").css({
     		"background-color":"#F9E7E7",
     		"border":"1px solid #FF0000",
     	});
     }
 }
