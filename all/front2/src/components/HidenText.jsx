
import {useState} from 'react'

function HidenText({ text }) {
    const [txt, setTxt] = useState(false)

   const toggleButton = () => {
        setTxt(true)
        console.log("hola")
    }

    return (
        <div>

            <button onClick={toggleButton}>Toggle</button>
           {text && txt} 
        </div>
    )
}

export default HidenText

