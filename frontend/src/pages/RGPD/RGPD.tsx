import styles from "./RGPD.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const RGPD = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles["text-wrap"]}>
      <h2>Conditions d'Utilisation et Politique de Confidentialité de FlashMcCards</h2>

<h2>1. Introduction</h2>
<p>FlashMcCards (ci-après dénommée "l'Application") est une plateforme en ligne permettant aux utilisateurs de créer, partager et apprendre des cartes éducatives. En utilisant l'Application, vous acceptez les présentes Conditions d'Utilisation et notre Politique de Confidentialité.</p>

<h2>2. Collecte des Données Personnelles</h2>
<p>Lors de votre inscription sur FlashMcCards, nous collectons les informations suivantes :</p>
<ul>
    <li>Votre adresse e-mail</li>
    <li>Toute autre information que vous choisissez de fournir dans votre profil utilisateur</li>
</ul>

<h2>3. Utilisation des Données Personnelles</h2>
<p>Les données personnelles collectées sont utilisées pour :</p>
<ul>
    <li>Créer et gérer votre compte utilisateur</li>
    <li>Vous envoyer des communications relatives à l'Application, y compris des mises à jour et des notifications importantes</li>
    <li>Personnaliser votre expérience utilisateur et améliorer nos services</li>
</ul>

<h2>4. Base Légale</h2>
<p>Nous traitons vos données personnelles sur la base de votre consentement et de notre intérêt légitime à fournir et améliorer nos services. Vous pouvez retirer votre consentement à tout moment en nous contactant.</p>

<h2>5. Partage des Données</h2>
<p>Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
<ul>
    <li>Avec votre consentement explicite</li>
    <li>Pour se conformer à des obligations légales</li>
    <li>Pour protéger nos droits ou ceux de tiers</li>
</ul>

<h2>6. Conservation des Données</h2>
<p>Vos données personnelles sont conservées aussi longtemps que nécessaire pour les finalités décrites dans cette politique, sauf si une période de conservation plus longue est requise ou permise par la loi.</p>

<h2>7. Vos Droits</h2>
<p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
<ul>
    <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données personnelles.</li>
    <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de vos données personnelles si elles sont inexactes.</li>
    <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données personnelles.</li>
    <li><strong>Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données personnelles à un autre responsable de traitement.</li>
    <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données personnelles.</li>
    <li><strong>Droit de retirer votre consentement :</strong> Vous pouvez retirer votre consentement au traitement de vos données personnelles à tout moment.</li>
</ul>

<h2>8. Sécurité des Données</h2>
<p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, divulgation, altération ou destruction.</p>

<h2>9. Modifications de la Politique de Confidentialité</h2>
<p>Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Les modifications seront publiées sur cette page et, si elles sont significatives, nous vous en informerons par e-mail.</p>

<h2>10. Contact</h2>
<p>Pour toute question ou demande concernant vos données personnelles, veuillez nous contacter à <a href="mailto:contact@flashmccards.com">contact@flashmccards.com</a>.</p>
</div>
      <Footer />
    </div>
  );
};
export default RGPD;
