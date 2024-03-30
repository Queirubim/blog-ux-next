import { CardPost } from 'app/components/CardPost';

export const RecentPosts = () => {
  return (
    <section className="container mt-10">
      <h2 className="font-semibold text-2xl my-8">Recent blog posts</h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-4">
        {/* Grid1 */}
        <div className=" row-span-2 ">
          <CardPost />
        </div>
        {/* Grid2 */}
        <div className="col-start-2">
          <CardPost cnCard="flex-row" cnImage="w-[50%] h-full" />
        </div>
        {/* Grid3 */}
        <div className="">
          <CardPost cnCard="flex-row" cnImage="w-[50%] h-full" />
        </div>
        {/* Grid4 */}
        <div className="h-[300px]   col-span-2 row-start-3">
          <CardPost cnImage="h-[300px] w-[50%]" cnCard="flex-row" />
        </div>
      </div>
    </section>
  );
};
