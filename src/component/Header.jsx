import React from 'react'
import './Head.css'
export default function Header() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <header>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="logo">
                                <img src="/images/logo-light.png" alt="" />
                            </div>
                            <ul className="menu d-flex mt-4  pb-2">
                                <li>
                                    <a href="#" className="text-decoration-none p-3">HOME</a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none p-3">ABOUT</a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none p-3">SERVICES</a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none p-3">PROJECTS</a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none p-3">FEATURES</a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none p-3">BLOG</a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none p-3">SHOP</a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none p-3">CONTACT</a>
                                </li>
                            </ul>
                            <div className="nav-bar">

                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}
