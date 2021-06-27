//коли DOM дерово готове

window.onload = function () {
    var tt = 23;
    //var bb = "sdd" + tt;
    //alert(bb);
    var txtName = document.getElementById("txtName");
    var modalFullName = document.getElementById("modalFullName");
    var btnOk = document.getElementById("btnOk");
    btnOk.onclick = function (e) {
        //console.log(tt);
        //console.log(txtName.value);
        modalFullName.innerHTML = txtName.value;
        $("#myModal").modal("show");
        e.preventDefault(); //Заборонити стандартну поведінку
        
    };
    

}