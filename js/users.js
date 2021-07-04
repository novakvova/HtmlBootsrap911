﻿//коли DOM дерово готове

window.onload = function () {
    const regex_phone = /^(?=\+?([0-9]{2})\(?([0-9]{3})\)\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})).{18}$/;
    const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    var number = 1;

    var txtLastName = document.getElementById("txtLastName");
    var txtName = document.getElementById("txtName");
    var txtPhone = document.getElementById("txtPhone");
    var txtEmail = document.getElementById("txtEmail");
    var fileImage = document.getElementById("fileImage");
    var imgPhoto = document.getElementById("imgPhoto");
    var selectImageBase64 = document.getElementById("selectImageBase64");

    fileImage.onchange = function (e) {
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files && files[0]) {
            const file = files[0];
            console.log(file.type);

            if (file.type.match(/^image\//)) {
                const file_name = file.name;
                const reader = new FileReader();
                reader.onload = function () {
                    imgPhoto.src = reader.result;
                    selectImageBase64.value = reader.result;
                    showSuccess(fileImage);
                }

                reader.readAsDataURL(file);
            }
            else {
                alert("Невірний тип файлу");
            }
        }
        else {
            alert("Будь ласка виберіть файл");
        }

    };


    IMask(
        txtPhone, {
        mask: '+00(000) 000 00 00'
    });

    var btnAddNewUser = document.getElementById("btnAddNewUser");
    var btnAddUserSave = document.getElementById("btnAddUserSave");


    var tbodyUsers = document.getElementById("tbodyUsers");
    btnAddNewUser.onclick = function (e) {
        $("#myModal").modal("show");
    };

    txtLastName.oninput = isValidTextInput;
    txtName.oninput = isValidTextInput;
    txtEmail.oninput = isValidEmailInput;
    txtPhone.oninput = isValidPhoneInput;

    btnAddUserSave.onclick = function (e) {

        if (isValidation()) {
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
                                <i class="fa fa-pencil fa-2x text-info cursor-pointer"
                                    aria-hidden="true"
                                    ></i>
                                <i class="fa fa-times fa-2x text-danger cursor-pointer"
                                    aria-hidden="true"
                                    onclick="DeleteRow(this)"></i>
                            </td>
                        `;

            txtLastName.value = txtName.value = txtPhone.value = "";
            $("#myModal").modal("hide");

            tbodyUsers.appendChild(tr);
        }
    };

    function isValidTextInput(e) {
        if (e.target.value == "") {
            showError(e.target);
        }
        else {
            showSuccess(e.target);
        }
    }

    function isValidEmailInput(e) {
        if (!regex_email.test(e.target.value)) {
            showError(e.target);
        }
        else {
            showSuccess(e.target);
        }
    }


    function isValidPhoneInput(e) {
        
        if (!regex_phone.test(e.target.value)) {
            showError(e.target);
        }
        else {
            showSuccess(e.target);
        }
    }

    function isValidation() {

        var isValid = true;
        if (txtLastName.value == "") {
            showError(txtLastName);
            isValid = false;
        }
        else {
            showSuccess(txtLastName);
        }

        if (txtName.value == "") {
            showError(txtName);
            isValid = false;
        }
        else {
            showSuccess(txtName);
        }

        if (!regex_email.test(txtEmail.value)) {
            showError(txtEmail);
            isValid = false;
        }
        else {
            showSuccess(txtEmail);
        }

        if (!regex_phone.test(txtPhone.value)) {
            showError(txtPhone);
            isValid = false;
        }
        else {
            showSuccess(txtPhone);
        }

        if (selectImageBase64.value == "") {
            showError(fileImage);
            isValid = false;
        }
        else {
            showSuccess(fileImage);
        }

        return isValid;
    }

    function showError(input) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
    function showSuccess(input) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
}

function DeleteRow(e) {
    var tbodyUsers = document.getElementById('tbodyUsers');

    bootbox.confirm("Ви точно хочете видалити об'єкт?", function (result) {
        if (result) {
            tbodyUsers.removeChild(e.parentElement.parentElement);
        }
    });
}

function ChangeRow(tr) {
    var mainForm = document.getElementById('mainForm');
    var txtName = document.getElementById("txtName");
    var txtPhone = document.getElementById("txtPhone");
    var txtLastname = document.getElementById("txtLastname");
    var txtMail = document.getElementById("txtMail");

    if (mainForm.checkValidity() === true) {
        tr.cells.item(1).innerHTML = txtName.value;
        tr.cells.item(2).innerHTML = txtLastname.value;
        tr.cells.item(3).innerHTML = txtPhone.value;
        tr.cells.item(4).innerHTML = txtMail.value;
        $('#registerModal').modal('hide');
        txtName.value = txtPhone.value = txtLastname.value = txtMail.value = "";
    }
}