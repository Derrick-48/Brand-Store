import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const HeaderSection = () => {
  return (
    <>
      <View style={styles.topRow}>
        <View>
          <TouchableOpacity>
            <Image source={require("../assets/Menu.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={require("../assets/Profile.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Best trendy collection!</Text>
      </View>
    </>
  );
};

const styles = {
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 24,
  },
  titleSection: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#64748B",
  },
};

export default HeaderSection;
