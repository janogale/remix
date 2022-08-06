import { Outlet } from '@remix-run/react'
import React from 'react'
import styles from "../style/sports.css"

export function links(){
    return {
        rel: "stylesheet",
        href: styles
    }
}

export default function Sports() {
  return (
    <div className='container'>

        <div>Sports</div>
        <hr />
        <br />
        <div style={{
            width: '50%',
            margin: '0 auto',
            textAlign: 'center',
            border: '1px solid black'
        }}>
            <Outlet />
            </div>
    </div>
  )
}
