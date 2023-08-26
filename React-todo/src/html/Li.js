import { useDispatch } from "react-redux"
import Card from "../css/Card"
import { flipDone, onItemDel } from "../features/listReducers/listReducerSlice"

function ListItem(props) {
    const dispatch = useDispatch()

    function Doneimg(props) {
        if (props.done) {
            return <img alt="done" src="./icons/ok.svg"></img>
        }else{
            return <img alt="undone" src="./icons/notok.svg"></img>
        }
    }

    return(
        <li>
            <Card className={props.i.done ? "done item":"item"}>
                {props.i.text}
                <div>
                    <button onClick={()=>{dispatch(flipDone(props.i._id))}}><Doneimg done={props.i.done}></Doneimg></button>
                    <button onClick={()=>{dispatch(onItemDel(props.i._id))}}><img alt="delete" src="./icons/lixeiro.svg"></img></button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem