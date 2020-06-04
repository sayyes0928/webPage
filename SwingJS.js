function idcheck() { }
function pwconfirm() { }
function joinNext(swing) {
    var id = swing.id.value;
    var pw = swing.pw.value;
    var nick = swing.nick.value;
    var year = swing.year.value;

    if (!id || !pw || !nick || !year) {
        alert("null값 존재");
    }
    else {
        swing.submit();
        location.href = 'SwingCreate02.html'
    }

}