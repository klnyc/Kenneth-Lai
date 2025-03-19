export const Link = ({
  href,
  text,
  imgSrc,
  className,
}: {
  href: string;
  text?: string;
  imgSrc?: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer noopener"
    >
      {text || <img src={imgSrc} />}
    </a>
  );
};
