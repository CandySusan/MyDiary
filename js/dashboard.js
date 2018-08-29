function openTab(TabName) {
   
    var x = document.getElementsByClassName('Tab');
    for (i = 0; i < x.length; i++) { x[i].style.display = "none"; }
    document.getElementById(TabName).style.display = "block";
}

function myFunction() {
        document.getElementById("demo").innerHTML = Date();
    }
