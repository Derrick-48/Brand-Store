import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Grid, Search } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const HeaderSection = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.topRow}>
        <View>
          <TouchableOpacity>
            <Grid name="menu" size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Search size={24} color="black" />
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
