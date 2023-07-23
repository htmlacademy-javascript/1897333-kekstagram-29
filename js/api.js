import {addMiniatureFN} from './miniature.js';
import { serverError } from './utils.js';

const getData = () => fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      response.json().then((picturesData) => {
        addMiniatureFN(picturesData);
      });
    } else {
      throw new Error;
    }
  }).catch(serverError);

export {getData};
