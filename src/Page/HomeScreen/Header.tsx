import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./HomeScreen.style";

function Header() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text>Hey, Nitin</Text>
        <TextInput
          style={styles.input}
          placeholder="Search Products or store"
          placeholderTextColor="#8891A5"
          onChangeText={(e: any) => {
            handleChange(e);
          }}
          value={search}
        />

        <View style={styles.deliveryInfo}>
          <View style={styles.content}>
            <Text> DELIVERY TO</Text>
            <Text> Green Way 300, Sylhet</Text>
          </View>
          <View style={styles.content}>
            <Text> WITHIN</Text>
            <Text> Green Way 300, Sylhet</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Header;
