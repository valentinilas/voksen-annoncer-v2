import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export default function CookiePolitik() {
  return (
    <div className="p-5 md:p-10">
      <header>
        <h1 className="text-3xl mb-4">Cookiepolitik</h1>
        <p>
          <strong>Effektiv dato:</strong> 01/01/2025
        </p>
      </header>
      <section>
        <h2>Velkommen til Voksenannoncer</h2>
        <p>
          Denne Cookiepolitik forklarer, hvad cookies er, hvordan vi bruger dem
          på vores hjemmeside, og dine valgmuligheder vedrørende cookies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 mt-10">Hvad er cookies?</h2>
        <p>
          Cookies er små tekstfiler, der placeres på din enhed af de
          hjemmesider, du besøger. De bruges bredt til at få hjemmesider til at
          fungere eller fungere mere effektivt samt til at give information til
          hjemmesideejere.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 mt-10">Hvordan vi bruger cookies</h2>
        <p>Voksenannoncer bruger cookies af forskellige årsager, herunder:</p>
        <ul className="mt-2">
          <li className="mb-2">
            <strong>Nødvendige cookies:</strong>
            <br /> Disse cookies er nødvendige for, at hjemmesiden kan fungere
            korrekt. De gør det muligt for dig at navigere på vores side og
            bruge dens funktioner.
          </li>
          <li className="mb-2">
            <strong>Performance- og analysecookies:</strong>
            <br /> Disse cookies hjælper os med at forstå, hvordan besøgende
            interagerer med vores hjemmeside ved at indsamle og rapportere
            information anonymt. De tillader os at forbedre funktionaliteten og
            brugeroplevelsen af vores side.
          </li>
          <li className="mb-2">
            <strong>Funktionalitetscookies:</strong>
            <br /> Disse cookies tillader vores hjemmeside at huske de valg, du
            foretager, og give forbedrede, mere personlige funktioner.
          </li>
          <li>
            <strong>Reklame- og målrettede cookies:</strong>
            <br /> Disse cookies bruges til at levere reklamer, der er mere
            relevante for dig og dine interesser. De hjælper også med at måle
            effektiviteten af reklamekampagner.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4 mt-10">Cookies, vi bruger</h2>
        <p>
          Her er en liste over typer af cookies, vi bruger på Voksenannoncer:
        </p>
        <ul className="mt-2">
          <li className="mb-2">
            <strong>Sessionscookies:</strong>
            <br /> Midlertidige cookies, der forbliver i din browsers
            cookie-fil, indtil du forlader hjemmesiden.
          </li>
          <li>
            <strong>Vedvarende cookies:</strong>
            <br /> Disse cookies forbliver i din browsers cookie-fil i meget
            længere tid, afhængigt af varigheden af hver specifik cookie.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4 mt-10">
          Dine valgmuligheder vedrørende cookies
        </h2>
        <p>
          Du har ret til at vælge, om du vil acceptere cookies eller ej. Vær
          opmærksom på, at hvis du vælger at afvise cookies, kan du måske ikke
          bruge alle funktionerne på vores hjemmeside. Her er nogle måder, du
          kan administrere dine cookie-præferencer på:
        </p>
        <ul>
          <li>
            <strong>Browserindstillinger:</strong>
            <br /> De fleste webbrowsere tillader dig at styre cookies via deres
            indstillinger. Du kan indstille din browser til at afvise cookies
            eller slette visse cookies.
          </li>
          <li>
            <strong>Opt-out-links:</strong>
            <br /> Nogle tredjepartsannoncører giver en mekanisme til at
            fravælge deres cookies. For mere information om tredjepartscookies
            og dine valgmuligheder vedrørende dem, besøg
            <a href="https://www.youronlinechoices.com" target="_blank">
              https://www.youronlinechoices.com
            </a>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4 mt-10">
          Ændringer af denne Cookiepolitik
        </h2>
        <p>
          Vi kan opdatere denne Cookiepolitik fra tid til anden for at afspejle
          ændringer i vores praksis eller af andre driftsmæssige, juridiske
          eller regulerende årsager. Når vi foretager ændringer i denne politik,
          opdaterer vi &ldquo;Effektiv dato&ldquo; øverst på denne side.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 mt-10">Kontakt os</h2>
        <p>
          Hvis du har spørgsmål vedrørende vores brug af cookies eller denne
          Cookiepolitik, bedes du kontakte os på:
        </p>
        <p>
          Email:{" "}
          <a className="underline" href="mailto:voksenannoncer@gmail.com">
            voksenannoncer@gmail.com
          </a>
        </p>
      </section>
      <div className="mt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cookiepolitik</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
