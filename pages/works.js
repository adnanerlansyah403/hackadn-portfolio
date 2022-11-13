import React from 'react'
import Layout from '../components/Layout'

export default function Works() {
  return (
    <Layout title={`My Works`}>
            
      <section className="section projects">
          <div className="container">

              <h1 className="section-title">
                  <span className="span">/</span>projects
              </h1>
              <p className="section-subtitle">
                  List of my projects
              </p>
              
          </div>
      </section>

      <section className="allproject" style={{ paddingBottom: "173px" }}>
          <div className="container">

              <div style={{ marginBottom: "81px" }}>
                  <h1 className="section-title">
                      <span className="span">#</span>complete-apps
                  </h1>
                  
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

              <div>
                  <h1 className="section-title">
                      <span className="span">#</span>small-apps
                  </h1>
                  
                  <div className="card-wrapper">

                      <div className="card-list col-4">
                          <p className="card-subtitle">HTML CSS REACTJS GRAPHSQL</p>
                          <div className="card-details">
                              <h1 className="card-title">
                                  Graph CMS Blog
                              </h1>
                              <p className="card-text">
                                  CMS Blog menggunakan layanan GraphSQL
                              </p>
                              <div className="card-button">
                                  <a href="https://graphcmsblog-seven.vercel.app" className="btn btn-primary">
                                      Live &lt;~&gt;
                                  </a>
                                  {/* <a href="#" className="btn btn-secondary">
                                      Cached &gt;=
                                  </a> */}
                              </div>
                          </div>
                      </div>
                      
                      <div className="card-list col-4">
                          <p className="card-subtitle">HTML CSS REACTJS</p>
                          <div className="card-details">
                              <h1 className="card-title">
                                  Realstore Estate
                              </h1>
                              <p className="card-text">
                                  Website untuk info mengenai harga kamar hotel
                              </p>
                              <div className="card-button">
                                  <a href="https://realtor-estate-iota.vercel.app/" className="btn btn-primary">
                                      Live &lt;~&gt;
                                  </a>
                              </div>
                          </div>
                      </div>

                      <div className="card-list col-4">
                          <p className="card-subtitle">HTML CSS REACTJS</p>
                          <div className="card-details">
                              <h1 className="card-title">
                                  Tiktik Application
                              </h1>
                              <p className="card-text">
                                  Cloning Tiktok Application versi sederhana nya
                              </p>
                              <div className="card-button">
                                  <a href="https://tiktik-application.vercel.app/" className="btn btn-secondary">
                                      Live &gt;=
                                  </a>
                              </div>
                          </div>
                      </div>

                      <div className="card-list col-4">
                          <p className="card-subtitle">HTML CSS REACTJS</p>
                          <div className="card-details">
                              <h1 className="card-title">
                                  CitCat Application
                              </h1>
                              <p className="card-text">
                                  Application for citcat with other people or friends
                              </p>
                              <div className="card-button">
                                  <a href="https://citcat-hijaumuda.vercel.app/" className="btn btn-primary">
                                      Live &lt;~&gt;
                                  </a>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

          </div>
      </section>
      
    </Layout>
  )
}
