import React, { useEffect } from 'react'
import Layout from '../components/Layout'

export default function Works() {

    useEffect(() => {
        if(typeof window !== undefined) {
            // external js: isotope.pkgd.js
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.element-item',
                layoutMode: 'fitRows',
            });
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
                // show if name ends with -ium
                ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
                }
            };
            // bind filter button click
            $('.filters-button-group').on( 'click', 'button', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
                });
            });
            
        }
    }, [])

  return (
    <Layout title={`My Works`}>

            
            <section class="section projects">
                <div class="container">

                    <h1 class="section-title">
                        <span class="span">/ </span>&nbsp;projects
                    </h1>
                    <p class="section-subtitle">
                        List of my projects
                    </p>
                    
                </div>
            </section>

            <section class="allproject" style={{ paddingBottom: "173px" }}>
                <div class="container">

                    <div class="projects">
                        <h1 class="section-title">
                            <span class="span">#</span>complete-apps
                        </h1>

                        <div class="tabs-wrapper filters-button-group">
                            <ul class="tabs-list button-group">
                                <li class="tabs-item">
                                    <button class="btn btn-secondary is-checked" style={{ background: "transparent" }} data-filter="*">All</button>
                                </li>
                                <li class="tabs-item">
                                    <button class="btn btn-secondary" style={{ background: "transparent" }} data-filter=".html">HTML</button>
                                </li>
                                <li class="tabs-item">
                                    <button class="btn btn-secondary" style={{ background: "transparent" }} data-filter=".css">CSS</button>
                                </li>
                                <li class="tabs-item">
                                    <button class="btn btn-secondary" style={{ background: "transparent" }} data-filter=".js">JS</button>
                                </li>
                                <li class="tabs-item">
                                    <button class="btn btn-secondary" style={{ background: "transparent" }} data-filter=".nextjs">NextJS</button>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="card-wrapper grid">

                            <div class="card-list element-item col-4 html css js" data-category="transition">
                                <figure class="card-img">
                                    <img src="./assets/images/foodfast.png" alt="" class="img-cover" />
                                </figure>
                                <p class="card-subtitle">HTML CSS JS</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        FoodFast
                                    </h1>
                                    <p class="card-text">
                                        Website untuk menjual makanan online
                                    </p>
                                    <div class="card-button">
                                        <a href="#" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-list element-item col-4 html css js" data-category="transition">
                                <figure class="card-img">
                                    <img src="./assets/images/gamemax.png" alt="" class="img-cover" />
                                </figure>
                                <p class="card-subtitle">HTML CSS JS</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        Gamemax
                                    </h1>
                                    <p class="card-text">
                                        Website Gaming Online
                                    </p>
                                    <div class="card-button">
                                        <a href="#" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-list element-item col-4 html css js" data-category="transition">
                                <figure class="card-img">
                                    <img src="./assets/images/anonecommerce.png" alt="" class="img-cover" />
                                </figure>
                                <p class="card-subtitle">HTML CSS JS</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        Anon Ecommerce
                                    </h1>
                                    <p class="card-text">
                                        Website Kosmetik Online
                                    </p>
                                    <div class="card-button">
                                        <a href="#" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-list element-item col-4 html css" data-category="transition">
                                <figure class="card-img">
                                    <img src="./assets/images/resultrondovision.png" alt="" class="img-cover" />
                                </figure>
                                <p class="card-subtitle">HTML CSS</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        Rondovision E-commerce
                                    </h1>
                                    <p class="card-text">
                                        Website E-commerce
                                    </p>
                                    <div class="card-button">
                                        <a href="#" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-list element-item col-4 html css" data-category="transition">
                                <figure class="card-img">
                                    <img src="./assets/images/resultntfx.png" alt="" class="img-cover" />
                                </figure>
                                <p class="card-subtitle">HTML CSS </p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        NTFX
                                    </h1>
                                    <p class="card-text">
                                        Website Design
                                    </p>
                                    <div class="card-button">
                                        <a href="#" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-list element-item col-4 html css nextjs" data-category="transition">
                                <figure class="card-img">
                                    <img src="./assets/images/simpleecommerce.png" alt="" class="img-cover" />
                                </figure>
                                <p class="card-subtitle">HTML CSS NEXTJS </p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        Simple Ecommerce
                                    </h1>
                                    <p class="card-text">
                                        Website E-commerce Sederhana
                                    </p>
                                    <div class="card-button">
                                        <a href="https://app.netlify.com/sites/webstoreordinary" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div style={{ paddingTop: "81px" }}>
                        <h1 class="section-title">
                            <span class="span">#</span>small-apps
                        </h1>
                        
                        <div class="card-wrapper">
    
                            <div class="card-list col-4">
                                <p class="card-subtitle">HTML CSS REACTJS GRAPHSQL</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        Graph CMS Blog
                                    </h1>
                                    <p class="card-text">
                                        CMS Blog menggunakan layanan GraphSQL
                                    </p>
                                    <div class="card-button">
                                        <a href="https://graphcmsblog-seven.vercel.app" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                        <a href="#" class="btn btn-secondary">
                                            Cached &gt;=
                                        </a> 
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card-list col-4">
                                <p class="card-subtitle">HTML CSS REACTJS</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        Realstore Estate
                                    </h1>
                                    <p class="card-text">
                                        Website untuk info mengenai harga kamar hotel
                                    </p>
                                    <div class="card-button">
                                        <a href="https://realtor-estate-iota.vercel.app/" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                            <div class="card-list col-4">
                                <p class="card-subtitle">HTML CSS REACTJS</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        Tiktik Application
                                    </h1>
                                    <p class="card-text">
                                        Cloning Tiktok Application versi sederhana nya
                                    </p>
                                    <div class="card-button">
                                        <a href="https://tiktik-application.vercel.app/" class="btn btn-secondary">
                                            Live &gt;=
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                            <div class="card-list col-4">
                                <p class="card-subtitle">HTML CSS REACTJS</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        CitCat Application
                                    </h1>
                                    <p class="card-text">
                                        Application for citcat with other people or friends
                                    </p>
                                    <div class="card-button">
                                        <a href="https://citcat-hijaumuda.vercel.app/" class="btn btn-primary">
                                            Live &lt;~&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                            <div class="card-list col-4">
                                <p class="card-subtitle">HTML CSS NEXTJS</p>
                                <div class="card-details">
                                    <h1 class="card-title">
                                        My Lyrics
                                    </h1>
                                    <p class="card-text">
                                        Application for songs
                                    </p>
                                    <div class="card-button">
                                        <a href="https://app.netlify.com/sites/my-lyrics" class="btn btn-primary">
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
