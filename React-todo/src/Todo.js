import React, { useState } from "react";
import "./css/Todo.css"
import List from "./html/List";
import Form from "./html/Form";
import Modal from "./html/Modal";
import store from "./app/store";

const BD = "it"

function persist(state) {
    localStorage.setItem(BD, JSON.stringify(state.list.value))
}

store.subscribe(()=>{
    if (store.getState().list.value !== []) {
        persist(store.getState())
    }
})

function Todo() {

    // const [item, setItem] = useState([]);
    const [showModal, setShowModal] = useState(false)

    // useEffect(() => {
    //     localStorage.setItem(BD, JSON.stringify(item))
    // }, [item])

    function onHide() {
        setShowModal(false)
    }

    return (
        <div className="container">
            <header className="header"><h1>Todo</h1><button onClick={() => { setShowModal(true) }} className="addButton">+</button></header>
                <List></List>
                <Modal onHide={onHide} show={showModal}><Form onHide={onHide}></Form></Modal>
        </div>
    )

}

export default Todo