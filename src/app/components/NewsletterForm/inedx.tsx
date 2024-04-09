import { Button, Input, Link } from '@nextui-org/react';

export const NewsletterForm = () => {
  return (
    <section className="container mt-10 flex flex-col items-center justify-center">
      <h1 className="font-bold text-medium text-purpleDate">Newsletter</h1>
      <h2 className="text-5xl font-semibold mt-3 mb-6">
        Stories and interviews
      </h2>
      <p className="text-lg font-light text-neutral-500 dark:text-neutral-200 text-center mb-10">
        Subscribe to learn about new product features, the latest in technology,
        <br />
        solutions, and updates.
      </p>
      <form action="submit" className="flex gap-4">
        <div>
          <Input type="email" radius="sm" placeholder="Enter your email" />
          <p className="text-sm text-neutral-500 dark:text-neutral-200 text-start">
            We care about your data in our{' '}
            <Link underline="always" color="foreground" href="/">
              privacy policy
            </Link>
          </p>
        </div>
        <Button type="button" className="bg-purple-600 py-5 px-8 text-white">
          Subscribe
        </Button>
      </form>
    </section>
  );
};
