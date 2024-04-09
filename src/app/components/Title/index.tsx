export const Title = ({ title }: { title: string }) => {
  return (
    <section className="w-full lg:my-4 relative">
      <h1 className="container font-semibold text-center border-y-2 border-neutral-400 text-[min(11vw,1280px)]">
        {title.toUpperCase()}
      </h1>
    </section>
  );
};
