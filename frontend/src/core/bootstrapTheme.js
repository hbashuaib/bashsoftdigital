import React from "react";
import { ThemeProvider } from "react-bootstrap";
import theme from "./theme";

export default function BootstrapThemeProvider({ children }) {
  return (
    <ThemeProvider
      prefixes={{
        btn: "btn", // keep default
      }}
      breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
    >
      <style>
        {`
          :root {
            --bs-primary: ${theme.colors.primary};
            --bs-secondary: ${theme.colors.secondary};
            --bs-body-bg: ${theme.colors.background};
            --bs-body-color: ${theme.colors.darkText};
            --bs-font-sans-serif: ${theme.font.family};
            --bs-font-size-base: ${theme.font.size};
            --bs-border-radius: ${theme.radius.card};
          }
        `}
      </style>
      {children}
    </ThemeProvider>
  );
}
