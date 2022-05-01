function editRecord() {
    document.getElementById("pastaNotes").style.visibility = 'visible';
    document.getElementById('stopEdit').style.visibility = 'visible';
    document.getElementById('editPhoto').style.visibility = 'visible';
    document.getElementById('pastaNoteText').style.visibility = 'hidden';
    document.getElementById('editRecord').style.visibility = 'hidden';
}

function stopEdit() {
    document.getElementById("pastaNotes").style.visibility = 'hidden';
    document.getElementById("stopEdit").style.visibility = 'hidden';
    document.getElementById('editPhoto').style.visibility = 'hidden';
    document.getElementById("pastaNoteText").style.visibility = 'visible';
    document.getElementById('editRecord').style.visibility = 'visible';
}

function editPhoto() {
    document.getElementById('pastaPicture').style.visibility = 'visible';
}

function closeSetting() {
    document.getElementById('pastaPicture').style.visibility = 'hidden';
}