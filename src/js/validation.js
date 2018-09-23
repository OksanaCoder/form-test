 function checkForm(form) {
                var name = document.getElementById('name').value;
                var last_name = document.getElementById('last-name').value;
                var surname = document.getElementById('surname').value;
                var n = name.match(/^[A-Za-zА-Яа-я ]*[A-Za-zА-Яа-я ]+$/);
                var ln = last_name.match(/^[A-Za-zА-Яа-я ]*[A-Za-zА-Яа-я ]+$/);
                var sn = surname.match(/^[A-Za-zА-Яа-я ]*[A-Za-zА-Яа-я ]+$/);
                if (!n && !ln && !sn) {
                    alert("Имя введено неверно, пожалуйста исправьте ошибку");
                    return false;
                }
                }