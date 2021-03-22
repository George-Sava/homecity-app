import ImageGallery from 'react-image-gallery';
import React from "react";
import './App.css';

const images = [
  {
    original: 'https://cdn.britannica.com/57/151257-050-7B82A75D/Mihail-Eminescu-Bust-front-theatre-Romania-Focsani.jpg',
    thumbnail: 'https://cdn.britannica.com/57/151257-050-7B82A75D/Mihail-Eminescu-Bust-front-theatre-Romania-Focsani.jpg',
  },
  {
    original: 'https://media-cdn.tripadvisor.com/media/photo-c/2560x500/10/7d/55/bb/the-beautiful-theater.jpg',
    thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-c/2560x500/10/7d/55/bb/the-beautiful-theater.jpg',
  },
  {
    original: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Union_Square%2C_Focsani%2C_Romania.jpg',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Union_Square%2C_Focsani%2C_Romania.jpg/',
  },
  {
    original: 'https://pix10.agoda.net/geo/city/20028/94ce79985a98303684aa3ceff66e3b0d.jpg?s=1920x822',
    thumbnail: 'https://pix10.agoda.net/geo/city/20028/94ce79985a98303684aa3ceff66e3b0d.jpg?s=1920x822',
  },
  {
    original: 'https://media-cdn.tripadvisor.com/media/photo-s/10/7d/48/87/the-theater-from-focsani.jpg',
    thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-s/10/7d/48/87/the-theater-from-focsani.jpg',
  },
];

export default class MyGallery extends React.Component {
  render() {
    return (
    <div className="mt-2">
        <ImageGallery items={images} />
    </div>
    );
  }
}