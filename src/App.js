import './App.css';

import kepka from './img/foto.png'
import image1 from  './img/111.png'
import image2 from  './img/222.png'
import image3 from  './img/333.png'


function App() {
  return (
      <div>
        <div className="wrapper">
          <div className="container">
            <div className="main">
              <div className="mainKrug"></div>
              <div className="mainImage">
                <img src={kepka} alt="photo"/>
              </div>

              <div className="mainBlocks">
                <div className="blockOne">
                  <div className="blockText">
                    <h2>Supreme</h2>
                    <h4>Liberty</h4>
                    <p>5600</p>
                  </div>
                  <div className="blockImg">
                    <img src={image1} alt="photo"/>
                  </div>
                </div>
                <div className="blockOne">
                  <div className="blockText">
                    <h2>Supreme</h2>
                    <h4>Liberty</h4>
                    <p>5600</p>
                  </div>
                  <div className="blockImg">
                    <img src={image2} alt="photo"/>
                  </div>
                </div>
                <div className="blockOne">
                  <div className="blockText">
                    <h2>Supreme</h2>
                    <h4>Liberty</h4>
                    <p>5600</p>
                  </div>
                  <div className="blockImg">
                    <img src={image3} alt="photo"/>
                  </div>
                </div>
              </div>
              <div className="mainRight">
                <div className="rightText">
                  <h1>SUPREME & NEW ERA</h1>
                  <p>collaboration</p>
                  <button>Открыть каталог</button>
                </div>
              </div>

            </div>

          </div>
          <div className="cupsNumbers">
            <div className="container">
              <div className="cupsText">
                <h1>CUSTOM CUPS в цифрах</h1>
              </div>
              <div className="cupsInfo">
                <div className="infoItems">
                  <h1>12000</h1>
                  <p>проданных кепок</p>
                </div>
                <div className="infoItems">
                  <h1>9</h1>
                  <p>лет на рынке</p>
                </div>
                <div className="infoItems">
                  <h1>8500 </h1>
                  <p>довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
}

export default App;