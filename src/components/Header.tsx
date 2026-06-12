import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b-2 border-ink px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-display text-3xl tracking-tighter uppercase hover:text-accent transition-colors flex items-center gap-3">
        <img src="/@fs/Users/eles/.gemini/antigravity-ide/brain/48ab4e5f-b73a-4b64-a62b-d277a9954760/breles_logo_text_1781296570323.png" alt="Breles Logo" className="h-8 w-auto mix-blend-multiply" />
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
        <Link to="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
        <a href="/#distribution" className="hover:text-accent transition-colors">Dağıtım</a>
        <Link to="/basin-bulteni-paketleri" className="hover:text-accent transition-colors [&.active]:text-accent">Fiyatlandırma</Link>
        <a href="/#faq" className="hover:text-accent transition-colors">SSS</a>
      </div>
      <Link to="/basin-bulteni-paketleri" className="inline-block bg-ink text-paper px-6 py-2 text-sm font-bold uppercase tracking-tighter hover:bg-accent transition-colors">
        Bülten Gönder
      </Link>
    </nav>
  );
}
