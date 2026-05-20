import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  getCategoryTitle,
  getMenuItem,
  type MenuCategory,
  type MenuItem,
  type MenuItemRef,
} from "@/data/restaurant-menu";
import { useI18n } from "@/i18n";
import menuPhoto1 from "@/assets/menu-photo-1.png";
import menuPhoto2 from "@/assets/menu-photo-2.png";
import menuPhoto3 from "@/assets/menu-photo-3.png";
import menuPhoto4 from "@/assets/menu-photo-4.png";
import menuPhoto5 from "@/assets/menu-photo-5.png";
import menuPhoto6 from "@/assets/menu-photo-6.png";
import menuPhoto7 from "@/assets/menu-photo-7.png";
import menuPhoto8 from "@/assets/menu-photo-8.png";
import menuPhoto9 from "@/assets/menu-photo-9.png";

const menuPhotos = [
  menuPhoto1,
  menuPhoto2,
  menuPhoto3,
  menuPhoto4,
  menuPhoto5,
  menuPhoto6,
  menuPhoto7,
  menuPhoto8,
  menuPhoto9,
] as const;

/** Souvlaki — Hauptgerichte · Spezialitäten vom Grill */
const DEFAULT_SELECTION: MenuItemRef = {
  categoryIndex: 1,
  subsectionIndex: 1,
  itemIndex: 0,
};

function getImageForItem(ref: MenuItemRef) {
  const key = `${ref.categoryIndex}:${ref.subsectionIndex}:${ref.itemIndex}`;
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) % menuPhotos.length;
  }
  return menuPhotos[hash];
}

function itemKey(ref: MenuItemRef) {
  return `${ref.categoryIndex}-${ref.subsectionIndex}-${ref.itemIndex}`;
}

function MenuItemButton({
  categories,
  itemRef,
  selected,
  onSelect,
}: {
  categories: MenuCategory[];
  itemRef: MenuItemRef;
  selected: boolean;
  onSelect: () => void;
}) {
  const data = getMenuItem(categories, itemRef);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group w-full rounded-xl border px-4 py-3.5 text-left transition-all duration-300",
        selected
          ? "border-gold/50 bg-gold/10 shadow-[0_12px_34px_-28px_rgba(202,167,106,0.75)] ring-1 ring-gold/25"
          : "border-sapphire/12 bg-navy/25 hover:border-sapphire/28 hover:bg-sapphire/12",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="min-w-0 text-sm font-medium tracking-wide text-ivory transition-colors group-hover:text-gold sm:text-base">
          {data.name}
        </h4>
        {data.price ? (
          <span className="shrink-0 text-sm font-medium tabular-nums tracking-wide text-gold">
            {data.price}
          </span>
        ) : null}
      </div>
      {data.description ? (
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground/90">{data.description}</p>
      ) : null}
    </button>
  );
}

