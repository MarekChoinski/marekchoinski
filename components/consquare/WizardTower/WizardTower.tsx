import React from "react";

import styles from "./WizardTower.module.scss";

export const WizardTower = () => (
  <section className={styles.wizardTower}>
    <div className={styles.towerVideo}>
      <video autoPlay loop muted playsInline width="100%" height="100%">
        <source src="/videos/consquare/tower.mp4" type="video/mp4" />
      </video>
    </div>
    <div className={styles.build}>
      <img
        src="/images/consquare/tower.png"
        alt="Build section icon"
        className={styles.icon}
      />
      <header className={styles.title}>Build</header>
      <p className={styles.description}>
        Protect your castle walls with magical fortifications and develop your
        guild by improvements gained by mining. Grow your empire to unimaginable
        dimensions by creating impressive castles and various fortresses.
      </p>
    </div>
    <div className={styles.fight}>
      <img
        src="/images/consquare/sword.png"
        alt="Build section icon"
        className={styles.icon}
      />
      <header className={styles.title}>Fight</header>
      <p className={styles.description}>
        Gather your friends for your team and become the most powerful guild in
        the area. Train your team&apos;s tactics on the terrifying creatures
        that live in the world of Consquare. Lead your army in mighty battles
        right outside your house.
      </p>
    </div>
    <div className={styles.collect}>
      <img
        src="/images/consquare/backpack.png"
        alt="Build section icon"
        className={styles.icon}
      />
      <header className={styles.title}>Collect</header>
      <p className={styles.description}>
        Place mines on extensive procedurally generated random structures. Use
        items found during your wander to develop your character. Collect
        necessary ores for your team and found all of mystical crystals. Become
        more and more powerful each day.
      </p>
    </div>
    <div className={styles.explore}>
      <img
        src="/images/consquare/map.png"
        alt="Build section icon"
        className={styles.icon}
      />
      <header className={styles.title}>Explore</header>
      <p className={styles.description}>
        The world of Consquare pretty resembles our world, but is steeped in
        enigmatic wizardy. In vast corners of the world you will find many
        extraordinary characters that will change your outlook on life. The
        openness of our game world is limited only by the boundaries of our
        Earth globe.
      </p>
    </div>
  </section>
);
