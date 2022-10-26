//factorial con for
function factorialDeX(x) {
  for (let i = x - 1; i >= 1; i--) {
    x *= i;
    console.log(x);
  }
  return x;
}

//factorial con while
function factorialDeXWhile(x) {
  let i = x;
  while (x > 1) {
    x--;
    i = i * x;
    console.log(i);
  }
}

//facforial con if y while
function factorialDeXIfWhileBreak(x){
    let i = x
    if (x === 1 || x ===  0){
        return 1;
    }else{
        while(x > 1){
            x--;
            i = i * x;
            console.log(i);
        }   
    }
}


let x = 10;
factorialDeX(x)
factorialDeXIfWhileBreak(x)
factorialDeXWhile(x)

