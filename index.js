import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Map';
import './style.css';

const locations = [
  {
    name: "Oslo",
    lat: 59.923043,
    lng: 10.752839
  },
  {
    name: "Stockholm",
    lat: 59.339025,
    lng: 18.065818
  },
  {
    name: "Copenhagen",
    lat: 55.675507,
    lng: 12.574227
  },
  {
    name: "Berlin",
    lat: 52.521248,
    lng: 13.399038
  },
  {
    name: "Paris",
    lat: 48.856127,
    lng: 2.346525
  }
];

function App() {
  return (
    <div>
      <Map
        center={{ lat: 55.2179759, lng: 21.8039645 }}
        zoom={4}
        locations={locations}
      />
    </div>
  );
}

render(<App />, document.getElementById('root'));
