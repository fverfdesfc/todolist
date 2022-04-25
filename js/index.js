let member = document.querySelector('#member');
let realm = document.querySelector('#realm');
let power = document.querySelector('#power');
let add = document.querySelector('#add');
let form = document.querySelector('#form');
let tbody = document.querySelector('#table tbody');


let arrtable = [];


add.addEventListener('click',setitem)
tbody.addEventListener('click',delitem)

    function update(){
        let addhtml = "";
        arrtable.forEach((item,i) => {
            addhtml += `<tr>
                <td>${item.name}</td>
                <td>${item.realms}</td>
                <td>${item.levelpower}億</td>
                <td><button class="delete" data-key=${i}>刪除${i}</button></td>
            </tr>`;
        })
        tbody.innerHTML = addhtml;
        
    }

    function setitem(){
        if(member.value =="" || realm.value=="" || power.value==""){
            alert('欄位不能為空');
            if(member.value =="" ){
                member.focus();
                return false
            }
            if(realm.value =="" ){
                realm.focus();
                return false
            }
            if(power.value =="" ){
                power.focus();
                return false
            }
        }
        arrtable.push({
            name: member.value,
            realms: realm.value,
            levelpower: power.value
        })
        member.value="";
        realm.value="";
        power.value="";
        update();
    }
function delitem(e){
    let target = e.target;
    if(target.nodeName == "BUTTON"){
        let key = target.dataset.key
        arrtable.splice(key,1);
    }
    update();
}





// btnDelete.addEventListener('click', e=>{
//     arrtable.splice(tr,1);
//     console.log(arrtable)
// })



    
    // btnDelete.forEach((btn,i) =>{
    //     btn.addEventListener('click',e=>{
            





        //     let dhtml = ""
        //     arrtable.forEach(item =>{
        //       dhtml += `<tr>
        //       <td>${item.name}</td>
        //       <td>${item.realms}</td>
        //       <td>${item.levelpower}億</td>
        //       <td><button class="delete">刪除</button></td>
        //   </tr>`  
        //     })
        //     tbody.innerHTML = dhtml;
    //     })
    // })





// function getitem(){
//     let item = localStorage.getItem('item');
    
// }

