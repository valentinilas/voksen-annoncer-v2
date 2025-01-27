interface MenuLink {
  id: number;
  title: string;
  href: string;
}

export const MenuLinks: MenuLink[] = [
  { id: 0, title: "Hjem", href: "/" },
  { id: 1, title: "Annoncer", href: "/annoncer" },
  { id: 2, title: "Blog", href: "/artikler" },
  { id: 3, title: "Ordliste", href: "/ordliste" },
];
