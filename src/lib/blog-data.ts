export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mukemmel-basin-bulteni-nasil-yazilir",
    title: "Gazetecilerin Gerçekten Açtığı Bir Basın Bülteni Nasıl Yazılır?",
    excerpt: "Gelen kutularında kaybolmamak için gazetecilerin dikkatini ilk saniyede çekecek AP tarzı başlık ve giriş paragrafı teknikleri.",
    content: "### Neden Çoğu Bülten Siliniyor?\n\nBir gazeteci günde ortalama 300 basın bülteni alır. Eğer başlığınız 'Şirketimiz Yeni Bir Ürün Çıkardı' gibi sıkıcıysa, silinme süresi tam olarak 1.2 saniyedir.\n\n### 1. Başlıkta Vaat Verin\nBaşlıkta ne olduğu değil, bunun **neden önemli olduğu** vurgulanmalıdır. Örneğin:\n- *Kötü:* Yeni AI Yazılımı Piyasaya Sürüldü.\n- *İyi:* Yeni AI Yazılımı, Kurumsal Şirketlerin Veri Analiz Süresini %80 Kısaltıyor.\n\n### 2. Ters Piramit Tekniği\nEn önemli bilgiyi (Kim, Ne, Nerede, Ne Zaman, Neden) hemen ilk paragrafa (lead) yerleştirin. Gazeteciler alt satırlara inmek için zaman harcamazlar.\n\n### 3. Jargondan Kaçının\nSektörel karmaşık terimler, inovasyon, sinerji, devrim niteliğinde gibi abartılı sıfatlardan uzak durun. Gerçekleri ve sayıları konuşturun.",
    category: "Rehber",
    author: "Léa Mercier",
    date: "10 Haziran 2026",
    readTime: "4 dk okuma"
  },
  {
    slug: "ambargo-stratejisiyle-hikaye-patlatmak",
    title: "Ambargonun İçi: Bir Seri B Hikayesi Nasıl Patlar?",
    excerpt: "Hyperion Inc.'in 50 milyon dolarlık yatırım haberini küresel çapta eşzamanlı bir medya fırtınasına dönüştüren ambargo taktikleri.",
    content: "### Ambargo Nedir?\nAmbargo, bir haberin gazetecilere önceden verilmesi ancak 'belirli bir tarih ve saate kadar yayımlanmaması' konusunda anlaşılan editoryal bir centilmenlik sözleşmesidir.\n\n### Neden İşe Yarıyor?\nÖzellikle büyük yatırım turlarında veya ürün lansmanlarında, gazetecilere haberi araştırmak ve kaliteli bir makale yazmak için zaman tanımış olursunuz. Haber aynı anda saat 15:00'te 40 farklı prestijli teknoloji dergisinde çıktığında, piyasada devasa bir *yankı* oluşur.\n\n### Breles ile Ambargo Yönetimi\nBreles sisteminde bülteninizi yüklerken, örneğin '14 Haziran 15:00' şeklinde saniyesine kadar bir ambargo ayarlayabilirsiniz. Haber terminallerde tam o an yayına alınır.",
    category: "Saha Notları",
    author: "Daniel Park",
    date: "28 Mayıs 2026",
    readTime: "6 dk okuma"
  },
  {
    slug: "yayinlanma-oranini-artiran-fiiller",
    title: "Yayınlanma Oranınızı Üçe Katlayan 7 Başlık Fiili",
    excerpt: "Geçtiğimiz çeyrekte analiz ettiğimiz 10.000 bülten verisine göre, açılma ve yayınlanma oranını dramatik şekilde artıran o büyülü kelimeler.",
    content: "### Veri Yalan Söylemez\nSistemimiz üzerinden dağıtılan son 10.000 bültenin açık oranlarını analiz ettik. İlginç bir şekilde, edilgen yapıların (örn. 'yapıldı, sunuldu') aktif fiillere göre %45 daha az ilgi gördüğünü saptadık.\n\n### İşte O Fiiller:\n1. **Dönüştürüyor:** İnsanlar değişimi sever.\n2. **Açıklıyor:** Sırrı bozma hissi yaratır.\n3. **Hızlandırıyor:** Zaman kazandıran her şey haberdir.\n4. **Birleştiriyor:** Stratejik ortaklıkları güçlü yansıtır.\n5. **Hedefliyor:** Vizyonu ortaya koyar.\n\nBir dahaki sefere 'Şirketimiz yeni bir özellik yayınladı' yerine 'Şirketimiz e-ticaret altyapılarını hızlandırıyor' demeyi deneyin.",
    category: "Veri",
    author: "Aïsha Bello",
    date: "14 Mayıs 2026",
    readTime: "3 dk okuma"
  }
];
