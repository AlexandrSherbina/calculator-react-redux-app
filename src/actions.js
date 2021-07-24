export const equal = (value) => {
    return { 
        type: '=', 
        value: () => 
        {
        if(value.search(/[^0-9*/+-.]/mi) !== -1) return;       
           return eval(value)
        }
        
     }
}

export const del = (value) => {
    return {
        type: '>>',
        value: () => {
            if (value.length === undefined)  return 0 
           return value.substring(0, value.length - 1)
        }
    }
}
export const cancel = () => ({type: 'C'});
export const  symbol = (e, value) => {
 return   {
        type: 'SYB',
        value:   e.target.innerText
    }
}