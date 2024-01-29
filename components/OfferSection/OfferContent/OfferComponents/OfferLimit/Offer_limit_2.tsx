const Offer_limit_2 = () => {
  return (
    <div className="2xl:py-12 py-4">
      <div className="flex justify-center items-center">
        <h1 className="font-bold border-b-[1px] border-black text-white py-1 2xl:text-13 text-11">
          PAKIET LIMITOWANY
        </h1>
      </div>
      <ul className="flex flex-col 2xl:gap-5 gap-3 xl:max-w-[400px] mt-4">
        <h2 className="h2_offerScriptLimit">Rozszerzenia</h2>
        <li className="li_offerScript">
          Powyżej 80 gości - drugi barman
          <p className="p_limitPrice">800zł</p>
        </li>
        <li className="li_offerScript">
          Zwiększenie pakietu o dodatkowe 50 koktajli{" "}
          <p className="p_limitPrice">700zł</p>{" "}
        </li>
        <li className="li_offerScript">
          Pakiet 50 koktajli Aperol Spritz <p className="p_limitPrice">700zł</p>
        </li>
        <li className="li_offerScript">
          Pakiet 50 drinków JagerBomba
          <p className="p_limitPrice">1000zł</p>
        </li>
        <li className="li_offerScript">
          Wydłużenie usługi<p className="p_limitPrice">1000zł/h</p>
        </li>
        <li className="li_offerScript">
          Rzeźba lodowa <p className="p_limitPrice">Indywidualna wycena</p>
        </li>
        <li className="li_offerScript">
          Kryształowe tło <p className="p_limitPrice">Indywidualna wycena</p>
        </li>
        <h2 className="h2_offerScriptLimit">4200 zł</h2>
      </ul>
    </div>
  );
};

export default Offer_limit_2;
