isValid = s =>{

    let map = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    let stck =[];
    for(let i=0; i<s.length; i++){
        if(s[i] === "(" || s[i] === "["|| s[i] === "{"){
            stck.push(s[i]);
        }else if(stck[stck.length-1]=== map [s[i]]){
            stck.pop()
        } else { console.log (stck);
            return false;
        }
    }
    console.log('hello')
    return stck.length ? false : true
}

isValid("[{((())}]")