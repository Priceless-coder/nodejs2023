//learn call stack and memory heap using an example .

const number = 786; //allocate memory for the number 
const string = "storing the string here ";  //allocate memory for string 
const human = { //allocate memory for an object ..and it's values
    fname :"amol",
    lname:"guess"
}


//call stack 
function subtractTwo(num){
    return num -2 ;
}

function calculate (){
    const sumtotal = 4+9;
    return subtractTwo(sumtotal); //this should do 13 -2 = 11
}

calculate();  //stored into the callstack