function submitAll(Joinform) {
    var id = Joinform.ID.value;
    var pw = pwcheck(Joinform);
    var name = Joinform.name.value;
    var mailID = Joinform.mailID.value;
    var mailAdd = mailaddcall(Joinform.mail);
    var job = jobsel(Joinform);
    var intro = Joinform.textarea.value;
    var checkok = checkwhat(Joinform);
    var agreeok = agree(Joinform);

    if (
        !id ||
        !pw ||
        !name ||
        !mailID ||
        !mailAdd ||
        !job
    ) {
        alert("입력안 된 값이 있습니다.");
        return -1;
    } else {
        alert(
            "id : " +
            id +
            "\n" +
            "pw : " +
            pw +
            "\n" +
            "name : " +
            name +
            "\n" +
            "mail : " +
            mailID +
            "@" +
            mailAdd +
            "\n" +
            "job : " +
            job +
            "\n" +
            "<<<<introduce>>>> \n" +
            intro +
            "\n" +
            "<<<<~~~~~~~~~~check~~~~~~~~>>>>" +
            "\n" +
            checkok +
            "\n" +
            "<<<<Are you OK~~~??>>>>" +
            "\n" +
            agreeok
        );
    }
}
function pwcheck(Joinform) {
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
function mailaddcall(mail) {
    var mailadd;

    if (mail.options[0].selected) {
        mailadd = false;
        alert("mail을 선택하세요");
    } else if (mail.options[1].selected) {
        mailadd = "gmail.com";
    } else {
        mailadd = "naver.com";
    }

    return mailadd;
}
function jobsel(Joinform) {
    var jobselect;
    for (var i = 0; i < Joinform.job.length; i++) {
        if (Joinform.job[i].checked == true) {
            jobselect = Joinform.job[i].value;
        }
    }
    if (jobselect == undefined) {
        jobselect = false;
    }
    return jobselect;
}
function checkwhat(Joinform) {
    var checkall = "";
    for (var i = 0; i < Joinform.checkbox1.length; i++) {
        if (Joinform.checkbox1[i].checked == true)
            checkall += Joinform.checkbox1[i].value + " , ";
    }
    return checkall;
}
function agree(Joinform) {
    var agreesel;
    for (var i = 0; i < Joinform.agree.length; i++) {
        if (Joinform.agree[i].checked == true) {
            agreesel = Joinform.agree[i].value;
        }
    }
    return agreesel;
}
