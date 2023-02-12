function frontendend(variable, number){
    if (number < 19){
        variable.push(100);
    }
    else if (number > 18 && number < 37){
        variable.push(200);
    }
    else if (number > 36 && number < 55){
        variable.push(300);
    }
    else if (number > 54 && number < 64){
        variable.push(400);
    }
    else if (number > 63 && number < 73){
        variable.push(500);
    }
    else if (number > 72 && number < 82){
        variable.push(600);
    }
}
var counter = 0
var was = []
var steck1 = []
var back1 = []
var steck2 = []
var back2 = []
var steck3 = []
var back3 = []
let button1 = document.querySelector('#true')
function refresh(){
    steck1 = []
    back1 = []
    steck2 = []
    back2 = []
    steck3 = []
    back3 = []
    counter = 1
    do{
        var number = Math.floor(Math.random()*(82-1)+1);
        if (was.includes(number) == false){
            was.push(number);
        }
    } while (was.length < 81);
    for (var i = 0; i < 81; i += 3){
        var number = was[i]; 
        steck1.push(number);
        frontendend(back1, number)

    }
    for (var i = 1; i < 81; i += 3){
        var number = was[i];
        steck2.push(number);
        frontendend(back2, number)
    }
    for (var i = 2; i < 81; i += 3){
        var number = was[i];
        steck3.push(number);
        frontendend(back3, number)
    }
}
refresh()
button1.addEventListener('click', function(){
    counter++
    if (counter == 27) {
        was = [steck1[counter - 1], steck2[counter - 1], steck3[counter - 1]];
        refresh();
    }
    document.getElementsByClassName("first")[0].src = "pictures/" + String(steck1[counter]) + ".jpg"
    document.getElementsByClassName("second")[0].src = "pictures/" + String(steck2[counter]) + ".jpg"
    document.getElementsByClassName("third")[0].src = "pictures/" + String(steck3[counter]) + ".jpg"
    document.getElementsByClassName("first_floor")[0].src = "pictures/" + String(back1[counter - 1]) + ".png"
    document.getElementsByClassName("second_floor")[0].src = "pictures/" + String(back2[counter - 1]) + ".png"
    document.getElementsByClassName("third_floor")[0].src = "pictures/" + String(back3[counter - 1]) + ".png"
    document.getElementById("demo1").innerHTML = String(27 - counter) + " cards left";
    document.getElementById("demo1").innerHTML = String(27 - counter) + " cards left";

    document.getElementsByClassName("first")[1].src = "pictures/" + String(steck1[counter]) + ".jpg"
    document.getElementsByClassName("second")[1].src = "pictures/" + String(steck2[counter]) + ".jpg"
    document.getElementsByClassName("third")[1].src = "pictures/" + String(steck3[counter]) + ".jpg"
    document.getElementsByClassName("first_floor")[1].src = "pictures/" + String(back1[counter - 1]) + ".png"
    document.getElementsByClassName("second_floor")[1].src = "pictures/" + String(back2[counter - 1]) + ".png"
    document.getElementsByClassName("third_floor")[1].src = "pictures/" + String(back3[counter - 1]) + ".png"
});


document.querySelector('#submit').addEventListener('click', function(){
    for (x = 0; x<2; x++) {
        document.getElementsByClassName("quest_1")[x].src = document.getElementById("selector_1").value != "" ? "pictures/" + document.getElementById("selector_1").value + ".jpg" : "pictures/cat.png"
        document.getElementsByClassName("quest_2")[x].src = document.getElementById("selector_2").value != "" ? "pictures/" + document.getElementById("selector_2").value + ".jpg" : "pictures/cat.png"
        if (document.getElementById("selector_extensions").value == "") {
        document.getElementsByClassName("quest_3")[x].src = document.getElementById("selector_3").value != "" ? "pictures/" + document.getElementById("selector_3").value + ".jpg" : "pictures/cat.png"
        }
        else {
            document.getElementsByClassName("quest_3")[x].src = "pictures/" + document.getElementById("selector_extensions").value + ".jpg"
        }
    }
 })
//random
document.querySelector('#random').addEventListener('click', function(){
    sel_1 = ["1_1","1_2","1_3","1_4","1_5","1_6","1_7","1_8","1_9","1_10","1_11"];
    sel_2 = ["2_1","2_2","2_3","2_4","2_5","2_6","2_7","2_8","2_9","2_10","2_11"];
    sel_3 = ["3_1","3_2","3_3","3_4","3_5","3_6"];
    //extensions
    doomsday = ["d_1", "d_2", "d_3"]
    easter = ["e_1", "e_2", "e_3"]
    halloween = ["h_1", "h_2", "h_3"]
    icecream = ["i_1", "i_2", "i_3"]
    winter = ["w_1", "w_2", "w_3"]
    //empty sel_3 if "without №3" checked
    if (document.querySelector('input[value="3"]:checked')){
        sel_3 = [];
    }
    // add extensions to sel_3 if they checked
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        if (checkbox.value === "d"){sel_3.push(...doomsday)}
        else if (checkbox.value === "e"){sel_3.push(...easter)}
        else if (checkbox.value === "h"){sel_3.push(...halloween)}
        else if (checkbox.value === "i"){sel_3.push(...icecream)}
        else if (checkbox.value === "w"){sel_3.push(...winter)}
    });

    random_1 = sel_1[Math.floor(Math.random() * sel_1.length)];
    random_2 = sel_2[Math.floor(Math.random() * sel_2.length)];
    random_3 = sel_3[Math.floor(Math.random() * sel_3.length)];

    document.getElementById("selector_1").value = random_1
    document.getElementById("selector_2").value = random_2
    document.getElementById("selector_3").value = random_3

    for (x = 0; x<2; x++) {
        document.getElementsByClassName("quest_1")[x].src = "pictures/" + random_1 + ".jpg"
        document.getElementsByClassName("quest_2")[x].src = "pictures/" + random_2 + ".jpg"
        document.getElementsByClassName("quest_3")[x].src = "pictures/" + random_3 + ".jpg"
    }
})