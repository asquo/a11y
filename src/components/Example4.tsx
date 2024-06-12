/* eslint-disable react/no-unescaped-entities */
"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import styles from "./example4.module.css";
import { AdvExample4 } from "@/resources/Img";

const FloatingNoise = forwardRef<HTMLDivElement>(function FloatingNoise(
  props,
  ref
) {
  const [showAds, setShowAds] = useState(true);

  const closeAds = () => {
    setShowAds(false);

    setTimeout(() => {
      setShowAds(true);
    }, 5000);
  };

  return (
    <>
      {showAds && (
        <div className={styles.advContainer} ref={ref}>
          <span className={styles.advContainer__close} onClick={closeAds}>
            X
          </span>
          <div>
            Approfitta ora dello sconto del 20% e corri a comprare Everdell!
          </div>
          <div>
            Ultimi pezzi disponibili, su{" "}
            <a href="https://fantasiastore.it/it/giochi-per-esperti/5870-everdell-collectors-edition.html">
              FantasiaStore
            </a>
          </div>
          <img
            width={150}
            height={150}
            src={`data:image/png;base64, ${AdvExample4}`}
          />
        </div>
      )}
    </>
  );
});

export const Demo4 = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const floatingNoiseRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback((ev) => {
    const floatingNoiseRefInstance = floatingNoiseRef.current;

    if (floatingNoiseRefInstance) {
      floatingNoiseRefInstance.style.transition = "all 2s ease-in";
      const newTop = `${window.innerHeight / 2}px`;
      if (floatingNoiseRefInstance.style.top !== newTop) {
        floatingNoiseRefInstance.style.top = `${window.innerHeight * 2}px`;
        setTimeout(() => {
          floatingNoiseRefInstance.style.top = `${window.innerHeight / 2}px`;
        }, 1500);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          TypeScript ha nel suo nome la sua missione: fornire &quot;un
          JavaScript con il supporto opzionale della tipizzazione stretta&quot;
          e la cui compilazione genera codice JavaScript standard. Una soluzione
          ideale per i professionisti che, abituati al tradizionale approccio
          orientato agli oggetti (con linguaggi come Java, C++ o C#) soffrono il
          passaggio a JavaScript per l&apos;assenza della gestione dei tipi di
          dato.
        </div>
        <div>
          Un estratto dalla documentazione ufficiale:
          <div lang="en" style={{ fontStyle: "italic" }}>
            TypeScript offers all of JavaScript’s features, and an additional
            layer on top of these: TypeScript’s type system. For example,
            JavaScript provides language primitives like string and number, but
            it doesn’t check that you’ve consistently assigned these. TypeScript
            does.
          </div>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontStyle: "italic",
            }}
          >
            <a
              href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
              target="_blank"
            >
              Fonte: TypeScript for JavaScript Programmers
            </a>
          </span>
        </div>
      </div>
      <button
        className={styles.actionShowExample}
        onClick={() => {
          //setShowInfoModal(!showInfoModal);
          if (dialogRef.current) {
            dialogRef.current.showModal();
            dialogRef.current.className = styles.modal;
          }
        }}
      >
        Scopri cosa puoi fare
      </button>
      <dialog
        ref={dialogRef}
        onClose={() => {
          if (dialogRef.current) {
            dialogRef.current.className = "";
          }
        }}
      >
        <main>
          <ul>
            <li>
              <a
                href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#types-by-inference"
                target="_blank"
              >
                Types by Inference
              </a>
            </li>
            <li>Defining Types</li>
            <li>Composing Types</li>
            <li>Structural Type System</li>
            <li>Static type-checking</li>
            <li>Type Annotations on Variables</li>
            <li>Object Types</li>
            <li>Union Types</li>
            <li>Type Aliases</li>
            <li>Interfaces</li>
            <li>Type Assertions</li>
            <li>Literal Types</li>
          </ul>
        </main>
        <footer>
          <button
            className={styles.actionModal}
            onClick={() => {
              // setShowInfoModal(false);
              dialogRef.current?.close();
            }}
          >
            Chiudi
          </button>
        </footer>
      </dialog>
      {/* {showInfoModal && (
        <>
          <div className={styles.modalOverlay}></div>
          <div className={styles.modal}>
            <main>
              <ul>
                <li>Types by Inference</li>
                <li>Defining Types</li>
                <li>Composing Types</li>
                <li>Structural Type System</li>
                <li>Static type-checking</li>
                <li>Type Annotations on Variables</li>
                <li>Object Types</li>
                <li>Union Types</li>
                <li>Type Aliases</li>
                <li>Interfaces</li>
                <li>Type Assertions</li>
                <li>Literal Types</li>
              </ul>
            </main>
            <footer>
              <button
                className={styles.actionModal}
                onClick={() => setShowInfoModal(false)}
              >
                Chiudi
              </button>
            </footer>
          </div>
        </>
      )} */}
      <div style={{ marginTop: "50px" }}>
        <div>
          Quando abbiamo parlato di interfacce abbiamo detto che si tratta di un
          modo per definire tipi personalizzati in TypeScript. Anche per le
          classi possiamo definire delle interfacce, ma il loro significato è un
          po' diverso dal concetto di tipo, anche se per certi versi potremmo
          ricondurlo all'approccio strutturale del type system di TypeScript.
          <img
            className="float-right"
            src="data:image/png;base64, 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"
          />
          Come nella maggior parte dei linguaggi orientati agli oggetti, una
          interfaccia è un vincolo al rispetto di un contratto, cioè della
          modalità con cui un oggetto può interagire con un altro oggetto. Una
          interfaccia definisce i membri che una classe deve avere, in modo tale
          gli oggetti che intendono interagire con le loro istanze sappiano
          quali proprietà e metodi chiamare.
        </div>
        <div>
          Essa stabilisce che una classe che voglia aderire al suo contratto,
          deve avere le proprietà nome e cognome e un metodo
          visualizzaNomeCognome() che restituisce una stringa.
        </div>
        <div>
          La seguente classe è un esempio di quella che viene generalmente
          chiamata una implementazione dell'interfaccia IPersona: In questo caso
          la classe Persona dichiara di implementare l'interfaccia IPersona
          tramite la parola chiave implements.
        </div>
        <div>
          Anche la seguente classe implementa la stessa interfaccia: In questo
          caso la classe Studente implementa una proprietà non prevista
          dall'interfaccia, la proprietà materie.
        </div>
        <div>
          Ciò è del tutto lecito, in quanto un'interfaccia definisce i membri
          minimi che una classe deve implementare, ma la classe può implementare
          anche altri membri.
        </div>
        <div>
          TypeScript prevede anche l'estendibilità delle interfacce, cioè un
          meccanismo con cui è possibile definire una nuova interfaccia
          ereditando le caratteristiche definite da un'altra interfaccia.
          <img
            className="float-right"
            src="data:image/png;base64, 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"
          />
        </div>
        <div>
          Ad esempio, il seguente codice definisce l'interfaccia IStudente a
          partire dall'interfaccia IPersona:
        </div>
        <div>
          Oltre all'ereditarietà, possiamo sfruttare i mixin come ulteriore
          approccio alla creazione di classi che riutilizzano funzionalità già
          presenti in altre classi. In pratica questo approccio si basa sulla
          possibilità di combinare classi per definire nuovi classi, sopperendo
          in qualche modo alla mancanza di supporto dell'ereditarietà multipla.
        </div>
        <div>
          Oltre alla classe Studente che conosciamo già, abbiamo definito la
          classe Impiegato che, rispetto a Studente, prevede la proprietà
          mansione. Possiamo creare una nuova classe che mette insieme (mix in)
          le caratteristiche della classe Studente e quelle della classe
          Impiegato specificandola nel seguente modo:
        </div>
        <div>
          Essa analizza l'elenco delle classi da combinare (baseCtors) e
          aggiunge ciascun membro alla classe di destinazione (derivedCtor).
          Come possiamo intuire, il risultato di un mixin non è una classe che
          mantiene un qualche legame con le classi d'origine. La nuova classe è
          il risultato della combinazione delle classi d'origine effettuata da
          una apposita funzione. Nel team di sviluppo di TypeScript è in
          discussione l'opportunità di supportare nativamente una vera e propria
          combinazione delle classi, ma allo stato attuale tale combinazione
          deve essere effettuata esplicitamente come nell'esempio visto.
        </div>
        <div>
          Le funzioni in JavaScript hanno sempre avuto un ruolo di primo piano.
          Esse hanno non solo il ruolo di individuare con un nome blocchi di
          codice eventualmente parametrizzati, ma consentono anche di definire
          costruttori di oggetti e di implementare livelli di protezione delle
          variabili grazie alla closure. Anche in TypeScript le funzioni
          ricoprono un ruolo importante. Anche se alcune loro caratteristiche
          sono ricoperte dall'infrastruttura a oggetti basata sulle classi. Le
          funzioni TypeScript sono integrate nel type system del linguaggio e
          potenziate per rispecchiare alcune delle caratteristiche tipiche dei
          linguaggi di programmazione orientata agli oggetti.
        </div>
        <div>
          <h2>Definire i tipi</h2>
          Abbiamo visto come TypeScript preveda la possibilità di definire i
          tipi di dato dei parametri di una funzione. Abbiamo anche visto come
          dichiarare un'interfaccia che definisca il tipo di funzione, cioè un
          tipo di dato che stabilisce la firma (signature) di una funzione, come
          quella del seguente esempio:
        </div>
        <div>
          <h2>Parametri opzionali, predefiniti e rest</h2>A differenza di
          JavaScript per cui i parametri di una funzione sono tutti opzionali,
          in TypeScript siamo obbligati a passare il numero esatto di parametri
          previsto dalla dichiarazione di funzione. Questo vuol dire che, mentre
          in JavaScript possiamo scrivere il seguente codice:
        </div>
        <div>
          In TypeScript soltanto la chiamata con due argomenti darà un
          risultato, mentre le altre due genereranno un errore a tempo di
          compilazione. L'estrema flessibilità di JavaScript può comunque essere
          recuperata sfruttando alcune caratteristiche di TypeScript come ad
          esempio la possibilità di definire parametri opzionali.
        </div>
        <div>
          In questo modo TypeScript accetterà come valida una chiamata alla
          funzione somma() che passa un solo argomento. È importante tener
          presente che i parametri opzionali devono necessariamente essere gli
          ultimi della lista dei parametri. Non è possibile definire il primo
          parametro come opzionale e poi definire uno o più parametri
          obbligatori. Un'altra alternativa, che consente tra l'altro di
          semplificare il codice della funzione, consiste nella definizione di
          valori predefiniti per i parametri, come mostrato di seguito:
          <img
            className="float-right"
            src="data:image/png;base64, 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"
          />
        </div>
        <div>
          In questo caso, se un valore non viene passato nell'invocazione della
          funzione, allora verrà assegnato al parametro il valore predefinito.
          Anche con questo accorgimento possiamo eseguire con successo la
          chiamata che passa un solo argomento. Tuttavia questi accorgimenti non
          consentono di gestire la situazione in cui passiamo più argomenti di
          quelli previsti dalla dichiarazione. Per rimediare a questa mancanza
          possiamo sfruttare l'operatore rest, rappresentato da tre punti di
          sospensione (...):
        </div>
        <div>
          In questo caso, il parametro z preceduto dall'operatore rest è
          costituito da un array che cattura un numero indefinito di parametri
          dal terzo in poi. Possiamo quindi eseguire un ciclo su tale array per
          sommare tutti gli eventuali parametri in eccesso passati in fase di
          invocazione della funzione.
        </div>
      </div>

      <FloatingNoise ref={floatingNoiseRef} />
    </div>
  );
};
