import React from "react"

export default function Input(props){
    const {label, onChange, errorMessage, ...inputProps} = props
    const [focused, setFocused] = React.useState(false)

    const handleFocus = (e) => {
        setFocused(true)
    }

    return(
        <div class='flex flex-col font-NunitoSans gap-2 my-2'>
            <label>{label}</label>
            <input class='border border-gray-600 rounded-lg p-2' {...inputProps} onChange={onChange} pattern={props.pattern} onBlur={handleFocus} focused={focused.toString()}></input>
            <span className="span-form">{errorMessage}</span>
        </div>
    )
}