import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "./Header";
import Recommended from "./Recommended";

function HomeScreenPage({ navigation }) {
  return (
    <ScrollView>
      <Header />
      <Recommended navigation={navigation} />
    </ScrollView>
  );
}

export default HomeScreenPage;
