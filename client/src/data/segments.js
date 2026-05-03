// src/data/segments.js
import artLumImg from "../assets/medicine/ArtemetherLumefantrine.png";
import chloroquineImg from "../assets/medicine/ChloroquinePhosphate.png";
import artesunateImg from "../assets/medicine/ArtesunateInjection.png";
import mefloquineImg from "../assets/medicine/Mefloquine.png";
import paracetamolImg from "../assets/medicine/Paracetamol.png";
import paracetamol1Img from "../assets/medicine/ParacetamolSyrup.png";
import levocetirizineImg from "../assets/medicine/LevocetirizineMontelukast.png";
import amoxicillinImg from "../assets/medicine/AmoxicillinClavulanicAcid.png";
import azithromycinImg from "../assets/medicine/Azithromycin.png";
import cefiximeImg from "../assets/medicine/Cefixime.png";
import cefixime1Img from "../assets/medicine/CefiximeDrySyrup.png";
import ceftriaxoneImg from "../assets/medicine/CeftriaxoneInjection.png";
import levofloxacinImg from "../assets/medicine/Levofloxacin.png";
import ciprofloxacinImg from "../assets/medicine/Ciprofloxacin.png";
import chlorpheniramineImg from "../assets/medicine/Chlorpheniramine.png";
import dextromethorphanImg from "../assets/medicine/DextromethorphanSyrup.png";
import phenylephrineImg from "../assets/medicine/Phenylephrine.png";
import pantoprazoleImg from "../assets/medicine/Pantoprazole.png";
import omeprazoleImg from "../assets/medicine/Omeprazole.png";
import rabeprazoleImg from "../assets/medicine/Rabeprazole.png";
import domperidoneImg from "../assets/medicine/Domperidone.png";
import antacidImg from "../assets/medicine/AntacidSachets.png";
import metforminImg from "../assets/medicine/Metformin.png";
import amlodipineImg from "../assets/medicine/Amlodipine.png";
import atorvastatinImg from "../assets/medicine/Atorvastatin.png";
import losartanImg from "../assets/medicine/Losartan.png";
import diclofenacImg from "../assets/medicine/Diclofenac.png";
import aceclofenacImg from "../assets/medicine/Aceclofenac.png";
import ibuprofenImg from "../assets/medicine/Ibuprofen.png";
import ketorolacImg from "../assets/medicine/KetorolacInjection.png";
import multivitaminImg from "../assets/medicine/Multivitamin.png";
import calciumImg from "../assets/medicine/CalciumD3.png";
import omegaImg from "../assets/medicine/Omega3.png";
import proteinImg from "../assets/medicine/ProteinPowder.png";
import clotrimazoleImg from "../assets/medicine/ClotrimazoleCream.png";
import mometasoneImg from "../assets/medicine/MometasoneCream.png";
import ketoconazoleImg from "../assets/medicine/KetoconazoleCream.png";
import vitaminImg from "../assets/medicine/VitaminBComplexInjection.png";
import primaquineImg from "../assets/medicine/Primaquine.png";

