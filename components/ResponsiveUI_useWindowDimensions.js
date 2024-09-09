import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";

const ResponsiveUI = () => {
  // Get the screen width and height using the hook
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(isPortraitMode());
  const [statusBarStyle, setStatusBarStyle] = useState("dark-content");
  const [statusBarBackgroundColor, setStatusBarBackgroundColor] = useState("#fff");

  // Function to check if the orientation is portrait
  function isPortraitMode() {
    return screenHeight >= screenWidth;
  }

  // Update orientation and status bar style when dimensions change
  useEffect(() => {
    const portrait = isPortraitMode();
    setIsPortrait(portrait);
    // Update status bar style based on orientation
    if (portrait) {
      setStatusBarStyle("dark-content");
      setStatusBarBackgroundColor("#fff"); // Light background for portrait
    } else {
      setStatusBarStyle("light-content");
      setStatusBarBackgroundColor("#000"); // Dark background for landscape
    }
  }, [screenWidth, screenHeight]); // Dependencies to trigger effect on dimension changes

  // Set the button width to half of the screen width if landscape
  const buttonWidth = isPortrait ? screenWidth * 0.9 : screenWidth * 0.4;
  // Set the image width to 80% of the screen width and dynamically adjust height based on orientation
  const imageWidth = screenWidth * 0.8;
  const imageHeight = isPortrait ? imageWidth : imageWidth * 0.5; // Reduce height in landscape

  return (
    <View>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.innerContainer}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          {/* View for buttons */}
          <View
            style={[
              styles.buttonRow,
              { flexDirection: isPortrait ? "column" : "row" }, // Change layout based on orientation
            ]}
          >
            <Pressable
              style={[
                styles.button,
                { width: buttonWidth, height: isPortrait ? 50 : 60 },
              ]}
            >
              <Text style={styles.buttonText}>Button 1</Text>
            </Pressable>
            <Pressable
              style={[
                styles.button,
                { width: buttonWidth, height: isPortrait ? 50 : 60 },
              ]}
            >
              <Text style={styles.buttonText}>Button 2</Text>
            </Pressable>
          </View>

          {/* Image below buttons */}
          <Image
            source={{ uri: "https://placedog.net/400/477?id=130" }}
            style={{ width: imageWidth, height: imageHeight }}
            resizeMode="contain"
          />

          {/* TextInput field */}
          <TextInput
            style={styles.input}
            placeholder="Enter text here"
            placeholderTextColor="#888"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.select({
      ios: 20, // Extra padding on iOS
      android: 0, // Less padding on Android
    }),
  },
  buttonRow: {
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Platform.select({
      ios: 15, // More margin on iOS
      android: 10, // Less margin on Android
    }), // Adds spacing in landscape mode
    borderRadius: 50,
    marginVertical: 10, // Adds space between buttons and image
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});

export default ResponsiveUI;
