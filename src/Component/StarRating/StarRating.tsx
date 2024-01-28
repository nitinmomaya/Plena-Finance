import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const StarRating = ({ value }) => {
  const size = 16;
  const color = "gold";
  const starComponents = [];
  const fullStars = Math.floor(value);
  const halfStar = value - fullStars >= 0.3;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starComponents.push(<Icon name="star" size={size} color={color} key={i} />);
  }

  // Half star
  if (halfStar) {
    starComponents.push(
      <Icon name="star-half" size={size} color={color} key="half" />
    );
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
      }}
    >
      {starComponents.length > 0 ? (
        starComponents.map((star, index) => star)
      ) : (
        <Text>No rating</Text>
      )}
    </View>
  );
};

export default StarRating;
