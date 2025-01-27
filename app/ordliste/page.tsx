import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import WordListComponent from "@/components/va/word-list/word-list-component";
export default function Ordliste() {
  return (
    <div className="p-10">
      <header>
        <h1 className="text-3xl mb-4">En guide til almindelige termer</h1>

        <p>
          Udforsk en omfattende ordliste over almindelige sex-relaterede termer.
          Uanset om du er nysgerrig, lærer eller søger de rette ord, har denne
          guide dig dækket.
        </p>
      </header>
      <section>
        <WordListComponent />
      </section>
      <div className="mt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Ordliste</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
