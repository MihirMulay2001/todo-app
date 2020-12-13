import React from 'react'
import InputNewTodo from './InputNewToDo'
import PendingItemsList from './PendingItemsList'
import CompletedItemsList from './CompletedItemsList'
import Header from './HeaderToDo'
const {useState} = React

function TodoPage({props}){
    let [pendingItems, setPendingItems] = useState([])
    let [completedItems, setCompletedItems] = useState([])
    let [enterNewItem, setNewItem] = useState(false)
    let [defaultvalues, setdefaultvalues] = useState({task : '' , priority: ''})
    const {userName} = props
    return(
        <div>
            <Header name={userName}/>
            { enterNewItem === true 
                ? 
                <div id="input-data">
                    <InputNewTodo 
                    pendingItems={pendingItems} 
                    setPendingItems={setPendingItems} 
                    newItem= {setNewItem}
                    defaultvalues = {defaultvalues}
                    setdefaultvalues={setdefaultvalues}
                    /> 
                </div>
                : ''
            }
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <div id="pending-items">
                        <h2>Pending tasks</h2>
                        { pendingItems.length === 0
                        ? <label className="no-tasks">No tasks pending</label>
                        : <PendingItemsList 
                        pendingItems={pendingItems}
                        setPendingItems={setPendingItems}
                        completedItems={completedItems}
                        setCompletedItems={setCompletedItems}
                        setNewItem = {setNewItem}
                        setdefaultvalues={setdefaultvalues}
                        />
                        }
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <div id="completed-items">
                        <h2>Completed tasks</h2>
                        { completedItems.length === 0
                            ? <label className="no-tasks">No tasks completed</label>
                            : <CompletedItemsList 
                            completedItems={completedItems}
                            setCompletedItems={setCompletedItems}
                            pendingItems={pendingItems}
                            setPendingItems={setPendingItems}
                            />
                        }
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <button className="btn" id="add-item" onClick={()=>{
                    setNewItem(true)
                }}> <h6>{"Add new Item".toUpperCase()}<i className="fas fa-pen-square"></i></h6></button>
            </div>
        </div>
    )
}

export default TodoPage