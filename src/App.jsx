import './App.css'
import imageWebDsktop from './images/image-web-3-desktop.jpg'
import imageWebMobile from './images/image-web-3-mobile.jpg'
import logo from './images/logo.svg';
import iconMenu from './images/icon-menu.svg';
import iconMenuClose from './images/icon-menu-close.svg';
import gamingImg from './images/image-gaming-growth.jpg';
import laptopImg from './images/image-top-laptops.jpg';
import pcsImg from './images/image-retro-pcs.jpg';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className='wrapper'>
      <nav className='container nav-container'>
        <div className='flex-container'>
          <img src={logo}/>
          <ul className='nav-bar'>
            <li><a className='links'>Home</a></li>
            <li><a className='links'>New</a></li>
            <li><a className='links'>Popular</a></li>
            <li><a className='links'>Trending</a></li>
            <li><a className='links'>Categories</a></li>
          </ul>
          <button className='hamburger'><img src={iconMenu}/></button>
        </div>
      </nav>    

      <main className='container grid-container'>
        <div>
          <picture className='imageWeb'>
              <source srcSet={imageWebDsktop} media="(min-width:800px)"/>
              <img src={imageWebMobile}/>
          </picture>

          <div className='container main-header'>
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className='button'>Read more</button>
            </div>
          </div>
        </div>

        <div className='news-section'>
          <h2>New</h2>
          <div className='news-section-data'>
            <div className='decoration'>
             <a className='links links-new' href='#'><h3>Hydrogen VS Electric Cars</h3></a>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className='decoration'>
              <a className=' links links-new' href='#'><h3>The Downsides of AI Artistry</h3></a>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div>
              <a className='links links-new'  href='#'><h3>Is VC Funding Drying Up?</h3></a>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>

        <div className='container articles'>
          <div className='flex-container articles-data'>
            <img className='articles-img' src={pcsImg}/>
            <div className='article'>
              <p className='num'>01</p>
              <a className='links' href='#'><h4>Reviving Retro PCs</h4></a>
              <p className='article-description'>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className='flex-container articles-data'>
            <img className='articles-img' src={laptopImg}/>
            <div className='article'>
              <p className='num'>02</p>
              <a className='links' href='#'><h4>Top 10 Laptops of 2022</h4></a>
              <p className='article-description'>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className='flex-container articles-data'>
            <img className='articles-img' src={gamingImg}/>
            <div className='article'>
              <p className='num'>03</p>
              <a className='links' href='#'><h4>The Growth of Gaming</h4></a>
              <p className='article-description'>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </main>    
    </div>
  )
}

export default App
