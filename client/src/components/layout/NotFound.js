import React from "react";
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center" style={{ position: 'absolute', width: '320px', minWidth: '320px', top: '50%', left: '50%', transform: 'translate(-53%, -50%)', letterSpacing: '2px'}}>
      <div className="code-area p-3 rounded" style={{ backgroundColor: '#101071'}}>
        <span style={{ color: "#7647DE", fontStyle: "italic" }}>
          {"// 404 page not found."}
        </span>
        <span>
          <span style={{ color: "#F5F552" }}>{'if '}</span><span style={{ color: '#F5F552'}}>(</span>
          <span style={{ color: "#F5F552" }}>!</span>
          <span style={{ color: "#D84CF3" }}>found</span><span style={{ color: '#F5F552'}}>)</span>
          <span style={{ color: '#F5F552'}}>{' {'}</span>
        </span>
        <span>
          <span style={{ paddingLeft: "15px", color: "#D84CF3" }}>
            <i style={{ width: "10px", display: "inline-block" }}></i>console<span>.</span><span style={{ color: '#68F5F2' }}>log</span>
          </span>
          <span>
          <span style={{ color: '#F5F552'}}>(</span><span style={{ color: "#a6a61f" }}><Link style={{ color: '#EFA954' }} to="/">"Click me!"</Link></span><span style={{ color: '#F5F552'}}>)</span><span style={{ color: 'white'}}>;</span>
          </span>
          <span style={{ display: "block", color: '#F5F552' }}>{"}"}</span>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
