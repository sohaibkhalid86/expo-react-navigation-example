import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SecondScreen({ route }) {

    const navigation = useNavigation();
    const { name } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Second Screen</Text>
        <Text>Name: {name}</Text>
        <Button title="Go to Home Screen" onPress={() => navigation.goBack()} />
      </View>
    );
  }