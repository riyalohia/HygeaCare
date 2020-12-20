import React from 'react';
import UnderConstruction from '../lib';
import logo from './HygeaCareLogo.png';
import background from './background.jpg';

const App = () => (
  <UnderConstruction
    background={{
      image: background,
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '0'
      }
    }}
    logo={{
      src: logo,
      alt: 'logo',
      style: {
        width: '200px'
      }
    }}
    description={{
      text: 'Our website is under construction. We\'ll be here soon, stay tuned.',
      style: {
        maxWidth: '440px',
        color: '#120359',
        fontFamily: 'Montserrat',
      }
    }}
    subscribe={{
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      onSubmit: (value) => {
        console.log('user typed email :', value);
      }
    }}
    links={[
      {
        url: 'https://www.linkedin.com/company/hygeacare/',
        image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
      },
      {
        url: 'mailto:jindalnamitjindal@gmail.com',
        image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
      },
    ]}
  />
);

export default App;
