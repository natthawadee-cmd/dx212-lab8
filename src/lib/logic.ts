// ย้ายมาจาก logic.js ของ Mini Project #1 — เพิ่ม type ให้ข้อมูล
export type Menu = { id: number; name: string; price: number };

export const filterByBudget = (menus: Menu[], budget: number): Menu[] => {
  if (budget < 0) return [];
  return menus.filter((m) => m.price <= budget);
};

export const sortByPrice = (menus: Menu[]): Menu[] =>
  [...menus].sort((a, b) => a.price - b.price);
