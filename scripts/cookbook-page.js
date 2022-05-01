function editRecord() {
    document.getElementById("pastaNotes").style.visibility = 'visible';
    document.getElementById('stopEdit').style.visibility = 'visible';
    document.getElementById('pastaNoteText').style.visibility = 'hidden';
    document.getElementById('editRecord').style.visibility = 'hidden';
}

function stopEdit() {
    document.getElementById("pastaNotes", "stopEdit").style.visibility = 'hidden';
    document.getElementById("stopEdit").style.visibility = 'hidden';
    document.getElementById("pastaNoteText").style.visibility = 'visible';
    document.getElementById('editRecord').style.visibility = 'visible';
}