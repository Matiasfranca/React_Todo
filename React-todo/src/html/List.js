import { useSelector } from "react-redux"
import ListItem from "./Li"
import { listValue } from "../features/listReducers/listReducerSlice"

function List() {
    const listItem = useSelector(listValue)

    return (
        <ul>
            {listItem.map(i => <ListItem key={i._id} i={i}></ListItem>)}
        </ul>
    )
}

export default List
