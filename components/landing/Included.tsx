import { site } from "@/config/site";
import { Check, SectionTitle } from "@/components/ui";
import { BrandVisual } from "@/components/showcase/Visual";

const files: [string, string, string, string][] = [
  ["SVG", "01 Logo", "PNG · JPG · SVG · PDF", "from-[#F1D27A] to-[#D4AF37]"],
  ["Aa", "02 Colors & typography", "palette · fonts", "from-[#D4AF37] to-[#B8962E]"],
  ["PDF", "03 Mini brand guidelines", "logo usage rules", "from-[#E6C567] to-[#8A6D1F]"],
  ["IG", "04 Social media kit", "profile · banner", "from-[#F1D27A] to-[#B8962E]"],
  ["3D", "05 Mockups", "real-world", "from-[#B8962E] to-[#8A6D1F]"],
];

function Tile({ title, text, children }: { title: string; text: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-card">
      <div className="aspect-[16/9] overflow-hidden">{children}</div>
      <div className="p-5">
        <p className="text-[16px] font-medium tracking-[-0.01em]">{title}</p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{text}</p>
      </div>
    </div>
  );
}

export function Included() {
  const img = site.includedImages;
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
      <div className="text-center">
        <SectionTitle sub="Depending on your package: logo, colors, fonts and the files you need to launch, owned by you forever. Look established from your very first customer.">
          A logo is one piece.
          <br />
          You get the whole brand.
        </SectionTitle>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {/* Big card: the final files window */}
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[26px] bg-gradient-brand p-5 shadow-card md:p-10 lg:col-span-2 lg:row-span-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(11,59,46,0.35),transparent_50%)]" />
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/70 bg-white/85 shadow-float backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-[14px] text-muted">Your brand · Final files</span>
            </div>
            <ul>
              {files.map(([badge, name, meta, grad]) => (
                <li key={name} className="flex items-center justify-between gap-3 px-4 py-2.5">
                  <span className="flex items-center gap-3">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br ${grad} text-[10px] font-semibold text-[#0A0A0A]`}>{badge}</span>
                    <span className="text-[15px] font-medium">{name}</span>
                  </span>
                  <span className="hidden text-[13px] text-muted sm:inline">{meta}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-line bg-paper/70 px-4 py-3 text-[13px]">
              <span className="text-leaf">✓ Delivered · first concepts within 3 days</span>
              <span className="text-muted">100% yours</span>
            </div>
          </div>
        </div>

        <Tile title="Up to three creative directions" text="Distinct ideas, so you choose between real options.">
          <BrandVisual brand="Northline Capital" image={img.directions} />
        </Tile>
        <Tile title="One coherent brand world" text="Logo, colors and typography that all work together.">
          <BrandVisual brand="Oriel Hotels" image={img.world} variant="card" />
        </Tile>
        <Tile title="Guidelines you can follow" text="Simple rules for your logo, colors and fonts, so everything looks consistent.">
          <BrandVisual brand="Kinetic" image={img.rules} variant="card" />
        </Tile>
        <Tile title="See it in the real world" text="3D mockups to see your logo in real life before you print anything.">
          <BrandVisual brand="Fieldwork Coffee" image={img.tangible} variant="card" />
        </Tile>
        <Tile title="Social-ready from day one" text="A profile picture and banner for your social accounts.">
          <BrandVisual brand="Lumen Health" image={img.social} />
        </Tile>
      </div>

      <ul className="mt-6 flex flex-wrap justify-center gap-2">
        {["Full ownership and copyright", "Print and web formats", "One payment, no subscription"].map((t) => (
          <li key={t} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-[14px] text-ink">
            <Check className="h-3.5 w-3.5 text-leaf" />
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
