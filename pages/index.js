import Head from 'next/head'
import Image from 'next/image';
import tshirt1 from '../public/images/img1.jpg';
import tshirt2 from '../public/images/img2.jpg';
import tshirt3 from '../public/images/img3.jpg';
import tshirt4 from '../public/images/img4.jpg';
import styles from '../styles/Home.module.css'
import products from '../products.json';

export default function Home() {
  console.log(products)
  return (
    <div className="py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>eCommerce Stripe App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 px-0 flex-1 flex flex-col justify-center items-center">
        <h1 >
          Space Tshirt Shop
        </h1>

        <p >
          The best Space Tshirt swag on the web!
        </p>

        <ul className="flex items-center justify-center flex-wrap max-w-3xl mt-12" >
          {products.map(product => {
            const {id, title, price, description, image} = product;
            return (
            <li>
              <a >
                <Image className="rounded-xl" src={image} width={500} height={500} alt={title} />
                <h3 >{title} &rarr;</h3>
                <p>$ {price} </p>
                <p>{description} </p>
              </a>
            </li>
            )
          })}
          
          {/* <li>
            <a >
              <Image className="rounded-xl" src={tshirt2} width={500} height={500} alt="t-shirt2" />
              <h3>Space Stickers &rarr;</h3>
              <p>$20.00</p>
              <p>Add some stickers to your laptop with a sticker of Cosmo the space.</p>
            </a>
          </li>
          <li>
            <a >
              <Image className="rounded-xl" src={tshirt3} width={500} height={500} alt="t-shirt3" />
              <h3>Space Combo &rarr;</h3>
              <p>$20.00</p>
              <p>Show your love for Cosmo with a tshirt and sticker combo pack!</p>
            </a>
          </li>
          <li> 
            <a >
              <Image className="rounded-xl" src={tshirt4} width={500} height={500} alt="t-shirt4" />
              <h3>Deploy &rarr;</h3>
              <p>$20.00</p>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </li> */}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
