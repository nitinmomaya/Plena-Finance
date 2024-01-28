import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./HomeScreen.style";

function Header() {
  const [search, setSearch] = useState("");

  const handleChange = (text) => {
    setSearch(text);
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 22, color: "#fff" }}>Hey, Nitin</Text>
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
            <Text style={{ fontSize: 10, color: "#F8F9FB" }}> DELIVERY TO</Text>
            <Text style={{ fontSize: 14, color: "#fff" }}>
              Green Way 300, Sylhet v
            </Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={{ fontSize: 10, color: "#F8F9FB" }}> WITHIN</Text>
            <Text style={{ fontSize: 14, color: "#fff" }}> 1 Hour v</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Header;
