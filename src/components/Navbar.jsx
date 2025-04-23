import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/navbar.scss"

const pages = [
    {
        id: 1,
        pageName: "Ferrari",
        route: "#"
    },
    {
        id:2,
        pageName: "AAA",
        route: "2"
    }
]
function Navbar() {
    const [isSroll, setIsScroll] = useState (false);

    useEffect(() =>{
        const handleScroll = () =>{
            const offset = window.scrollY
            
            if(offset > 80){
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <header className={isSroll ? 'scrolled' : ''}>
        <nav>
            <div className="nav-logo">
                <a href="#">
                    <img src="/images/logopage.png" alt="home" />
                </a>
            </div>
            <div className="pages">
                <ul>
                    {pages.map(page => {
                        return <li key={page.id}><a href={page.route}>{page.pageName}</a></li>
                    })}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
