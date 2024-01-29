import Image from "next/image";

const Cocktails3 = () => {
  return (
    <div className="2xl:py-20  xl:py-12 lg:py-6 py-4">
      <div className="flex justify-center items-center">
        <h1 className="font-bold border-b-[1px] border-black text-white py-1 2xl:text-13 text-11">
          KOKTAJLE HOMEMADE
        </h1>
        <Image
          src="/assets/icons/cocktail3.png"
          alt="cocktail"
          width={40}
          height={20}
          className="ml-2 2xl:mb-2 mb-3"
        />
      </div>
      <ul className="mt-2 lg:min-w-[400px] flex flex-col 2xl:gap-2">
        <li>
          <h2 className="h2_cocktail">LATE MORNING SPRITZ</h2>
          <p className="p_cocktail">whisky, kordiał pomarańcza-kawa, soda</p>
        </li>
        <li>
          <h2 className="h2_cocktail">BIG WOODEN SPRITZ</h2>
          <p className="p_cocktail">
            whisky, kordiał wiśnia-kora dębu, soda, bitter
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">APPLE PIE SPRITZ</h2>
          <p className="p_cocktail">
            whisky, kordiał jabłko-trawa cytrynowa, soda, bitter
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">GREENGER SPRITZ</h2>
          <p className="p_cocktail">gin, kordiał imbir-ogórek, soda, bitter</p>
        </li>
        <li>
          <h2 className="h2_cocktail">PUNCH</h2>
          <p className="p_cocktail">
            tequila infuzowana chilli, kordiał ananas-kokos, bitter
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">HUGE TASTY</h2>
          <p className="p_cocktail">
            gin infuzowany lasem, etiuda czarnego bzu, mięta, prosecco
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">SMOKED PEAR</h2>
          <p className="p_cocktail">
            whisky islay(dymna), kordiał gruszka-rozmaryn
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">MR. NOBODY</h2>
          <p className="p_cocktail">
            wódka infuzowana earl-grey, bergamotka, angostura
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">MATCHA SOUR</h2>
          <p className="p_cocktail">
            wódka infuzowana limonką, sour, matcha, białko, bitter
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Cocktails3;
