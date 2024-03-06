"use client";

import { useEffect } from "react";
// NPM
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 0 });
  }, []);

  return null;
};

export default AOSProvider;
