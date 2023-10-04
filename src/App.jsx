import './App.css'
import imageWebDsktop from './images/image-web-3-desktop.jpg'
import imageWebMobile from './images/image-web-3-mobile.jpg'
import logo from './images/logo.svg';
import iconMenu from './images/icon-menu.svg';
import iconMenuClose from './images/icon-menu-close.svg';
import { useState } from 'react';

const topics = [
  {
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    image: "image-retro-pcs.jpg"
  },
  {
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
    image: "image-top-laptops.jpg"
  },
  {
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    image: "image-gaming-growth.jpg"
  }
];

const menuLinks = [
  "Home",
  "New",
  "Popular",
  "Trending",
  "Categories"
];
const news = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
  }
];

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

  return (
    <div className='wrapper'>
      <nav className='container nav-container'>
        <div className='flex-container nav'>
          <img src={logo}/>
          <ul className={ `nav-bar ${menuVisible ? "" : "mobile-menu-hidden"} `}>
            {menuLinks.map((menuLink, idx) => {
              return (
                <li key={idx}><a className='links'>{menuLink}</a></li>
              );
            })}
          </ul>
          <div>
            {
              <button onClick={toggleMenu} className={menuVisible ? "menuClose" : "hamburger"}>
                <img src={menuVisible ? iconMenuClose : iconMenu}/>
              </button>
            }         
          </div>
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
            {news.map((newsItem, idx) => {
              return (
                <div key={idx} className='decoration'>
                  <a className='links links-new' href='#'><h3>{newsItem.title}</h3></a>
                  <p>{newsItem.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className='container articles'>
          {topics.map((topic, idx) => {
            return (
              <div key={idx} className='flex-container articles-data'>
                <img className='articles-img' src={`./images/${topic.image}`}/>
                <div className='article'>
                  <p className='num'>{pad(idx + 1, 2)}</p>
                  <a className='links' href='#'><h4>{topic.title}</h4></a>
                  <p className='article-description'>{topic.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>    
    </div>
  )
}

export default App
