import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="fixed-top list-books-title  ">
            <Link to="/"> <h1> MY READABLES PROJECT</h1> </Link>
        </div>
    )
}
export default Header