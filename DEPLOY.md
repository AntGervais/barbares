# 🚀 Guide de Déploiement : Netlify & CMS

Ce guide explique comment mettre en ligne le site **BARBARES** sur Netlify et activer l'administration (Decap CMS).

## 1. Pré-requis

- Le code du projet doit être sur un dépôt **GitHub** (ou GitLab/Bitbucket).
- Avoir un compte sur [Netlify](https://www.netlify.com/).

## 2. Déploiement sur Netlify

1.  Connectez-vous à Netlify.
2.  Cliquez sur **"Add new site"** > **"Import an existing project"**.
3.  Choisissez **GitHub** et sélectionnez le dépôt `barbares`.
4.  **Configuration du Build** :
    - Netlify devrait détecter automatiquement Astro.
    - **Build command** : `npm run build`
    - **Publish directory** : `dist`
5.  Cliquez sur **"Deploy site"**.

Le site sera en ligne dans quelques minutes ! 🎉

## 3. Activation du CMS (Decap CMS)

Pour que l'interface d'administration (`/admin`) fonctionne, il faut activer **Netlify Identity**.

1.  Allez dans le tableau de bord de votre site sur Netlify.
2.  Allez dans **"Site configuration"** > **"Identity"**.
3.  Cliquez sur **"Enable Identity"**.
4.  **IMPORTANT** : Activez **Git Gateway**.
    - Toujours dans "Identity", scrollez jusqu'à **"Services"** > **"Git Gateway"**.
    - Cliquez sur **"Enable Git Gateway"**.

## 4. Création du Premier Admin

1.  Invitez-vous comme utilisateur :
    - Dans l'onglet **"Identity"**, cliquez sur **"Invite users"**.
    - Entrez votre email.
2.  Vous allez recevoir un email d'invitation.
    - **ATTENTION** : Ne cliquez pas tout de suite sur le lien !
    - Le lien doit pointer vers votre site *en ligne*.
3.  Cliquez sur le lien dans l'email pour définir votre mot de passe.

## 5. Accéder à l'Admin

Une fois le compte créé :
1.  Allez sur `https://votre-site-barbares.netlify.app/admin`.
2.  Connectez-vous avec votre email et mot de passe.
3.  Vous pouvez maintenant modifier le Menu et les Vins !

---

## 💡 En cas de problème

- **Erreur "Backend not found"** : Vérifiez que "Git Gateway" est bien activé dans Netlify Identity.
- **Erreur au build** : Vérifiez les logs de déploiement sur Netlify. Assurez-vous que `npm run build` fonctionne en local.
