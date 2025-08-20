import Section from "./Section";
import { skills } from "../data/resumeData";

function Group({title, items}) {
  return (
    <div className="card">
      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s,i)=>(<span key={i} className="chip">{s}</span>))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-4">
        <Group title="Programming Languages" items={skills.languages} />
        <Group title="Frontend" items={skills.frontend} />
        <Group title="Backend" items={skills.backend} />
        <Group title="Databases" items={skills.databases} />
        <Group title="Core Subjects" items={skills.core} />
        <Group title="Tools" items={skills.tools} />
        <Group title="Soft Skills" items={skills.soft} />
      </div>
    </Section>
  );
}
