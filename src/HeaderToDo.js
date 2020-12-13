import React from 'react'

function HeaderToDo({name}){
    return(
        <div className="container">
            <div className="row">
                <div id="heading1"><h3><i className="fas fa-clipboard-list"></i> To-Do App</h3></div>
            </div>
            <div className="row">
                <h5>Welcome {name.toUpperCase()}</h5>
            </div>
        </div>
    )
}

export default HeaderToDo