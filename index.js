let counter=0
const getData=()=>{
    console.log('fetching Data',counter++)
}

const debouncing=function(fn,d){
    let timer;
     return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(context,args)
        },d)
     }
}

const betterfunction=debouncing(getData,300)









































