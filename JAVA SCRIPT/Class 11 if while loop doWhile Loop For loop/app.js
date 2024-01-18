var sm = 0;
var arr = [12,34,76,91,7,6,78];
sm = arr[0];
for(var i = 1; i <= 7;i++){
    if(arr[i] > sm){
        sm = arr[i]
        // console.log(arr[i])
    }
    for(var j = 1;j < 4;j++){
        if(arr[i] > sm){
            console.log(sm)
        }
    }
}
