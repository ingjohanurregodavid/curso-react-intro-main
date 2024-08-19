import React from 'react';
function useLocalStorage(itemName,initialValue){

    const [item,setItem]= React.useState(initialValue);

    const [loading,setloading]= React.useState(true);

    const [error,setError]= React.useState(false);

    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                const localStorageItems=localStorage.getItem(itemName);
                let parsedItems;
                if(!localStorageItems){
                    localStorage.setItem(itemName,JSON.stringify(initialValue))
                    parsedItems=initialValue;
                  }else{
                    parsedItems=JSON.parse(localStorageItems);  
                    setItem(parsedItems);
                }
                setloading(false);           
            } catch (error) {
                setloading(false);
                setError(true);
            }
        },2000);     
    },[]);
    
  
    const saveItem=(newItem)=>{
       
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    };
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export {useLocalStorage}

// const defaultTodos=[
//   {text:"Cortar Cebolla",completed:true},
//   {text:"Tomar cafe",completed:false},
//   {text:"Leer un rato",completed:false}
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');