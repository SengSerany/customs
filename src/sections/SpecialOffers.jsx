import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-blue-500">Qualité </span>
          Garanti
        </h2>
        <p className="mt-4 info-text">
          Nous nous engageons à utiliser des matériaux de la plus haute qualité
          et des techniques de personnalisation expertes pour garantir un rendu
          exceptionnel qui durera dans le temps.
        </p>
        <p className="mt-6 info-text">
          Chez Customs, nous sommes passionnés par la création de sneakers
          uniques qui reflètent votre style individuel.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Voir les collections" iconURL={arrowRight} />
          <Button
            label="En savoir plus"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
      <div className="flex-1">
        <img
          src={offer}
          alt="Quality garanted"
          height={500}
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
