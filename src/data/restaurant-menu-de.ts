import type { MenuCategory } from "./restaurant-menu-types";

export const MENU_CATEGORIES_DE: MenuCategory[] = [
  {
    id: "vorspeisen",
    title: "Vorspeisen",
    titleEn: "Appetizers",
    subsections: [
      {
        title: "Kalte Vorspeisen",
        items: [
          {
            name: "Zaziki",
            description: "pikant gewürzter Joghurt mit frischen Gurken und Knoblauch",
            price: "6,00 €",
          },
          { name: "Taramas", description: "Fischrogensalat", price: "6,50 €" },
          { name: "Melitzanosalat", description: "Auberginencreme", price: "7,00 €" },
          {
            name: "Dolmadakia",
            description: "Weinblätter mit Reis gefüllt und Zaziki",
            price: "7,00 €",
          },
          { name: "Tirosalata", description: "Feta-Paprika-Creme", price: "7,50 €" },
          {
            name: "Portion Feta",
            description: "Schafskäse mit Zwiebeln, Oliven und Peperoni",
            price: "7,00 €",
          },
          {
            name: "Gemischte Vorspeisen-Platte",
            description: "pro Person",
            price: "12,00 €",
          },
        ],
      },
      {
        title: "Warme Vorspeisen",
        items: [
          { name: "Pita", description: "mit oder ohne Knoblauch", price: "2,50 €" },
          { name: "Brot", description: "gegrillt, mit oder ohne Knoblauch", price: "2,50 €" },
          { name: "Saganaki", description: "gebackener Feta", price: "8,00 €" },
          { name: "Halloumi", description: "gegrillter zypriotischer Käse", price: "8,50 €" },
          { name: "Auberginen", description: "gebacken, mit Zaziki", price: "7,00 €" },
          { name: "Zucchini", description: "gebacken, mit Zaziki", price: "7,00 €" },
          {
            name: "Rote Paprika",
            description: "mit Feta gefüllt, gegrillt",
            price: "8,50 €",
          },
          {
            name: "Artischocken",
            description: "vom Grill, mit Zitronensauce",
            price: "8,00 €",
          },
          { name: "Oktopodaki", description: "gegrillter Tintenfisch", price: "14,50 €" },
          { name: "Gemischte Vorspeisen-Platte", description: "", price: "18,00 €" },
        ],
      },
    ],
  },
  {
    id: "hauptgerichte",
    title: "Hauptgerichte",
    titleEn: "Main Dishes",
    subsections: [
      {
        title: "Fischgerichte",
        items: [
          {
            name: "Riesengarnelen",
            description: "gegrillt, mit Kartoffeln und Gemüse",
            price: "25,00 €",
          },
          {
            name: "Kalamares",
            description: "gegrillt, mit Kartoffeln und Gemüse",
            price: "19,00 €",
          },
          {
            name: "Fisch-Teller",
            description:
              "Kalamares, Riesengarnelen, Atlantik-Zungenfilet, mit Kartoffeln und Gemüse",
            price: "25,00 €",
          },
        ],
      },
      {
        title: "Spezialitäten vom Grill",
        items: [
          {
            name: "Souvlaki",
            description: "Schweinefilet am Spieß, mit Reis und Zaziki",
            price: "17,50 €",
          },
          {
            name: "Gyros",
            description: "gewürztes Fleisch vom Spieß, mit Reis und Zaziki",
            price: "16,50 €",
          },
          {
            name: "Bifteki",
            description: "Hacksteak mit Käse gefüllt, Reis und Gemüse",
            price: "17,50 €",
          },
          {
            name: "Kotopoulo",
            description: "gegrilltes Hähnchenfilet mit Zaziki und Gemüse",
            price: "17,50 €",
          },
          {
            name: "Ouzo-Teller",
            description: "Schweinefilet am Spieß, Gyros, Reis und Gemüse",
            price: "17,50 €",
          },
          {
            name: "Grill-Teller",
            description: "Schweinefilet am Spieß, Hacksteak, Gyros, Reis und Gemüse",
            price: "18,50 €",
          },
          {
            name: "Athen-Teller",
            description: "Hähnchenfilet, Hacksteak, Gyros, Reis und Gemüse",
            price: "19,00 €",
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
            name: "Halvas",
            description: "traditionelle Süßspeise aus Sesam",
            price: "6,00 €",
          },
          { name: "Joghurt mit Honig & Walnüssen", description: "", price: "7,00 €" },
          { name: "Gemischtes Eis", description: "", price: "6,00 €" },
          { name: "Gemischtes Eis mit Sahne", description: "", price: "6,50 €" },
        ],
      },
    ],
  },
  {
    id: "getraenke",
    title: "Getränke",
    titleEn: "Drinks",
    subsections: [
      {
        title: "Aperitifs",
        items: [
          { name: "Glas Prosecco", description: "", price: "4,00 €" },
          {
            name: "Campari mit Soda oder Orangensaft",
            description: "",
            price: "6,50 €",
          },
          { name: "Aperol Spritz", description: "", price: "8,00 €" },
          { name: "Lillet Wild Berry", description: "", price: "8,50 €" },
        ],
      },
      {
        title: "Alkoholfreie Getränke",
        items: [
          { name: "Coca-Cola / Coca-Cola Zero", description: "", price: "4,00 €" },
          { name: "Zitronenlimo", description: "", price: "3,00 €" },
          { name: "Spezi", description: "", price: "4,50 €" },
          {
            name: "Säfte / Nektare",
            description: "Apfel, Orange, Johannisbeere, Rhabarber, Mango, Maracuja",
            price: "3,50 €",
          },
          { name: "Saftschorle", description: "", price: "5,00 €" },
          {
            name: "Mineralwasser",
            description: "0,2 l — 2,50 € · 0,5 l — 5,00 € · 0,75 l — 6,00 €",
            price: "",
          },
        ],
      },
      {
        title: "Bier",
        items: [
          { name: "Budweiser Budvar", description: "", price: "4,20 €" },
          { name: "Augustiner Hell", description: "", price: "4,80 €" },
          { name: "Augustiner Dunkel", description: "", price: "4,80 €" },
          { name: "Augustiner Radler", description: "", price: "4,80 €" },
          { name: "Augustiner Alkoholfrei", description: "", price: "4,80 €" },
          { name: "Augustiner Weißbier", description: "", price: "5,00 €" },
          { name: "Erdinger Weißbier", description: "", price: "5,00 €" },
          { name: "Erdinger Dunkel", description: "", price: "5,00 €" },
          { name: "Erdinger Leicht", description: "", price: "5,00 €" },
          { name: "Erdinger Alkoholfrei", description: "", price: "5,00 €" },
          { name: "Russ / Cola-Weißbier", description: "", price: "5,00 €" },
        ],
      },
      {
        title: "Offene Weine",
        items: [
          { name: "Hauswein Weiß trocken", description: "", price: "6,00 €" },
          { name: "Hauswein Weiß halbsüß", description: "", price: "6,00 €" },
          { name: "Hauswein Rot trocken", description: "", price: "6,00 €" },
          { name: "Hauswein Rot halbsüß", description: "", price: "6,00 €" },
          { name: "Rosé trocken", description: "", price: "6,00 €" },
          { name: "Retsina", description: "", price: "6,00 €" },
        ],
      },
      {
        title: "Flaschenweine Weiß",
        items: [
          { name: "Retsina", description: "", price: "20,00 €" },
          { name: "Lexis K", description: "", price: "38,00 €" },
          { name: "Gerovasiliou Sauvignon Blanc", description: "", price: "48,00 €" },
        ],
      },
      {
        title: "Flaschenweine Rot",
        items: [
          { name: "Atelier Erythro", description: "", price: "22,50 €" },
          { name: "M Classique", description: "", price: "26,50 €" },
          { name: "Mega Spileo Cabernet Sauvignon", description: "", price: "41,00 €" },
        ],
      },
      {
        title: "Spirituosen",
        items: [
          { name: "Tsipouro", description: "", price: "4,50 €" },
          { name: "Ouzo", description: "", price: "3,00 €" },
          { name: "Metaxa 5 Sterne", description: "", price: "4,00 €" },
          { name: "Metaxa Very Old", description: "", price: "7,50 €" },
          { name: "Ramazzotti", description: "", price: "3,00 €" },
          { name: "Williams Birne", description: "", price: "3,50 €" },
          { name: "Scotch Whisky", description: "", price: "7,00 €" },
        ],
      },
      {
        title: "Warme Getränke",
        items: [
          { name: "Griechischer Kaffee", description: "", price: "3,50 €" },
          { name: "Frappé", description: "", price: "4,50 €" },
          { name: "Kaffee", description: "", price: "3,50 €" },
          { name: "Cappuccino", description: "", price: "4,00 €" },
          { name: "Latte Macchiato", description: "", price: "4,50 €" },
          { name: "Espresso / Espresso Macchiato", description: "", price: "3,00 €" },
          { name: "Tee", description: "", price: "3,00 €" },
          { name: "Glühwein", description: "", price: "6,00 €" },
        ],
      },
    ],
  },
];
