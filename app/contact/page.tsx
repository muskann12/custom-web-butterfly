import Head from 'next/head';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="contact">
      <Head>
        <title>Contact Us - Butterfly Agency</title>
        <meta name="description" content="Get in touch with our butterfly agency." />
      </Head>
      <div className="contact-content">
        <div className="butterfly-image">
          <Image src="/images/random.png" alt="Butterfly" width={600} height={400} />
        </div>
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Feel free to reach out with any questions or comments.</p>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required />
            <h2>Follow Us:</h2>
            <div className="social-links">
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://www.instagram.com/">Instagram</a>
              <a href="https://www.linkedin.com/">LinkedIn</a>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
