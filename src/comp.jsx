export default function Comp() {
  return (
    <div className="container py-4">
      <div className="row g-4">

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 text-center">
            <div className="avatar-box mx-auto mb-3">
              <span className="fs-1 fw-bold text-primary">I</span>
            </div>
            <h4 className="fw-bold mb-1">Ilyas Sama</h4>
            <p className="badge bg-primary fs-6 mb-3">Stagiaire Full Stack</p>
            <p className="text-muted small">
              Stagiaire en 2ème année Développement Digital - CMC Laâyoune.
            </p>

            <hr />

            <div className="text-start small">
              <p className="mb-2"><strong>Nom Complet :</strong> Ilyas Sama</p>
              <p className="mb-2"><strong>Ville :</strong> Laâyoune, Maroc</p>
              <p className="mb-0"><strong>Établissement :</strong> CMC Laâyoune</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8">

          <div className="card border-0 shadow-sm p-4 mb-4">
            <h5 className="fw-bold mb-3 text-primary">Profil Professionnel</h5>
            <p className="text-secondary mb-0">
              Stagiaire en deuxième année Développement Digital (Option Full Stack) au CMC Laâyoune. Passionné par la création de sites web dynamiques, la gestion des bases de données et le développement Back-end.
            </p>
          </div>

          <div className="card border-0 shadow-sm p-4 mb-4">
            <h5 className="fw-bold mb-3 text-primary">Compétences Techniques</h5>
            <div className="row g-2 text-center">
              <div className="col-6 col-md-4"><span className="badge bg-light text-dark border w-100 p-2">HTML5 / CSS3</span></div>
              <div className="col-6 col-md-4"><span className="badge bg-light text-dark border w-100 p-2">Bootstrap 5</span></div>
              <div className="col-6 col-md-4"><span className="badge bg-light text-dark border w-100 p-2">JavaScript / jQuery</span></div>
              <div className="col-6 col-md-4"><span className="badge bg-light text-dark border w-100 p-2">PHP / MySQL</span></div>
              <div className="col-6 col-md-4"><span className="badge bg-light text-dark border w-100 p-2">Python (POO)</span></div>
              <div className="col-6 col-md-4"><span className="badge bg-light text-dark border w-100 p-2">Bases de Données (SQL)</span></div>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-4 mb-4">
            <h5 className="fw-bold mb-3 text-primary">Parcours & Formation</h5>
            <div className="border-start border-2 border-primary ps-3 mb-3">
              <h6 className="fw-bold mb-0">Développement Digital - Option Full Stack</h6>
              <small className="text-muted">Cité des Métiers et des Compétences (CMC) Laâyoune | 2ème Année</small>
              <p className="small text-secondary mt-1 mb-0">Formation sur la création des applications Web (Frontend, Backend, SQL).</p>
            </div>
            <div className="border-start border-2 border-secondary ps-3">
              <h6 className="fw-bold mb-0">Baccalauréat Sciences Physiques</h6>
              <small className="text-muted">Lycée Qualifiant - Laâyoune</small>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-4 mb-4">
            <h5 className="fw-bold mb-4 text-primary">Projets Pratiques</h5>
            
            <div className="row g-3">

              <div className="col-md-6">
                <div className="project-card h-100 p-3 rounded-3 border">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="fw-bold text-dark mb-0">Gestion des Produits</h6>
                    <span className="project-tech">PHP / MySQL</span>
                  </div>
                  <p className="small text-muted mb-3">Application web pour la gestion CRUD des produits avec stockage MySQL.</p>
                  <a href="projet_produits/index.php" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary w-100">Voir le Projet</a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="project-card h-100 p-3 rounded-3 border">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="fw-bold text-dark mb-0">Validation Formulaire</h6>
                    <span className="project-tech">JS / jQuery</span>
                  </div>
                  <p className="small text-muted mb-3">Interface dynamique avec vérification des champs côté client en temps réel.</p>
                  <a href="#" className="btn btn-sm btn-outline-primary w-100">Voir le Projet</a>
                </div>
              </div>

            </div>
          </div>

          <div className="card border-0 shadow-sm p-4">
            <h5 className="fw-bold mb-3 text-primary">Contactez-moi</h5>
            <form id="contactForm" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-2">
                <input type="text" className="form-control form-control-sm" placeholder="Votre Nom" required />
              </div>
              <div className="mb-2">
                <input type="email" className="form-control form-control-sm" placeholder="Votre Email" required />
              </div>
              <div className="mb-2">
                <textarea className="form-control form-control-sm" rows="3" placeholder="Votre Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-sm w-100">Envoyer le message</button>
            </form>
          </div>

        </div>
      </div>

      <footer className="text-center py-3 text-muted small mt-4">
        &copy; 2026 Ilyas Sama - Portfolio Stagiaire Full Stack
      </footer>
    </div>
  );
}