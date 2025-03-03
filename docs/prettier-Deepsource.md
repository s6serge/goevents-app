# Deepsource

- Installer extension via extension de VS Code
- Se connecter avec Github et profiter de la version gratuite

# Prettier

## Configuration dans VS Code

- Installer extension via extension de VS Code
- Ouvrir settings.json
  #### Procedure
  - Ctrl + Shift + P (pour ouvrir)
  - Saisir la commande (Preferences: Open User Settings(JSON))
  - Saisir les configurations et enregistrer

## Configuration dans un projet particulier

### Installer prettier sur le projet

- Comamnde npm install --save-dev prettier ou
- npm install prettier (Non recommandee)

### Créer le fichier .prettierrc à la racine du projet

- créer .prettierrc à la racine
- Ajouter les configruations et enregistrer

#### NB : Une configuration prettier sur un projet local prend le dessus sur les configurations faites dans VS Code. Ainsi, pour chaque projet, l'equipe peut definir les configurations a utiliser pour que le code source soit uniforme.
