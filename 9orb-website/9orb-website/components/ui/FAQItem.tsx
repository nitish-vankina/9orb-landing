export function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-base-800 py-5 first:pt-0 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white marker:content-none">
        {question}
        <span
          className="shrink-0 text-ink-400 transition-transform duration-150 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-ink-400">{answer}</p>
    </details>
  );
}
