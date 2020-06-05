function idcheck() { }
function pwconfirm() {
    var pwcheck = Joinform.password.value;
    if (pwcheck != false) {
        if (Joinform.password.value == Joinform.passwordCheck.value) {
            pwcheck = Joinform.password.value;
        } else {
            alert("비밀번호가 다릅니다");
            pwcheck = false;
        }
    } else {
        alert("PW값을 입력하세요");
        pwcheck = false;
    }
    return pwcheck;
}
function joinNext(swing) {
    var Text = swing.querySelectorAll("input[type=text]");
    var passok = swing.querySelectorAll("input[type=password]");
    var id = Text[0].value;
    var nick = Text[1].value;
    var year = Text[2].value;

    for (var i in Text) {
        if (Text[i].value != "") {
            if (passok[0].value == passok[1].value) {
                // swing.submit();
                location.href = 'SwingCreate02.html'
            } else {
                alert("비번틀림");
                break;
            }

        } else {
            alert("null값 존재");
            break;
        }
    }
}