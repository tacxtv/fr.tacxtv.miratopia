<script setup lang="ts">
import MiraContainer from '~/components/common/MiraContainer.vue';

useHead({
  title: 'Mentions légales'
})
</script>

<template>
  <MiraContainer>
  <div class="mentions-legales">
    <h1>Mentions légales</h1>
    <p class="date font-bold">En vigueur au 25/04/2025</p>

    <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (LCEN), il est porté à la connaissance des Utilisateurs du serveur Minecraft <strong>Miratopia</strong> les présentes mentions légales.</p>

    <p>La connexion et l'utilisation du serveur Minecraft Miratopia impliquent l'acceptation intégrale et sans réserve des présentes mentions légales.</p>

    <p>Ces dernières sont consultables via la plateforme associée au serveur à la rubrique « Mentions légales ».</p>

    <h2>Article 1 : L'Éditeur</h2>
    <p><strong>Éditeur</strong> : TacxTV<br>
    <strong>E-mail de contact</strong> : contact@tacxtv.fr</p>

    <h2>Article 2 : L'Hébergeur</h2>
    <p><strong>Hébergeur</strong> : OVH SAS<br>
    <strong>Siège social</strong> : 2 rue Kellermann, 59100 Roubaix, France<br>
    <strong>E-mail de contact</strong> : support@ovh.com</p>

    <h2>Article 3 : Accès au serveur</h2>
    <p>Le serveur Minecraft Miratopia est accessible depuis n'importe quel lieu, 7 jours sur 7 et 24 heures sur 24, sauf en cas de force majeure, d'interruptions programmées ou d'une nécessité de maintenance technique.</p>
    <p>En cas de modification, interruption ou suspension des services, l'Éditeur ne saurait être tenu responsable.</p>

    <h2>Article 4 : Collecte des données</h2>
    <p>Le serveur Minecraft Miratopia est, sauf mention particulière dans le cadre d'événements ou de fonctionnalités spécifiques, exempté de déclaration à la Commission Nationale de l'Informatique et des Libertés (CNIL) dans la mesure où il ne collecte aucune donnée personnelle susceptible d'identifier ses utilisateurs.</p>

    <h2>Article 5 : Cookies et données de session</h2>
    <p>Si le serveur ou la plateforme associée utilise des cookies ou d'autres dispositifs de suivi, l'Utilisateur en est informé dès sa première connexion.</p>
    <p>Un cookie est un élément qui ne permet pas d'identifier personnellement l'Utilisateur mais qui permet d'enregistrer des informations relatives à sa navigation ou à son usage. L'Utilisateur peut, par l'intermédiaire des paramètres de son logiciel de navigation, désactiver ces cookies.</p>
    <p>En continuant à utiliser le serveur ou la plateforme associée, l'Utilisateur accepte tacitement l'utilisation de ces dispositifs.</p>

    <h2>Article 6 : Propriété intellectuelle</h2>
    <p>Tous les éléments constitutifs du serveur Minecraft Miratopia (textes, graphismes, logos, images, sons, codes informatiques, etc.) sont la propriété exclusive de l'Éditeur ou de tiers autorisés.</p>
    <p>Toute reproduction, représentation, modification, publication, adaptation totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, sans l'autorisation écrite préalable de l'Éditeur, est strictement interdite et pourrait constituer une contrefaçon sanctionnée par le Code de la propriété intellectuelle et le Code civil.</p>
  </div>
</MiraContainer>
</template>

<style scoped>

.mentions-legales {
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #fff;
}

h1 {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
}

h2 {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: #fff;
}

.date {
  color: #fff;
  margin-bottom: 2rem;
}

p {
  margin-bottom: 1rem;
  color: #fff;
}

strong {
  color: #fff;
}
</style>