export const SEGMENTS = [
  // 🦠 ANTI-MALARIAL
  {
    name: "Anti-Malarial Range",
    description:
      "Comprehensive anti-malarial formulations suitable for global and institutional supply.",
    forms: ["Tablets", "Suspensions", "Injectables"],

    products: [
      {
        name: "Artemether + Lumefantrine",
        compound: "Artemether 20mg + Lumefantrine 120mg",
        description: "Standard combination therapy for malaria management.",
        availableIn: "Tablets, Suspension",
        category: "Anti-Malarial",
        image: artLumImg,
      },
      {
        name: "Chloroquine Phosphate",
        compound: "Chloroquine 250mg",
        description: "Used in treatment and prevention of malaria.",
        availableIn: "Tablets",
        category: "Anti-Malarial",
        image: chloroquineImg,
      },
      {
        name: "Artesunate Injection",
        compound: "Artesunate 60mg",
        description: "Injectable therapy for severe malaria.",
        availableIn: "Injection",
        category: "Anti-Malarial",
        image: artesunateImg,
      },
      {
        name: "Mefloquine",
        compound: "Mefloquine 250mg",
        description: "Antimalarial for prevention and treatment.",
        availableIn: "Tablets",
        category: "Anti-Malarial",
        image: mefloquineImg,
      },
      {
        name: "Primaquine",
        compound: "Primaquine 15mg",
        description: "Used for radical cure of malaria.",
        availableIn: "Tablets",
        category: "Anti-Malarial",
        image: primaquineImg,
      },
    ],
  },

  // 🧫 ANTIBIOTIC
  {
    name: "Antibiotic Range",
    description:
      "Broad-spectrum antibiotic formulations for infection management.",
    forms: ["Tablets", "Capsules", "Dry Syrups", "Injectables"],

    products: [
      {
        name: "Amoxicillin + Clavulanic Acid",
        compound: "500mg + 125mg",
        description: "Widely used for bacterial infections.",
        availableIn: "Tablets, Syrup",
        category: "Antibiotic",
        image: amoxicillinImg,
      },
      {
        name: "Azithromycin",
        compound: "500mg",
        description: "Macrolide antibiotic.",
        availableIn: "Tablets, Suspension",
        category: "Antibiotic",
        image: azithromycinImg,
      },
      {
        name: "Cefixime",
        compound: "200mg",
        description: "Third-generation cephalosporin.",
        availableIn: "Tablets, Dry Syrup",
        category: "Antibiotic",
        image: cefiximeImg,
      },
      {
        name: "Ceftriaxone Injection",
        compound: "1g",
        description: "Injectable antibiotic.",
        availableIn: "Injection",
        category: "Antibiotic",
        image: ceftriaxoneImg,
      },
      {
        name: "Levofloxacin",
        compound: "500mg",
        description: "Broad-spectrum antibiotic.",
        availableIn: "Tablets",
        category: "Antibiotic",
        image: levofloxacinImg,
      },
      {
        name: "Ciprofloxacin",
        compound: "500mg",
        description: "Used for bacterial infections.",
        availableIn: "Tablets",
        category: "Antibiotic",
        image: ciprofloxacinImg,
      },
    ],
  },

  // 🤧 ANTI-COLD
  {
    name: "Anti-Cold & Anti-Allergic",
    description: "Formulations for cough, cold, and allergy management.",
    forms: ["Tablets", "Syrups", "Drops"],

    products: [
      {
        name: "Levocetirizine + Montelukast",
        compound: "5mg + 10mg",
        description: "Anti-allergic combination.",
        availableIn: "Tablets",
        category: "Anti-Cold",
        image: levocetirizineImg,
      },
      {
        name: "Paracetamol",
        compound: "500mg",
        description: "Fever and pain relief.",
        availableIn: "Tablets, Syrup",
        category: "Anti-Cold",
        image: paracetamolImg,
      },
      {
        name: "Chlorpheniramine",
        compound: "4mg",
        description: "Antihistamine.",
        availableIn: "Tablets, Syrup",
        category: "Anti-Cold",
        image: chlorpheniramineImg,
      },
      {
        name: "Dextromethorphan Syrup",
        compound: "Dextromethorphan",
        description: "Cough suppressant.",
        availableIn: "Syrup",
        category: "Anti-Cold",
        image: dextromethorphanImg,
      },
      {
        name: "Phenylephrine",
        compound: "10mg",
        description: "Decongestant.",
        availableIn: "Tablets",
        category: "Anti-Cold",
        image: phenylephrineImg,
      },
    ],
  },

  // 💊 GASTRO
  {
    name: "Gastro & PPI Range",
    description: "Formulations for acidity and digestive health.",
    forms: ["Tablets", "Capsules", "Sachets"],

    products: [
      {
        name: "Pantoprazole",
        compound: "40mg",
        description: "Proton pump inhibitor.",
        availableIn: "Tablets, Injection",
        category: "Gastro",
        image: pantoprazoleImg,
      },
      {
        name: "Omeprazole",
        compound: "20mg",
        description: "Acid reducer.",
        availableIn: "Capsules",
        category: "Gastro",
        image: omeprazoleImg,
      },
      {
        name: "Rabeprazole",
        compound: "20mg",
        description: "GERD treatment.",
        availableIn: "Tablets",
        category: "Gastro",
        image: rabeprazoleImg,
      },
      {
        name: "Domperidone",
        compound: "10mg",
        description: "Anti-nausea medicine.",
        availableIn: "Tablets",
        category: "Gastro",
        image: domperidoneImg,
      },
      {
        name: "Antacid Sachets",
        compound: "Aluminium + Magnesium",
        description: "Relieves acidity.",
        availableIn: "Sachets",
        category: "Gastro",
        image: antacidImg,
      },
    ],
  },

  // ❤️ CARDIAC / DIABETIC
  {
    name: "Cardiac & Diabetic Range",
    description: "Formulations for heart and diabetes care.",
    forms: ["Tablets", "Capsules"],

    products: [
      {
        name: "Metformin",
        compound: "500mg",
        description: "Diabetes management.",
        availableIn: "Tablets",
        category: "Diabetic",
        image: metforminImg,
      },
      {
        name: "Amlodipine",
        compound: "5mg",
        description: "Blood pressure control.",
        availableIn: "Tablets",
        category: "Cardiac",
        image: amlodipineImg,
      },
      {
        name: "Atorvastatin",
        compound: "10mg",
        description: "Cholesterol control.",
        availableIn: "Tablets",
        category: "Cardiac",
        image: atorvastatinImg,
      },
      {
        name: "Losartan",
        compound: "50mg",
        description: "Hypertension treatment.",
        availableIn: "Tablets",
        category: "Cardiac",
        image: losartanImg,
      },
    ],
  },

  // 🦴 PAIN
  {
    name: "Orthopedic & Pain Management",
    description: "Pain relief and anti-inflammatory formulations.",
    forms: ["Tablets", "Capsules", "Gels", "Injections"],

    products: [
      {
        name: "Diclofenac",
        compound: "50mg",
        description: "Pain relief NSAID.",
        availableIn: "Tablets, Gel",
        category: "Pain",
        image: diclofenacImg,
      },
      {
        name: "Aceclofenac",
        compound: "100mg",
        description: "Anti-inflammatory.",
        availableIn: "Tablets",
        category: "Pain",
        image: aceclofenacImg,
      },
      {
        name: "Ibuprofen",
        compound: "400mg",
        description: "Pain and fever relief.",
        availableIn: "Tablets",
        category: "Pain",
        image: ibuprofenImg,
      },
      {
        name: "Ketorolac Injection",
        compound: "30mg",
        description: "Strong pain relief.",
        availableIn: "Injection",
        category: "Pain",
        image: ketorolacImg,
      },
    ],
  },

  // 🌿 NUTRACEUTICALS
  {
    name: "Nutraceuticals & Wellness",
    description: "Health supplements for wellness.",
    forms: ["Tablets", "Capsules", "Syrups", "Softgels"],

    products: [
      {
        name: "Multivitamin",
        compound: "Vitamin blend",
        description: "Daily nutrition.",
        availableIn: "Tablets",
        category: "Nutraceutical",
        image: multivitaminImg,
      },
      {
        name: "Calcium + D3",
        compound: "500mg + D3",
        description: "Bone support.",
        availableIn: "Tablets",
        category: "Nutraceutical",
        image: calciumImg,
      },
      {
        name: "Omega 3",
        compound: "Fish Oil",
        description: "Heart health.",
        availableIn: "Softgel",
        category: "Nutraceutical",
        image: omegaImg,
      },
      {
        name: "Protein Powder",
        compound: "Protein blend",
        description: "Muscle support.",
        availableIn: "Powder",
        category: "Nutraceutical",
        image: proteinImg,
      },
    ],
  },

  // 🧴 DERMATOLOGY
  {
    name: "Dermatology Range",
    description: "Skin care formulations.",
    forms: ["Creams", "Ointments", "Gels"],

    products: [
      {
        name: "Clotrimazole Cream",
        compound: "1%",
        description: "Antifungal treatment.",
        availableIn: "Cream",

        category: "Dermatology",
        image: clotrimazoleImg,
      },
      {
        name: "Mometasone Cream",
        compound: "0.1%",
        description: "Anti-inflammatory.",
        availableIn: "Cream",

        category: "Dermatology",
        image: mometasoneImg,
      },
      {
        name: "Ketoconazole Cream",
        compound: "2%",
        description: "Fungal treatment.",
        availableIn: "Cream",

        category: "Dermatology",
        image: ketoconazoleImg,
      },
    ],
  },

  // 👶 PEDIATRIC
  {
    name: "Pediatric Range",
    description: "Formulations for children.",
    forms: ["Syrups", "Drops"],

    products: [
      {
        name: "Paracetamol Syrup",
        compound: "125mg/5ml",
        description: "Fever relief for kids.",
        availableIn: "Syrup",
        category: "Pediatric",
        image: paracetamol1Img,
      },
      {
        name: "Cefixime Dry Syrup",
        compound: "50mg/5ml",
        description: "Pediatric antibiotic.",
        availableIn: "Dry Syrup",
        category: "Pediatric",
        image: cefixime1Img,
      },
    ],
  },

  // 💉 INJECTABLES
  {
    name: "Injectable Range",
    description: "Sterile injectable formulations.",
    forms: ["Dry Powder", "Liquid Vials"],

    products: [
      {
        name: "Ceftriaxone Injection",
        compound: "1g",
        description: "Antibiotic injection.",
        availableIn: "Injection",
        category: "Injectable",
        image: ceftriaxoneImg,
      },
      {
        name: "Pantoprazole Injection",
        compound: "40mg",
        description: "Acid control injection.",
        availableIn: "Injection",
        category: "Injectable",
        image: pantoprazoleImg,
      },
      {
        name: "Vitamin B Complex Injection",
        compound: "B1, B6, B12",
        description: "Nutritional support.",
        availableIn: "Injection",
        category: "Injectable",
        image: vitaminImg,
      },
    ],
  },
];
