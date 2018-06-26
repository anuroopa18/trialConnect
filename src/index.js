import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import '../node_modules/jquery/src/jquery'
import '../node_modules/bootstrap/js/dist/carousel'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/font-awesome/css/font-awesome.css'
import App from "./App";
import './css/index.css'
import '../src/assets/web/assets/mobirise-icons/mobirise-icons.css'
import '../src/assets/dropdown/css/style.css'
import '../src/assets/tether/tether.min.css'
import '../src/assets/socicon/css/styles.css'
import '../src/assets/animatecss/animate.min.css'
import '../src/assets/theme/css/style.css'
import '../src/assets/mobirise/css/mbr-additional.css'
import '../node_modules/jquery/dist/jquery.min'
import '../node_modules/popper.js/dist/popper.min'
import '../node_modules/smooth-scroll/dist/smooth-scroll'
import '../node_modules/dropdown-js/dist/dropdown.min'
import '../node_modules/tether/dist/js/tether.min'
import '../node_modules/jquery-touchswipe/jquery.touchSwipe.min'
import '../node_modules/bootstrap-carousel-swipe/carousel-swipe'
import '../node_modules/jquery-viewport-checker/src/jquery.viewportchecker'
import './css/index.css'
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,
    document.getElementById('root')
);