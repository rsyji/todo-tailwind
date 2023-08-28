const input = document.getElementById('input')
const container = document.getElementById('container')
const addData = document.getElementById('addData')
const offlineData = fetchLocalData()
const dataStore = offlineData?[...offlineData]:[]

function fetchLocalData(){
    return JSON.parse(localStorage.getItem('list'))
}

function setLocalData(data){
    localStorage.setItem("list",JSON.stringify(data))
}



function renderList(data){
    let newRenderList=""
    data.forEach(item=>{
        newRenderList+=`<div class="flex justify-center items-center border border-black border-opacity-20 rounded-lg my-1"><li class=" mx-2 p-2 w-80 font-bold text-xl list-none rounded">${item}</li><button id=${item} class="h-8 px-3 bg-orange-400 hover:bg-orange-500 rounded-full font-bold text-l text-white">X</button></div>`
})
    container.innerHTML=newRenderList
    
}

renderList(dataStore)

addData.addEventListener("click",()=>{
    const inputData = input.value
    if(inputData!==""){
        const newStore = fetchLocalData()
        if(newStore.includes(inputData)){
            alert("Item is already in the list. Kindly choose different name.")
        }
        else{
        newStore.push(inputData)
        setLocalData(newStore)
        renderList(newStore)
        input.value =""
        }
    }
})

container.addEventListener('click',e=>{
    const newStore = fetchLocalData()
    const newData = newStore.filter(item=>item!==e.target.id)
    // console.log(newData)
    setLocalData(newData)
    renderList(newData)

        
})