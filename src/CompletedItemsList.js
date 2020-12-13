import React from 'react'
import addNewTodo from './AddToDo'
import deleteEntry from './deleteEntry'
function CompletedItemsList({completedItems, setCompletedItems,pendingItems, setPendingItems}){
    let idx = 0
    let items = completedItems.map( ele =>{
        const index = idx;
        return(
            <li key={++idx} className="list-group-item">
                <div className="row">
                    <div className="col-lg-8 col-8 finished">
                        <h6>{ele.task.toUpperCase()}</h6>
                    </div>
                    <div className="col-lg-2 col-2">
                        <button className="list-icons" onClick={()=>{
                        addNewTodo(completedItems[index],pendingItems, setPendingItems)
                        deleteEntry(index,completedItems,setCompletedItems)
                        }}>
                        <i className="fas fa-redo"></i>
                        </button>
                    </div>
                    <div className="col-lg-2 col-2">
                        <button className="list-icons delete" onClick={()=>{
                        deleteEntry(index,completedItems,setCompletedItems)
                        }}>
                        <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </li>
        )
    })
    return(
        <ul className="list-group">
            {items}
        </ul>
    )
}
export default CompletedItemsList