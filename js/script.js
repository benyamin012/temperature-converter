let $ = document;
let changbtn = $.querySelector('.changeButton')
let changeinpvalue = $.getElementById('converter')
let cvalue = $.querySelector('.C')
let fvalue = $.querySelector('.F')
let resetbtn = $.querySelector('.resetButton')
let resaltvalue =$.querySelector('.result')
let convertbtn =$.querySelector('.convertButton')







changbtn.addEventListener('click', ()=>{
    if(cvalue.innerHTML=== '°C'){
       cvalue.innerHTML='°F';
       fvalue.innerHTML='°C';
       changeinpvalue.placeholder='°F';
       $.title=' °F to °C '
    }else{
        cvalue.innerHTML='°C';
         fvalue.innerHTML='°F';
         changeinpvalue.placeholder='°C';
          $.title=' °C to °F '
    }
 
})


resetbtn.addEventListener('click',()=>{
    changeinpvalue.value=''
    resaltvalue.innerHTML=''

})


convertbtn.addEventListener('click',()=>{
//    let inpvalue = changeinpvalue.value;

   if(changeinpvalue.value === ''){
   
    resaltvalue.innerHTML= 'you shuld writh number in input just nubmre '
    // resaltvalue.style.color = 'black'
   }else{
    if(cvalue.innerHTML==='°C'){
        let resaltvla = (changeinpvalue.value * 1.8) +32
        resaltvalue.innerHTML= changeinpvalue.value  + '°C To ' +  resaltvla  + '°F' 
    }else{
        if(cvalue.innerHTML === '°F'){
            let fresltvale = (changeinpvalue.value - 32) * 5/9 
            resaltvalue.innerHTML =changeinpvalue.value +'°F To ' + fresltvale.toFixed(3) +'°C'
        }
    }
   }

})