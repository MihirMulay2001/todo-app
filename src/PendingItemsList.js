import React from 'react'
import deleteEntry from './deleteEntry'

function markasDone(idx,pendingItems, completedItems, setCompletedItems){
    setCompletedItems([...completedItems, pendingItems[idx -1]])
}

function PendingItemsList({pendingItems,setPendingItems, completedItems,setCompletedItems, setNewItem, setdefaultvalues}){
    let idx = 0
    let items = pendingItems.map( ele =>(
        <li key={++idx} className="list-group-item">
            <div className="row">
                <div className="col-lg-2 col-2">
                    <button className="list-icons done" onClick={()=>{
                        markasDone(idx,pendingItems, completedItems, setCompletedItems)
                        deleteEntry(idx,pendingItems,setPendingItems)
                    }}>
                    <i className="fas fa-check"></i>
                    </button>
                </div>
                <div className="col-lg-6 col-6">
                    <h5>{ele.task.toUpperCase()}</h5>{ele.priority}
                </div>
                <div className="col-lg-2 col-2">
                    <button className="list-icons edit" onClick={()=>{
                        setNewItem(true)
                        setdefaultvalues({task : pendingItems[idx - 1].task , priority: pendingItems[idx - 1].priority})
                        deleteEntry(idx,pendingItems,setPendingItems)
                    }}>
                    <i className="far fa-edit"></i>
                    </button>
                </div>
                <div className="col-lg-2 col-2">
                    <button className="list-icons delete" onClick={()=>{
                        deleteEntry(idx,pendingItems,setPendingItems)

                    }}>
                    <i className="fas fa-times"></i>
                    </button>
                </div>               
            </div>
        </li>
    ))
    return(
        <ul className="list-group">
            {items}
        </ul>
    )
}
export default PendingItemsList