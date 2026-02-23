import { experiences, skillGroups } from "@/data/resume";

export default function ResumePage() {
  return (
    <section>
      {/* ── Section Title ── */}
      <h2 className="text-3xl font-bold tracking-tight">Resume</h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />

      {/* ── Experience Timeline ── */}
      <h3 className="mt-8 text-xl font-bold tracking-tight">Experience</h3>
      <div className="relative mt-5 ml-4 border-l-2 border-border pl-6">
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-8 last:mb-0">
            {/* Timeline dot */}
            <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>

            <p className="text-sm font-medium text-primary">{exp.period}</p>
            <h4 className="mt-1 text-base font-semibold">{exp.title}</h4>
            <p className="text-sm text-muted-foreground">{exp.company}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      {/* ── Skills Grid ── */}
      <h3 className="mt-10 text-xl font-bold tracking-tight">Skills</h3>
      <div className="mt-4 space-y-5">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
