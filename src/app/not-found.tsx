import { Title } from './components/Title';

export const metadata = {
  title: 'Página não Encontrada',
};

export default function PageNotFound() {
  return (
    <section className="flex container items-center flex-col justify-center h-screen w-full">
      <Title title="Erro: 404" />
      <p className="font-semi text-xl mt-10">
        A pagina que você esta procurando não foi encontrada.
      </p>
    </section>
  );
}
