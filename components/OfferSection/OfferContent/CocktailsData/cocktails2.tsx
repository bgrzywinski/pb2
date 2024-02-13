import Image from "next/image";

const Cocktails2 = () => {
  return (
    <div className="2xl:py-12 my-4 mx-2 px-3 py-2 shadow-black shadow-2xl rounded-2xl">
      <div className="flex justify-center items-center">
        <h1 className="font-bold border-b-[1px] border-black py-1 2xl:text-13 text-11 text-shadow text-white">
          KOKTAJLE AUTORSKIE
        </h1>
        <Image
          src="/assets/icons/cocktail2.png"
          alt="cocktail"
          width={40}
          height={20}
          className="ml-2 mb-3"
        />
      </div>
      <ul className="mt-2 lg:min-w-[400px] flex flex-col 2xl:gap-2">
        <li>
          <h2 className="h2_cocktail">WILD MOJITO</h2>
          <p className="p_cocktail">tequila, limonka, mięta, angostura</p>
        </li>
        <li>
          <h2 className="h2_cocktail">STRAWBERRY DAIQUIRI</h2>
          <p className="p_cocktail">rum, limonka, pure ze świeżych truskawek</p>
        </li>
        <li>
          <h2 className="h2_cocktail">LONDON MULE</h2>
          <p className="p_cocktail">gin, świeży ogórek, mięta, piwo imbirowe</p>
        </li>
        <li>
          <h2 className="h2_cocktail">ROSMARRY SPRITZ</h2>
          <p className="p_cocktail">gin, sour, tonik różany, bitter</p>
        </li>
        <li>
          <h2 className="h2_cocktail">APPLETINI</h2>
          <p className="p_cocktail">wódka, likier jabłko, sok z jabłka, sour</p>
        </li>
        <li>
          <h2 className="h2_cocktail">COFFEE BREAK</h2>
          <p className="p_cocktail">whisky, baileys, likier kawowy, espresso</p>
        </li>
        <li>
          <h2 className="h2_cocktail">NY WHISKY SOUR</h2>
          <p className="p_cocktail">
            whisky, sour, białko, angostura, czerwone wino
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">T PORNSTAR MARTINI</h2>
          <p className="p_cocktail">
            tequila, sour, marakuja, prosecco/szampan
          </p>
        </li>
        <li>
          <h2 className="h2_cocktail">WHITE LADY</h2>
          <p className="p_cocktail">gin, sour, białko, bitter</p>
        </li>
      </ul>
    </div>
  );
};

export default Cocktails2;
