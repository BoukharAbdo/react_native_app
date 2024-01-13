import React from 'react';
import { View, Text, FlatList } from 'react-native';

const MyMenu = () => {
  // Sample data for the FlatList
  const data = [
    { key: '1', name: 'Home' },
    { key: '2', name: 'Trash Casstring' },
    { key: '3', name: 'FQAS' },
    { key: '4', name: 'Nice' },
    // Add more items as needed
  ];

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
};

export default MyMenu;
