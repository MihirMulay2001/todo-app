import React from 'react'
import deleteEntry from './deleteEntry'

function markasDone(idx,pendingItems, completedItems, setCompletedItems){
    console.log(pendingItems);
    setCompletedItems([...completedItems, pendingItems[idx -1]])
}

function PendingItemsList({pendingItems,setPendingItems, completedItems,setCompletedItems, setNewItem, setdefaultvalues}){
    let idx = 0
    let items = pendingItems.map( ele =>{
        const index = idx
        return(
            <li key={++idx} className="list-group-item">
                <div className="row">
                    <div className="col-lg-2 col-2">
                        <button className="list-icons done" onClick={()=>{
                            console.log(index);
                            markasDone(index + 1,pendingItems, completedItems, setCompletedItems)
                            deleteEntry(index,pendingItems,setPendingItems)
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
                            setdefaultvalues({task : pendingItems[index].task , priority: pendingItems[index].priority})
                            deleteEntry(index,pendingItems,setPendingItems)
                        }}>
                        <i className="far fa-edit"></i>
                        </button>
                    </div>
                    <div className="col-lg-2 col-2">
                        <button className="list-icons delete" onClick={()=>{
                            deleteEntry(index,pendingItems,setPendingItems)

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
export default PendingItemsList