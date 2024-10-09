import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Plastic Wallets',
    Svg: require('@site/static/img/plastic-wallet-thubnail.svg').default,
    description: (
      <>
        This video was the inspiration for this site. It describes how inexpensive
        laser engravers can be used to make durable 'paper wallets' for families,
        friends, and the crypto-curious.
      </>
    ),
    link: "https://youtu.be/3qn0mmfwlBQ?si=FxV4_vQlaPek0RNK"
  },
  {
    title: 'Learn More!',
    Svg: require('@site/static/img/laser-enrgraver.svg').default,
    description: (
      <>
        Learn about paper wallets, the shortcomings and advantages, and how to
        make your own with a desktop printer or a laser engraver.
      </>
    ),
    link: "/docs/intro"
  },
  {
    title: 'Buy Metal Wallets',
    Svg: require('@site/static/img/buy-now.svg').default,
    description: (
      <>
        Order your own 'paper wallets' engraved onto stainless steel business cards.
      </>
    ),
    link: "https://store.opensourcemetalwallet.com"
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
