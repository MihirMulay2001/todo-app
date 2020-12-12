function addNewToDo(values, pendingItems, setItems){
    const newtodo = {
        task : values.task,
        priority: values.priority
    }
    setItems([...pendingItems, newtodo])
}
export default addNewToDo