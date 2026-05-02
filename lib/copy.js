// lib/copy.js — CIJELI vidljivi sadržaj landing stranice.
// Sve promjene na tekstu rade se ovdje. Komponente čitaju samo iz ovog objekta.

export const copy = {
  metadata: {
    title: "1000 zdravih recepata 2.0",
    description:
      "1000 zdravih recepata 2.0 za dijabetičare: ukusni, jednostavni i osmišljeni posebno za kontrolu šećera u krvi. Posebna ponuda: 8.90 € + 5 besplatnih bonusa.",
    lang: "hr",
  },

  brand: {
    name: "",
    tagline: "",
  },

  hero: {
    banner: "OVA PONUDA + BESPLATNI BONUSI ISTIČE ZA:",
    timerLabels: { days: "Dani", hours: "Sati", minutes: "Min", seconds: "Sek" },
    kicker: "Više od 2.000 ljudi već je promijenilo svoj život",
    headlinePre: "Više od 2.000 ljudi",
    headlineHighlight: "poboljšalo je svoje zdravlje",
    headlinePost: "zahvaljujući naših 1000 recepata",
    subheadline: "Dijabetes nije izgovor da se odrekneš ukusne hrane!",
    supporting:
      "Poboljšaj svoje zdravlje dok uživaš u nevjerojatnim okusima uz naših 1000 zdravih recepata 2.0",
    cta: "Želim knjigu sada! 📖",
    imageAlt: "E-knjiga 1000 zdravih recepata 2.0 za dijabetičare",
    trustChips: [
      { icon: "⭐", text: "+2.000 ljudi" },
      { icon: "🎁", text: "5 besplatnih bonusa" },
      { icon: "🛡️", text: "7-dnevno jamstvo" },
    ],
  },

  story: {
    headlinePre: "Jesi li znao/la da loša prehrana može povećati rizik od",
    headlineHighlight: "komplikacija dijabetesa",
    headlinePost: "brzo i potpuno neprimjetno?",
    intro:
      "Svaki je zalogaj važan. Ono što jedeš danas određuje kako ćeš se osjećati sutra, a kada živiš s dijabetesom, male greške se nakupljaju tiho i neprimjetno.",
    problemsLead: "Evo koji se problemi javljaju kada zanemariš svoju prehranu:",
    problems: [
      {
        title: "Nagli skokovi šećera u krvi",
        desc: "Loša prehrana može dovesti do naglih promjena razine šećera u krvi, što posljedično uzrokuje oštećenja živaca, očiju i bubrega.",
      },
      {
        title: "Povećanje tjelesne težine",
        desc: "Nezdrava hrana često dovodi do debljanja, što može znatno pogoršati stanje dijabetesa.",
      },
      {
        title: "Povećan rizik od srčanih bolesti",
        desc: "Loše prehrambene navike povećavaju rizik od srčanih oboljenja, koja su jedan od glavnih uzroka smrtnosti kod osoba s dijabetesom.",
      },
      {
        title: "Probavni problemi",
        desc: "Neki sastojci mogu izazvati intoleranciju, zatvor, plinove i osjećaj nelagode.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Jedna ruka sa zelenom jabukom, a druga s ružičastom krafnom: tvoj izbor je bitan",
    solutionBadge: "Rješenje",
    solutionHeadline:
      "Želiš li naučiti kako jesti ukusno i zdravo, a da pritom ne zanemariš svoj dijabetes?",
  },

  benefits: {
    forYouHeadline: "Ova je e-knjiga stvorena baš za tebe ako...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Imaš dijabetes ili brineš o nekome tko ga ima",
        desc: "Otkrit ćeš recepte osmišljene za održavanje šećera pod kontrolom, bez odricanja od užitka u hrani.",
      },
      {
        icon: "Sparkles",
        title: "Želiš pojednostaviti zdravo kuhanje",
        desc: "Zdrava prehrana ne mora biti komplicirana: donosimo ti kratke i jasne korake.",
      },
      {
        icon: "Users",
        title: "Tražiš ukusne i jednostavne recepte za cijelu obitelj",
        desc: "Jela u kojima će uživati svi ukućani, a ne samo osoba s dijabetesom.",
      },
    ],
    headline: "Što ćeš postići s 1000 zdravih recepata 2.0",
    items: [
      {
        icon: "ChefHat",
        title: "Zdravi i ukusni recepti",
        desc: "Koje će tvoja obitelj obožavati pri svakom obroku.",
      },
      {
        icon: "ListChecks",
        title: "Upute korak po korak",
        desc: "Jednostavne za praćenje, čak i ako si potpuni početnik u kuhinji.",
      },
      {
        icon: "ShoppingBasket",
        title: "Pristupačni sastojci",
        desc: "Lako ih je pronaći u svakom lokalnom supermarketu.",
      },
      {
        icon: "Lightbulb",
        title: "Savjeti i trikovi iskusnih kuhara",
        desc: "Kako bi kuhao/la sa samopouzdanjem i postigao/la bolji okus.",
      },
      {
        icon: "Apple",
        title: "Pažljivo odabrane hranjive tvari",
        desc: "Naučit ćeš kako svom tijelu dati točno ono što mu treba.",
      },
      {
        icon: "Wheat",
        title: "Kontrola unosa ugljikohidrata",
        desc: "Bez kompromisa kad su u pitanju okus ili raznolikost.",
      },
      {
        icon: "Activity",
        title: "Stabilne razine šećera u krvi",
        desc: "Jela koja pomažu u strogom održavanju kontrole.",
      },
      {
        icon: "HeartPulse",
        title: "Poboljšanje cjelokupnog zdravlja",
        desc: "Više energije, bolja probava i viša kvaliteta života.",
      },
    ],
    socialProof:
      "Uz naših 1000 zdravih recepata 2.0 za dijabetičare, ljudi baš poput tebe uspjeli su staviti šećer u krvi pod kontrolu, skinuti višak kilograma i vratiti radost u svoj život.",
  },

  features: {
    headline: "Što sve uključuje ova e-knjiga?",
    subheadline: "Sve što ti je potrebno kako bi jeo/la ukusno i zdravo, bez previše razmišljanja.",
    items: [
      {
        icon: "Utensils",
        title: "Ukusni i zdravi recepti",
        desc: "Ogroman izbor uravnoteženih i hranjivih recepata – od ručkova i večera do zdravih umaka i krema.",
      },
      {
        icon: "BookOpen",
        title: "Osnove zdravog kuhanja za dijabetičare",
        desc: "Saznaj kako su točno ovi recepti osmišljeni da zadovolje tvoje specifične potrebe.",
      },
      {
        icon: "Lightbulb",
        title: "Praktični kulinarski savjeti",
        desc: "Otkrij korisne trikove koji će tvoje vrijeme u kuhinji učiniti puno ugodnijim.",
      },
      {
        icon: "Replace",
        title: "Vodič za zdrave zamjene",
        desc: "Saznaj koji su sastojci prijatelji dijabetesa i čime možeš zamijeniti štetne namirnice.",
      },
      {
        icon: "Gift",
        title: "Dodatne pogodnosti",
        desc: "Kupnjom dobivaš ekskluzivne poklone i pristup našem Klubu privilegija.",
      },
    ],
  },

  bonuses: {
    badge: "BESPLATNI BONUSI",
    headline: "Samo ograničeno vrijeme dobivaš ovih 5 poklona",
    subheadline: "Uključeni su potpuno besplatno uz tvoju današnju kupnju e-knjige.",
    freeLabel: "BESPLATNO!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "BONUS 1",
        title: "E-knjiga: 100 zdravih juha",
        desc: "Sadrži 100 recepata za tople juhe s niskim udjelom ugljikohidrata i šećera.",
        value: "15 €",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "BONUS 2",
        title: "E-knjiga: 67 zdravih smoothieja",
        desc: "67 recepata za osvježavajuće smoothieje, siromašne ugljikohidratima i šećerima.",
        value: "15 €",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "BONUS 3",
        title: "E-knjiga: 100 zdravih grickalica",
        desc: "100 ideja za brze i zdrave međuobroke za osobe s dijabetesom.",
        value: "15 €",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "BONUS 4",
        title: "E-knjiga: Planer prehrane",
        desc: "Praktičan planer s kojim ćeš lako organizirati svoj dnevni jelovnik.",
        value: "15 €",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "BONUS 5",
        title: "Klub privilegija",
        desc: "Pravo na buduća ažuriranja, 7-dnevno jamstvo i popust na druge proizvode iz našeg kataloga.",
        value: "20 €",
      },
    ],
    totalLabel: "Ukupna vrijednost bonusa: 80 € — Danas: BESPLATNO",
    footer: "Sve se isporučuje u digitalnom formatu i to odmah nakon tvoje kupnje.",
  },

  testimonials: {
    headline: "Što kažu naši kupci",
    subheadline:
      "Stvarni ljudi dijele svoje mišljenje o 1000 zdravih recepata 2.0 za dijabetičare.",
    productLabel: "1000 zdravih recepata 2.0 za dijabetičare",
    reviewedLabel: "je ocijenio/la",
    rating: "5★",
    actions: { like: "Sviđa mi se", comment: "Komentiraj", share: "Podijeli" },
    items: [
      {
        name: "Petar Kovačić",
        text:
          "Tražio sam jednostavne recepte s pristupačnim namirnicama. Ova knjiga sadrži nevjerojatno ukusne recepte i u samo par koraka možeš jesti fantastično. Preporučujem 100%!",
      },
      {
        name: "Marija Horvat",
        text:
          "Moj najveći strah kad su mi dijagnosticirali dijabetes bio je da više neću moći fino jesti. Recepti su odlični, a pošto je knjiga digitalna, nosim je na mobitelu dok kupujem.",
      },
      {
        name: "Julija Jurić",
        text:
          "Kao majci djeteta s dijabetesom, pronalaženje hrane koja se sviđa cijeloj obitelji bio je pravi izazov. Ova e-knjiga nam je donijela raznolikost i lakoću. Recepti su apsolutni hit u našoj kući.",
      },
      {
        name: "Gordana Babić",
        text:
          "Kad je mom suprugu dijagnosticiran dijabetes, ova knjiga mi je nevjerojatno pomogla. Jednostavni recepti, bez čudnih sastojaka, a jako ukusni. Toplo preporučujem!",
      },
      {
        name: "Ana Knežević",
        text:
          "Preporučujem knjigu: ukusni recepti koje je lako pratiti. Hvala na besplatnim bonusima, planer prehrane je savršen za točno praćenje dijete.",
      },
      {
        name: "Ivan Novak",
        text:
          "Ova knjiga je promijenila moj način kuhanja. Prije sam pripremao hranu odvojeno od svoje obitelji. Sada svi jedemo isto, bez ikakvih komplikacija. Tisuću puta hvala!",
      },
    ],
    cta: "ŽELIM POČETI VEĆ DANAS",
  },

  finalCta: {
    preHeadline: "TVOJ TRENUTAK JE SADA",
    urgencyTop: "80% POPUSTA",
    headline:
      "UZMI NAŠU DIGITALNU KNJIGU DANAS UZ LUDI POPUST!",
    subUrgency:
      "Više od 2.000 ljudi već je preobrazilo svoje zdravlje uz ove recepte. Danas je tvoj red.",
    bundleList: [
      "E-knjiga: 1000 zdravih recepata 2.0 za dijabetičare",
      "Bonus 1 — 100 zdravih juha",
      "Bonus 2 — 67 zdravih smoothieja",
      "Bonus 3 — 100 zdravih grickalica",
      "Bonus 4 — Planer prehrane",
      "Bonus 5 — Klub privilegija",
    ],
    imageAlt: "Kompletan paket 1000 zdravih recepata 2.0 + 5 bonusa",
    guaranteeText:
      "Još uvijek razmišljaš? Ne brini, nema apsolutno nikakvog rizika! Tvoje zdravlje to zaslužuje. 7-dnevno jamstvo na zadovoljstvo.",
    guaranteeImageAlt: "Jamstvo",
    regularPriceLabel: "Od",
    regularPrice: "25.00 €",
    offerPrice: "8.90 €",
    discountBadge: "80% POPUSTA",
    urgencyText: "PLAĆANJE ĆE BITI PRIKAZANO U TVOJOJ LOKALNOJ VALUTI",
    bottomUrgency: "Ova ponuda ističe kada tajmer dođe do nule.",
    button: "ISKORISTI PRILIKU DANAS",
    trustRow: "100% sigurno plaćanje · Trenutni pristup · 7-dnevno jamstvo",
  },

  faq: {
    authorRole: "Tim za zdravu prehranu",
    authorHeadline: "Ukusna hrana koja brine o tvom zdravlju",
    authorBio:
      "Vjerujemo da ti dijabetes ne bi smio oduzeti užitak u hrani. Svaki pojedini recept kreiran je tako da možeš uživati bez grižnje savjesti i održavati glukozu pod potpunom kontrolom.",
    authorImageAlt: "Naš tim",
    worksHeadline: "Za koga NIJE ova e-knjiga?",
    doesntWork: [
      "Za ljude koji žele jesti nezdravo bez posljedica",
      "Za ljude koji nisu spremni isprobati nove okuse",
      "Za ljude koji očekuju rezultate bez da išta promijene",
    ],
    worksText:
      "Ali ako želiš prave, jednostavne, ukusne i tvom dijabetesu prilagođene recepte, ova knjiga je stvorena točno za tebe.",
    headline: "Često postavljana pitanja",
    subheadline: "Sve što trebaš znati prije nego što započneš.",
    items: [
      {
        q: "Kako ću dobiti knjigu nakon plaćanja?",
        a: "Odmah nakon kupnje primit ćeš e-mail s linkom za preuzimanje. Možeš je čitati na mobitelu, tabletu ili računalu.",
      },
      {
        q: "U kojem je formatu e-knjiga?",
        a: "U visokokvalitetnom je PDF formatu, stvorena za ugodno čitanje na bilo kojem uređaju, bez potrebe za printanjem.",
      },
      {
        q: "Jesu li recepti prikladni za dijabetičare tipa 1 i tipa 2?",
        a: "Da, recepti su posebno osmišljeni kako bi pomogli u kontroli šećera u krvi. Ipak, uvijek preporučujemo da se oko svog plana prehrane posavjetuješ sa svojim liječnikom.",
      },
      {
        q: "Trebaju li mi neki čudni ili skupi sastojci?",
        a: "Ne. Svi recepti koriste namirnice koje se lako pronalaze u svakom supermarketu po potpuno pristupačnim cijenama.",
      },
      {
        q: "Postoji li jamstvo?",
        a: "Da. Imaš 7 dana punog jamstva. Ako nisi zadovoljan/na, vraćamo ti 100% novca, bez ikakvih dodatnih pitanja.",
      },
      {
        q: "Mogu li platiti u svojoj lokalnoj valuti?",
        a: "Da. Tijekom kupnje iznos se automatski preračunava i prikazuje u tvojoj lokalnoj valuti.",
      },
    ],
  },

  closing: {
    kicker: "POSLJEDNJI KORAK",
    headline: "Tvoje zdravlje više ne može čekati",
    subheadline:
      "Već danas možeš početi jesti ukusno, a da pritom ne zanemariš svoj dijabetes. Sutra ova cijena možda više neće biti dostupna.",
    regularPrice: "25.00 €",
    offerPrice: "8.90 €",
    ctaLabel: "ISKORISTI PRILIKU DANAS",
    trustRow: "Sigurno plaćanje · Trenutni pristup · 7-dnevno jamstvo",
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Ova web stranica nije dio Facebook web stranice ili Facebook Inc. Nadalje, ovu stranicu ni na koji način NE podržava niti sponzorira Facebook.",
    trademark: "FACEBOOK je registrirani zaštitni znak tvrtke FACEBOOK, Inc.",
  },
};