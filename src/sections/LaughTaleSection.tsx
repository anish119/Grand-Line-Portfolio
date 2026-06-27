import { FileDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

import { GlassCard } from "@/components/portfolio/GlassCard";
import { SectionBackground } from "@/components/portfolio/SectionBackground";
import { SectionContent } from "@/components/portfolio/SectionContent";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { SectionShell } from "@/components/portfolio/SectionShell";
import { contactContent } from "@/data/contact";
import type { ContactAction } from "@/types/portfolio";

const actionIcons: Record<ContactAction["icon"], typeof FileDown> = {
  "file-down": FileDown,
  mail: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
};

const placeholderValues = new Set([
  "RESUME_URL",
  "EMAIL_ADDRESS",
  "PHONE_NUMBER",
  "GITHUB_URL",
  "LINKEDIN_URL",
]);

export function LaughTaleSection() {
  return (
    <SectionShell className="py-20 md:py-32 flex items-center bg-black">
      <SectionBackground
        imageUrl={contactContent.backgroundImage}
        imageClassName="absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
        overlays={["absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10"]}
      />

      <SectionContent maxWidthClassName="max-w-4xl" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <SectionHeader
            align="center"
            label={contactContent.label}
            labelClassName="font-['Inter'] text-emerald-400 tracking-[0.2em] text-xs uppercase font-medium"
            lineClassName="bg-emerald-400"
            lineWidthClassName="w-8"
            headingClassName="text-4xl md:text-7xl font-['Playfair_Display'] text-white leading-tight mb-8"
            emphasisClassName="italic text-emerald-200"
            title={contactContent.title}
          />

          <p className="text-base md:text-xl font-['Inter'] text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
            {contactContent.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-12 rounded-3xl text-left w-full mx-auto">
            <div
              className="grid gap-4 md:gap-5 items-stretch"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))' }}
            >
              {contactContent.actions.map((action) => {
                const Icon = actionIcons[action.icon];
                const normalizedHref = action.href.replace(/^mailto:/, "").replace(/^tel:/, "");
                const isPlaceholder = placeholderValues.has(action.href) || placeholderValues.has(normalizedHref);

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    download={action.kind === "download" && !isPlaceholder ? true : undefined}
                    target={action.kind === "external" ? "_blank" : undefined}
                    rel={action.kind === "external" ? "noreferrer noopener" : undefined}
                    aria-disabled={isPlaceholder}
                    onClick={(event) => {
                      if (isPlaceholder) {
                        event.preventDefault();
                      }
                    }}
                    className={`group rounded-2xl border border-white/10 bg-white/5 px-5 py-5 md:px-6 md:py-6 backdrop-blur-md transition-colors ${
                      isPlaceholder ? "cursor-default" : "hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-400/15">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-['Inter'] text-sm tracking-[0.18em] text-white/85 uppercase mb-2">
                          {action.label}
                        </h3>
                        <p className="font-['Inter'] text-sm text-white/45 leading-relaxed break-all">
                          {action.displayValue}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <p className="mt-8 text-sm md:text-base font-['Inter'] text-white/60 font-light leading-relaxed text-center">
              {contactContent.followupMessage}
            </p>
          </GlassCard>
        </motion.div>

        <div className="mt-24 text-center pb-24">
          <p className="font-['Inter'] text-[10px] tracking-widest text-white/30 uppercase">
            © {new Date().getFullYear()} {contactContent.footerOwner}. All Rights Reserved.
          </p>
        </div>
      </SectionContent>
    </SectionShell>
  );
}
