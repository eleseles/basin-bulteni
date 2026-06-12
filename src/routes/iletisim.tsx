import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "Bize Ulaşın | Breles" },
      { name: "description", content: "Breles ekibiyle iletişime geçin. Destek, satış veya kurumsal talepleriniz için bize yazın." },
    ],
  }),
  component: Iletisim,
});

function Iletisim() {
  return (
    <div className="bg-white min-h-screen">
      <div className="grid lg:grid-cols-2">
        {/* Left Side: Contact Info */}
        <div className="bg-paper p-12 lg:p-24 border-b-2 lg:border-b-0 lg:border-r-2 border-ink flex flex-col justify-center">
          <div className="inline-block self-start bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            Biz Buradayız
          </div>
          <h1 className="font-display text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tighter mb-8">
            Bize<br />Ulaşın
          </h1>
          <p className="text-xl font-medium opacity-80 mb-16 max-w-md">
            Özel paketler, ajans çözümleri veya mevcut dağıtımınız hakkında sorularınız için mesaj bırakın. En geç 2 saat içerisinde dönüş yapıyoruz.
          </p>
          
          <div className="space-y-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Kurumsal Ofis</div>
              <div className="font-medium text-lg">
                Maslak Mah. Büyükdere Cad. No: 255<br />
                Nurol Plaza, Kat: 12<br />
                Sarıyer, İstanbul, Türkiye
              </div>
            </div>
            
            <div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">İletişim Kanalları</div>
              <div className="font-medium text-lg">
                <a href="mailto:hello@basin-bulteni.com" className="hover:text-accent transition-colors block mb-1">hello@basin-bulteni.com</a>
                <a href="tel:+902120000000" className="hover:text-accent transition-colors">+90 (212) 000 00 00</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-12 lg:p-24 flex flex-col justify-center">
          <form className="max-w-lg w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-2">Ad Soyad</label>
              <input 
                type="text" 
                id="name"
                placeholder="Örn: Ali Yılmaz" 
                className="w-full border-2 border-ink p-4 font-medium placeholder:opacity-40 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2">İş E-postası</label>
              <input 
                type="email" 
                id="email"
                placeholder="ali@sirketiniz.com" 
                className="w-full border-2 border-ink p-4 font-medium placeholder:opacity-40 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest mb-2">Konu</label>
              <select 
                id="subject"
                className="w-full border-2 border-ink p-4 font-medium focus:outline-none focus:border-accent transition-colors bg-transparent appearance-none"
              >
                <option>Satış ve Özel Paketler</option>
                <option>Teknik Destek</option>
                <option>Editoryal Destek</option>
                <option>Diğer</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest mb-2">Mesajınız</label>
              <textarea 
                id="message"
                rows={5}
                placeholder="Size nasıl yardımcı olabiliriz?" 
                className="w-full border-2 border-ink p-4 font-medium placeholder:opacity-40 focus:outline-none focus:border-accent transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-ink text-paper py-5 font-bold uppercase tracking-widest hover:bg-accent transition-colors mt-4"
            >
              Mesajı Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
