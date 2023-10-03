"use client";

import { useMounted, useHover } from "@/hooks";
import { SVGProps, useEffect, useState } from "react";
import styles from "./Region.module.css";

interface RegionProps extends SVGProps<SVGPathElement> {
  link?: string;
  text?: string;
  regionId?: number;
  getSelected?: (regionId: number) => void;
  getHovered?: (regionId: number) => void;
}

export const Region = ({ children, link, text, regionId, getSelected, getHovered }: RegionProps) => {
  const { hasMounted: _hasMounted } = useMounted();
  const [isHovered, eventHandlers] = useHover();
  const [wasSelected, setWasSelected] = useState(false);

  useEffect(() => {
    if (isHovered && getHovered && regionId) {
      getHovered(regionId);
    }
  }, [isHovered]);

  const handleGetSelected = () => {
    if (getSelected && regionId) {
      getSelected(regionId);
      setWasSelected(true);
    }
  };

  return (
    <>
      <a
        onClick={() => handleGetSelected()}
        className={wasSelected ? styles.regionSelected : styles.region}
        {...eventHandlers}
      >
        {children}
      </a>
    </>
  );
};