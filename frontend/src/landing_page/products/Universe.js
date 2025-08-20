import React from 'react';
function Universe() {
    return ( 
        <div className="container ">
          <div className="row mt-5 text-center">
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
          
    
      <div className="col-4 p-3 mt-5"> 
        <img className="product-logo" src='media/images/zerodhaFundhouse.png'></img>
        <p className='text-muted text-small'> Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
      </div>
      <div className="col-4 p-3 mt-5"> 
        <img className="product-logo" src='media/images/sensibull-logo.svg'></img>
        <p className='text-muted text-small'> Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
      </div>
      <div className="col-4 p-3 mt-5"> 
        <img className="product-logo" src='media/images/tijori.svg'></img>
        <p className='text-muted text-small'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.</p>
      </div>

      <div className="col-4 p-3 mt-5"> 
        <img className="product-logo" src='media/images/streakLogo.png'></img>
        <p className='text-muted text-small'> Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
      </div>
      <div className="col-4 p-3 mt-5"> 
        <img className="product-logo" src='media/images/smallcaseLogo.png'></img>
        <p className='text-muted text-small'> Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
      </div>
      <div className="col-4 p-3 mt-5"> 
        <img className="product-logo" src='media/images/dittoLogo.png'></img>
        <p className='text-muted text-small'>Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
      </div>
  <button className='p-3 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%",margin: "0 auto"}}> Signup Now </button>

      </div>
    </div>
     );
}

export default Universe;