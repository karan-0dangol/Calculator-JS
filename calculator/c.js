let display = document.querySelector('.display')

let btn = Array.from(document.getElementsByClassName('button'))


btn.forEach(btn=>{
    btn.addEventListener('click', e=>{


        
        switch(e.target.innerText)
       { case 'C':
            display.innerText = ''
            break

        case '←':
            if(display.innerText){display.innerText = display.innerText.slice(0,-1)}
             break

        case '=':
            try {
                display.innerText = eval(display.innerText)
            } catch  {
                display.innerText = "Error!"
                setTimeout(() => {
                    display.innerText = ''
                }, 700);
                
               
            }
            
            break

       

        default:
            display.innerText += e.target.innerText
        
        }

        
            
    })
})
