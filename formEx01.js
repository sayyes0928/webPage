function submitAll(Joinform) {
  var id = idcheck(Joinform);
  var pw = pwcheck(Joinform);
  var name = namecall(Joinform);
  var mail = mailcall(Joinform);
  var mailadd = mailaddcall(Joinform.mail);
  var job = jobsel(Joinform);
  var intro = introTxt(Joinform);
  var checkok = checkwhat(Joinform);
  var agreeok = agree(Joinform);
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
      mail +
      "@" +
      mailadd +
      "\n" +
      "job : " +
      job +
      "\n" +
      "<<<<introduce>>>> \n" +
      intro +
      "\n" +
      "<<<<~~~~~~~~~~check~~~~~~~~>>>>" +
      checkok +
      "\n" +
      "<<<<Are you OK~~~??>>>>" +
      "\n" +
      agreeok
  );
}
function idcheck(Joinform) {
  var idcheck = Joinform.ID.value;
  if (idcheck == "") {
    idcheck = "-1";
    alert("ID값을 입력하세요");
  }
  return idcheck;
}
function pwcheck(Joinform) {
  var pwcheck = Joinform.password.value;
  if (pwcheck != "") {
    if (Joinform.password.value == Joinform.passwordCheck.value) {
      pwcheck = Joinform.password.value;
    } else {
      alert("비밀번호가 다릅니다");
      pwcheck = "-2";
    }
  } else {
    alert("PW값을 입력하세요");
    pwcheck = "-1";
  }
  return pwcheck;
}
function namecall(Joinform) {
  var name = Joinform.name.value;
  if (name == "") {
    alert("Name값을 입력하세요");
    name = "-1";
  }
  return name;
}
function mailcall(Joinform) {
  var mail = Joinform.mailID.value;
  if (mail == "") {
    alert("Mail값을 입력하세요");
    mail = "-1";
  }
  return mail;
}
function mailaddcall(mail) {
  var mailadd;

  if (mail.options[0].selected) {
    mailadd = "-1";
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
    alert("job을 선택하세요");
    jobselect = "-1";
  }
  return jobselect;
}
function introTxt(Joinform) {
  var introtxt = Joinform.textarea.value;
  return introtxt;
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
