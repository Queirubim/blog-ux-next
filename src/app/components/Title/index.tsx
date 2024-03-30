export const Title = ({ title }: { title: string }) => {
  return (
    <section className="w-full lg:my-4">
      <h1 className="text-6xl sm:text-9xl md:text-[10rem] md:leading-[12rem] lg:text-[14rem] gl:leading-[12rem] xl:text-[18rem] xl:leading-[16rem] font-semibold text-center border-y-2 border-neutral-400 container">
        {title}
      </h1>
    </section>
  );
};
