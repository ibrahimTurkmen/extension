

/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/Body/Body'
import  Header  from './components/Header/Header';
import  Footer  from './components/Footer/Footer';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import "./content.css";
class Main extends React.Component {
    render() {
        return (
            <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
              <FrameContextConsumer>
               {
               // Callback is invoked with iframe's window and document instances
                   ({document, window}) => {
                      // Render Children
                      return (
                         <div className={'my-extension'}>
                            <Header />
                            <Body />
                            <Footer />
                         </div>
                      )
                   }
                }
               </FrameContextConsumer>
            </Frame>
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
app.style.display = "none";


// Bu fonksiyon, mesaj alındığında çalışacak olan fonksiyondur.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    console.log("content.js: clicked_browser_action message received");
    toggle();
  }
  return true;
});

  
  // Diğer kodlar ve bileşen render işlemleri...
  
  // Toggle fonksiyonu, ekrandaki bileşenin görünürlüğünü değiştirir.
  function toggle() {
    const appElement = document.getElementById('my-extension-root');
  
    if (appElement.style.display === 'none') {
      appElement.style.display = 'block';
    } else {
      appElement.style.display = 'none';
    }
  }