export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
        {subtitle && <p className="text-slate-600 dark:text-slate-300 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
