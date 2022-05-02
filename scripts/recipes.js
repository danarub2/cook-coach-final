active_filters = []

function onShuffle(comp){
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

        if (comp == false){
            document.getElementById("recipe-2-title").innerHTML = "Simple Pasta"
            document.getElementById("recipe-2-photo").setAttribute("src", "../images/pasta.png")
            document.getElementById("recipe-2-photo").setAttribute("alt", "Simple Pasta")
            document.getElementById("recipe-2-photo").setAttribute("class", "pasta-photo")
        }
        else{
            document.getElementById("recipe-2-title").innerHTML = "Spaghetti and Meatballs"
            document.getElementById("recipe-2-photo").setAttribute("src", "../images/spaghetti.png")
            document.getElementById("recipe-2-photo").setAttribute("alt", "Spaghetti")
            document.getElementById("recipe-2-photo").setAttribute("class", "spaghetti-photo")
        }

        document.getElementById("recipe-3-title").innerHTML = "Baked Potato"
        document.getElementById("recipe-3-photo").setAttribute("src", "../images/baked_potato.png")
        document.getElementById("recipe-3-photo").setAttribute("alt", "Baked Potato")
        document.getElementById("recipe-3-photo").setAttribute("class", "baked-potato-photo")
    }
}

function onOpenFilter(){
    document.getElementById("filter-options").setAttribute("class", "bg-cc-grey")
    document.getElementById("filter-plus-holder").setAttribute("class", "hidden")
    document.getElementById("applied-filters-div").setAttribute("class", "hidden")

}

function onCloseFilter(){
    document.getElementById("filter-options").setAttribute("class", "hidden")
    document.getElementById("filter-plus-holder").setAttribute("class", "bg-cc-grey")

}

function addFilter(name){
    if (active_filters.includes(name)){
        active_filters.splice(active_filters.indexOf(name), 1)
    }
    else{
        active_filters.push(name)
    }
    console.log(active_filters)
}

function removeFilter(){
    n="Under 15 minutes"
    active_filters.splice(active_filters.indexOf(n), 1)
    console.log(active_filters)
    showFilters()
}

function showFilters(){
    onCloseFilter()
    active_filters = active_filters.filter(function (value, index, array) { 
        return array.indexOf(value) === index;
    });
    
    document.getElementById("applied-filters-div").innerHTML = ""
    document.getElementById("applied-filters-div").setAttribute("class", "")

    for (let i = 0; i < active_filters.length; i++) {
        label_name = "<label>" + active_filters[i] + "</label>"
        img = "<img src='../images/x-button.png' class='x-button' style='margin-left: 10px; margin-bottom: 3px' onclick=\"removeFilter(" + active_filters[i] + ")\""
        console.log("<div class='applied-filter'>" + label_name + img + "</div>")
        document.getElementById("applied-filters-div").innerHTML += "<div class='applied-filter'>" + label_name + img + "</div>"
    }
}

function search(){
    term = document.getElementById("search").value
    const collection = document.getElementsByClassName("recipe-card");

    console.log(collection.length)
    for (let i = 0; i < collection.length; i++) {
        current_recipe = collection[i].getElementsByClassName("recipe-name")[0].innerHTML
        console.log(current_recipe)
        console.log(term)
        if (!current_recipe.toUpperCase().includes(term.toUpperCase())){
            collection[i].setAttribute("class", "hidden")
        }
    }
}