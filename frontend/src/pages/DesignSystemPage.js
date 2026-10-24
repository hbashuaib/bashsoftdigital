import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useTheme } from "../core/ThemeContext";

export default function DesignSystemPage() {
  const theme = useTheme();

  return (
    <MainLayout>
      <div style={{ padding: "40px" }}>
        <h1>🎨 BashSoft Digital Design System</h1>
        <p>This page showcases our global styles for reference.</p>

        {/* Colors */}
        <section style={{ marginTop: "40px" }}>
          <h2>Colors</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            {Object.entries(theme.colors).map(([name, value]) => (
              <div key={name} style={{ textAlign: "center" }}>
                <div style={{
                  backgroundColor: value,
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  border: "1px solid #ccc"
                }} />
                <p>{name}<br />{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginTop: "40px" }}>
          <h2>Typography</h2>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Body text example using {theme.font.family} at {theme.font.size}.</p>
        </section>

        {/* Spacing */}
        <section style={{ marginTop: "40px" }}>
          <h2>Spacing</h2>
          <p>Section padding: {theme.spacing.section}</p>
          <p>Card padding: {theme.spacing.card}</p>
        </section>

        {/* Buttons */}
        <section style={{ marginTop: "40px" }}>
          <h2>Buttons</h2>
          <button className="btn btn-primary">Primary Button</button>{" "}
          <button className="btn btn-secondary">Secondary Button</button>{" "}
          <button className="btn btn-outline-primary">Outline Button</button>
        </section>

        {/* Cards */}
        <section style={{ marginTop: "40px" }}>
          <h2>Cards</h2>
          <div className="card shadow-sm" style={{ borderRadius: theme.radius.card, width: "250px" }}>
            <div className="card-body">
              <h5 className="card-title">Card Example</h5>
              <p className="card-text">This card uses our global radius and spacing.</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
