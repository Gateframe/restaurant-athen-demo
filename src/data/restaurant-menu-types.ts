export type MenuItem = {
  readonly name: string;
  readonly description: string;
  readonly price: string;
};

export type MenuSubsection = {
  readonly title: string;
  readonly items: readonly MenuItem[];
};

export type MenuCategory = {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly subsections: readonly MenuSubsection[];
};

export type MenuItemRef = {
  readonly categoryIndex: number;
  readonly subsectionIndex: number;
  readonly itemIndex: number;
};
