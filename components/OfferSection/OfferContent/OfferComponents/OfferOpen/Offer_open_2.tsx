const Offer_open_2 = () => {
  return (
    <div className="2xl:py-12 xl:py-12 lg:py-8 py-6">
      <div className="flex justify-center items-center">
        <h1 className="font-bold border-b-[1px] border-black text-white py-1 text-11 2xl:text-13">
          PAKIET OPEN BAR
        </h1>
      </div>
      <ul className="flex flex-col 2xl:gap-5 gap-2 xl:max-w-[300px] mt-4 sm:text-justify">
        <h2 className="h2_offerScriptOpen">Rozszerzenia</h2>
        <li className="li_offerScript">
          Powyżej 120osób, każda dodatkowa osoba płatna:{" "}
          <p className="p_limitPrice">60zł/os</p>
        </li>
        <li className="li_offerScript">
          Wydłużenie Open Baru: <p className="p_limitPrice">1000zł/h</p>
        </li>
        <li className="li_offerScript">
          Dymione oraz wędzone koktajle:<p className="p_limitPrice">600zł</p>
        </li>
        <li className="li_offerScript">
          Szkło Kryształowe: <p className="p_limitPrice">Wycena indywidualna</p>
        </li>
        <li className="li_offerScript">
          Rzeźba lodowa: <p className="p_limitPrice">Wycena indywidualna</p>
        </li>
        <li className="li_offerScript">
          Degustacja alkoholu:
          <p className="p_limitPrice">Wycena indywidualna</p>
        </li>
        <li className="li_offerScript">
          Degustacja cygar:
          <p className="p_limitPrice">Wycena indywidualna</p>
        </li>
        <h2 className="h2_offerScriptOpen">7500 zł</h2>
      </ul>
    </div>
  );
};

export default Offer_open_2;
