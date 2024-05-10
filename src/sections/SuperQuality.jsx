import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Personnalisation à<span className="text-blue-500"> Votre </span>
          Demande
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Imaginez le design de vos sneakers, choisissez les couleurs, les
          motifs et les finitions, et laissez nos artisans talentueux donner vie
          à votre vision.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Chez Customs, vous êtes le maître de votre création.
        </p>
        <div className="mt-11">
          <Button label="Contacter nous" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
