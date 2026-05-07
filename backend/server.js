import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Backend MTS fonctionne parfaitement",
  });
});

app.get("/services", (req, res) => {
  res.json([
    {
      id: 1,
      icon: "video",
      title: "Vidéosurveillance (CCTV)",
      description:
        "Installation et maintenance de systèmes CCTV professionnels avec accès à distance sécurisé.",
    },
    {
      id: 2,
      icon: "network",
      title: "Réseaux Informatiques",
      description:
        "Configuration LAN/WAN, sécurisation réseau et optimisation des infrastructures informatiques.",
    },
    {
      id: 3,
      icon: "electric",
      title: "Installation Électrique",
      description:
        "Solutions électriques professionnelles pour entreprises et particuliers.",
    },
    {
      id: 4,
      icon: "cold",
      title: "Climatisation",
      description:
        "Installation et maintenance de systèmes de climatisation performants.",
    },
    {
      id: 5,
      icon: "cv",
      title: "Création de CV",
      description:
        "Conception de CV modernes et professionnels adaptés au marché de l’emploi.",
    },
    {
      id: 6,
      icon: "digital",
      title: "Solutions Digitales",
      description:
        "Développement de solutions numériques modernes pour accompagner votre transformation digitale.",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});