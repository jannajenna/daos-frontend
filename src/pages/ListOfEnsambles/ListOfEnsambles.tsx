import React from 'react';
import styles from './ListOfEnsembles.module.css';

function ListOfEnsembles() {
  // Mock data for ensembles
  const ensembles = [
    {
      id: 1,
      title: 'Århus Klassisk Ensemble',
      location: 'Århus',
      members: '10 - 24 musikere',
      description: 'Violinist søges som afløser til forestilling i oktober',
      instrument: 'Violin',
      experience: '2+',
    },
    {
      id: 2,
      title: 'Sønderjyllands Symfoniorkester',
      location: 'Vejle',
      members: '10 - 24 musikere',
      description: 'Vi mangler en trompetspiller',
      instrument: 'Trompet',
      experience: '1+',
    },
    {
      id: 3,
      title: 'Violin + Klarinet duo',
      location: 'Århus',
      members: '1 - 4 musikere',
      description:
        'Violinist søger en klarinetspiller til et eksperimentelt duoprojekt',
      instrument: 'Klarinet',
      experience: '1+',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Musik Samspil</h1>
        <p className={styles.subtitle}>Skabt af DAOS - Dansk Amatørorkester Samvirke</p>
      </header>

      {/* Main Section */}
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Find Ensemble</h2>
        <p className={styles.resultText}>37 opslag fra ensembler fundet</p>

        {/* Filters */}
        <div className={styles.filters}>
          <select className={styles.select} disabled>
            <option value="">Vælg instrument</option>
          </select>
          <button className={styles.filterButton} disabled>Filtre</button>
          <button className={styles.agentButton} disabled>Opret agent</button>
        </div>

        {/* Ensemble List */}
        <div className={styles.ensembleList}>
          {ensembles.map((ensemble) => (
            <div key={ensemble.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{ensemble.title}</h3>
              <p className={styles.cardLocation}>
                {ensemble.location} • {ensemble.members}
              </p>
              <p className={styles.cardDescription}>{ensemble.description}</p>
              <div className={styles.cardDetails}>
                <span className={styles.instrument}>{ensemble.instrument}</span>
                <span className={styles.experience}>Erfaring {ensemble.experience}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <button className={styles.loadMoreButton}>Se flere</button>
      </main>
    </div>
  );
}

export default ListOfEnsembles;
