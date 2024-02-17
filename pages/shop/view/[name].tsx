import Head from "next/head";
import { useRouter } from "next/router";
import FAQAbout from "../../../components/About/FAQ/FAQ";
import Guide from "../../../components/Shop2/Item/Guide";
import HowWorks from "../../../components/shop/HowWorks";
import ItemViewContent from "../../../components/Shop2/Item/Item";
import WhyToChoose from "../../../components/Shop2/Item/WhyToChoose";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Axios from "axios";

export interface WhyToChooseItems {
  id: number;
  task: string;
  bg: string;
}

export interface ShopItemInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  favorite: boolean;
  initial?: number;
  descriere_2: string;
  img: string;
}

const ItemView = () => {
  const router = useRouter();
  const { name } = router.query;
  const itemName = name?.toString().charAt(0).toUpperCase()! + name?.slice(1);
  const [products, setProducts] = useState([]);
  const [nume, setNume] = useState("");
  const [descriere_1, setDescriere_1] = useState("");
  const [descriere_2, setDescriere_2] = useState("");
  const [pret, setPret] = useState(0);
  const [img, setImg] = useState("");
  const [reducere, setReducere] = useState(0);
  const [titlu_adreseaza, setTitlu_adreseaza] = useState("");
  const [desc_adreseaza, setDesc_adreseaza] = useState("");
  const [intrebari, setIntrebari] = useState([]);
  const [motive, setMotive] = useState([]);
  const [id, setId] = useState<string>("");
  useEffect(() => {
    Axios.get("https://api.inspiredconsulting.ro/products/detalii_produs", {
      params: {
        nume: name,
      },
    })
      .then(function(response) {
        console.log(response.data)
        setId(response.data.id);
        setNume(response.data.nume);
        setDescriere_1(response.data.descriere_1);
        setDescriere_2(response.data.descriere_2);
        setPret(response.data.pret);
        setReducere(response.data.reducere);
        setImg(response.data.poza);
        setTitlu_adreseaza(response.data.titlu_adreseaza);
        setDesc_adreseaza(response.data.desc_adreseaza);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("test");
  }, [name]);

  return (
    <>
      {/* PageSettings */}
      <Head>
        <title>Consultify | {nume}</title>
      </Head>
      {/* Item Content */}
      <ItemViewContent
        id={id}
        name={nume}
        description={descriere_1}
        price={pret}
        initial={reducere}
        descriere_2={descriere_2}
        img={img}
        favorite={false}
      />
      {/* How works */}
      <HowWorks />
      {/* Why to choose */}
      <WhyToChoose data={motive} />
      {/* Guide */}
      <Guide
        titlu_adreseaza={titlu_adreseaza}
        desc_adreseaza={desc_adreseaza}
      />
      {/* FAQ */}
      <FAQAbout/>
      {/* Store items */}
      <div className="px-7 md:px-[80px] xl:px-[200px] 2xl:px-[276px] mt-10">
        {/* <ShopItem itemId="sugestii" categoryVisible={false} /> */}
      </div>
    </>
  );
};

export default ItemView;
