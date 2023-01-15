import { useEffect, useState } from "react";
import { cheatSheets } from "../../guides/cheatSheets";
import { GoPlus } from "react-icons/go";

export default function ProjectInfo() {
  useEffect(() => {}, []);

  return (
    <>
      <section className="flex flex-wrap items-stretch justify-center bg-dark-brown py-10 w-full shadow-inner">
        <div className="w-full lg:w-2/3 flex flex-col px-10 xl:px-64 gap-4">
          <div className="flex bg-medium-brown rounded-md px-2 txt-title text-light-brown text-sm w-fit my-2">
            <div className="bg-red rounded-full w-2 h-2 m-auto mr-2"></div>
            Newsletter mensal sobre a trilha
          </div>
          <p className="text-4xl txt-title text-yellow m-auto">
            Assine a <span className="text-red">newsletter</span> para não
            perder as últimas novidades da{" "}
            <span className="text-red">Trilha Info</span>
          </p>
          <a
            className="bg-red txt-title p-2 w-fit rounded-md "
            href="https://www.getrevue.co/profile/flaviojmendes"
          >
            Assine Agora!
          </a>
          <h3 className="txt-title text-4xl mt-8 text-yellow font-semibold">
            Open <span className="text-red">Source</span>
          </h3>
          <div className="text-yellow">
            <p className="my-2 txt-title">
              A Trilha Info é um projeto{" "}
              <span className="font-semibold text-red hover:text-light-brown">
                <a
                  target={"_blank"}
                  href="https://github.com/flaviojmendes/trilhainfo"
                >
                  Open Source
                </a>
              </span>{" "}
              que nasceu em Junho/2022 com o objetivo de agregar e organizar
              conteúdos gratuitos em português para pessoas que querem ingressar
              na área de Tecnologia.
            </p>
            <p className="my-8 txt-title">
              A motivação em criar esse aplicativo é por acreditar que a
              educação e o conhecimento devem ser democráticos. Qualquer pessoa
              deveria ter acesso aos assuntos que se interessa para que garanta
              um futuro cada vez mais próspero.
            </p>
            <p className="my-8 txt-title">
              Encontrou um Bug 🐛, tem uma ideia 💡? É só abrir uma{" "}
              <a
                className="font-semibold text-red hover:text-light-brown"
                target={"_blank"}
                href="https://github.com/flaviojmendes/trilhainfo/issues"
              >
                issue
              </a>
              .
            </p>
            <p className="my-8 txt-title">
              Portanto, se você também acredita nisso compartilhe para que o
              conhecimento chegue cada vez mais longe. E participe da nossa
              comunidade no{" "}
              <span className="font-semibold text-red hover:text-light-brown">
                <a target={"_blank"} href="https://discord.gg/HJ3Spm6R">
                  Discord
                </a>
              </span>{" "}
            </p>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=flaviojmendes&repo=trilhainfo&type=star&count=true&size=large&v=2"
              scrolling="0"
              width="170"
              height="30"
              title="Trilha Info"
            ></iframe>
          </div>
          <div className="grow"></div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col px-10 xl:pr-28 mt-10 lg:mt-0 gap-4">
          <div className="flex bg-medium-brown rounded-md px-2 txt-title text-light-brown text-sm w-fit my-2">
            <div className="bg-blue rounded-full w-2 h-2 m-auto mr-2"></div>
            Faça download gratuito
          </div>
          <h3 className="text-4xl txt-title text-yellow font-semibold">
            <span className="text-blue">Guias</span> Cheat Sheets
          </h3>
          {cheatSheets.map((cheatSheet) => {
            return (
              <div
                key={cheatSheet.id}
                className="flex w-full min-h-fit space-y-2 bg-brown hover:bg-white p-3 rounded-md"
              >
                <a
                  className="text-lg md:text-2xl txt-title flex gap-2"
                  href={`/guide/${cheatSheet.id}`}
                >
                  <GoPlus className="my-auto" />{" "}
                  <span className="my-auto">{cheatSheet.title}</span>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
