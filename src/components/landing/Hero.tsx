import { ArrowUpRight, Facebook, Mail, MapPin } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import heroPlate from "@/assets/hero-plate.png";
import cardMenu from "@/assets/card-menu.png";
import cardReservation from "@/assets/card-reservation.png";
import cardRestaurant from "@/assets/card-restaurant.png";
import { useI18n } from "@/i18n";
import { CONTACT } from "@/lib/contact";

/** Slim luxury frame: same inset on all sides (~6–12px). */
const HERO_FRAME = "p-[clamp(0.375rem,0.9vw,0.75rem)]";

/** One radius for the whole hero silhouette (shell clips children). */
const HERO_RADIUS = "rounded-2xl";

export function Hero() {
  const { t } = useI18n();
  const [scroll, setScroll] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const cards = useMemo(
    () =>
      [
        {
          badgeKey: "hero.cardMenu.badge" as const,
          altKey: "hero.cardMenu.alt" as const,
          img: cardMenu,
          href: "#menu" as const,
        },
        {
          badgeKey: "hero.cardReservation.badge" as const,
          altKey: "hero.cardReservation.alt" as const,
          img: cardReservation,
          href: "#reservation" as const,
        },
        {
          badgeKey: "hero.cardRestaurant.badge" as const,
          altKey: "hero.cardRestaurant.alt" as const,
          img: cardRestaurant,
          href: "#atmosphere" as const,
        },
      ] as const,
    [],
  );

  const socialLinks = useMemo(
    () =>
      [
        { Icon: Facebook, labelKey: "social.facebook" as const, href: CONTACT.facebookUrl },
        {
          Icon: Mail,
          labelKey: "social.mail" as const,
          href: `mailto:${CONTACT.email}`,
        },
        {
          Icon: MapPin,
          labelKey: "social.location" as const,
          href: CONTACT.mapsUrl,
        },
      ] as const,
    [],
  );

  function openReservationForm() {
    window.dispatchEvent(new Event("open-reservation-form"));
  }

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const top = heroRef.current.getBoundingClientRect().top;
      setScroll(Math.max(-200, Math.min(0, top)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative box-border flex w-full flex-col overflow-hidden ${HERO_FRAME} lg:h-[100dvh] lg:min-h-0 lg:max-h-[100dvh]`}
    >
      {/* Inner shell: main image + cards share one rounded cinematic block inside the frame */}
      <div
        className={`flex min-h-0 w-full flex-1 flex-col gap-2 overflow-hidden ${HERO_RADIUS} lg:grid lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,73fr)_minmax(0,27fr)] lg:grid-rows-1 lg:items-stretch lg:gap-2`}
      >
        {/* Main hero — left on desktop, top stack on mobile */}
        <div className="relative min-h-[70svh] w-full shrink-0 overflow-hidden bg-card lg:h-full lg:min-h-0">
        <img
          src={heroPlate}
          alt={t("hero.plateAlt")}
          width={1200}
          height={1200}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[1.07] contrast-[1.06] saturate-[1.08] animate-[fade-in_1.4s_ease-out_both]"
          style={{ transform: `translateY(${scroll * 0.08}px) scale(1.04)` }}
        />

        {/* Cinematic readability — midnight navy wash so photography breathes */}
        <div className="pointer-events-none absolute inset-0 hero-overlay-t" aria-hidden />
        <div className="pointer-events-none absolute inset-0 hero-overlay-r" aria-hidden />
        <div className="pointer-events-none absolute inset-0 hero-overlay-radial" aria-hidden />

        {/* Social icons — bottom-right (phone: safe-area, 44px taps) */}
        <div
          className="pointer-events-auto absolute bottom-[max(1.75rem,calc(1rem+env(safe-area-inset-bottom,0px)))] right-[max(0.875rem,calc(0.5rem+env(safe-area-inset-right,0px)))] z-[25] flex flex-row items-center gap-2 sm:bottom-10 sm:right-6 sm:gap-2.5 lg:bottom-12 lg:right-8 xl:bottom-14 xl:right-10"
          aria-label={t("hero.socialLabel")}
        >
          {socialLinks.map(({ Icon, labelKey, href }) => (
            <a
              key={labelKey}
              href={href}
              aria-label={t(labelKey)}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid size-11 min-h-[44px] min-w-[44px] touch-manipulation place-items-center rounded-full border border-sapphire/25 bg-glass text-ivory/85 shadow-luxury backdrop-blur-sm transition-all hover:border-gold hover:text-gold sm:size-10 sm:min-h-0 sm:min-w-0"
            >
              <Icon className="h-[18px] w-[18px] sm:h-4 sm:w-4" />
            </a>
          ))}
        </div>

        {/* Editorial headline — lower-left */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pt-32 pb-[max(2rem,calc(1rem+env(safe-area-inset-bottom,0px)))] pl-5 pr-5 max-sm:pl-4 sm:pb-10 sm:pl-8 sm:pr-8 lg:pb-12 lg:pl-10 lg:pr-16 xl:pb-14 xl:pl-14">
          <div className="max-w-[min(100%,42rem)]">
            <span className="eyebrow mb-2 block animate-[fade-in_1s_ease-out_0.2s_both] sm:mb-3">
              {t("hero.establishment")}
            </span>
            <h1 className="flex animate-[fade-up_1.1s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] flex-col items-start gap-0">
              <span className="text-display mb-1 block animate-[fade-in_1s_ease-out_0.1s_both] font-light text-gold tracking-[0.22em] text-[clamp(1rem,3.2vw,2.5rem)] drop-shadow-[0_2px_14px_rgba(6,10,26,0.5)] sm:mb-1.5 sm:tracking-[0.26em]">
                {t("hero.headline1")}
              </span>
              <span className="text-display block font-medium leading-[0.86] tracking-[-0.04em] text-ivory text-shadow-hero text-[clamp(2.35rem,11vw,7.5rem)] sm:text-[clamp(2.75rem,9.5vw,8.5rem)] lg:text-[clamp(3rem,7.2vw,8.75rem)]">
                {t("hero.headline2")}
              </span>
            </h1>
          </div>
        </div>
        </div>

        {/* Right rail — column gutter from parent gap-2; outer frame is section padding */}
        <div className="flex w-full shrink-0 flex-col gap-2 bg-background lg:h-full lg:min-h-0 lg:self-stretch lg:bg-transparent">
        {cards.map((c, i) => (
          <a
            key={c.href}
            href={c.href === "#reservation" ? undefined : c.href}
            onClick={
              c.href === "#reservation"
                ? (event) => {
                    event.preventDefault();
                    openReservationForm();
                  }
                : undefined
            }
            role={c.href === "#reservation" ? "button" : undefined}
            tabIndex={c.href === "#reservation" ? 0 : undefined}
            onKeyDown={
              c.href === "#reservation"
                ? (event) => {
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    openReservationForm();
                  }
                : undefined
            }
            aria-label={t(c.altKey)}
            className="group relative flex-none overflow-hidden rounded-none bg-card min-h-[9.5rem] sm:min-h-[10.5rem] lg:min-h-0 lg:flex-1"
            style={{ animation: `fade-up 1s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.1}s both` }}
          >
            <img
              src={c.img}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover brightness-[1.06] contrast-[1.05] saturate-[1.07] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 card-overlay-t transition-[background] duration-500" />
            {/* Glass label chip — navbar language, bottom-right */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <div
                className="pointer-events-auto absolute bottom-3 right-3 flex max-w-[min(100%,calc(100%-1rem))] items-center gap-1.5 rounded-full border border-sapphire/20 bg-glass py-1 pl-2.5 pr-1 shadow-luxury backdrop-blur-[14px] transition-[border-color,box-shadow] duration-300 sm:bottom-[18px] sm:right-[18px] sm:gap-2 sm:pl-3 sm:pr-1 group-hover:border-sapphire/35 group-hover:shadow-[0_8px_22px_rgba(4,8,24,0.35)]"
              >
                <span className="min-w-0 truncate text-[9px] font-medium uppercase leading-none tracking-[0.2em] text-ivory sm:text-[10px] sm:tracking-[0.22em]">
                  {t(c.badgeKey)}
                </span>
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-sapphire/20 bg-glass-muted text-ivory shadow-luxury backdrop-blur-md transition-[border-color,background-color] duration-300 group-hover:border-gold/40 group-hover:bg-navy/70"
                  aria-hidden
                >
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5" />
                </span>
              </div>
            </div>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
}
