import { Car } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12 px-4">
    <div className="container-narrow">
      <div className="grid sm:grid-cols-4 gap-8 mb-10">
        <div className="sm:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <Car className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Ready Taxi</span>
          </div>
          <p className="text-sm text-muted-foreground">The all-in-one taxi booking & fleet management platform.</p>
        </div>

        {[
          { title: "Product", links: ["Features", "Pricing", "Mobile Apps", "API Docs"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Cookie Policy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-foreground mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ready Taxi. All rights reserved.</p>
        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "GitHub"].map((s) => (
            <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
