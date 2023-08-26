import Card from "../css/Card"

function ListItem(props) {

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
                    <button onClick={()=>{props.flipDone(props.i)}}><Doneimg done={props.i.done}></Doneimg></button>
                    <button onClick={()=>{props.onItemDel(props.i)}}><img alt="delete" src="./icons/lixeiro.svg"></img></button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem