import React from 'react'
import './app.css';
import Topbar from './Topbar.js';
import Pagecontent from './Pagecontent.js';
import Footer from './Footer.js';

function Contentwrapper () {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
			<div id="content">

				<Topbar />

				<Pagecontent />
				
			</div>

    		<Footer />

		</div>
    )
}
export default Contentwrapper