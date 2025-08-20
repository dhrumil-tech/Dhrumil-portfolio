import Section from "./Section";
import { education } from "../data/resumeData";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4">
        {education.map((e,idx) => (
          <div key={idx} className="card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{e.degree}</h3>
                <p className="text-slate-600 dark:text-slate-300">{e.school} • {e.location}</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{e.period}</p>
            </div>
            {e.details?.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300">
                {e.details.map((d,i)=>(<li key={i}>{d}</li>))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
