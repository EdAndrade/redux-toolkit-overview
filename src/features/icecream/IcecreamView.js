import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
import { useState } from 'react';

export const IcecreamView = () => {
    const [value, setValue] = useState(1);
    const icecreams = useSelector( (state) => state.icecream.numOfIcecreams )
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of ice creams - { icecreams }</h2>
            <button onClick={() => dispatch(ordered())}>Order ice crems</button>
            <input type="number" value={value} onChange={ e => setValue(parseInt(e.target.value))}></input>
            <button onClick={() => dispatch(restocked(value))}>Restock ice crems</button>
        </div>
    )
}