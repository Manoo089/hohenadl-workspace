interface Props {
  color?: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blur?: string;
  translateX?: string;
  translateY?: string;
  duration?: string;
  delay?: string;
  reverse?: boolean;
}

export function Orb({
  top,
  left,
  right,
  bottom,
  size,
  color,
  blur = "64px",
  translateX = "0",
  translateY = "0",
  duration = "6s",
  delay = "0s",
  reverse = false,
}: Props) {
  return (
    <div
      className="Orb"
      style={{
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        filter: `blur(${blur})`,
        top,
        left,
        right,
        bottom,
        transform: `translateY(${translateY}) translateX(${translateX})`,
        animation: `pulse ${duration} ${delay} ease-in-out infinite ${reverse ? "reverse" : ""}`,
        pointerEvents: "none",
      }}
    ></div>
  );
}
