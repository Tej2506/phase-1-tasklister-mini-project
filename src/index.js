document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault()
    let EneteredValue = event.target.new_task_description.value
    handleValue(EneteredValue)

  })
});

handleValue = (value)=>{
  let ul = document.createElement('ul')
  let item1 = document.createElement('li')
  item1.textContent = `${value  }`
  div = document.getElementById('list')
  let btn = document.createElement('button')
  btn.textContent = '  x'
  ul.appendChild(item1)
  item1.appendChild(btn)
  div.appendChild(ul)
  btn.addEventListener('click',(event)=>{
  ul.remove()
  })
}