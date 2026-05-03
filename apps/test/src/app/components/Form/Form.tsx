interface Props {
  children: React.ReactNode;
  onSubmit: () => void;
}

export default function Form({ children, onSubmit }: Props) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
