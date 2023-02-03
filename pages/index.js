import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
// import '../styles/index.css'

export default function Home() {

    return (
        <Layout>

            <section className="section hero" id="hero">
                <div className="container">

                    <div className="content col-6">
                        <h1 className="text-lg">My name is Adnan and I&apos;m <span className="span">Fullstack developer</span></h1>
                        <p className="text-md">
                            {/* Spoiling your project with me and get the rest to me */}
                        </p>

                        {/* <a href="mailto:adnanerlansyah403@gmail.com" className="btn btn-primary">
                            Contact me !!
                        </a> */}
                    </div>

                    <div className="img col-4">
                        <figure>
                            <img src="./assets/images/adnan.png" className="img-cover my-photo" alt="" />
                            <div className="badge">
                                <span className="box-pink"></span>
                                <p><span className="gray">Currently is </span>Freshgraduate</p>
                            </div>
                        </figure>
                    </div>

                </div>
            </section>

            <section className="section greeting" id="greeting">
                <div className="container">

                    <div className="content">
                        <h2 className="text-lg my-quote">
                            <img src="./assets/images/icons/quote-left.svg" alt="" className="quote-left" />
                            Up to down, Down to Up
                            <img src="./assets/images/icons/quote-left.svg" alt="" className="quote-right" />
                        </h2>
                        <h3 className="text-md">
                            - Adn. E
                        </h3>
                    </div>

                </div>
            </section>

            <section className="section project" id="projects">
                <div className="container">

                    <div className="section-wrapper">
                        <h1 className="section-title">
                            <span className="span">#</span>projects
                        </h1>
                        <div className="section-fullinfo">
                            <a href="#">
                                View All ~~&gt;
                            </a>
                        </div>
                    </div>

                    <div className="content">

                        <div className="card-wrapper">

                            <div className="card-list col-4">
                                <figure className="card-img">
                                    <img src="./assets/images/projectfreemium.png" alt="" className="img-cover" />
                                </figure>
                                <p className="card-subtitle">HTML TailwindCSS Javascript Laravel AlpineJS</p>
                                <div className="card-details">
                                    <h1 className="card-title">
                                        Freemium
                                    </h1>
                                    <p className="card-text">
                                        Like some blog or medium
                                    </p>
                                    <div className="card-button">
                                        <a href="https://freemium-farcap.fly.dev/" className="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-list col-4">
                                <figure className="card-img">
                                    <img src="./assets/images/projectqaerrors.png" alt="" className="img-cover" />
                                </figure>
                                <p className="card-subtitle">HTML TailwindCSS Javascript Laravel AlpineJS</p>
                                <div className="card-details">
                                    <h1 className="card-title">
                                        QA Errors
                                    </h1>
                                    <p className="card-text">
                                        For question the errors of programmers
                                    </p>
                                    <div className="card-button">
                                        <a href="https://qa-errors.fly.dev/" className="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </section>

            <section className="section skills" id="skills">
                <div className="container">

                    <h1 className="section-title">
                        <span className="span">#</span>skills
                    </h1>

                    <div className="content">
                        <div className="hero col-6">
                            <img src="./assets/images/hero-skill.png" alt="" />
                        </div>
                        <div className="lists col-6">

                            <div className="item col-4">
                                <h4>Languages</h4>
                                <ul>
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        PHP
                                    </li>
                                    <li>
                                        JAVASCRIPT
                                    </li>
                                </ul>
                            </div>

                            <div className="item col-4">
                                <h4>Tools</h4>
                                <ul>
                                    <li>
                                        VSCode
                                    </li>
                                    <li>
                                        Figma
                                    </li>
                                    <li>
                                        Git
                                    </li>
                                    <li>
                                        Adobe Photoshop
                                    </li>
                                </ul>
                            </div>

                            <div className="item col-4">
                                <h4>Frameworks</h4>
                                <ul>
                                    <li>
                                        ReactJS
                                    </li>
                                    <li>
                                        NextJS
                                    </li>
                                    <li>
                                        Laravel
                                    </li>
                                </ul>
                            </div>

                            <div className="item col-4">
                                <h4>Databases</h4>
                                <ul>
                                    <li>
                                        SQLite PostgreSQL
                                    </li>
                                    <li>
                                        Mysql
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="section aboutme" id="about">
                <div className="container">

                    <h1 className="section-title">
                        <span className="span">#</span>about-me
                    </h1>

                    <div className="content">

                        <div className="details">
                            <p>
                                Hello, I&apos;m Adnan Erlansyah! <br /> <br />

                                My name is Adnan Erlansyah from Bekasi, Indonesian. I can build a website with full functionallity for the ui/ux. <br /> <br />
                            </p>

                            <a href="/about" className="btn btn-primary">
                                Read more -&gt;
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            <section className="section contacts" id="contacts">
                <div className="container">

                    <h1 className="section-title">
                        <span className="span">#</span>contacts
                    </h1>

                    <div className="content">

                        <p className="text">
                            I like the oppurtunity for freelance. But however, if you're have a question or a request for build a website. Then you can call me for continue the conversation with the project.
                        </p>

                        <div className="socials">
                            <h4>Message me here</h4>
                            <ul>
                                <li>
                                    <img src="./assets/images/icons/discord.svg" alt="" />
                                    <a href="#">!DunyaGymers23#4432</a>
                                </li>
                                <li>
                                    <img src="./assets/images/icons/email.svg" alt="" />
                                    <a href="#">adnanerlansyah403@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                    </div>



                </div>
            </section>

        </Layout>
    )
}
