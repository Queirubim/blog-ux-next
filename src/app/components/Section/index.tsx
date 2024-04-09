type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="container mt-10">
      {title && <h2 className="font-semibold text-2xl my-8">{title}</h2>}
      {children}
    </section>
  );
};
