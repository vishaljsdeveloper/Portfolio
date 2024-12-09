import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return effect();
  }, []);
  const effect = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  };
  useEffect(() => {
    return effect();
  }, []);
  return (
    <>
      <div className='container skill-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                '',
                '& ',
                '',
                'E',
                'x',
                'e',
                'p',
                'e',
                'r',
                'i',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <p className='skill-text'>
            Since the beginning of my journey as a full-stack developer and trainer nearly 8
            years ago, I did work for reputed companies like Flipkart and Amazon, did remote work for agencies, consulted for
            startups, and collaborated with talented people to create web
            products for both business and customer use.<br /> <br />I created successfully
            responsive website that is fast, easy to use, and built with the best
            practices. The main area of my expertise is front-end development,
            HTML, CSS, JS, RECAT, REDUX, building small and medium web apps, custom
            plugin, features, animations, and coding interactive layouts.<br />
          </p>
        </div>
        <div className='exp-bar'>
          <ul className='progress-bar'>
            <li >
            <p>Frontend</p>
	           	<Progress done="100"/>
            </li>
            <li >
            <p>React</p>
	           	<Progress done="100"/>
            </li>
            <li>
            <p>Backbend</p>
	           	<Progress done="80"/>
            </li>
            <li>
            <p>Node / Mongo DB</p>
	           	<Progress done="80"/>
            </li>
          </ul>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Skill;
