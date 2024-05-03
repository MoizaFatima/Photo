import React, { useState } from 'react';
import { View, TouchableOpacity, Text,StyleSheet ,Modal} from 'react-native';
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper';

function AppWp({ URL }) {
  const [editModalVisible, setEditModalVisible] = useState(true);

  const handleEdit = () => {
    setEditModalVisible(!editModalVisible);
  };
  const callback = res => {
    console.log('Response: ', res);
  };

  const setWallpaper = () => {
   ManageWallpaper.setWallpaper(
      {
        uri:  URL ,
      },
      callback,
      TYPE.HOME,
    );
  };
  const setWallpaperL = () => {
    ManageWallpaper.setWallpaper(
       {
         uri:  URL ,
       },
       callback,
       TYPE.HOME,
     );
   };

    return (
      <Modal
      animationType="slide"
      transparent={true}
      visible={editModalVisible}
      onRequestClose={() => setEditModalVisible(!editModalVisible)}
    >
      <View style={styles.modalContainer}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.editOption} onPress={setWallpaper}>
          <Text>Set on home Screen</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.editOption} onPress={handleEdit}>
          <Text>Back</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'column', 
      width: '90%',
      height:'15%',
    },
    editOption: {
      flex: 1, 
      padding: 15,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      color: '#000', 
    },
  });
  

export default AppWp;