//Script que permite el uso de la herramienta Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function(){
    //coloca una alerta indicando su nombre y que su mensaje se ha enviado
    $("#btnComent").click(function(){
        var oForm = document.forms[0];
        var nombre = oForm.elements["name"].value;
        alert( nombre + ` su mensaje ha sido enviado correctamente`);
    })

})