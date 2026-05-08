import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70vh] items-center justify-center py-20">
      <div className="surface-card-strong max-w-2xl p-10 sm:p-14">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 text-4xl sm:text-5xl">Projeto não encontrado</h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
          O conteúdo que você tentou abrir não existe nesta versão do portfolio.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Voltar para a home
          </Link>
          <Link
            href="/#projetos"
            className="inline-flex items-center justify-center rounded-full border border-line bg-white/70 px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 dark:bg-surface"
          >
            Ver projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
