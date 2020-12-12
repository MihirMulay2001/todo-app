import React from 'react'
import {Formik, Form, Field} from 'formik'
import addNewToDo from './AddToDo'

function InputNewToDo(props){
    const {pendingItems,setPendingItems, newItem, defaultvalues, setdefaultvalues} = props
    return(
        <div>
            <Formik
            initialValues={{task: defaultvalues.task, priority: defaultvalues.priority}}
            onSubmit={(values)=>{
                addNewToDo(values, pendingItems, setPendingItems)
                newItem(false)
                setdefaultvalues({task : '' , priority: ''})
            }}>
                <Form>
                    <div className ="form-group">
                        <label className="form-label" htmlFor="task">Task</label>
                        <Field className="form-control" id="task" type="text" name="task" placeholder="buy eggs" />
                    </div>
                    <div className ="form-group">
                        <label className="form-label" htmlFor="priority">Priority</label>
                        <Field className="form-control" id="priority" type="text" name="priority" placeholder="low" />
                    </div>
                    <button className="btn btn-light" type="submit"> Add new To-Do</button>
                </Form>
            </Formik>
        </div>
    )

}
export default InputNewToDo