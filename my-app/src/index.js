import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const jsxLearning = "Hello there, I have started learning react. Today is the first day. Today I am learning JSX and JS Expression. ";

const topicTitle = "Today's Topic is JSX. What is JSX? For jsx we can write html element in Javascript code, also we can write js element is html code.  ";
const intro = "About Myself ";
const myName = "Mst. Sahida Akter"; 
const title = "Front-End Developer";


const aboutMe = "A multidisciplinary, hard-working artist who is still welldriven and coordinated.With a versatile and adaptable approach to work, I cope well with pressure and love to take on new challenges, not being afraid of learning new skills or techniques in the process.";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
  
  <h1 >{jsxLearning}</h1>
  <h2>{topicTitle}</h2>
  <h2 className='headingStyle '>{intro}</h2>
  <h3>{myName}</h3>
  <h4 className='title'>{title}</h4>
  <h4>{aboutMe}</h4>
 </div>
 
);


