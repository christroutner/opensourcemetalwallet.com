import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import stylesFeature from './feature-styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src="./img/metal-wallet.jpeg" style={{width: '400px'}} />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://paperwallet.fullstack.cash/">
            Generate a Paper Wallet
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      <main>
        <section className={stylesFeature.features}>
          <div className="container">
            <div className="row">

              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <Link to={"https://youtu.be/3qn0mmfwlBQ?si=FxV4_vQlaPek0RNK"}>
                    <img className={stylesFeature.featureSvg} src="./img/img2.jpeg" />
                  </Link>
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">{'Plastic Wallets'}</Heading>
                  <p>
                    This video was the inspiration for this site. It describes how inexpensive
                    laser engravers can be used to make durable 'paper wallets' for families,
                    friends, and the crypto-curious.
                  </p>
                </div>
              </div>

              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <Link to={"/docs/intro"}>
                    <img className={stylesFeature.featureSvg} src="./img/laser-enrgraver.png" />
                  </Link>
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">{'Learn More!'}</Heading>
                  <p>
                    Learn about paper wallets, the shortcomings and advantages, and how to
                    make your own with a desktop printer or a laser engraver.
                  </p>
                </div>
              </div>

              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <Link to={"https://store.opensourcemetalwallet.com"}>
                    <img style={{width: '200px', marginTop: '135px'}} src="./img/buy-now.png" />
                  </Link>
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">{'Buy Metal Wallets'}</Heading>
                  <p>
                    Order your own 'paper wallets' engraved onto stainless steel business cards.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

    </Layout>
  );
}
