import React from 'react'
import Layout from '../components/Layout'

export default function About() {
    return (
        <Layout title={`Who am i?`}>


            <section className="section about">
                <div className="container">

                    <h1 className="section-title">
                        <span className="span">/</span>aboutme
                    </h1>
                    <p className="section-subtitle">
                        Who am i?
                    </p>

                    <div className="content">
                        <div className="text col-6">
                            <p>
                                Hello, I&apos;m Adnan E! <br /> <br />

                                I born in Bekasi at 27 Maret 2003, I'm so excited with programmers especially for the ui/ux designers. I have already developed the projects, and still make progress for my projects. <br /> <br />
                            </p>
                        </div>
                        <div className="image col-6">
                            <img src="./assets/images/my-photo2.png" alt="" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="section skills">
                <div className="container">

                    <h1 className="section-title">
                        <span className="span">#</span>skills
                    </h1>


                    <div className="card-wrapper">

                        <div className="card-list">
                            <p className="card-subtitle">Tools</p>
                            <div className="card-details">
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
                                </ul>
                            </div>
                        </div>

                        <div className="card-list">
                            <p className="card-subtitle">Languages</p>
                            <div className="card-details">
                                <ul>
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        PHP
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card-list">
                            <p className="card-subtitle">Databases</p>
                            <div className="card-details">
                                <ul>
                                    <li>
                                        SQLite PostgreSQL
                                    </li>
                                    <li>
                                        MySQL
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="section favorite" style={{ paddingBottom: "148px" }}>
                <div className="container">

                    <h1 className="section-title">
                        <span className="span">#</span>my-fun-facts
                    </h1>

                    <div className="content" style={{ marginBottom: "24px" }}>

                        <div className="list col-8">
                            <ul>
                                <li>
                                    <p>I like summer more than winter</p>
                                </li>
                                <li>
                                    <p>I often share the logic with my friends</p>
                                </li>
                                <li>
                                    <p>I like coding</p>
                                </li>
                                <li>
                                    <p>I like <span className="white">noodles</span> and <span className="white">pecel</span></p>
                                </li>
                                <li>
                                    <p>I was in Bekasi, Indonesian</p>
                                </li>
                                <li>
                                    <p>My favorite movie is Shallahudin Al-Ayyubi</p>
                                </li>
                                <li>
                                    <p>I don&apos;t have any siblings</p>
                                </li>
                            </ul>
                        </div>

                        <div className="image">
                            <img src="./assets/images/icons/groupdl.svg" alt="" />
                        </div>

                    </div>

                </div>
            </section>

        </Layout>
    )
}
