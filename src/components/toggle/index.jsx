import './style.scss'
import Sun from '../../img/sun.jpeg'
import Moon from '../../img/moon.png'

import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }

    return (
        <div className='toggle'>
            <img src={Moon} alt="" className="icon" />
            <img src={Sun} alt="" className="icon sun" />

            <div onClick={handleClick} className="button" style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>

    )


}

export default Toggle;