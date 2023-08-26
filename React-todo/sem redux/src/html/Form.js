import { useState } from "react";

function Form(props) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value)
    }

    function textAdd(e) {
        e.preventDefault()
        if (text) {
            props.addItem(text)
            setText("")
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