import React from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title={`Contact`}>

      <section className="section contacts">
          <div className="container">
  
  
              <h1 className="section-title">
                  <span className="span">#</span>contacts
              </h1>
  
              <div className="content">
  
                  <p className="text">
                      I&apos;m interested in freelance opportunities. However, if you have other request or question, don&apos;t hesitate to contact me
                  </p>
  
                  <div className="wrapper">
                      <div className="support">
                          <h4>Support me here</h4>
                          <ul>
                              <li>
                                  <img src="./assets/images/icons/discord.svg" alt="" />
                                  <a href="#">!DunyaGymers23#4432</a>
                              </li>
                          </ul>
                      </div>
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
  
              
          </div>
      </section>

      <section className="section allmedia" style={{ paddingBottom: "69px" }}>
          <div className="container">
  
              <h1 className="section-title"><span className="span">#</span>all-media</h1>
  
              <div className="content">
                  <ul className="socials">
                      <li>
                          <img src="./assets/images/icons/twitter.svg" alt="" />
                          <span className="gray">@AdnanErlansyah</span>
                      </li>
                  </ul>
              </div>
  
          </div>
      </section>
      
    </Layout>
  )
}
