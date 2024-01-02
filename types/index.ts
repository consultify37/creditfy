export type Condition = {
  condition: string
  description: string
}

export type Faq = {
  question: string
  answear: string
}

export type Slide = { 
  id?: string
  link: string 
  image: File | string 
  file: null | { fileName: string, fileId: string } 
  admin?: string
  data?: string
}

export type Category = {
  category: string
  id?: string
}

export type Program = {
  id: string
  bulletPoints: string[]
  categorie: string
  title: string
  text1: string
  text2: string
  suma: string
  descriere: string
  title2: string
  title3: string
  suma2: string
  descriere3: string
  conditions: Condition[]
  faqs: Faq[]
  imaginePrincipala: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
  backgroundImage: { 
    file: { fileName: string, fileId: string } 
    image: string 
  }
}

export type Faq2 = {
  id: number,
  intrebari:string,
  raspuns: string,
}