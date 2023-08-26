import ListItem from "./Li"

function List(props) {
    return (
        <ul>
            {props.item.map(i => <ListItem key={i._id} i={i} flipDone={props.flipDone} onItemDel={props.onItemDel}></ListItem>)}
        </ul>
    )
}

export default List
