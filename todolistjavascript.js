let val=0;
function func1(){
    const value=document.querySelector('.text-field').value;
    const value2=document.querySelector('.date-field').value;
    if(value!==""&&value2!==""){
        document.querySelector('.update').innerHTML=
        document.querySelector('.update').innerHTML+
        `<p data-value="${val}" class="para_element">${value} <span class="span-attr">${value2}</span>
        <button value="${val}" class="delete-btn" onclick="delete_func(this)">delete</button></p>`
        document.querySelector('.text-field').value="";
        document.querySelector('.date-field').value="";
        val++;
    }
}
function delete_func(parameter){
    const arr = document.querySelectorAll('.delete-btn');
    arr.forEach(element => {
        if(parameter.value===element.value)
            element.remove();
    });
    const sarr = document.querySelectorAll('.para_element');
    sarr.forEach(element =>{
        if(element.dataset.value===parameter.value){
            element.remove();
        }
    });
}