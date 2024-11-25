'use client'

import { ReactNode } from "react";
import WaterWave from "react-water-wave";

interface Props {
  imageUrl?: string;
  dropRadius: string;
  perturbance: string;
  resolution: string;
  children: () => ReactNode;
}

const WaterWaveContainer = ({
  children,
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
}: Props) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
};

export default WaterWaveContainer;
