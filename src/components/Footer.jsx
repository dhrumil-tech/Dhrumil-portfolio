export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Dhrumil Beladiya. All rights reserved.
      </div>
    </footer>
  );
}
