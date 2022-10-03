let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function decrement() {
    if(count>0){
        count = count - 1
        countEl.innerText = count
    }

}


function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr 
    //console.log(count)
    countEl.innerText = 0
}