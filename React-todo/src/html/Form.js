import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/listReducers/listReducerSlice"

function Form(props) {
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value)
    }

    function textAdd(e) {
        e.preventDefault()
        if (text) {
            dispatch(addItem(text))
            setText("")
            props.onHide()
        }
    }

    return (
        <form>
            <input type="text" onChange={handleChange} value={text}></input>
            <button onClick={textAdd}>Add</button>
        </form>
    )
}

export default Form