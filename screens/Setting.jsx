import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import {
  ChevronRight,
  Bell,
  User,
  Lock,
  CreditCard,
  HelpCircle,
  LogOut,
} from "react-native-feather";

const SettingItem = ({ icon, title, value, onPress, toggleSwitch }) => (
  <TouchableOpacity
    style={[
      styles.settingItem,
      Platform.OS === "android" ? styles.androidSettingItem : null,
    ]}
    onPress={onPress}
    activeOpacity={Platform.OS === "ios" ? 0.7 : 1}
  >
    <View style={styles.settingItemLeft}>
      {icon}
      <Text style={styles.settingItemTitle}>{title}</Text>
    </View>
    <View style={styles.settingItemRight}>
      {value !== undefined ? (
        typeof value === "boolean" ? (
          <Switch
            trackColor={{ false: "#767577", true: "#FF6B00" }}
            thumbColor={value ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={value}
          />
        ) : (
          <Text style={styles.settingItemValue}>{value}</Text>
        )
      ) : (
        <ChevronRight stroke="#666" width={20} height={20} />
      )}
    </View>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingItem
            icon={<User stroke="#FF6B00" width={24} height={24} />}
            title="Profile"
            onPress={() => {
              /* Navigate to Profile */
            }}
          />
          <SettingItem
            icon={<Lock stroke="#FF6B00" width={24} height={24} />}
            title="Password"
            onPress={() => {
              /* Navigate to Password Change */
            }}
          />
          <SettingItem
            icon={<CreditCard stroke="#FF6B00" width={24} height={24} />}
            title="Payment Methods"
            onPress={() => {
              /* Navigate to Payment Methods */
            }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <SettingItem
            icon={<Bell stroke="#FF6B00" width={24} height={24} />}
            title="Notifications"
            value={notifications}
            toggleSwitch={() =>
              setNotifications((previousState) => !previousState)
            }
          />
          <SettingItem
            icon={<User stroke="#FF6B00" width={24} height={24} />}
            title="Dark Mode"
            value={darkMode}
            toggleSwitch={() => setDarkMode((previousState) => !previousState)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <SettingItem
            icon={<HelpCircle stroke="#FF6B00" width={24} height={24} />}
            title="Help Center"
            onPress={() => {
              /* Navigate to Help Center */
            }}
          />
          <SettingItem
            icon={<HelpCircle stroke="#FF6B00" width={24} height={24} />}
            title="Contact Us"
            onPress={() => {
              /* Navigate to Contact Us */
            }}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.logoutButton,
            Platform.select({
              android: { elevation: 5 },
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
              },
            }),
          ]}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <LogOut stroke="#FF6B00" width={20} height={24} />
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0, // Adjust for Android status bar
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === "android" ? 20 : 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  androidSettingItem: {
    paddingVertical: 20,
  },
  settingItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingItemTitle: {
    marginLeft: 15,
    fontSize: 16,
  },
  settingItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingItemValue: {
    fontSize: 16,
    color: "#666",
    marginRight: 10,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    marginLeft: 100,
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6B00",
  },
  logoutButtonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "#FF6B00",
  },
});
