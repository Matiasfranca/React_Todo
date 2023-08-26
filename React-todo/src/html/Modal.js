import Card from "../css/Card"

function Modal(props) {

    function hide(e){
        if (e.target.id === "modal") {
            props.onHide()
        }
    }

    return (<div id="modal" className={props.show ? "modal":"modal hide"} onClick={hide}>
                <Card className="modalCard">
                    {props.children}
                </Card>
            </div>
    )
}

export default Modal