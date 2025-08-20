import Section from "./Section";
import { profile } from "../data/resumeData";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const items = [
    { icon: <Mail size={18}/>, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={18}/>, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: <Github size={18}/>, label: "GitHub", href: profile.github },
    { icon: <Linkedin size={18}/>, label: "LinkedIn", href: profile.linkedin },
  ].filter(i => i.label && i.href);

  return (
    <Section id="contact" title="Contact">
      <div className="card">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it,idx)=>(
            <a key={idx} href={it.href} target={it.href.startsWith('http') ? '_blank':'_self'} rel="noreferrer"
               className="group flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700">
              <span className="rounded-xl p-2 bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-100 dark:group-hover:bg-brand-900">
                {it.icon}
              </span>
              <span className="text-slate-700 dark:text-slate-300">{it.label}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
