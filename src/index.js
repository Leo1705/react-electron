import React from 'react';
import ReactDOM from 'react-dom/client';

//front-end code
function btn1Click(){
window.api.button1Click("You clicked Button 1");
document.getElementById("info23").innerHTML = "You Clicked Button 1";

}
function btn2Click(){
   window.api.button2Click("You clicked Button 2");
}
function btn3Click(){
  window.api.button3Click("You Clicked Button 3");
}
function App() {
  return (
    <div>
        <p id = "info23"> </p>
        <button onClick={btn1Click}> Button 1 </button>
        <button onClick={btn2Click}> Button 2 </button>
        <button onClick={btn3Click}> Button 3 </button>
   

        </div>



  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <App />

);
