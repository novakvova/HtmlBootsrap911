//коли DOM дерово готове

window.onload = function () {
    var tt = 23;
    //var bb = "sdd" + tt;
    //alert(bb);
    var txtName = document.getElementById("txtName");
    var paragrafInfo = document.getElementById("paragrafInfo");
    var btnOk = document.getElementById("btnOk");
    btnOk.onclick = function () {
        //console.log(tt);
        //console.log(txtName.value);
        paragrafInfo.innerHTML = "Вітаємо вас: <b>"+ txtName.value+"</b>";
        $("#myModal").modal("show");
    };

}