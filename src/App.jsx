import React from 'react';
import './App.css';
import Profile from './Profile';
import Writings from './Writings';
import RandomBackground from './Random';
import PageContent from './block';

export default function App() {
    return (
        <div className="app">
            <div className="hero"></div>
            <section className="content">
                <h1 style= {{ position: 'relative', top: '-70px',color: '#00f2ff'}}>About Me</h1>
                <Profile />
                <Writings/>
            </section>
            <div className="main-content" style={{backgroundPosition: "400px", }}>
            <section className="additional-content">
        <h2 style={{ marginTop: "0px"}}>Goals</h2>
        <p style={{ lineHeight: "2" ,fontSize: "20px",marginTop: "-5px",}} >
            <li>I want to master Unity one day.<br/></li>
            <li>Getting a good place in programming.<br/></li>
            <li>Mastering the piano.<br/></li>
            <li>I would like to be good at digital design.</li>
            </p>
    </section>
    </div>
    <section>
    <div>
    <RandomBackground/>
    </div>
    </section>
    <section>
    <PageContent style={{ transform: 'translateX(20px) translateY(20px)' }} />
    </section>
</div>
            
    );
}