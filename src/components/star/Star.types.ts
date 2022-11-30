type StarTopLeft = {
  top: number;
  left: number;
  bottom?: never;
  right?: never;
};

type StarTopRight = {
  top: number;
  right: number;
  bottom?: never;
  left?: never;
};

type StarBottomLeft = {
  bottom: number;
  left: number;
  top?: never;
  right?: never;
};

type StarBottomRight = {
  bottom: number;
  right: number;
  top?: never;
  left?: never;
};

export type StarProps = {
  hasRotate?: boolean;
  color?: React.CSSProperties["color"];
  size?: "md" | "lg";
} & (StarTopLeft | StarTopRight | StarBottomLeft | StarBottomRight);
