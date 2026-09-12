import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-grid bg-base-950">
      <Container className="text-center">
        <p className="font-mono text-sm text-ink-500">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Page not found.</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
