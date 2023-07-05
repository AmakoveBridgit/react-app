import React from "react";
import './style.css'

const Introduction=() =>{
    return (
        <div className="main">
            <h1 className="heading">What I have learnt about ReactJS</h1>
            <p>It has reusable components</p>
            <p>The writing format is JSX</p>
            <p>It is fast</p>
           {/* <h1>Fetching data using API's </h1> */}
            <p> JSX is a syntax extension for Javascript</p>
            <p>React is a library for building user interface</p>
            <p>It was developed by facebook</p>
            <h1 className="heading"> API's</h1>
            <p>XMLHttpRequest is a built-in browser object that allows <br></br> 
                to make HTTP requests in JavaScript.</p>

                <h1 className="heading">Components</h1>
                <p>Components are part of a user interface</p>
                <p>They are reusable and can be nested inside other components</p>
                <h2>Types of Components</h2>
                <p>
                   <img id="image" src="/images/react.png"/>
                </p>


                <ul>
                    <li>Stateless Functional components</li>
                    <li>Stateless Class components</li>

                </ul>
    

        </div>


    );

   
};

export default Introduction;