import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site";

export const alt =
  "Rénovéa — Rénovation pour syndics et copropriétés (site de démonstration)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const navy = "#0f2a4a";
const grayAccent = "#8a92a0";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: navy,
          color: "#fafafa",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: grayAccent,
          }}
        >
          Rénovation · Syndics & Copropriétés
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 100, fontWeight: 700 }}>
            {BRAND.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              marginTop: 12,
              color: "#d4d7dd",
            }}
          >
            Le point de chute à la hauteur de vos chantiers.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: grayAccent,
          }}
        >
          Site de démonstration
        </div>
      </div>
    ),
    size,
  );
}
