"use client";

import { useMounted, useHover } from "@/hooks";
import { SVGProps, useEffect } from "react";
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

  useEffect(() => {
    if (isHovered && getHovered && regionId) {
      getHovered(regionId);
    }
  }, [isHovered]);

  return (
    <>
      <a
        onClick={() => getSelected && regionId && getSelected(regionId)}
        className={styles.region}
        {...eventHandlers}
      >
        {children}
      </a>
    </>
  );
};