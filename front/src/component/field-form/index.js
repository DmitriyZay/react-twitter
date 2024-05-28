import { useState } from "react";
import "./index.css";

export default function Component ({placeholder, button, onSubmit}){

	const [value, setValue]=useState("");
	const handleChange=(e)=>setValue (e.target.value);
	const habdleSubmit=()=>{
		if (value.length===0) return null;
		if (onSubmit) {
			onSubmit(value);
		} else {
			throw new Error("onSubmit props is undefined");
		}
		setValue("");
	};

	const isDisable=value.length===0;

	return(
		<div className="field-form">
<textarea 
onChange={handleChange}
value={value}
rows={2}
placeholder={placeholder}
className="field-form__field"
></textarea>
<button
disabled={isDisable}
onClick={habdleSubmit}
className="field-form__button">
	{button}

</button>
		</div>
	)
}
 

