import { useState } from "react"

const Ejercicio3 = () => {
    const [state, setChangeState] = useState('')
    
    const handleChange = (changed) => {
        setChangeState(state + changed)
    }
    
    return (
        <>
            <h1>Hello My Friend {state}</h1>
            <button type="button" className="btn btn-primary" onClick={() => handleChange('(from changed state)! ')}>Click Me!</button>
        </>
  )
}
export default Ejercicio3