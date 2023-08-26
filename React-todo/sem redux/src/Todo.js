import React, { useEffect, useState } from "react";
import "./css/Todo.css"
import List from "./html/List";
import Form from "./html/Form";
import Item from "./models/Item";
import Modal from "./html/Modal";

const BD = "it"

function Todo() {
    const [item, setItem] = useState([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        let dad = JSON.parse(localStorage.getItem(BD))
        if(dad)
        setItem(dad)
    }, [])

    useEffect(()=>{
        localStorage.setItem(BD, JSON.stringify(item))
    }, [item])

    function addItem(txt) {
        let text = new Item(txt)
        setItem([...item, text])
        onHide()
    }

    function onItemDel(i){
        let filteredItems = item.filter(item => item._id !== i._id);
        setItem(filteredItems);
    }

    function flipDone(i) {
        let updateItems = item.map(item=>{
            if(item._id === i._id) item.done = !i.done;

            return item
        })
        setItem(updateItems)
    }

    function onHide() {
        setShowModal(false)
    }

    return (
        <div className="container">
            <header className="header"><h1>Todo</h1><button onClick={()=>{setShowModal(true)}} className="addButton">+</button></header>
            
            <List flipDone={flipDone} onItemDel={onItemDel} item={item}></List>
            
            <Modal onHide={onHide} show={showModal}><Form addItem={addItem}></Form></Modal>
        </div>
    )

}

export default Todo