import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const smtpConfigured = process.env.MAIL_HOST && process.env.MAIL_USER && process.env.MAIL_PASS;

const transporterPromise = (async () => {
  if (smtpConfigured) {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 587),
      secure: process.env.MAIL_SECURE === "true",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transport.verify();
    console.log("Mailer ready: SMTP connection successful.");
    return transport;
  }

  const testAccount = await nodemailer.createTestAccount();
  const transport = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  console.log("Mailer ready: using Ethereal test account.");
  console.log("SMTP user:", testAccount.user);
  console.log("SMTP pass:", testAccount.pass);
  return transport;
})();

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

const quoteRequests = [];

app.post("/devis", async (req, res) => {
  const {
    company,
    fullName,
    email,
    phone,
    serviceType,
    projectDescription,
    budget,
    urgency,
  } = req.body;

  if (!fullName || !email || !serviceType || !projectDescription) {
    return res.status(400).json({
      status: "error",
      message: "Merci de compléter les champs obligatoires.",
    });
  }

  const quote = {
    id: quoteRequests.length + 1,
    company: company || "N/A",
    fullName,
    email,
    phone: phone || "N/A",
    serviceType,
    projectDescription,
    budget: budget || "N/A",
    urgency: urgency || "Standard",
    createdAt: new Date().toISOString(),
  };

  quoteRequests.push(quote);
  console.log("Nouvelle demande de devis pro :", quote);

  const mailOptions = {
    from: process.env.MAIL_FROM || "MTS <no-reply@manetechnosolutions.sn>",
    to: process.env.MAIL_TO || "contact@manetechnosolutions.sn",
    subject: `Nouvelle demande de devis pro - ${quote.company || quote.fullName}`,
    text: `Nouvelle demande de devis professionnel :

Entreprise: ${quote.company}
Nom: ${quote.fullName}
Email: ${quote.email}
Téléphone: ${quote.phone}
Type de prestation: ${quote.serviceType}
Urgence: ${quote.urgency}
Budget estimé: ${quote.budget}

Description du projet:
${quote.projectDescription}
`,
    html: `
      <h2>Nouvelle demande de devis professionnel</h2>
      <p><strong>Entreprise:</strong> ${quote.company}</p>
      <p><strong>Nom:</strong> ${quote.fullName}</p>
      <p><strong>Email:</strong> ${quote.email}</p>
      <p><strong>Téléphone:</strong> ${quote.phone}</p>
      <p><strong>Type de prestation:</strong> ${quote.serviceType}</p>
      <p><strong>Urgence:</strong> ${quote.urgency}</p>
      <p><strong>Budget estimé:</strong> ${quote.budget}</p>
      <p><strong>Description du projet:</strong></p>
      <p>${quote.projectDescription.replace(/\n/g, "<br />")}</p>
    `,
  };

  try {
    const transporter = await transporterPromise;
    const info = await transporter.sendMail(mailOptions);
    console.log("Email de devis envoyé avec succès.");
    if (!smtpConfigured) {
      console.log("Ethereal preview URL:", nodemailer.getTestMessageUrl(info));
    }
  } catch (error) {
    console.error("Erreur d'envoi d'email de devis :", error);
    return res.status(500).json({
      status: "error",
      message: "Impossible d’envoyer l’email de notification. Vérifiez la configuration SMTP.",
    });
  }

  return res.status(201).json({
    status: "success",
    message: "Votre demande de devis professionnel a bien été reçue.",
    quote,
  });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});