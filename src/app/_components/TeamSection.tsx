export default function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-4 flex flex-col gap-12">
      <div className="w-full flex justify-center flex-col items-center gap-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">{`Team`}</h2>
        <p className="md:text-xl duration-300 text-center max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          ratione dolores necessitatibus natus error nam aut nostrum temporibus
          minima voluptates?
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-8">
        <div className="w-full aspect-4/3 bg-accent-1"></div>
        <div className="w-full aspect-4/3 bg-accent-1"></div>
      </div>
    </section>
  );
}
