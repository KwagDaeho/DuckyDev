export default function Sub1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Test Sub Layout</h2>
      {children}
    </section>
  );
}
