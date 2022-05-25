import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import logo from '@site/static/img/logo.png';
import VersionedLink from '@site/src/components/VersionedLink';
import styles from './index.module.scss';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.links}>
          <VersionedLink
            className="button button--primary button--lg"
            to="/core/index">
            Skilltrack Core Docs
          </VersionedLink>
          <VersionedLink
            className="button button--success button--lg"
            to="/api/index">
            Skilltrack API Docs
          </VersionedLink>
        </div>
        {/*<div className={styles.links}>
          <Link
            className="button button--secondary button--lg"
            to="/wiki/">
            Docs Wiki
          </Link>
        </div>*/}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Skilltrack helps your build and track your skill all in one place">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
