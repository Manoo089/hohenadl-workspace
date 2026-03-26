import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export default function Box({ children }: Props) {
  return <div className={clsx("Box")}>{children}</div>;
}
