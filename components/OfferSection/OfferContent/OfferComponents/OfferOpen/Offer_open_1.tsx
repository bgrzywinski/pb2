const Offer_open_1 = () => {
  return (
    <div className="2xl:py-12 xl:py-12 lg:py-8 py-6">
      <div className="flex justify-center items-center">
        <h1 className="font-bold border-b-[1px] border-black text-white py-1 text-11 2xl:text-13">
          PAKIET OPEN BAR
        </h1>
      </div>
      <ul className="flex flex-col 2xl:gap-5 gap-3 xl:max-w-[300px] mt-4 sm:text-justify">
        <h2 className="h2_offerScriptOpen">Założenia</h2>
        <li className="li_offerScript">
          Łącznie 10 pozycji do wyboru z podanej listy koktajli
        </li>
        <li className="li_offerScript">
          Brak limitu koktajli, drinków bezalkoholowych lemoniad
        </li>
        <li className="li_offerScript">Usługa maksymalnie dla 120os.</li>
        <li className="li_offerScript">Aperol Spritz w cenie pakietu</li>
        <li className="li_offerScript">JagerBomba w cenie pakietu</li>
        <li className="li_offerScript">Brak kosztów logistycznych</li>
        <li className="li_offerScript">Estetycznie szkło</li>
        <h2 className="h2_offerScriptOpen">7500 zł</h2>
      </ul>
    </div>
  );
};

export default Offer_open_1;
