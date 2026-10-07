import { StyleSheet, Text, View } from "react-native";

// 1. ระบุ Props อย่างน้อย 2 ตัวตามเงื่อนไขโจทย์ (message และ emoji)
type EmptyStateProps = {
  message: string;
  emoji: string;
};

export default function EmptyState({ message, emoji }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    marginTop: 16,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#6C757D",
    fontWeight: "500",
  },
});
