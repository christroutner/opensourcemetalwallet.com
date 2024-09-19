import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn More',
    Svg: require('@site/static/img/plastic-wallet-thubnail.svg').default,
    description: (
      <>
        This video was the inspiration for this site. It describes how inexpensive
        laser engravers can be used to make durable 'paper wallets' for families,
        friends, and the crypto-curious.
      </>
    ),
  },
  {
    title: 'More Videos',
    Svg: require('@site/static/img/yt_logo_rgb_light.svg').default,
    description: (
      <>
        Learn about the advantages and shortcomings of paper wallets, and how
        they work.
      </>
    ),
  },
  {
    title: 'Buy Metal Wallets',
    Svg: require('@site/static/img/buy-now.svg').default,
    description: (
      <>
        Order your own 'paper wallets' engraved onto stainless steel business cards.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
