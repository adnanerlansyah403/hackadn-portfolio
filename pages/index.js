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
                      <p className="text-md">Dia membangun sebuah website yang responsive dan penuh dengan functionallity dan inovatif</p>

                      <a href="mailto:adnanerlansyah403@gmail.com" className="btn btn-primary">
                          Contact me !!
                      </a>
                  </div>

                  <div className="img col-4">
                      <figure>
                          <img src="./assets/images/effect-my-photo.png" className="img-cover" alt="" />
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
                      <h2 className="text-lg">
                          With great power comes great electricity bill
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
                                  <img src="./assets/images/foodfast.png" alt="" className="img-cover" />
                              </figure>
                              <p className="card-subtitle">HTML CSS JS</p>
                              <div className="card-details">
                                  <h1 className="card-title">
                                      FoodFast
                                  </h1>
                                  <p className="card-text">
                                      Website untuk menjual makanan online
                                  </p>
                                  <div className="card-button">
                                      <a href="#" className="btn btn-primary">
                                          Live &lt;~&gt;
                                      </a>
                                      <a href="#" className="btn btn-secondary">
                                          Cached &gt;=
                                      </a>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="card-list col-4">
                              <figure className="card-img">
                                  <img src="./assets/images/gamemax.png" alt="" className="img-cover" />
                              </figure>
                              <p className="card-subtitle">HTML CSS JS</p>
                              <div className="card-details">
                                  <h1 className="card-title">
                                      Gamemax
                                  </h1>
                                  <p className="card-text">
                                      Website untuk gaming
                                  </p>
                                  <div className="card-button">
                                      <a href="#" className="btn btn-primary">
                                          Live &lt;~&gt;
                                      </a>
                                  </div>
                              </div>
                          </div>

                          <div className="card-list col-4">
                              <figure className="card-img">
                                  <img src="./assets/images/anonecommerce.png" alt="" className="img-cover" />
                              </figure>
                              <p className="card-subtitle">HTML CSS JS</p>
                              <div className="card-details">
                                  <h1 className="card-title">
                                      AnonEcommerce
                                  </h1>
                                  <p className="card-text">
                                      Website Jual Beli Barang Online
                                  </p>
                                  <div className="card-button">
                                      <a href="#" className="btn btn-primary">
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
                              <h4>Databases</h4>
                              <ul>
                                  <li>
                                      SQLite PostgreSQL
                                  </li>
                                  <li>
                                      Mongo
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
                              </ul>
                          </div>
                          
                          <div className="item col-4">
                              <h4>Other</h4>
                              <ul>
                                  <li>
                                      EJS SCSS
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
                              Hello, i&apos;m Adnan E! <br /> <br />
  
                              Nama saya Adnan Erlansyah dari Bekasi, Indonesia. Saya bisa membangun sebuah website yang penuh dengan fungsi-fungsi untuk layanan user. <br /> <br />
  
                              Bisa mengubah website menjadi lebih user-friendly dan juga penuh dengan functionallity yang sering atau akan di gunakan oleh banyak user.
                          </p>
  
                          <a href="#" className="btn btn-primary">
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
                          Saya sangat suka sekali peluang menjadi freelance. Tapi bagaimanapun, jika anda memiliki pertanyaan atau sebuah permintaan untuk membangun sebuah website. Maka anda bisa hubungi saya lebih lanjut di kontak yang sudah tertera di bawah ini.
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
