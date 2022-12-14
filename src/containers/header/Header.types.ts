import React from "react";

type FloatStarTopLeft = {
  top: number;
  left: number;
  bottom?: never;
  right?: never;
};

type FloatStarTopRight = {
  top: number;
  right: number;
  bottom?: never;
  left?: never;
};

type FloatStarBottomLeft = {
  bottom: number;
  left: number;
  top?: never;
  right?: never;
};

type FloatStarBottomRight = {
  bottom: number;
  right: number;
  top?: never;
  left?: never;
};

export type FloatStarProps =
  | FloatStarTopLeft
  | FloatStarTopRight
  | FloatStarBottomLeft
  | FloatStarBottomRight;
