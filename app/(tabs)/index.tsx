import { Image, StyleSheet, Platform, Button, Alert } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import Person from "@/components/Person";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! Mira</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <ThemedText type="subtitle">First Time Install react app </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="title">Number {count}.</ThemedText>
        <ThemedView
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <Button
            title="เพิ่มเลข"
            onPress={() => {
              setCount(count + 1);
            }}
          />
          <Button
            title="รีเซ็ต"
            onPress={() => {
              setCount(0);
              Alert.alert("แจ้งเตือน", "รีเซ็ตระวังแตก!!");
            }}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
