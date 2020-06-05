function submitTest(Joinform) {
  var textAll = Joinform.querySelectorAll("input[type=text]");
  var pw = Joinform.querySelectorAll("input[type=password]");
  var labelAll = Joinform.querySelectorAll("label");
  var mailadd = mailaddcall(Joinform.mail);
  var jobchehk = Joinform.job;
  var jobselect;
  var nullcheck = 0;
  var intro = Joinform.textarea.value;
  var checkok = Joinform.querySelectorAll("input[type=checkbox]");
  var checkall = ""
  var agreeok = agree(Joinform);

  for (var i in jobchehk) {
    if (jobchehk[i].checked == true) {
      jobselect = jobchehk[i].value;
    }
  }

  for (var i = 0; i < checkok.length; i++) {
    if (checkok[i].checked == true)
      checkall += checkok[i].value + " , ";
  }

  for (var i in textAll) { //null check
    if (textAll[i].value == "") {
      alert(labelAll[i].textContent + "  : 값을 넣으세요");
      textAll[i].focus();
      nullcheck = -1;
      break;
    }
  }
  if (nullcheck != -1) {
    if (pw[0].value != pw[1].value) {
      alert("비밀번호가 다릅니다");
    }
    else {
      alert(
        "id : " + textAll[0].value + "\n" + "pw : " + pw[0].value + "\n" + "name : " + textAll[1].value + "\n" +
        "mail : " + textAll[2].value + " @ " + mailadd + "\n" + "job : " + jobselect + "\n" + "<<<<introduce>>>> \n" + intro + "\n" + "<<<<~~~~~~~~~~check~~~~~~~~>>>>" + "\n" +
        checkall + "\n" + "<<<<Are you OK~~~??>>>>" + "\n" + agreeok
      );
    }
  }
}
function mailaddcall(mail) {
  var mailadd;
  for (var i = 0; i < mail.length; i++) {
    if (mail.options[i].selected == true) {
      mailadd = mail.options[i].value;
    }
  }
  return mailadd;
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
