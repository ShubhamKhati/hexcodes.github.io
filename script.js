index=0;
function changeColor(){
    var hex_numbers=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    hexcode="";
    for(var i=0; i<6; i++){
        var random_index=Math.floor(Math.random()*hex_numbers.length);
        hexcode+=hex_numbers[random_index];
    }
    document.getElementById("hexcode").innerHTML=hexcode;
    // var colors=["red","blue","green","yellow","pink","grey"];
    document.getElementsByTagName("body")[0].style.backgroundColor='#'+hexcode;
    // if(index>colors.length-1){
    //     index=0;
    // }
    hexcode="";
}