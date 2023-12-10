import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
//hogy ne csuszon ra a allapotsavra, ahol az ido van es ezek
import Constants from "expo-constants";
import SearchFilter from '../components/SearchFilter';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
    {/* header szoveg + a csengo ikon */}
      <Header headerText={"Hi, John"} headerIcon={"bell-o"} />
      {/* importalt SearchFilter aminek atadjuk majd a placehorderjet propsba */}
      <SearchFilter icon="search" placehorder={"enter your favourite recipe"} />
    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,//ez van SafeAreaView helyett
    flex: 1,
    marginHorizontal: 16,//k;t oldalt behuzza a szeletol a margot

  }
})