var name = swing.name.value;
var age = swing.age.value;
var mail = swing.mail.value;
var mailadd = function mailaddcall(mailsel) {
    var mailadd;

    if (mailsel.options[0].selected) {
        mailadd = false;
        alert("mail을 선택하세요");
    } else if (mailsel.options[1].selected) {
        mailadd = "gmail.com";
    } else {
        mailadd = "naver.com";
    }

    return mailadd;
    alert(mailadd);
}

var gender = function gender(swing) {
    var gender;
    for (var i = 0; i < swing.gender.length; i++) {
        if (swing.gender[i].checked == true) {
            gender = swing.gender[i].value;
        }
    }
    if (gender == undefined) {
        gender = false;
    }
    return gender;
}
function submit(swing) {
    swing.submit();
    alert(name + "\n" + age + "\n" + mail + "@" + mailadd + "\n" + gender);
}