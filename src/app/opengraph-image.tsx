import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahmed Shams (Shams Systems) – DevOps & Hybrid Infrastructure Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0d1117",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "8px solid #2563eb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "22px",
              fontWeight: "900",
              letterSpacing: "1px",
            }}
          >
            AS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#94a3b8", fontSize: "20px", fontWeight: "600" }}>
              shams.systems
            </span>
            <span style={{ color: "#10b981", fontSize: "16px", fontWeight: "500" }}>
              ● Systems Monitored & Operational
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "900",
              color: "white",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Ahmed Shams (Shams Systems)
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#38bdf8",
              margin: 0,
              fontWeight: "600",
            }}
          >
            DevOps &amp; Hybrid Infrastructure • Automation (n8n &amp; MCP)
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            On-Premises Systems · Kubernetes · GitOps · Terraform · Ansible · Prometheus &amp; ELK
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {["On-Premises & Hybrid", "Kubernetes", "GitOps", "n8n & MCP", "DevSecOps", "Prometheus & ELK"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(37, 99, 235, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#e2e8f0",
                  padding: "8px 16px",
                  borderRadius: "24px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
