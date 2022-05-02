function onShuffle(){
    if (document.getElementById("recipe-1-title").innerHTML == "Eggs and Bacon"){
        document.getElementById("recipe-1-title").innerHTML = "Tacos"
        document.getElementById("recipe-1-photo").setAttribute("src", "../images/tacos.png")
        document.getElementById("recipe-1-photo").setAttribute("alt", "Tacos")
        document.getElementById("recipe-1-photo").setAttribute("class", "tacos-photo")


        document.getElementById("recipe-2-title").innerHTML = "Hamburgers"
        document.getElementById("recipe-2-photo").setAttribute("src", "../images/hamburger.png")
        document.getElementById("recipe-2-photo").setAttribute("alt", "Hamburgers")
        document.getElementById("recipe-2-photo").setAttribute("class", "hamburger-photo")

        document.getElementById("recipe-3-title").innerHTML = "Beans and Rice"
        document.getElementById("recipe-3-photo").setAttribute("src", "../images/beansandrice.png")
        document.getElementById("recipe-3-photo").setAttribute("alt", "Beans and Rice")
        document.getElementById("recipe-3-photo").setAttribute("class", "beans-and-rice-photo")
    }
    else{
        document.getElementById("recipe-1-title").innerHTML = "Eggs and Bacon"
        document.getElementById("recipe-1-photo").setAttribute("src", "../images/eggs_and_bacon.png")
        document.getElementById("recipe-1-photo").setAttribute("alt", "Eggs and Bacon")
        document.getElementById("recipe-1-photo").setAttribute("class", "eggs-photo")


        document.getElementById("recipe-2-title").innerHTML = "Simple Pasta"
        document.getElementById("recipe-2-photo").setAttribute("src", "../images/pasta.png")
        document.getElementById("recipe-2-photo").setAttribute("alt", "Simple Pasta")
        document.getElementById("recipe-2-photo").setAttribute("class", "pasta-photo")

        document.getElementById("recipe-3-title").innerHTML = "Baked Potato"
        document.getElementById("recipe-3-photo").setAttribute("src", "../images/baked_potato.png")
        document.getElementById("recipe-3-photo").setAttribute("alt", "Baked Potato")
        document.getElementById("recipe-3-photo").setAttribute("class", "baked-potato-photo")
    }
}

function onOpenFilter(){
    document.getElementById("filter-options").setAttribute("class", "bg-cc-grey")
    document.getElementById("filter-plus-holder").setAttribute("class", "hidden")
}

function onCloseFilter(){
    document.getElementById("filter-options").setAttribute("class", "hidden")
    document.getElementById("filter-plus-holder").setAttribute("class", "bg-cc-grey")
}