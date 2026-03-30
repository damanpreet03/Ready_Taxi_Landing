import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/icon.png";

const api = import.meta.env.VITE_API_URL;
console.log(api);

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-4">
        {/* <a href="" className="text-xl font-bold text-gradient">Ready Taxi</a> */}
        {/* <a href="" className="text-xl font-bold text-gradient"> */}
        <img src={logo} alt="Logo" width={100} height={100} />
        {/* <div className="card-elevated-xl overflow-hidden">
          <img src={logo} alt="Ready Taxi taxi management dashboard" width={1280} height={800} className="w-full h-auto" />
        </div> */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* <Button variant="ghost" size="sm">Log In</Button> */}
          <Button variant="hero" size="sm">Get Started</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {
        open && (
          <div className="md:hidden bg-card border-b border-border px-4 pb-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 mt-3">
              <Button variant="ghost" size="sm" className="flex-1">Log In</Button>
              <Button variant="hero" size="sm" className="flex-1">Get Started</Button>
            </div>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;
