function loadPage() {
    document.getElementById("defaultOpen").click();
}

function openPage(evt, pageName) {
    // Declare all variables  
    var i, tabContent, tablinks;
// Get all elements with class="tabcontent" and hide them  
tabContent = document.getElementsByClassName("tabContent"); for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
  // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("settingsTab"); 
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.backgroundColor = "#22a9bb7f";
    }
  // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.style.backgroundColor = "#22AABBCC";
}

function changeSetting(setting) {
    var popup = document.getElementById(setting);
    popup.style.visibility= "visible";
}

function closeSetting(setting) {
    var popup = document.getElementById(setting);
    popup.style.visibility="hidden";
}