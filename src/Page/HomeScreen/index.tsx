import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "./Header";
import Recommended from "./Recommended";

function HomeScreenPage() {
  return (
    <ScrollView>
      <Header />
      <Recommended />
    </ScrollView>
  );
}

export default HomeScreenPage;
