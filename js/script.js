const add = document.querySelector('.add')
const inputValue = document.querySelector('.inputValue')
const listBody = document.querySelector('.listBody')
let i = 0

add.addEventListener('click',()=>{
    i++
    if(inputValue.value == ""){
        alert("Please, Input Your List.")
    }else{
        listBody.style = "display: inline-block;"

        let span = document.createElement('span')
        span.classList.add('number')
        span.innerHTML = i

        let list = document.createElement('div')
        list.classList.add('list')


        let item = document.createElement('input')
        item.classList.add('item')
        item.setAttribute('type','text')
        item.setAttribute('readonly','readonly')
        item.value = inputValue.value

        let checkbox = document.createElement('input')
        checkbox.setAttribute('type','checkbox')
        checkbox.classList.add('checkbox')

        let edit = document.createElement("button")
        edit.classList.add("edit")
        edit.innerHTML = "Edit"

        let deletetach = document.createElement('button')
        deletetach.classList.add('delete')
        deletetach.innerHTML = "delete"
    
        listBody.appendChild(list)
        list.appendChild(span)
        list.appendChild(checkbox)
        list.appendChild(item)
        list.appendChild(edit)
        list.appendChild(deletetach)
        inputValue.value = ''

        checkbox.addEventListener('click',()=>{
            if(checkbox.checked){
                item.style = 'text-decoration: line-through;'
            }else{
                item.style = 'text-decoration: none;'
            }
        })

        deletetach.addEventListener('click',()=>{
        list.remove()
        item.style = "display: none;"
        span.style = "display: none;"
        })
        
        edit.addEventListener("click",()=>{
            if(edit.innerHTML == "Edit"){
                item.removeAttribute('readonly','readonly')
                edit.innerHTML = 'Save'
            }else{
                item.setAttribute("readonly","readonly")
                edit.innerHTML = "Edit"
            }
        })

    }
})