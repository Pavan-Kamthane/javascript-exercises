const repeatString = function(string, num) {
    let ans = "";
    if(num<0){
        return "Error"
    }else {
        for(let i = 1;i<=num;i++){
            ans +=string;
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
