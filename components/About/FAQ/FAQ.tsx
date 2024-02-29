import { Key, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";

export interface FAQInterface {
    id: number,
    intrebari:string,
    raspuns: string,
}

const IntrebariStandard: FAQInterface[] = [
    {
        id: 1, intrebari: 'Cum funcționează procesul de accesare a fondurilor europene?', raspuns: 'Procesul de accesare a fondurilor europene implică identificarea programelor de finanțare relevante, elaborarea și depunerea unui proiect în conformitate cu cerințele specifice, evaluarea și selecția acestuia de către autoritățile competente, și gestionarea finanțării și raportarea în timpul implementării proiectului.',
    },
    {
        id: 2, intrebari: 'Ce tipuri de proiecte sunt eligibile pentru finanțare europeană?', raspuns: 'Domeniile eligibile pentru finanțare europeană sunt diverse și acoperă inovarea, dezvoltarea regională, protecția mediului, cercetarea și dezvoltarea tehnologică, antreprenoriatul, educația, cultura, agricultura și multe altele. Fiecare program de finanțare are cerințe specifice și criterii de eligibilitate.',
    },
    {
        id: 3, intrebari: 'Care sunt criteriile de eligibilitate și termenele limită pentru aplicarea la fondurile europene?', raspuns: 'Criteriile de eligibilitate și termenele limită variază în funcție de programul de finanțare. Acestea pot include aspecte legate de beneficiar, proiect, buget, plan de implementare, impact social sau economic, durată proiect etc. Respectarea cerințelor și depunerea în timp util sunt esențiale.',
    },
    {
        id: 4, intrebari: 'Care sunt avantajele de a lucra cu o firmă de consultanță în fonduri europene?', raspuns: 'Avantajele de a lucra cu o firmă de consultanță în fonduri europene includ acces la expertiză și experiență specializată, reducerea riscurilor și erorilor, economisirea timpului și resurselor, îmbunătățirea șanselor de succes și optimizarea rezultatelor proiectelor.',
    },
    {
        id: 5, intrebari: 'Ce experiență și expertiză are firma dvs. în accesarea fondurilor europene?', raspuns: 'Firma noastră are o vastă experiență în accesarea fondurilor europene, cu un portofoliu divers de proiecte de succes în diferite sectoare. Echipa noastră de experți are cunoștințe solide în privința programelor de finanțare și poate oferi asistență completă în elaborarea și implementarea proiectelor.',
    },
    {
        id: 6, intrebari: 'Care sunt costurile implicate în consultanța în fonduri europene?', raspuns: 'Costurile consultanței în fonduri europene variază în funcție de complexitatea proiectului și serviciile solicitate. Vom discuta în detaliu nevoile dvs. și vă vom prezenta o ofertă personalizată, transparentă și competitivă, în conformitate cu cerințele proiectului dvs.',
    },
    {
        id: 7, intrebari: 'Cum pot stabili o întâlnire sau obține mai multe informații?', raspuns: 'Pentru a stabili o întâlnire sau obține mai multe informații despre serviciile noastre de consultanță în fonduri europene, vă rugăm să ne contactați prin intermediul formularului de contact de pe site-ul nostru, la adresa de email sau la numărul de telefon afișat. Vom fi încântați să răspundem la întrebările dvs. și să vă oferim suportul necesar!',
    },
]

type Props = {
    intrebari?: FAQInterface[]
}

const FAQAbout = ({ intrebari=IntrebariStandard }: Props) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const handleSelectQuestion = (id: number) => {
        if (id === selectedQuestion) {
          setSelectedQuestion(null); // Close the selected question if it's clicked again
        } else {
          setSelectedQuestion(id); // Open the clicked question
        }
    };
    
    return(
        <section id='faq' className='mt-16 md:mt-32 px-7 md:px-[100px] xl:px-[160px] 2xl:px-[370px] w-full flex flex-col items-center gap-2'>
            <h2 className='text-2xl xl:text-4xl text-secondary font-bold max-w-[80%] md:max-w-[60%] mb-6 md:mb-8'>Întrebări frecvente:</h2>
            {
                intrebari.map(faq => (
                    <article key={faq.id} className='w-full rounded-[8px] bg-admin-card'>
                        <div className='flex justify-between p-4 px-6 cursor-pointer w-full' onClick={() => handleSelectQuestion(faq.id)}>
                            <h3 className='text-sm md:text-lg text-secondary font-bold'>{faq.intrebari}</h3>
                            <Image
                                className={`w-[20px] right-[10px] top-[23px]
                                ${
                                faq.id === selectedQuestion
                                    ? "rotate-180 transition-all"
                                    : "transition-all"
                                }
                                `}
                                src="/images/arrow-qa.svg"
                                width={20}
                                height={20}
                                alt="arrow-qa"
                            />
                        </div>
                        {faq.id === selectedQuestion && (
                            <p className='p-4 px-6 text-[#3F3F3F] text-sm md:text-base'>
                                {faq.raspuns}
                            </p>
                        )}
                    </article>
                ))
            }
        </section>
    )
}

export default FAQAbout