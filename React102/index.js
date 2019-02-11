import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media'

const app = document.getElementById('app');
const holaMundo = <h1>Hola mundo!!</h1>;
render(<Media type="video" title="¿Que es responsive Design?" author="Ness" image="./images/covers/responsive.jpg"/>, app);