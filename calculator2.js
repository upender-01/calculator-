function handleClick(button){
    const val=button.value;
    document.querySelector("#display").value+=val;
  }
  function clearDisplay(){
    document.querySelector("#display").value="";
  }
  function deleteLast(){
    const dis=document.querySelector("#display"); 
    dis.value=dis.value.slice(0,-1);
  }
//   here the slice Excludes the last element from the array 
  function calculate(){
    const dis=document.querySelector("#display");
    try{
        dis.value=eval(dis.value)
    }catch{
        dis.value="Error is Found !!!"
    }
  }