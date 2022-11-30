export type WordProps = {
  content: string;
  hasShape?: boolean;
  shapeColor?: React.CSSProperties["color"];
  shapeOptions?: {
    extraWidth: boolean
  }
};