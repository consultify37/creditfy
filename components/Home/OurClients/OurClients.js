import Image from "next/image";
import Carousel from 'react-elastic-carousel';
import Link from "next/link";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

const OurClients = ({hasTitle=false}) => {
    const Testimonials = [
        {
            id: 1,
            title: "Colaborarea cu Consultify - Un pas sigur către succes în Programul Start Up Nation",
            subTitle: 'Baloi Andrei – Fabricarea pieselor pentru roboți',
            description: "Colaborarea cu Consultify în cadrul programului Start-Up Nation a fost un pas important pentru afacerea mea. Echipa lor m-a sprijinit în fiecare etapă, de la verificarea eligibilității societății mele până la achizițiile necesare. Comunicarea clară și transparentă a fost un aspect de apreciat, iar ei au răspuns prompt la întrebările și nevoile mele.",
            descriptionTwo: "În urma aprobării proiectului, am beneficiat de ghidajul lor în identificarea și achiziționarea echipamentelor adecvate. Acum, aștept cu entuziasm începerea perioadei de monitorizare.",
            image: "/images/testimoniale/Recenzia 1.png",
            static: "/images/testimoniale/static.png"
        },
        {
            id: 2,
            title: "Ne-am deschis propria pensiune prin programul P.N.D.R. 6.4 cu ajutorul echipei Consultify",
            subTitle: 'Familia Branduși – Turism',
            description: "Cu ajutorul Consultify, am reușit să ne îndeplinim visul de a deschide o pensiune prin intermediul programului P.N.D.R. 6.4. Echipa lor ne-a ghidat și a oferit asistență în fiecare etapă a procesului, începând de la evaluarea eligibilității și redactarea proiectului, până la obținerea finanțării și implementarea sa.",
            descriptionTwo: "Comunicarea transparentă și suportul constant au fost de neprețuit.",
            image: "/images/testimoniale/Recenzia 2.png",
            static: "/images/testimoniale/static.png"
        },
        {
            id: 3,
            title: "O colaborare de succes cu Consultify: Obținerea finanțării de 40.000 Euro pentru carmangeria noastră",
            subTitle: 'Chitoiu Ioan – Carmangerie locală',
            description: "Cu ajutorul echipei Consultify, am reușit să accesăm o finanțare de 40.000 de euro pentru carmangeria noastră. Echipa lor ne-a sprijinit de la verificarea eligibilității și scrierea proiectului, până la depunerea acestuia și construirea planului de achiziții. ",
            descriptionTwo: "De asemenea, ne-au ajutat să răspundem clarificărilor primite de la finanțator și să începem perioada de implementare. Colaborarea a fost remarcabilă, iar profesionalismul și implicarea lor ne-au asigurat șanse considerabile de reușită în acest proiect. Suntem recunoscători pentru ajutorul lor și recomandăm cu încredere serviciile Consultify.",
            image: "/images/testimoniale/Recenzia 3.png",
            static: "/images/testimoniale/static.png"
        },
        {
            id: 4,
            title: "Sprijin decisiv pentru agricultori: Cum am obținut finanțarea dorită cu ajutorul Consultify",
            subTitle: 'Dinu Marcel - Agricultor',
            description: 'Cu sprijinul Consultify, am avut succes în obținerea finanțării necesare pentru achiziționarea de materii prime și echipamente prin intermediul programului "Microgranturi și Granturi în Domeniul Agroalimentar". Echipa lor ne-a fost alături în fiecare pas al procesului, de la evaluarea eligibilității și elaborarea proiectului, până la depunerea acestuia.  ',
            descriptionTwo: "Comunicarea fluentă și expertiza lor ne-au ajutat în demersurile noastre, iar profesionalismul de care au dat dovadă ne-a inspirat încredere. Recomand cu încredere Consultify!",
            image: "/images/testimoniale/Recenzia 4.gif",
            static: "/images/testimoniale/Recenzia 4.png",
        },
        {
            id: 5,
            title: "Dezvoltând cabinetul medical cu ajutorul Consultify: Succes în programul PNRR C12",
            subTitle: 'Mihailescu Diana – Medic de familie',
            description: 'Am aplicat în programul PNRR C12 și am avut norocul de a colabora cu Consultify pentru echiparea și renovarea cabinetului meu. Încă de la început, echipa lor mi-a oferit sprijin în verificarea eligibilității și înțelegerea procesului de finanțare.',
            descriptionTwo: "Au fost alături de mine în etapa de planificare bugetară, asigurându-se că includem toate echipamentele necesare pentru desfășurarea activității medicale. După obținerea finanțării, au continuat să fie disponibili pentru întrebări și îndrumare suplimentară. Nu pot decât să le mulțumesc pentru profesionalismul și devotamentul lor!",
            image: "/images/testimoniale/Recenzia 5.gif",
            static: "/images/testimoniale/Recenzia 5.png",
        },
        {
            id: 6,
            title: "Deschiderea cu succes a propriei brutării cu sprijinul Consultify",
            subTitle: 'Maria Prodan – Afacere în domeniul panificației',
            description: 'Cu sprijinul Consultify, am reușit să deschidem cu succes propria brutărie. Echipa lor ne-a oferit întreaga asistență în fiecare etapă a procesului, de la verificarea eligibilității și elaborarea proiectului, până la depunerea acestuia și gestionarea achizițiilor necesare.',
            descriptionTwo: "Comunicarea fluentă și abordarea lor profesionistă au fost cheia succesului proiectului nostru. Suntem foarte recunoscători pentru sprijinul lor.",
            image: "/images/testimoniale/Recenzia 6.png",
            static: "/images/testimoniale/static.png"
        },
        {
            id: 7,
            title: "Transformarea fermelor prin Consultify: Povestea fermierului care a obținut finanțarea dorită",
            subTitle: 'Niculae Andrei – Fermă',
            description: 'Cu sprijinul Consultify, am reușit să obțin finanțarea necesară pentru dezvoltarea afacerii. Colaborarea cu echipa lor a fost esențială în fiecare etapă a procesului. Încă de la început, mi-au verificat eligibilitatea  și am construit împreună un plan bugetar detaliat.',
            descriptionTwo: "Au fost ghidul meu de încredere în toți pașii necesari pentru depunerea proiectului și mi-au oferit suport constant și răspunsuri prompte la orice întrebare sau îngrijorare pe parcursul procesului. Îi recomand cu încredere!",
            image: "/images/testimoniale/Recenzia 7.png",
            static: "/images/testimoniale/static.png"
        },
    ]

    return(
        <section id='our-clients' className='w-full flex items-center justify-center flex-col gap-5 z-10'>
            {  hasTitle && 
                <p className="text-primary text-xl md:text-3xl text-center font-bold px-7 md:px-0 mb-5">
                    Gândurile și experiențele clienților noștri - testimoniale de succes
                </p>
            }
            <div className='flex w-full justify-between items-center gap-5'>
                <Carousel
                    breakPoints={breakPoints}
                    isRTL={false}
                    pagination={true}
                    showArrows={true}
                    disableArrowsOnEnd={false}
                    className=""
                >
                {
                    Testimonials.map((testimonial, index) =>
                        <div key={testimonial.id + index} className="min-h-[880px] sm:min-h-[840px] md:min-h-[800px] lg:min-h-[500px] xl:min-h-[460px] 2xl:min-h-[440px] bg-[#000D34] rounded-[16px] p-12 px-8 lg:px-12 lg:py-8 mx-4 mb-4 flex flex-col lg:flex-row lg:justify-start items-center justify-between">
                            <div className="flex flex-col lg:w-full lg:mr-8">
                                <h1 className="text-[16px] xl:text-[23px] text-onPrimary font-bold">{testimonial.title}</h1>
                                <p className="text-[14px] xl:text-[15px] text-primary font-semibold mt-4">{testimonial.subTitle}</p>
                                <p className="text-[14px] xl:text-[15px] text-onPrimary mt-4">{testimonial.description}</p>
                                <p className="text-[14px] xl:text-[15px] text-onPrimary mt-4">{testimonial.descriptionTwo}</p>
                            </div>
                            <div className="relative mt-4">
                                <Image 
                                    className="absolute inset-0 rounded-[24px] z-10"
                                    width={512}
                                    height={512}
                                    src={testimonial.image}
                                    alt={testimonial.title}
                                />
                                { testimonial.static &&
                                    <Image 
                                        className="rounded-[24px] z-20"
                                        width={512}
                                        height={512}
                                        src={testimonial.static}
                                        alt={testimonial.title}
                                    />
                                }
                            </div>
                        </div>
                    )
                }
                </Carousel>
            </div>
            {hasTitle && <Link href='/testimoniale' className="bg-primary flex items-center font-semibold justify-center w-[max-content] mx-auto justify-self-center px-12 py-3 md:py-4 mb-4 text-onPrimary rounded-[28.5px] transition-all hover:scale-[1.05]">
                Vezi toate testimonialele
            </Link>}
        </section>
    )
}

export default OurClients;
