"use client";

import { useEffect } from "react";

// Keeps <html lang> in sync with the page locale (the root layout defaults to
// "en"; /es pages flip it to "es"). Runs on the client after hydration.
export default function LangSetter({ locale }) {
  useEffect(() => {
    if (locale) document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
