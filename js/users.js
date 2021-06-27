﻿//коли DOM дерово готове

window.onload = function () {
    var number = 1;

    var txtLastName = document.getElementById("txtLastName");
    var txtName = document.getElementById("txtName");
    var txtPhone = document.getElementById("txtPhone");


    var btnAddNewUser = document.getElementById("btnAddNewUser");
    var btnAddUserSave = document.getElementById("btnAddUserSave");


    var tbodyUsers = document.getElementById("tbodyUsers");
    btnAddNewUser.onclick = function (e) {
        $("#myModal").modal("show");
    };

    btnAddUserSave.onclick = function (e) {
        var lastName = txtLastName.value;
        var name = txtName.value;
        var phone = txtPhone.value;
        //console.log("txtLastName", lastName);
        //console.log("txtName", name);
        //console.log("txtPhone", phone);
        var tr = document.createElement("tr");
        tr.innerHTML = `
                            <th scope="row">${number++}</th>
                            <td>${lastName}</td>
                            <td>${name}</td>
                            <td>${phone}</td>
                            <td>
                                <i class="fa fa-pencil fa-2x text-info cursor-pointer" aria-hidden="true"></i>
                                <i class="fa fa-times fa-2x text-danger cursor-pointer" aria-hidden="true"></i>
                            </td>
                        `;

        txtLastName.value = txtName.value = txtPhone.value = "";
        $("#myModal").modal("hide");

        tbodyUsers.appendChild(tr);
    };
    

}