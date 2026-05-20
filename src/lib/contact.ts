export const BUSINESS_NAME = "Restaurant Athen";

export const CONTACT = {
  street: "Westendstr. 223b",
  postalCode: "80686",
  city: "München",
  phoneDisplay: "089 57 78 86",
  phoneTel: "+4989577886",
  email: "info@restaurant-athen.de",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Restaurant+Athen%2C+Westendstr.+223b%2C+80686+M%C3%BCnchen",
  /** Set your Facebook page URL when available */
  facebookUrl: "https://www.facebook.com/",
} as const;

/** Tu–Su service; closed Mondays. Also open on public holidays. */
export const OPENING_HOURS = {
  schemaOrg: ["Tu-Su 12:00-14:30", "Tu-Su 17:30-24:00"],
} as const;