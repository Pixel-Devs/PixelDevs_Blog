export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 text-center bg-white dark:bg-black text-black dark:text-white font-sans">
      <main className="flex flex-col gap-6 items-center">

        <h1 className="text-3xl sm:text-5xl font-bold">Console.log(&quot;PixelDevs&quot;);</h1>
        <p className="text-lg sm:text-xl max-w-xl text-gray-600 dark:text-gray-300">
          Somos uma pequena equipe apaixonada por tecnologia, e aqui
          compartilhamos nossos projetos, aprendizados e ideias.
        </p>

        <a
          href="/projetos"
          className="mt-4 bg-black text-white dark:bg-white dark:text-black py-2 px-6 rounded-full hover:opacity-90 transition"
        >
          Ver projetos
        </a>
      </main>

      <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} PixelDevs. Todos os direitos reservados.
      </footer>
    </div>
  );
}
