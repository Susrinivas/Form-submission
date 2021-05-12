let btn=document.getElementById('submit');
btn.addEventListener('click', function(e){
   e.preventDefault();
   var address=[];
   address.push(address1.value);
   address.push(address2.value);

   let gender=document.getElementsByName('gender');
   let gendervalue = '';
   for(let i=0; i<gender.length ; i++){
    if(gender[i].checked){
        gendervalue = gender[i].value;
    }
}

   let food=document.getElementsByName("food");
   let foodlist = [];
   for(let i=0; i<food.length;i++){
       if(food[i].checked){
         foodlist.push(food[i].value)
       }
   }
   if(foodlist.length<2){
     var result = ("Must choose alteast 2 food items");
   }else {
       result=foodlist.join(",");
   }
  console.log(fname.value);
   createTable(fname.value,lname.value,address.join(","),pin.value,gendervalue,result,state.value,country.value)

   fname.value = "";
   lname.value='';
   address1.value='';
   address2.value='';
   pin.value='';
   for(let i=0; i<gender.length ; i++){
     gender[i].checked = '';
}
   for(let i=0; i<food.length;i++){
    food[i].checked = '';
    }
   state.value='';
   country.value='';
})

function createTable(fname,lname,address,pincode,gender,food,state,country){
    
    var tbody=document.getElementById('tbody');
    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');
    var td5=document.createElement('td');
    var td6=document.createElement('td');
    var td7=document.createElement('td');
    var td8=document.createElement('td');
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);
    
    
}

