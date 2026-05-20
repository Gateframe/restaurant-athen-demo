import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ReservationCTA } from "@/components/landing/ReservationCTA";
import { MenuCatalog } from "@/components/menu/MenuCatalog";
import { getMenuCategories } from "@/data/restaurant-menu";
import { useI18n } from "@/i18n";
import menuIntroBackground from "@/assets/menu-intro-bg.png";
import marbleBackground from "@/assets/menu-marble-bg.png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Speisekarte — Restaurant Athen München" },
      {
        name: "description",
        content:
          "Speisekarte Restaurant Athen: griechische Vorspeisen, Meeresfrüchte, Gyros, Grill-Spezialitäten, Desserts, Weine und Getränke.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { locale, t } = useI18n();
  const categories = useMemo(() => getMenuCategories(locale), [locale]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 sm:py-24">
        <img
          src={menuIntroBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.66] contrast-[1.08] saturate-[1.04]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 menu-hero-overlay-l" />
        <div className="pointer-events-none absolute inset-0 menu-hero-overlay-t" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(202,167,106,0.16),transparent_38%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-ivory/65 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t("menuPage.back")}
          </Link>

          <div className="mt-14 max-w-3xl">
            <span className="eyebrow">{t("menuPage.eyebrow")}</span>
            <h1 className="text-display mt-5 text-5xl leading-none text-ivory sm:text-7xl">
              {t("menuPage.title1")}{" "}
              <span className="italic text-gold">{t("menuPage.title2")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("menuPage.intro")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:py-18">
        <img
          src={marbleBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.46] contrast-[1.14] saturate-[1.08]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-midnight/75" />
        <div className="absolute inset-0 menu-panel-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_31%_9%,rgba(202,167,106,0.22),transparent_29%),radial-gradient(circle_at_78%_38%,rgba(72,96,160,0.16),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.46)_82%,rgba(0,0,0,0.72)_100%)]" />

        <div className="relative mx-auto max-w-[88rem]">
          <div className="pointer-events-none mb-10 flex justify-center opacity-40">
            <GreekAccent />
          </div>
          <MenuCatalog categories={categories} />
        </div>
      </section>

      <ReservationCTA />
      <Footer />
    </main>
  );
}

/** Minimal meander-inspired divider */
function GreekAccent() {
  return (
    <svg
      width="120"
      height="12"
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-gold"
    >
      <path
        d="M0 6h18c6 0 6-4 12-4s6 4 12 4 6-4 12-4 6 4 12 4 6-4 12-4 6 4 12 4 6-4 12-4 6 4 18 4"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeOpacity="0.6"
      />
      <circle cx="60" cy="6" r="2.5" fill="currentColor" fillOpacity="0.35" />
    </svg>
  );
}
