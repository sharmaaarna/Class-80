List_Of_Guest=[];
function sorting(){
    List_Of_Guest.sort();
    document.getElementById("guestSortNames").innerHTML = List_Of_Guest;
}

function Show(){
    document.getElementById("guestNames").innerHTML = List_Of_Guest;
}

function submit(){
    var nameof = document.getElementById("name_of_guest").value;
    List_Of_Guest.push(nameof);
}

function search(){
    var s=document.getElementById("search_name_of_guest").value;
    var found=0;
    var j;
    for(j=0; j<List_Of_Guest.length; j++){
        if(s==List_Of_Guest[j]){
            found=found+1;
        }
    }
    document.getElementById("2p").innerHTML="name found "+found+" time/s";
    console.log("name found "+found+" time/s");
}