interface FooterLink {
  id: number;
  title: string;
  href: string;
}

export const FooterLinks: FooterLink[] = [
  { id: 0, title: "Hjem", href: "/" },
  { id: 1, title: "Annoncer", href: "/annoncer" },
  { id: 2, title: "Blog", href: "/artikler" },
  { id: 3, title: "Ordliste", href: "/ordliste" },
  { id: 4, title: "Om", href: "/om" },
  { id: 5, title: "Support", href: "/support" },
  { id: 6, title: "Cookiepolitik ", href: "/cookiepolitik" },
];
