import { ImageResponse } from "next/og";

export const alt = "Portfolio | Manuel Hohenadl";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0c10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          position: "relative",
        }}
      >
        {/* Accent border left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "4px",
            height: "100%",
            background: "#3ef0a4",
          }}
        />

        {/* Tag */}
        <div
          style={{
            color: "#3ef0a4",
            fontSize: 18,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 32,
            fontFamily: "monospace",
          }}
        >
          // Portfolio
        </div>

        {/* Name */}
        <div
          style={{
            color: "#d4dbe8",
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          Manuel Hohenadl
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#5a6678",
            fontSize: 28,
            fontFamily: "monospace",
          }}
        >
          Web Developer — Bayern / Remote
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 96,
            color: "#3ef0a4",
            fontSize: 18,
            fontFamily: "monospace",
            opacity: 0.7,
          }}
        >
          hohenadl.dev
        </div>
      </div>
    ),
    size,
  );
}
