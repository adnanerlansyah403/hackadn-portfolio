import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

function Layout({ title, children }) {

    const router = useRouter();
    
  return (
    <>
        <Head>
            <title>{title ? `Adn Portfolio | ${title}` : "Adn Portfolio"}</title>
        </Head>

        
        <div class="line-social">
            <span></span>
            <ul class="my-socialmedia">
                <li>
                    <a href="https://discordapp.com/users/DuniaGymeea#0128" target="_blank" rel="noreferrer">
                        <img src="./assets/images/icons/discord.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/AdnanErlansyah" target="_blank" rel="noreferrer">
                        <img src="./assets/images/icons/twitter.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/adnanerlansyah403" target="_blank" rel="noreferrer">
                        <img src="./assets/images/icons/telegram-white.svg" alt="" />
                    </a>
                </li>
            </ul>
        </div>
        
        <header className="header">
            <div className="container">

                <div className="logo-wrapper">
                    <Link href="/" className="logo">
                        <img src="./assets/images/adn.png" alt="" />
                    </Link>
                    
                    <button className="nav-open" data-nav-open>
                        <img src="./assets/images/icons/bars.svg" alt="" />
                    </button>
                </div>
        
                <nav className="navbar">
                    <ul>
                        <li className="nav-list">
                            <Link href="/" className={`nav-link ${router.pathname === '/' ? 'gray' : ''}`}><span className="span">#</span>home</Link>
                        </li>
                        <li className="nav-list">
                            <Link href="/works" className={`nav-link ${router.pathname === '/works' ? 'gray' : ''}`}><span className="span">#</span>works</Link>
                        </li>
                        <li className="nav-list">
                            <Link href="/about" className={`nav-link ${router.pathname === '/about' ? 'gray' : ''}`}><span className="span">#</span>about-me</Link>
                        </li>
                        <li className="nav-list">
                            <Link href="/contact" className={`nav-link ${router.pathname === '/contact' ? 'gray' : ''}`}><span className="span">#</span>contacts</Link>
                        </li>
                    </ul>
                </nav>
                
                <div className="nav-mobile" data-nav-mobile>
                    <div className="nav-header">
                        <figure className="logo">
                            <img src="./assets/images/adn.png" alt="" />
                        </figure>
                        <div className="nav-close">
                            <button data-nav-close>
                                <img src="./assets/images/icons/times2.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    
                    <ul className="navs">
                        <li className="nav-list">
                            <Link href="/"><span className="span">#</span>home</Link>
                        </li>
                        <li className="nav-list">
                            <Link href="/works"><span className="span">#</span>works</Link>
                        </li>
                        <li className="nav-list">
                            <Link href="/about"><span className="span">#</span>about-me</Link>
                        </li>
                        <li className="nav-list">
                            <Link href="/contact"><span className="span">#</span>contacts</Link>
                        </li>
                    </ul>

                    <ul className="socials">
                        <li>
                            <a href="#">
                                <img src="./assets/images/icons/twitter.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./assets/images/icons/discord.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./assets/images/icons/figma.svg" alt="" />
                            </a>
                        </li>
                    </ul>

                </div>

            </div>

        </header>

        <main>
            <article>
                {children}
            </article>
        </main>

        <footer className="footer">
            <div className="container">

                <div className="footer-wrapper">
                    <div className="footer-brand">
                        <figure className="logo">
                            <img src="./assets/images/adn.png" alt="" />
                            <p>adnanerlansyah403@gmail.com</p>
                        </figure>
                        <p>Web designer and fullstack developer based in Indonesian</p>
                    </div>
                    <div className="footer-contact">
                        <h1 className="section-title">Media</h1>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="./assets/images/icons/discord.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./assets/images/icons/figma.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="./assets/images/icons/email.svg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>


    </>
  )
}

export default Layout