function deleteEntry(idx, itemsList, itemfunc){
    itemsList.splice(idx, 1)
    itemfunc([...itemsList])
}
export default deleteEntry