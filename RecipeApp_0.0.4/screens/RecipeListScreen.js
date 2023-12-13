import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
//hogy ne csuszon ra a allapotsavra, ahol az ido van es ezek
import Constants from "expo-constants";
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      {/* header szoveg + a csengo ikon */}
      <Header headerText={"Hi, User"} headerIcon={"bell-o"} />
      {/* importalt SearchFilter aminek atadjuk majd a placehorderjet propsba */}
      <SearchFilter icon="search" placehorder={"enter your favourite recipe"} />
      {/* kategoria filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={styles.kategoriaTextStyle}>Categories</Text>
        {/* kategoria listazasa */}
        <CategoriesFilter />
      </View>

      {/* recept lista filrer */}

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={styles.kategoriaTextStyle}>Recipes</Text>
        {/* receptek listazasa */}
        <RecipeCard />
      </View>
    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,//ez van SafeAreaView helyett
    flex: 1,
    marginHorizontal: 16,//ket oldalt behuzza a szeletol a margot
  },
  kategoriaTextStyle: {
    fontSize: 22,
    fontWeight: "bold",
  }
})