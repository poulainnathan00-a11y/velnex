# Velnex — site vitrine

Site vitrine de la société **Velnex** (éditeur de RecrutIA), sur **velnex.fr**.

Site **statique** (HTML/CSS, aucun build) → déploiement instantané.

## Fichiers

- `index.html` — page principale (hero, activité, produits, mission, contact)
- `mentions-legales.html` / `confidentialite.html` — pages légales
- `styles.css` — thème sombre premium (bleu → cyan)
- `favicon.svg` — icône de la marque
- `serve.mjs` — petit serveur local pour prévisualiser (dev uniquement)

## Prévisualiser en local

```bash
node serve.mjs
# puis ouvrir http://localhost:4601
```

## Déployer sur Vercel (velnex.fr)

1. Créer un dépôt GitHub `velnex` et y pousser ce dossier.
2. Sur Vercel → **Add New Project** → importer le dépôt.
3. **Framework Preset : Other** · Build Command : *(vide)* · Output Directory : *(vide / racine)*.
4. Deploy.
5. **Settings → Domains** → ajouter `velnex.fr` (et `www.velnex.fr`).
6. Chez OVH (DNS de velnex.fr), suivre les enregistrements indiqués par Vercel :
   - `velnex.fr` → enregistrement **A** vers `76.76.21.21`
   - `www.velnex.fr` → **CNAME** vers `cname.vercel-dns.com`
   (Vercel affiche les valeurs exactes à copier.)

> Alternative sans GitHub : installer la CLI `npm i -g vercel`, puis `vercel` dans
> ce dossier et suivre les instructions.

## À compléter

Dans `mentions-legales.html` : **forme juridique**, **SIRET** et **adresse**
(placeholders `[à compléter]`) une fois l'entreprise immatriculée.

Penser aussi à activer la redirection de **contact@velnex.fr** vers une vraie
boîte mail (chez OVH).
