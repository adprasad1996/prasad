import React, {useState} from 'react'
import './style.css'



function App(){
  const [list, setList] = useState([])
  const [msg, setMsg] = useState({
    text: '',
    id: '',
  })
  const [editingItem, setEditingItem] = useState({
    id: '',
    isEditing: false, 
  })

  const onChangeMsg =event => {
    setMsg({text: event.target.value,
           })
  }
  const onAddTodo = event => {
    event.preventDefault()
    let newTodo = {
      id: new Date().getTime().toString(),
      text: msg.text,
    }
    console.log(newTodo)
    
    setList([...list, newTodo])
    setMsg({
      text: '',
      id: '',
    })
    
  } 
  const deleteCard = (id) => {
    const fileterList = list.filter(eachItem => {
      return eachItem.id !== id
    })
    setList(fileterList)
  }
  const editCard = (id)=> {
     
    setEditingItem({
      ...editingItem, 
      isEditing: true,
      id: id,
    })

    const editableItem = list.find(eachItem => 
       eachItem.id === id
    )  
    
    setMsg({
      ...msg,
      id: editableItem.id,
      text: editableItem.text,
      
    })
    console.log(editableItem.text)
  }
  const handleEdit = event => {
    event.preventDefault()
    let newTodoItem = list.map(eachItem => {
      if(eachItem.id === editingItem.id){
        console.log(msg)
             
        return {
          text: msg.text,
          id: editingItem.id,
        };

      }else {
        return eachItem;
      }
     
    });
   
    setList(newTodoItem)
    setMsg({
      text: '',
      id: '', 
    })
    setEditingItem({
      id: '',
      isEditing: false,
    })
  }
 

  return (
   
    <div className ="container">
      <form>
        <input
        type='text'
        placeholder='Enter Text'
        name='message'               
        value={msg.text}        
        onChange={onChangeMsg}
        ></input>
        {editingItem.isEditing ?
         <button onClick = {handleEdit} type = "submit">Submit</button>:
         <button onClick={onAddTodo} type = "submit">add</button>     }
        
      </form>
      <hr/>
      {list.length === 0 && <h3>ther is no item in list</h3>}
      <ul className='ulContainer'>
        {list.map(eachItem => {
          const {text, id} = eachItem
          return (
            <li key = {id}>
              <div className = "cardContainer">
                <p>{text}</p>
                <button onClick = {() => editCard(id)}>edit</button>
                <button onClick = {() => deleteCard(id)}>delete</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default App


