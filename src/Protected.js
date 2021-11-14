import React from 'react'
import { Route,useHistory } from "react-router-dom";

function Protected({Auth, component:Component, ...rest}) {
    let history = useHistory();
    return (
        <Route {...rest} render = {(props)=>{
            if(Auth){
                return <Component />
            }else{
                history.push('/')
            }
        }
        }/>
    )
}

export default Protected
