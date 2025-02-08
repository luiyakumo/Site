import React from 'react';

export default function Writings({ name }){
  return(
    <div className="intro" style={{ color: '#00f2ff', textAlign: 'center' }}>
      <ul style={{ 
        listStyleType: 'none', 
        padding: 0,
        backgroundColor: 'transparent'
      }}>
        <li style={{ marginTop: "-16px", fontSize: "20px" }}>
        Web Developer | Designer | Creative  <br/> Problem Solve 
        </li>
        <li style={{ marginTop: "8px", fontSize: "20px" }}>
        Passionate about creating innovative web solutions</li>
        <li style={{ marginTop: "10px", fontSize: "20px" }}>
          Skilled in modern web technologies

      <p>Seeking exciting opportunities in web development</p>
      </li>
      </ul>
    </div>
  );
}