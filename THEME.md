# Thème & Palette

Ce projet utilise une palette centralisée via :

- Variables CSS (HSL) dans `src/lib/styles/theme.css`
- Référencement Tailwind via `tailwind.config.js` (hsl(var(--color-...)))

## Palettes définies

- `primary`: Indigo/Violet (accent principal UI, boutons, liens actifs)
- `accent`: Amber/Orange (éléments de contraste, badges, highlights)
- `neutral`: Nuances neutres (fonds, surfaces, typographie)

Chaque palette possède des shades `50 -> 900`. Exemple d'utilisation Tailwind :

```html
<button class="bg-primary-600 hover:bg-primary-500 text-white ...">Action</button>
```

## Tokens sémantiques

Dans `theme.css` des alias :

- `--color-bg`, `--color-bg-alt`
- `--color-surface`, `--color-surface-alt`
- `--color-border`
- `--color-text`, `--color-text-soft`
- `--color-primary`, `--color-accent`

Ces tokens permettent de changer l'ambiance sans réécrire les composants.

## Mode sombre

Le mode sombre active la classe `dark` sur `<html>`. Overrides définis dans `.dark { ... }`.
Pour forcer le thème :

```js
document.documentElement.classList.add('dark');
```

## Personnalisation rapide

1. Modifier les valeurs HSL dans `theme.css` (ex: `--color-primary-500`).
2. Ajuster éventuellement les tokens sémantiques pour refléter le nouveau style.
3. Redémarrer le serveur si nécessaire (généralement pas requis car Vite hot reload fonctionne).

Conseil : garder la cohérence de luminosité ascendante (50 = très clair, 900 = très sombre). Utiliser un outil comme `https://hsluv.org` ou `oklch.com` pour générer des rampes équilibrées.

## Ajouter une nouvelle palette

1. Ajouter les variables `--color-newname-50..900` dans `theme.css`.
2. Étendre `tailwind.config.js` :

```js
colors: { newname: { 50: 'hsl(var(--color-newname-50) / <alpha-value>)', ... } }
```

1. (Optionnel) Créer des tokens sémantiques si elle devient un rôle (ex: succès, warning).

## Accessibilité

- Vérifier le contraste (objectif : ratio >= 4.5 pour texte normal, 3.0 pour large).
- Tester contrastes primaires sur `--color-bg` clair et sombre.

## Roadmap potentielle

- Ajouter palettes `success`, `warning`, `error`.
- Générer automatiquement la config via script si complexité augmente.
- Support préférences système (`prefers-color-scheme`).

---

Ajustez librement; structure pensée pour évoluer sans refactor massif.
