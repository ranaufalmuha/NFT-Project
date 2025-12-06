"use client";
import StaggeredMenu from "@/shared/components/StaggeredMenu";

export default function Header() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/#hero" },
    {
      label: "Characters",
      ariaLabel: "Learn about us",
      link: "/#character-section",
    },
    { label: "Gallery", ariaLabel: "View our services", link: "/gallery" },
    { label: "Team", ariaLabel: "Get in touch", link: "/contact" },
    { label: "Community", ariaLabel: "Get in touch", link: "/community" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <div className="h-screen w-full fixed z-50 pointer-events-none">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        accentColor="#5227FF"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        isFixed={false}
      />
    </div>
  );
}
