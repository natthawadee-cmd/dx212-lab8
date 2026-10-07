import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type MenuCardProps = {
  name: string;
  price: number;
  tag?: string; // ? = ไม่ส่งก็ได้
};

export default function MenuCard({ name, price, tag }: MenuCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text>
          {price} บาท {tag ? `· ${tag}` : ""}
        </Text>
      </View>
      <Pressable style={styles.like} onPress={() => setLikes(likes + 1)}>
        <Text>❤️ {likes}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: "#EEF2FA",
  },
  name: { fontSize: 18, fontWeight: "bold" },
  like: { padding: 8 },
});
