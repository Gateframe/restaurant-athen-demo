import type { MenuCategory } from "./restaurant-menu-types";

export const MENU_CATEGORIES_EN: MenuCategory[] = [
  {
    id: "vorspeisen",
    title: "Appetizers",
    titleEn: "Appetizers",
    subsections: [
      {
        title: "Cold Appetizers",
        items: [
          {
            name: "Tzatziki",
            description: "spiced yogurt with fresh cucumber and garlic",
            price: "6.00 €",
          },
          { name: "Taramas", description: "fish roe spread", price: "6.50 €" },
          { name: "Melitzanosalata", description: "eggplant cream", price: "7.00 €" },
          {
            name: "Dolmadakia",
            description: "vine leaves stuffed with rice, served with tzatziki",
            price: "7.00 €",
          },
          { name: "Tirosalata", description: "feta and pepper cream", price: "7.50 €" },
          {
            name: "Feta Portion",
            description: "sheep's cheese with onions, olives, and peppers",
            price: "7.00 €",
          },
          {
            name: "Mixed Appetizer Platter",
            description: "per person",
            price: "12.00 €",
          },
        ],
      },
      {
        title: "Warm Appetizers",
        items: [
          { name: "Pita", description: "with or without garlic", price: "2.50 €" },
          { name: "Bread", description: "grilled, with or without garlic", price: "2.50 €" },
          { name: "Saganaki", description: "baked feta", price: "8.00 €" },
          { name: "Halloumi", description: "grilled Cypriot cheese", price: "8.50 €" },
          { name: "Eggplant", description: "fried, with tzatziki", price: "7.00 €" },
          { name: "Zucchini", description: "fried, with tzatziki", price: "7.00 €" },
          {
            name: "Red Pepper",
            description: "stuffed with feta, grilled",
            price: "8.50 €",
          },
          {
            name: "Artichokes",
            description: "from the grill, with lemon sauce",
            price: "8.00 €",
          },
          { name: "Grilled Octopus", description: "grilled squid", price: "14.50 €" },
          { name: "Mixed Appetizer Platter", description: "", price: "18.00 €" },
        ],
      },
    ],
  },
  {
    id: "hauptgerichte",
    title: "Main Dishes",
    titleEn: "Main Dishes",
    subsections: [
      {
        title: "Fish Dishes",
        items: [
          {
            name: "King Prawns",
            description: "grilled, with potatoes and vegetables",
            price: "25.00 €",
          },
          {
            name: "Calamari",
            description: "grilled, with potatoes and vegetables",
            price: "19.00 €",
          },
          {
            name: "Fish Platter",
            description: "calamari, king prawns, Atlantic sole fillet, with potatoes and vegetables",
            price: "25.00 €",
          },
        ],
      },
      {
        title: "Grill Specialties",
        items: [
          {
            name: "Souvlaki",
            description: "pork fillet on skewer, with rice and tzatziki",
            price: "17.50 €",
          },
          {
            name: "Gyros",
            description: "seasoned meat from the spit, with rice and tzatziki",
            price: "16.50 €",
          },
          {
            name: "Bifteki",
            description: "beef patty stuffed with cheese, rice and vegetables",
            price: "17.50 €",
          },
          {
            name: "Kotopoulo",
            description: "grilled chicken fillet with tzatziki and vegetables",
            price: "17.50 €",
          },
          {
            name: "Ouzo Platter",
            description: "pork skewer, gyros, rice and vegetables",
            price: "17.50 €",
          },
          {
            name: "Grill Platter",
            description: "pork skewer, beef patty, gyros, rice and vegetables",
            price: "18.50 €",
          },
          {
            name: "Athen Platter",
            description: "chicken fillet, beef patty, gyros, rice and vegetables",
            price: "19.00 €",
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    titleEn: "Desserts",
    subsections: [
      {
        title: "",
        items: [
          {
            name: "Halva",
            description: "traditional sesame dessert",
            price: "6.00 €",
          },
          { name: "Yogurt with Honey & Walnuts", description: "", price: "7.00 €" },
          { name: "Mixed Ice Cream", description: "", price: "6.00 €" },
          { name: "Mixed Ice Cream with Cream", description: "", price: "6.50 €" },
        ],
      },
    ],
  },
  {
    id: "getraenke",
    title: "Drinks",
    titleEn: "Drinks",
    subsections: [
      {
        title: "Aperitifs",
        items: [
          { name: "Glass of Prosecco", description: "", price: "4.00 €" },
          { name: "Campari with soda or orange juice", description: "", price: "6.50 €" },
          { name: "Aperol Spritz", description: "", price: "8.00 €" },
          { name: "Lillet Wild Berry", description: "", price: "8.50 €" },
        ],
      },
      {
        title: "Non-Alcoholic",
        items: [
          { name: "Coca-Cola / Coca-Cola Zero", description: "", price: "4.00 €" },
          { name: "Lemon soda", description: "", price: "3.00 €" },
          { name: "Spezi", description: "", price: "4.50 €" },
          {
            name: "Juices / Nectars",
            description: "apple, orange, blackcurrant, rhubarb, mango, passion fruit",
            price: "3.50 €",
          },
          { name: "Juice spritzer", description: "", price: "5.00 €" },
          {
            name: "Mineral Water",
            description: "0.2 l — 2.50 € · 0.5 l — 5.00 € · 0.75 l — 6.00 €",
            price: "",
          },
        ],
      },
      {
        title: "Beer",
        items: [
          { name: "Budweiser Budvar", description: "", price: "4.20 €" },
          { name: "Augustiner Hell", description: "", price: "4.80 €" },
          { name: "Augustiner Dunkel", description: "", price: "4.80 €" },
          { name: "Augustiner Radler", description: "", price: "4.80 €" },
          { name: "Augustiner Non-Alcoholic", description: "", price: "4.80 €" },
          { name: "Augustiner Wheat Beer", description: "", price: "5.00 €" },
          { name: "Erdinger Wheat Beer", description: "", price: "5.00 €" },
          { name: "Erdinger Dark", description: "", price: "5.00 €" },
          { name: "Erdinger Light", description: "", price: "5.00 €" },
          { name: "Erdinger Non-Alcoholic", description: "", price: "5.00 €" },
          { name: "Russ / Cola Wheat Beer", description: "", price: "5.00 €" },
        ],
      },
      {
        title: "Wines by the Glass",
        items: [
          { name: "House White dry", description: "", price: "6.00 €" },
          { name: "House White semi-sweet", description: "", price: "6.00 €" },
          { name: "House Red dry", description: "", price: "6.00 €" },
          { name: "House Red semi-sweet", description: "", price: "6.00 €" },
          { name: "Rosé dry", description: "", price: "6.00 €" },
          { name: "Retsina", description: "", price: "6.00 €" },
        ],
      },
      {
        title: "White Bottles",
        items: [
          { name: "Retsina", description: "", price: "20.00 €" },
          { name: "Lexis K", description: "", price: "38.00 €" },
          { name: "Gerovasiliou Sauvignon Blanc", description: "", price: "48.00 €" },
        ],
      },
      {
        title: "Red Bottles",
        items: [
          { name: "Atelier Erythro", description: "", price: "22.50 €" },
          { name: "M Classique", description: "", price: "26.50 €" },
          { name: "Mega Spileo Cabernet Sauvignon", description: "", price: "41.00 €" },
        ],
      },
      {
        title: "Spirits",
        items: [
          { name: "Tsipouro", description: "", price: "4.50 €" },
          { name: "Ouzo", description: "", price: "3.00 €" },
          { name: "Metaxa 5 Stars", description: "", price: "4.00 €" },
          { name: "Metaxa Very Old", description: "", price: "7.50 €" },
          { name: "Ramazzotti", description: "", price: "3.00 €" },
          { name: "Williams Pear", description: "", price: "3.50 €" },
          { name: "Scotch Whisky", description: "", price: "7.00 €" },
        ],
      },
      {
        title: "Hot Drinks",
        items: [
          { name: "Greek Coffee", description: "", price: "3.50 €" },
          { name: "Frappé", description: "", price: "4.50 €" },
          { name: "Coffee", description: "", price: "3.50 €" },
          { name: "Cappuccino", description: "", price: "4.00 €" },
          { name: "Latte Macchiato", description: "", price: "4.50 €" },
          { name: "Espresso / Espresso Macchiato", description: "", price: "3.00 €" },
          { name: "Tea", description: "", price: "3.00 €" },
          { name: "Mulled Wine", description: "", price: "6.00 €" },
        ],
      },
    ],
  },
];
