import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

//ketto props
const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={styles.container}>
      {/* Sima header szoveg */}
      <Text style={styles.headerTextStyle}>{headerText}</Text>
      {/* ez egy harang ikon */}
      <FontAwesome name={headerIcon} size={24} color="#f96163" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  headerTextStyle: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  }
})