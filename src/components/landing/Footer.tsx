import { MapPin, Clock, Phone, Facebook } from "lucide-react";
import logoAthen from "@/assets/logo-athen.png";
import { useI18n } from "@/i18n";
import { BUSINESS_NAME, CONTACT } from "@/lib/contact";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-sapphire/15 bg-background px-6 pb-8 pt-14 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-y-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.15fr_0.9fr_1.25fr_1fr] lg:gap-x-10 xl:gap-x-14">
          <div className="max-w-[17rem]">
            <img
              src={logoAthen}
              alt="Restaurant Athen"
              width={569}
              height={80}
              className="h-14 w-auto max-w-full object-contain object-left sm:h-16"
              decoding="async"
            />
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          <Block icon={MapPin} title={t("footer.visit")}>
            {CONTACT.street}
            <br />
            {CONTACT.postalCode} {CONTACT.city}
          </Block>

          <Block icon={Clock} title={t("footer.hours")}>
            <div className="space-y-3">
              <p>
                <span className="block text-ivory">{t("footer.hoursDays")}</span>
                <span className="block">{t("footer.hoursTimes")}</span>
              </p>
              <p className="text-muted-foreground">{t("footer.hoursClosed")}</p>
            </div>
          </Block>

          <Block icon={Phone} title={t("footer.contact")}>
            <div className="space-y-3">
              <a href={`tel:${CONTACT.phoneTel}`} className="block transition-colors hover:text-gold">
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block transition-colors hover:text-gold"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Facebook className="h-3.5 w-3.5" />
                {t("social.facebook")}
              </a>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new Event("open-reservation-form"));
                }}
                className="inline-flex rounded-full border border-gold/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-gold transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
              >
                {t("footer.reserve")}
              </button>
            </div>
          </Block>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {BUSINESS_NAME}. {t("footer.copyright")}
          </span>
          <span>{t("footer.crafted")}</span>
        </div>
      </div>
    </footer>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2 text-gold">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-[10px] uppercase tracking-[0.32em]">{title}</span>
      </div>
      <div className="mt-4 text-sm leading-6 text-ivory/80">{children}</div>
    </div>
  );
}
