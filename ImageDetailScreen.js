import React, { useState } from 'react';
import { View, Image, StyleSheet, ToastAndroid } from 'react-native';
import { BottomNavigation, Appbar } from 'react-native-paper';
import Downloader from './Downloader';
import ShareComponent from './ShareComponent';
import EditComponent from './EditComponent';
import FavoriteComponent from './FavoriteComponent';
import AppWp from './AppWp';

const ImageDetailScreen = ({ route, navigation }) => {
  const { image, uri } = route.params;
  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (url) => {
    if (!favorites.includes(url)) {
      setFavorites([...favorites, url]);
      ToastAndroid.show('Added to Favorites', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Already in Favorites', ToastAndroid.SHORT);
    }
  };

  const handleDownload = () => {
    return <Downloader URL="https://plus.unsplash.com/premium_photo-1675629118284-c9eb039df8cd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />;
  };

  const handleShare = () => {
    return <ShareComponent message="Check out this link!" url="https://unsplash.com/photos/a-white-couch-sitting-in-a-room-next-to-a-window-txGgKTf9Aio" />;
  };
const handleEmpty=()=>{};
  const handleWallpaper = () => {
    
    return <AppWp URL="https://plus.unsplash.com/premium_photo-1675629118284-c9eb039df8cd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>;
  };

  const handleFavorites = () => {
    return <FavoriteComponent/>;// Add the current URI to favorites
  };

  const handleEdit = () => {
    return <EditComponent/>;
    // Implement edit functionality or navigate to another screen for editing
  };

  const bottomNavigationRoutes = [
    { key: 'empty', title: '', focusedIcon: 'minus' },
    { key: 'download', title: 'Download', focusedIcon: 'download' },
    { key: 'edit', title: 'Edit', focusedIcon: 'pencil' },
    { key: 'wallpaper', title: 'Wallpaper', focusedIcon: 'wallpaper' },
    
    { key: 'favorites', title: 'Favorites', focusedIcon: 'heart' },
    { key: 'share', title: 'Share', focusedIcon: 'share' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'download':
        return handleDownload();
      case 'favorites':
        return handleFavorites();
      case 'edit':
        return handleEdit();
      case 'share':
        return handleShare();
      case 'wallpaper':
        return handleWallpaper();
        case'empty':
        return handleEmpty();
      default:
        return null;
    }
  };

  const handleIndexChange = (index) => {
    setIndex(index);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleGoBack} />
        <Appbar.Content title="Image" />
      </Appbar.Header>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <BottomNavigation
        navigationState={{ index, routes: bottomNavigationRoutes }}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
        style={styles.bottomNavigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    
  },
});

export default ImageDetailScreen;
