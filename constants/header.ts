export const navLinks = [
  {
    title: "Home",
    href: "/",
    type: "link",
  },
  {
    title: "Explore",
    href: "/explore",
    type: "link",
  },
  {
    title: "Features",
    type: "dropdown",
    children: [
      {
        title: "Explore Your Perfumes",
        href: "/features/explore-your-perfumes",
      },
      {
        title: "Blind Pick by Notes",
        href: "/features/blind-pick",
      },
      {
        title: "Combine Scents",
        href: "/features/combine-perfumes",
      },
      {
        title: "Describe a Memory",
        href: "/features/memory-to-scent",
      },
    ],
  },
];
