import React from 'react'
import { Link } from 'react-router-dom'
import "./tab.css"

export default function Tab() {
  return (
    <div className='main-app'>
        <div className='logo'>Piggy</div>
        <div className='center'>
            <nav className='app-navbar'>
                <ul className='app-list'>
                    <li className='app-item'>
                        <Link className="app-link" to="/">Dashboard</Link>
                    </li>
                    <li className='app-item'>
                        <Link className="app-link" to="saveether">ETH</Link>
                    </li>
                    <li className='app-item'>
                        <Link className="app-link" to="stablecoin">Stablecoin</Link>
                    </li>
                    <li className='app-item'>
                        <Link className="app-link" to="leaderboard">Board</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='connect'>
            <button className='connect-button'>Connect Wallet</button>
        </div>
    </div>
  )
}
