// import _ from 'lodash';
import '../css/style.css';
import { displayMeals, setHeaderLogo } from './utils.js';

window.onload = () => {
  setHeaderLogo();
  displayMeals();
};
