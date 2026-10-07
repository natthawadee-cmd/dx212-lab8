import { Stack } from "expo-router";
import { useState } from "react";

import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import EmptyState from "@/components/EmptyState"; // import Component ใหม่
import MenuCard from "@/components/MenuCard";
import { filterByBudget, sortByPrice, type Menu } from "@/lib/logic";

const MENUS: Menu[] = [
  { id: 1, name: "ข้าวมันไก่", price: 45 },
  { id: 2, name: "ก๋วยเตี๋ยว", price: 50 },
  { id: 3, name: "สเต๊กหมู", price: 89 },
];

export default function Index() {
  const [budget, setBudget] = useState(50);
  const result = sortByPrice(filterByBudget(MENUS, budget));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: "กินในงบ" }} />
      <Text style={styles.title}>กินในงบ - Natthawadee Sawaswor</Text>

      <View style={styles.row}>
        <Pressable style={styles.btn} onPress={() => setBudget(budget - 10)}>
          <Text style={styles.btnText}>-10</Text>
        </Pressable>
        <Text style={styles.budget}>งบ {budget} บาท</Text>
        <Pressable style={styles.btn} onPress={() => setBudget(budget + 10)}>
          <Text style={styles.btnText}>+10</Text>
        </Pressable>
      </View>

      {/* เรียกใช้ Component ใหม่ เมื่อไม่มีเมนูในงบ */}
      {result.length === 0 && (
        <EmptyState message="ไม่มีเมนูอาหารในงบนี้เลย" emoji="💸" />
      )}

      {result.map((m) => (
        <MenuCard key={m.id} name={m.name} price={m.price} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  btn: {
    backgroundColor: "#1E2761",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  btnText: { color: "white", fontWeight: "bold" },
  budget: { fontSize: 18 },
});
``;
