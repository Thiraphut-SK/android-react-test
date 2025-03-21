
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, ScrollView, StyleSheet } from "react-native";

const profileImage = require("@/assets/images/profile/475882699_122159587730328443_16154658949589524_n.jpg");

export default function InfoScreen() {
  const datainfo = {
    name: "Parita",
    fullName: "ภริตา บุญภักดีทวียศ",
    birthday: "26 สิงหาคม 2548",
    age: "23 ปี",
    description:
      "แพร ภริตา สามารถพูดได้ถึง 3 ภาษาคือไทย อังกฤษ และเกาหลี และนอกจากนั้นเธอยังเคยเข้าประกวดความสามารถและได้รับรางวัลมาแล้ว ไม่ว่าจะเป็น China Chaotong Fashion Festival 2019 Grand prize award, IDO World Dance Cups Golden Award 2018 โดยเธอได้เป็นศิลปินฝีกหัดกับทาง YG มาตั้งแต่ปี 2020 ก่อนที่จะได้เดบิวต์อย่างเป็นทางการกับวง BABYMONSTER นั่นเอง",
    description2:
      "แพร ภริตามีความสามารถในการร้องเพลงสูงถึงระดับไฮโน้ต ซึ่งทำให้เธอได้รับตำแหน่งเป็นเมนโวคัลของวง BABYMONSTER นอกจากนี้เธอยังมีความสามารถด้านการเต้น โดยได้รับการฝึกฝนจากครูสอนเต้นมืออาชีพ",
  };

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.titleContainer}>
          ข้อมูลส่วนตัว
        </ThemedText>
        <Image source={profileImage} style={styles.imageProfile} />
        <ThemedView
          style={{ padding: 20, alignItems: "flex-start", width: "100%" }}
        >
          <ThemedText type="subtitle">
            {datainfo.name} - {datainfo.fullName}
          </ThemedText>
          <ThemedText type="defaultSemiBold">
            เกิดวันที่ {datainfo.birthday}
          </ThemedText>
          <ThemedText type="defaultSemiBold">อายุ {datainfo.age}</ThemedText>
          <ThemedText type="default">{datainfo.description}</ThemedText>
          <ThemedText type="default">{datainfo.description2}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  titleContainer: {
    fontVariant: ["small-caps"],
    fontSize: 36,
    padding: 10,
  },
  imageProfile: {
    height: 378,
    width: 290,
    borderRadius: 20,
  },
});
