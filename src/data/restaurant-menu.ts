import { MENU_CATEGORIES_DE } from "./restaurant-menu-de";
import { MENU_CATEGORIES_EN } from "./restaurant-menu-en";
import type { MenuCategory, MenuItem, MenuItemRef } from "./restaurant-menu-types";

export type { MenuCategory, MenuItem, MenuItemRef, MenuSubsection } from "./restaurant-menu-types";

export function getMenuCategories(locale: "de" | "en"): MenuCategory[] {
  return locale === "de" ? MENU_CATEGORIES_DE : MENU_CATEGORIES_EN;
}

export function getMenuItem(
  categories: MenuCategory[],
  ref: MenuItemRef,
): MenuItem & { categoryTitle: string; subsectionTitle: string } {
  const category = categories[ref.categoryIndex];
  const subsection = category.subsections[ref.subsectionIndex];
  const item = subsection.items[ref.itemIndex];
  return {
    ...item,
    categoryTitle: category.title,
    subsectionTitle: subsection.title,
  };
}

export function getCategoryTitle(category: MenuCategory, locale: "de" | "en"): string {
  return locale === "de" ? category.title : category.titleEn;
}
