import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm text-brand-700 mb-4">
            <span className="h-2 w-2 rounded-full bg-brand-500"></span>
            Open to Opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
            {profile.title}
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <Download size={18}/> Download Resume
            </a>
            {profile.github && (
              <a className="btn-outline" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18}/> GitHub
              </a>
            )}
            {profile.linkedin && (
              <a className="btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18}/> LinkedIn
              </a>
            )}
            {profile.email && (
              <a className="btn-outline" href={`mailto:${profile.email}`}>
                <Mail size={18}/> Email
              </a>
            )}
          </div>
          <div className="mt-4 flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <MapPin size={16}/> {profile.location}
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="card h-full flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-28 w-28 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700"></div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Add your photo/logo here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