function SubsectionBlock({
  categories,
  categoryIndex,
  subsectionIndex,
  title,
  selection,
  onSelect,
}: {
  categories: MenuCategory[];
  categoryIndex: number;
  subsectionIndex: number;
  title: string;
  selection: MenuItemRef;
  onSelect: (ref: MenuItemRef) => void;
}) {
  const subsection = categories[categoryIndex].subsections[subsectionIndex];

  return (
    <section>
      {title ? (
        <div className="mb-4 flex items-center gap-3 lg:mb-5">
          <h3 className="text-[10px] uppercase tracking-[0.32em] text-gold">{title}</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>
      ) : null}
      <ul className="grid gap-2">
        {subsection.items.map((_, itemIndex) => {
          const ref: MenuItemRef = { categoryIndex, subsectionIndex, itemIndex };
          return (
            <li key={itemKey(ref)}>
              <MenuItemButton
                categories={categories}
                itemRef={ref}
                selected={itemKey(selection) === itemKey(ref)}
                onSelect={() => onSelect(ref)}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

type MenuCatalogProps = {
  categories: MenuCategory[];
};

export function MenuCatalog({ categories }: MenuCatalogProps) {
  const { locale, t } = useI18n();
  const [activeCategory, setActiveCategory] = useState(0);
  const [selection, setSelection] = useState<MenuItemRef>(DEFAULT_SELECTION);

  const selected = useMemo(
    () => getMenuItem(categories, selection),
    [categories, selection],
  );

  const activeCategoryData = categories[activeCategory];

  return (
    <div className="relative mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)_minmax(18rem,22rem)] lg:items-start">
      <nav
        className="hidden lg:sticky lg:top-8 lg:block"
        aria-label={t("menuPage.categoriesLabel")}
      >
        <ul className="space-y-1">
          {categories.map((category, index) => (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => setActiveCategory(index)}
                className={cn(
                  "w-full rounded-xl border px-4 py-3 text-left transition-all duration-300",
                  activeCategory === index
                    ? "border-gold/40 bg-gold/10 text-gold"
                    : "border-transparent text-ivory/70 hover:border-sapphire/20 hover:bg-sapphire/10 hover:text-ivory",
                )}
              >
                <span className="text-[10px] uppercase tracking-[0.28em]">
                  {getCategoryTitle(category, locale)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="min-w-0">
        <div className="lg:hidden">
          <Accordion
            type="single"
            collapsible
            defaultValue={categories[0]?.id}
            className="rounded-2xl border border-sapphire/15 bg-navy/50"
          >
            {categories.map((category, categoryIndex) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border-sapphire/12 px-4 last:border-b-0"
              >
                <AccordionTrigger className="text-display py-4 text-xl text-ivory hover:no-underline [&>svg]:text-gold">
                  {getCategoryTitle(category, locale)}
                </AccordionTrigger>
                <AccordionContent className="space-y-8 pb-6">
                  {category.subsections.map((subsection, subsectionIndex) => (
                    <SubsectionBlock
                      key={`${category.id}-${subsectionIndex}`}
                      categories={categories}
                      categoryIndex={categoryIndex}
                      subsectionIndex={subsectionIndex}
                      title={subsection.title}
                      selection={selection}
                      onSelect={setSelection}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <article className="hidden rounded-[2rem] border border-gold/20 bg-navy/80 p-6 ring-1 ring-sapphire/15 backdrop-blur-xl lg:block lg:p-8">
          <div className="pointer-events-none absolute inset-x-8 top-0 hidden h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent lg:block" />
          <div className="mb-8 flex items-end gap-4 border-b border-sapphire/15 pb-6">
            <h2 className="text-display text-4xl text-ivory">
              {getCategoryTitle(activeCategoryData, locale)}
            </h2>
            <div className="mb-1 h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
          <div className="space-y-10">
            {activeCategoryData.subsections.map((subsection, subsectionIndex) => (
              <SubsectionBlock
                key={`${activeCategory}-${subsectionIndex}`}
                categories={categories}
                categoryIndex={activeCategory}
                subsectionIndex={subsectionIndex}
                title={subsection.title}
                selection={selection}
                onSelect={setSelection}
              />
            ))}
          </div>
        </article>
      </div>

      <aside className="hidden lg:sticky lg:top-8 lg:block">
        <MenuPreview
          selected={selected}
          image={getImageForItem(selection)}
          selectHint={t("menuPage.selectHint")}
        />
      </aside>

      <div className="lg:hidden">
        <MenuPreview
          selected={selected}
          image={getImageForItem(selection)}
          selectHint={t("menuPage.selectHint")}
          compact
        />
      </div>
    </div>
  );
}

function MenuPreview({
  selected,
  image,
  selectHint,
  compact,
}: {
  selected: MenuItem & { categoryTitle: string; subsectionTitle: string };
  image: string;
  selectHint: string;
  compact?: boolean;
}) {
  const categoryLine = selected.subsectionTitle
    ? `${selected.categoryTitle} · ${selected.subsectionTitle}`
    : selected.categoryTitle;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.5rem] border border-gold/18 bg-charcoal shadow-[0_20px_60px_-40px_rgba(4,8,24,0.9)] ring-1 ring-sapphire/12",
        compact ? "mt-2" : "",
      )}
    >
      <div className={cn("relative", compact ? "min-h-[14rem]" : "min-h-[22rem]")}>
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover brightness-[1.03] contrast-[1.06] saturate-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{categoryLine}</p>
          <p className="text-display mt-2 text-2xl leading-tight text-ivory">{selected.name}</p>
          {selected.price ? (
            <p className="mt-2 text-lg font-medium tabular-nums text-gold">{selected.price}</p>
          ) : null}
          {selected.description ? (
            <p className="mt-2 text-sm leading-relaxed text-ivory/70">{selected.description}</p>
          ) : (
            <p className="mt-2 text-xs text-ivory/45">{selectHint}</p>
          )}
        </div>
      </div>
    </div>
  );
}
