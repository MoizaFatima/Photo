import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text ,StyleSheet} from 'react-native';

const EditComponent = () => {
  const [editModalVisible, setEditModalVisible] = useState(true);

  const handleEdit = () => {
    setEditModalVisible(!editModalVisible);
  };

  const handleAddText = () => {
    // Logic for adding text
  };

  const handleAddSticker = () => {
    // Logic for adding sticker
  };

  const handleAddCrop = () => {
    // Logic for adding crop
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
        <TouchableOpacity style={styles.editOption} onPress={handleAddText}>
          <Text>Add Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editOption} onPress={handleAddSticker}>
          <Text>Emoji</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editOption} onPress={handleAddCrop}>
          <Text>Crop</Text>
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
      justifyContent: 'flex-end',
    },
    row: {
      flexDirection: 'row', // Arrange items horizontally
     
    },
    editOption: {
      flex: 1, // Equal width for all options
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
  });
  
export default EditComponent;
