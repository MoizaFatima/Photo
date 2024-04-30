import React, { useState, useEffect } from 'react';
import { ToastAndroid, StyleSheet } from 'react-native';

const FavoriteComponent = ({ uri }) => {
  const [favoriteURIs, setFavoriteURIs] = useState([]);

  useEffect(() => {
    const isAlreadyFavorite = checkIfAlreadyFavorite(uri);
    if (!isAlreadyFavorite) {
      setFavoriteURIs([...favoriteURIs, uri]);
      console.log(`Added ${uri} to favorites`);
      ToastAndroid.show('Added to favorites', ToastAndroid.SHORT);
    } else {
      console.log(`Image ${uri} is already in favorites`);
      ToastAndroid.show('Image is already in favorites', ToastAndroid.SHORT);
    }
  }, [uri]);
  const checkIfAlreadyFavorite = (uri) => {
    return favoriteURIs.includes(uri);
  };

  return null;
};

export default FavoriteComponent;