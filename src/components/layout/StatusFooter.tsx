export function StatusFooter() {
  return (
    <footer className="mt-4 py-3 text-center">
      <p className="text-xs text-muted-foreground">
        <span className="mr-1.5 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        All systems are operational. &middot;{" "}
        <a
          href="/status"
          className="underline underline-offset-2 transition-colors hover:text-foreground"
        >
          Status
        </a>{" "}
        &middot;{" "}
        <a
          href="/status"
          className="underline underline-offset-2 transition-colors hover:text-foreground"
        >
          Uptime
        </a>
      </p>
    </footer>
  );
}
