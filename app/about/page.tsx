import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="about">
      <Head>
        <title>About Us - Butterfly Agency</title>
        <meta name="description" content="Learn more about our butterfly agency." />
      </Head>
      <h1>About Us</h1>
      <p>We are passionate about butterflies and dedicated to researching and preserving their beauty and diversity.</p>
      <h2>What We Do</h2>
      <p>Our team collects butterflies from various regions while ensuring sustainable practices.</p>
      <h2>Why We Do It</h2>
      <p>Butterflies are vital to our ecosystem, serving as pollinators and indicators of environmental health.</p>
      <h2>Our Collection</h2>
      <div className="butterflies">
        {[
          { name: "Monarch Butterfly", image: "/images/m.jpg" },
          { name: "Blue Morpho", image: "/images/morpho.png" },
          { name: "Swallowtail Butterfly", image: "/images/swall.png" },
        ].map((butterfly, index) => (
          <div key={index} className="butterfly-card">
            <h3>{butterfly.name}</h3>
            <Image src={butterfly.image} alt={butterfly.name} width={400} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
