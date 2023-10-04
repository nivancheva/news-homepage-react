import './App.css'
import imageWebDsktop from './images/image-web-3-desktop.jpg'
import imageWebMobile from './images/image-web-3-mobile.jpg'
import logo from './images/logo.svg';
import iconMenu from './images/icon-menu.svg';
import iconMenuClose from './images/icon-menu-close.svg';
import gamingImg from './images/image-gaming-growth.jpg';
import laptopImg from './images/image-top-laptops.jpg';
import pcsImg from './images/image-retro-pcs.jpg';

function App() {
  return (
    <>
      <nav className='flex-container'>
        <img src={logo}/>
        <button className='hamburger'><img src={iconMenu}/></button>
      </nav>
      <picture className='imageWeb'>
          <source srcSet={imageWebDsktop} media="(min-width:900px)"/>
          <img src={imageWebMobile}/>
      </picture>

      <main>
        <div>
          <h1>The Bright Future of Web 3.0?</h1>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className='button'>Read more</button>
        </div>

        <div className='news-section'>
          <h2>New</h2>
          <div>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div>
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <div>
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>

        <div className='grid-container'>
          <div>
            <img src={pcsImg}/>
            <div>
              <p>01</p>
              <h4>Reviving Retro PCs</h4>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div>
            <img src={laptopImg}/>
            <div>
              <p>02</p>
              <h4>Top 10 Laptops of 2022</h4>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div>
            <img src={gamingImg}/>
            <div>
              <p>03</p>
              <h4>The Growth of Gaming</h4>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
