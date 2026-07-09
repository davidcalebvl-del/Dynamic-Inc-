function DavoraLogo({ size = 40, alt = 'Dynamics Inc Logo' }) {
  const dimension = size;
  return (
    <img
      src="/docs/Davora logo.png"
      alt={alt}
      width={dimension}
      height={dimension}
      className="davora-logo"
      style={{ display: 'inline-block', objectFit: 'contain' }}
    />
  );
}

export default DavoraLogo;
