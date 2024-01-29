const Offer_limit_1 = () => {
  return (
    <div className="2xl:py-12 py-4">
      <div className="flex justify-center items-center">
        <h1 className="font-bold border-b-[1px] border-black text-white py-1 2xl:text-13 text-11">
          PAKIET LIMITOWANY
        </h1>
      </div>
      <ul className="flex flex-col 2xl:gap-5 xl:gap-3 gap-2 max-w-[300px] mt-4 sm:text-justify">
        <h2 className="h2_offerScriptLimit">Założenia</h2>
        <li className="li_offerScript">
          Łącznie 6 pozycji do wyboru z podanej listy koktajli
        </li>
        <li className="li_offerScript">Limit 250 koktajli w usłudze</li>
        <li className="li_offerScript">
          Do 8 godzin usługi barmańskiej od momentu wejścia gości
        </li>
        <li className="li_offerScript">
          Lemoniady i koktajle bezalkoholowe poza limitem, w cenie usługi
        </li>
        <li className="li_offerScript">
          Po wyczerpaniu limitu koktajli barman może przygotowywać koktajle na
          bazie wódki weselnej z wykorzystaniem pozostałych składników (do 50
          koktajli bezpłatnie)
        </li>
        <li className="li_offerScript">Estetycznie szkło</li>
        <h2 className="h2_offerScriptLimit">4200 zł</h2>
      </ul>
    </div>
  );
};

export default Offer_limit_1;
