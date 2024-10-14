import Head from 'next/head';
import Image from 'next/image';
import './style.css'; // Adjust path if necessary

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Head>
        <title>Butterfly Website - Home</title>
        <meta name="description" content="Learn about butterflies." />
      </Head>
      <h1>Welcome to the Butterfly World!</h1>
      <p>We are dedicated to researching and showcasing the beauty and diversity of butterflies around the world.</p>
      <section>
        <h2>Types of Butterflies</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <h3>Monarch Butterfly</h3>
            <Image
              src="/images/m.jpg"
              alt="Monarch Butterfly"
              width={300}
              height={200}
            />
            <p>Famous for its long migration.</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <h3>Blue Morpho</h3>
            <Image
              src="/images/morpho.png"
              alt="Blue Morpho"
              width={300}
              height={200}
            />
            <p>Known for its vibrant blue color.</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <h3>Swallowtail Butterfly</h3>
            <Image
              src="/images/swall.png"
              alt="Swallowtail Butterfly"
              width={300}
              height={200}
            />
            <p>Characterized by tail-like extensions.</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <h3>Peacock Butterfly</h3>
            <Image
              src="/images/peacock.png"
              alt="Peacock Butterfly"
              width={300}
              height={200}
            />
            <p>Recognizable by its eye-like markings.</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <h3>Tiger Butterfly</h3>
            <Image
              src="/images/tiger.png"
              alt="Tiger Butterfly"
              width={300}
              height={200}
            />
            <p>Known for its orange and black stripes.</p>
          </div>
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <h3>Glasswing Butterfly</h3>
            <Image
              src="/images/glass.png"
              alt="Glasswing Butterfly"
              width={300}
              height={200}
            />
            <p>Famous for its transparent wings.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
