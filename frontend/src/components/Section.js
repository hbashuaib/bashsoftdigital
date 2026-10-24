import React from "react";
import theme from "../core/theme";

export default function Section({ id, title, items }) {
  return (
    <div id={id} style={{ padding: theme.spacing.section, backgroundColor: theme.colors.background }}>
      <h2 style={{ color: theme.colors.darkText, marginBottom: "30px" }}>{title}</h2>
      <div className="row">
        {items.map((item, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ borderRadius: theme.radius.card }}>
              <div className="card-body">
                <h5 className="card-title">{item}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
