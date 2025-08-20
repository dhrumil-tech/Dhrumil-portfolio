import Section from "./Section";
import { internships } from "../data/resumeData";

export default function Internship() {
  return (
    <Section id="internship" title="Internship">
      <div className="grid gap-4">
        {internships.map((i,idx) => (
          <div key={idx} className="card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{i.role} • {i.company}</h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{i.period}</p>
            </div>
            <ul className="mt-3 grid gap-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              {i.bullets.map((b, j)=>(<li key={j}>{b}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
