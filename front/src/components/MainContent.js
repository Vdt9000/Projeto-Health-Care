import React from 'react';
import './Bordas.css';
import './Chat.css';
import '@fortawesome/fontawesome-free/css/all.min.css'


function MainContent() {
  return (
    <main>
      <ul id="myList">
    <li><i class="fa-solid fa-house"></i></li> 
      <li><i class="fa-solid fa-comment"></i></li>
         <li><i class="fa-solid fa-heart-pulse"></i></li>
         <li><i class="fa-solid fa-user-nurse"></i></li>
         <li><i class="fa-solid fa-gear"></i></li>
      </ul>
      <ul id="usuario">
        <li><i class="fa-solid fa-user"></i></li>
      </ul>
      <ul id="myList">
   
  </ul>
  <div id="usuario-container">
    <ul id="usuario">
     
    </ul>
  </div>
      
          </main>
  );
}

export default MainContent;
