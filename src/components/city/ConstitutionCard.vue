<script setup lang="ts">
import type { ConstitutionArticle } from '~/services/city/ConstitutionArticle';

defineProps<{
  expanded: boolean;
  constitutionArticles: ConstitutionArticle[];
}>()

const getConstitutionArticleTitle = (article: ConstitutionArticle) => {
  return article.artnum.split('-')[1] + '-' + article.artnum.split('-')[2]
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} à ${hours}h${minutes}`;
};

const emit = defineEmits<{
  (e: 'toggle'): void
}>()

const toggle = () => {
  emit('toggle')
}
</script>

<template>
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <div 
      class="card-header p-4 cursor-pointer flex justify-between items-center"
      @click="toggle"
    >
      <h2 class="text-white text-2xl font-semibold">La Constitution</h2>
      <button class="text-white cursor-pointer">
        <svg 
          class="w-6 h-6 transform transition-transform duration-200" 
          :class="{ 'rotate-180': !expanded }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
    <div class="p-4" :class="{ 'hidden': !expanded }">
      <div v-if="constitutionArticles.length <= 0" class="text-gray-300 space-y-4 max-h-[500px] overflow-y-auto pr-2">
        <div v-for="(article, index) in constitutionArticles" :key="index" class="bg-gray-700 p-4 rounded-lg flex md:flex-row flex-col gap-2 md:gap-6 items-center md:items-start">
          <div>
            <img src="/public/city/constitution-laws.webp" class="w-12 h-12 rounded-full" />
          </div>
          <div class="w-full">
            <div class="flex md:flex-row flex-col justify-between items-center gap-2 md:gap-4">
              <h3 class="text-lg font-semibold text-white mb-2">{{ article.title }} (Loi n°{{ getConstitutionArticleTitle(article) }})</h3>
              <div class="text-gray-300 text-sm pb-1.5 text-right">En vigueur dès le <b>{{ formatDate(article.appliedAt) }}</b> <br>Loi proposée par <b>{{ article.metadata.onProposalBy }}</b></div>
            </div>
            <hr class="mb-4 mt-2 border-white/20">
            <p class="text-gray-300 text-sm" v-html="article.content" />
          </div>
        </div>
      </div>
      <div v-else class="text-gray-300 space-y-4 max-h-[500px] overflow-y-auto pr-2">
        <div class="bg-gray-700 p-4 rounded-lg">
          <h2 class="text-xl font-bold text-white mb-4">Préambule</h2>
          <p class="mb-4">Le peuple de Miratopia, réuni en une seule et même communauté de blocs et de rires, proclame cette Constitution afin d'assurer à chaque joueur une expérience de jeu digne des plus grandes épopées pixélisées. Que la paix, la créativité, et le respect du code chunkien règnent.</p>
          
          <hr class="my-6 border-white/20">

          <h3 class="text-lg font-bold text-white mb-4">Titre I — Du territoire et de la propriété sacrée</h3>
          
          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 1 — Du droit au territoire libre</h4>
            <p>Hors du village, nul ne peut revendiquer un terrain à moins de <strong>10 chunks</strong> d'un autre joueur sans son accord. Toute colonisation non consentie sera considérée comme une déclaration d'hostilité.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 2 — De la protection des biens</h4>
            <p>Le vol de ressources dans un territoire revendiqué est <strong>strictement interdit</strong>, même si elles sont accessibles par voie maritime, aérienne ou par portails dimensionnels.</p>
            <p class="italic">Un coffre exposé n'est pas un coffre à disposition.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 3 — Du respect posthume</h4>
            <p>Les possessions d'un joueur défunt ne sont pas une piñata gratuite. Il est <strong>strictement interdit</strong> de piller les reliques funéraires, sauf si le joueur concerné donne sa bénédiction (et son stuff aussi).</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 4 — De la faune apprivoisée</h4>
            <p>Tuer les animaux appartenant à un autre joueur est <strong>formellement interdit</strong>. Tout animal baptisé devient citoyen officiel de Miratopia. Même s'il s'appelle "Bacon".</p>
          </div>

          <hr class="my-6 border-white/20">

          <h3 class="text-lg font-bold text-white mb-4">Titre II — Des constructions et de l'urbanisme éclairé</h3>
          
          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 5 — Du respect des créations</h4>
            <p>Détruire ou détériorer les constructions d'autrui est <strong>strictement interdit</strong>. Même pour voir "ce qu'il y avait dedans" ou "si ça explose".</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 6 — De la neutralité architecturale</h4>
            <p>Les constructions à caractère religieux, politique ou trop ostentatoire sont proscrites. Ici, pas de cathédrales de la discorde ni de totems du drama.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 7 — Du paysage et de l'environnement</h4>
            <p>Les paysages naturels doivent être respectés. Il est interdit de laisser des arbres suspendus, de creuser des trous sans les reboucher ou de massacrer les biomes.</p>
            <p class="italic">La nature a aussi des chunks à cœur.</p>
          </div>

          <hr class="my-6 border-white/20">

          <h3 class="text-lg font-bold text-white mb-4">Titre III — Des techniques et pratiques interdites</h3>
          
          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 8 — Des duplications interdites</h4>
            <p>L'usage de bugs pour dupliquer objets ou entités est interdit. Tout glitch découvert doit être rapporté immédiatement aux Grands Administrateurs de l'Ordre Cubique, nos très chers membres de l'équipe technique.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 9 — De l'utilisation des commandes</h4>
            <p>Seules les commandes prévues par la documentation officielle sont autorisées. Toute tentative d'incantation interdite vous connectera directement au néant administratif.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 10 — Des machines à chaos</h4>
            <p>Les machines, fermes et usines doivent être entretenues. Les items qui s'accumulent au sol et mettent en péril le serveur seront considérés comme des armes de destruction massive. Si vous rencontrez un quelconque problème avec vos machines et usines, n'hésitez pas à en parler, s'ils sont dans la capacités à vous aidez, ou à un membre de l'équipe technique.</p>
          </div>

          <hr class="my-6 border-white/20">

          <h3 class="text-lg font-bold text-white mb-4">Titre IV — Du combat et des conflits</h3>
          
          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 11 — Du PVP règlementé</h4>
            <p>Le PVP est autorisé, mais l'acharnement ou le harcèlement est interdit.</p>
            <p class="italic">Un duel, oui. Une vendetta, non. Toute plainte peut être adressée à l'équipe technique.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 12 — Des zones neutres et interdites</h4>
            <p>Les <strong>Farmlands ne sont pas une terre promise</strong> : toute base construite là-bas est vouée à disparaître à la prochaine purge divine. Construisez-y comme vous respirez, mais n'y posez pas de lit.</p>
          </div>

          <hr class="my-6 border-white/20">

          <h3 class="text-lg font-bold text-white mb-4">Titre V — De la société miratopienne</h3>
          
          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 13 — De la tolérance absolue</h4>
            <p>Tout acte de discrimination (racisme, sexisme, homophobie, etc.) est <strong>formellement interdit</strong>, que ce soit sur le serveur ou sur les plateformes associées (ex : Discord).</p>
            <p class="italic">Un monde carré ne tolère pas les esprits étroits.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 14 — Des contenus partagés</h4>
            <p>La diffusion de contenus pornographiques, violents ou choquants est interdite et sanctionnée.</p>
            <p class="italic">Les seules explosions autorisées sont celles des Creepers, pas celles de mauvais goût.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 15 — De la cordialité sacrée</h4>
            <p>Un comportement poli et respectueux est requis à tout moment. Les insultes, menaces ou comportements agressifs seront sévèrement punis.</p>
            <p class="italic">Un "Salut" ouvre plus de portes qu'une pioche en Netherite.</p>
          </div>

          <hr class="my-6 border-white/20">

          <h3 class="text-lg font-bold text-white mb-4">Titre VI — De la citoyenneté et des procédures</h3>
          
          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 16 — Du droit d'entrée</h4>
            <p>L'accès au serveur est soumis à inscription via ce lien <a href="https://miratopia.tacxtv.fr" class="text-blue-400 hover:text-blue-300">https://miratopia.tacxtv.fr</a>, et ensuite accordé par les sages de la <strong>Liste Blanche</strong>.</p>
            <p class="italic">Les élus reçoivent une bénédiction cubique. Les autres devront patienter.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 17 — De l'évolution des lois</h4>
            <p>Les règles peuvent évoluer. En vous connectant, vous acceptez les règles présentes <strong>et futures</strong>.</p>
            <p class="italic">Les parchemins se mettent à jour. Les joueurs aussi.</p>
          </div>

          <div class="mb-4">
            <h4 class="font-semibold text-white">Article 18 — De la hiérarchie des mondes</h4>
            <p>Cette Constitution s'applique à tous les serveurs Miratopiens.</p>
            <p class="italic">La loi est une et indivisible. Même si les biomes ne le sont pas.</p>
          </div>

          <hr class="my-6 border-white/20">

          <div class="text-center">
            <p class="font-bold">Signé et scellé par le Haut Conseil des Admins de Miratopia</p>
            <p class="italic">"Pour que règne la paix des blocs et l'équilibre des pixels."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 