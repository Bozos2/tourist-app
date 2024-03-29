"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("54562bd5-b68e-44b3-ba1e-88a313618d20");
  });

  return null;
};
