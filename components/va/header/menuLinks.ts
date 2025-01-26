interface MenuLink {
  id: number;
  title: string;
  href: string;
}

export const MenuLinks: MenuLink[] = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "Annoncer", href: "/posts" },
  { id: 2, title: "Blog", href: "/articles" },
  { id: 3, title: "Ordliste", href: "/word-guide" },
];
