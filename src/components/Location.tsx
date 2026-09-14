function Location() {
  const address = encodeURIComponent(
    "R. Benedito Calixto, 31 - Centro, Itariri - SP, 11760-000",
  );
  return (
    <section className="w-full min-h-150 flex" id="location">
      <div className="min-w-2/5 min-h-full bg-ideal-yellow flex flex-col gap-8 p-8">
        <h3 className="p-4 text-white bg-ideal-black uppercase w-fit">
          Onde estamos
        </h3>
        <h1 className="font-anton uppercase text-5xl">
          Perto de você,<p> sempre!</p>
        </h1>
        <span className="flex items-start gap-4">
          <img src="" alt="" className="w-7.5 h-7.5" />
          <div className="font-semibold">
            <p>Rua Benedito calixto, 31</p>
            <p>Centro de Itariri - SP</p>
            <p>CEP: 117600-000</p>
          </div>
        </span>
        <span className="flex items-start gap-4">
          <img src="" alt="" className="w-7.5 h-7.5" />
          <div className="font-semibold">
            <p>Segunda a Sexta: 8h ás 18h</p>
            <p>Sábado: 9h ás 17h</p>
          </div>
        </span>
        <span className="font-semibold flex items-start gap-4">
          <img src="" alt="" className="w-7.5 h-7.5" />
          <p>(13) 3418-1502</p>
        </span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-70 bg-ideal-black text-white text-2xl p-4 cursor-pointer text-center"
        >
          Traçar rota {"->"}
        </a>
      </div>

      <div className="relative min-h-full w-full overflow-hidden shadow-lg">
        <iframe
          title="Localização da loja"
          src={`https://www.google.com/maps?q=${address}&output=embed`}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default Location;
