interface Props {
  icon: string;
  name: string;
  tags: string[];
  tabIndex?: number;
  onFocus?: () => void;
}

export function Cell({ icon, name, tags, tabIndex, onFocus }: Props) {
  const ariaLabel = `${name}: ${tags.join(", ")}`;

  return (
    <div className="Cell" role="listitem" tabIndex={tabIndex} onFocus={onFocus} aria-label={ariaLabel}>
      <div className="Cell__icon" aria-hidden="true">{icon}</div>
      <div className="Cell__name">{name}</div>
      <div className="Cell__tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="Cell__tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
