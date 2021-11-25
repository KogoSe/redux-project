import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { AUTH_ROUTER, MAIN_MODEL } from '../Models/RouterModel'
const RouterIndex = () => {
    return (
        <div>
            <Routes>
                {AUTH_ROUTER.length > 0 ? <>
                    {AUTH_ROUTER.map((res,i)=>{
                        return <Route key={i} path={res.routerPath} element={res.routerComponent} />
                    })}
                </> : <></>}
                <Route path="user">
                {MAIN_MODEL.length > 0 ? <>
                    {MAIN_MODEL.map((res,i)=>{
                        return <Route key={i} path={res.routerPath} element={res.routerComponent} />
                    })}
                </> : <></>}
                </Route>
            </Routes>
            
        </div>
    )
}

export default RouterIndex
