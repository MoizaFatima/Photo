import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert, BackHandler, FlatList, TouchableOpacity } from 'react-native';
import { Appbar, Menu, Button, Card, Title, useTheme, BottomNavigation, List, IconButton } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import ImageDetailScreen from './ImageDetailScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareComponent from './ShareComponent';
import Downloader from './Downloader';
import DropdownComponent from './DropdownComponent';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        handleBackPress();
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    Alert.alert(
      'Exit App',
      'Do you really want to exit?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Exit the app
            BackHandler.exitApp();
          },
        },
      ],
      { cancelable: false }
    );

    return true;
  };

  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // Sample categories data
  const categories = [
    { id: '1', name: 'All' },
    { id: '2', name: 'Birds' },
    { id: '3', name: 'Architecture' },
    // Add more categories as needed
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setExpanded(false); // Collapse the accordion after selection
  };

  const data = [
    { id: '1', image: require('./assets/new.jpg') },
    { id: '2', image: require('./assets/new.jpg') },
    { id: '3', image: require('./assets/new.jpg') },
    { id: '4', image: require('./assets/new.jpg') },
    { id: '5', image: require('./assets/new.jpg') },
    { id: '6', image: require('./assets/new.jpg') },
    { id: '7', image: require('./assets/new.jpg') },
    { id: '8', image: require('./assets/new.jpg') },
    { id: '9', image: require('./assets/new.jpg') },
  ];

  const getImageUri = (image) => {
    if (typeof image === 'object' && image.uri) {
      return image.uri;
    } else {
      return null;
    }
  };

  const handleImagePress = (image) => {
    navigation.navigate('ImageDetail', { image: image, uri: getImageUri(image) });
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.image)}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  const handleImage = () => {
    // Implement edit functionality or navigate to another screen for editing
  };

  const handleGif = () => {
    // Implement edit functionality or navigate to another screen for editing
  };

  const handleAiImage = () => {
    <ShareComponent/>
    // Implement edit functionality or navigate to another screen for editing
  };
  const handleLanguage = () => {
    
    // Implement edit functionality or navigate to another screen for editing
  };
  const routes = [
    { key: 'images', title: 'Images', focusedIcon: 'image' },
    { key: 'gif', title: 'Gif', focusedIcon: 'file-gif-box' },
    { key: 'aiImages', title: 'AI Images', focusedIcon: 'brain' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    images: handleImage,
    gif: handleGif,
    aiImages: handleAiImage,
  });

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: 'pink' }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="menu" onPress={openMenu} />}
        >
          <Menu.Item onPress={() => {}} title="Home" />
          <Menu.Item onPress={() => {}} title="About" />
          <Menu.Item onPress={() => {}} title="Favorites" />
          <Menu.Item onPress={() => {}} title="More" />
          <Menu.Item onPress={handleBackPress} title="Exit" />
        </Menu>

        <Appbar.Content title="App Logo" />
        <Appbar.Action icon="earth" onPress={handleLanguage} />
      </Appbar.Header>

      <DropdownComponent/>

      <View style={{ flex: 6 }}>
  
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.gridContainer}
        />
      </View>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 200,
    marginVertical: 10,
    marginHorizontal:5,
  },
  categoryImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default HomeScreen;
