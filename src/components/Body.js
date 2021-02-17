import React from 'react'
import './app.css';
import Sidebar from './Sidebar.js';
import Contentwrapper from './Contentwrapper.js';

function Body () {
    return (
        <div id="wrapper">

		    <Sidebar />
		
            <Contentwrapper />

	    </div>
    )
}
export default Body