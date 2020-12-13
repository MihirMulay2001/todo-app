import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import addNewToDo from './AddToDo'
const validateTodo= (values) =>{
    let errors ={}
    if(values.task.length === 0){
        errors.task = "Enter name of task"
    }
    if(values.priority === ''){
        errors.priority= "Choose Priority"
    }
    return errors;
}

function InputNewToDo(props){
    const {pendingItems,setPendingItems, newItem, defaultvalues, setdefaultvalues} = props
    return(
        <div>
            <Formik
            initialValues={{task: defaultvalues.task, priority: defaultvalues.priority}}
            validate={ validateTodo }
            onSubmit={(values)=>{
                addNewToDo(values, pendingItems, setPendingItems)
                newItem(false)
                setdefaultvalues({task : '' , priority: ''})
            }}>
                <Form>
                    <div className ="form-group">
                        <label className="form-label" htmlFor="task">Task</label>
                        <Field className="form-control" id="task" type="text" name="task" placeholder="buy eggs" />
                        <small style={{color:"red"}}><ErrorMessage className="form-text" name="task" /></small>
                    </div>
                    <div className ="form-group">
                        <label className="form-label" htmlFor="priority">Priority</label>
                        <Field className="form-control" id="priority" as="select" name="priority">
                            <option value="" selected disabled hidden>Select-priority</option>
                            <option value="low">low</option>
                            <option value="moderate">moderate</option>
                            <option value="high">high</option>
                            <option value="very high">very high</option>
                        </Field>
                        <small style={{color:"red"}}><ErrorMessage className="form-text" name="priority" /></small>
                    </div>
                    <button className="btn btn-light" type="submit"> Add new To-Do</button>
                </Form>
            </Formik>
        </div>
    )

}
export default InputNewToDo