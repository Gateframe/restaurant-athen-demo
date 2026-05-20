import { useReveal } from "@/hooks/use-reveal";
import { useI18n } from "@/i18n";
import philosophyIngredients from "@/assets/philosophy-ingredients.png";

export function Intro() {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();

  return (
    <section id="philosophy" className="relative px-6 py-32 sm:py-40">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">{t("intro.eyebrow")}</span>
          <p className="mt-8 text-display text-3xl text-ivory sm:text-5xl lg:text-6xl">
            {t("intro.p1")}
            <span className="italic text-gold"> {t("intro.e1")}</span>
            {t("intro.p2")}
            <span className="italic text-gold"> {t("intro.e2")}</span>
            {t("intro.p3")}
            <span className="italic text-gold"> {t("intro.e3")}</span>
            {t("intro.p4")}
          </p>
          <div className="mx-auto mt-12 h-px w-24 bg-gold/60" />
        </div>

        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/15 shadow-[0_24px_80px_-48px_rgba(4,8,24,0.85)] ring-1 ring-sapphire/12">
            <img
              src={philosophyIngredients}
              alt={t("intro.ingredients.alt")}
              className="aspect-[4/3] w-full object-cover brightness-[1.02] contrast-[1.04] saturate-[1.06] lg:aspect-[5/4]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/8" />
          </div>

          <div className="text-left">
            <h3 className="text-display text-3xl text-ivory sm:text-4xl">
              {t("intro.ingredients.title")}
            </h3>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold/70 to-transparent" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("intro.ingredients.p1")}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/80 sm:text-base">
              {t("intro.ingredients.p2")}
            </p>
            <p className="mt-4 text-sm italic leading-relaxed text-gold/90 sm:text-base">
              {t("intro.ingredients.p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
