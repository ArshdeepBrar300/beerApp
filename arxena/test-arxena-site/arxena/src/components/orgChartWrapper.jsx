import React, { useEffect, useRef } from 'react';
import Login from './Login';
const OrgChartWrapper = () => {
    const orgChartRef = useRef();
    useEffect(() => {
        // Load orgchart.js file dynamically
        const script = document.createElement('script');
        script.src = '../../../static/js/orgchart.js'; // Replace with the actual path
        script.async = true;
        script.onload = () => {
            console.log('orgchart.js loaded successfully');
            orgChartRef.current = window.orgChart;
            console.log(orgChartRef)
        };
        document.body.appendChild(script);

        // Cleanup on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="orgChartContainer">  <Login /></div>; // Replace with the actual container element used by orgchart.js
};

export default OrgChartWrapper;
