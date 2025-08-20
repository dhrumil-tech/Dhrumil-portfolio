import Section from "./Section";
import { projects } from "../data/resumeData";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p,idx)=>(
          <article key={idx} className="card flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tech.map((t,i)=>(<span key={i} className="chip">{t}</span>))}
            </div>
            <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-5">
              {p.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
            </ul>
            {p.source && p.source !== "#" && (
              <div className="mt-4">
                <a href={p.source} target="_blank" rel="noreferrer" className="btn-outline">
                  <ExternalLink size={18}/> Source Code
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
