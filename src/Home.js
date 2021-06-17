import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="45684324"
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71kLrGElbOL._AC_UY218_.jpg"
            rating={4} 
          />
          <Product
            id="1134324"
            title="Logitech MK270 Wireless Keyboard and Mouse Combo - Keyboard and Mouse Included, Long Battery Life"
            price={64.55}
            image="https://images-na.ssl-images-amazon.com/images/I/41B54aFFMOL.jpg"
            rating={3} 
          />
        </div>
        
        <div className="home__row">
          <Product
            id="645rwsdf"
            title="SAMSUNG 870 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-77E1T0B/AM)"
            price={109.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31ITAX-GoIL.jpg"
            rating={5}
          />
          <Product
            id="8432184"
            title="NETGEAR Nighthawk Smart Wi-Fi Router, R6700 - AC1750 Wireless Speed Up to 1750 Mbps | Up to 1500 Sq Ft Coverage & 25 Devices | 4 x 1G Ethernet and 1 x 3.0 USB Ports"
            price={59.99}
            image="https://m.media-amazon.com/images/I/61FA9BbugzL._AC_UL320_.jpg"
            rating={4} 
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
