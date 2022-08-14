import React from "react";
import {connect} from 'react-redux'
import {increase,decrease} from './action'

function inc({count,increase,decrease}){
    return (
        <div>
            Count From Inc Component : {count} <br/><br/>
            <button onClick={() => increase()}>Increment</button>
            <button onClick={() => decrease()}>decrease</button>
        </div>
    )
}
export default inc