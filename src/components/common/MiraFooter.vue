<script lang="ts" setup>
import { Twitter, Instagram, Youtube, Twitch, X } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <NuxtLink to="/" class="navbar-brand text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="Miratopia" class="w-8 h-8 sm:w-12 sm:h-12">
          <img src="/title.png" alt="Miratopia" class="w-32 sm:w-46">
        </NuxtLink>
        <p class="footer-description">
          Votre destination pour des contenus uniques et divertissants.
        </p>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">Découvrir</h4>
        <ul class="footer-links">
          <li><NuxtLink to="/guide">Guide</NuxtLink></li>
          <li><NuxtLink to="/map">Map</NuxtLink></li>
          <li><NuxtLink to="/city">Le Village</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">À propos</h4>
        <ul class="footer-links">
          <li><NuxtLink to="/team">L'Équipe</NuxtLink></li>
          <li><a href="https://tacx.notion.site/Kit-de-presse-1de153ee963f80fa9b62fc33ba4cc389" target="_blank">Presse</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">Suivez-nous</h4>
        <div class="social-links">
          <NuxtLink to="https://www.twitch.tv/tacxtv" target="_blank" class="social-link" aria-label="Twitch">
            <Twitch :size="24" />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/tacxtv" target="_blank" class="social-link" aria-label="Instagram">
            <Instagram :size="24" />
          </NuxtLink>
          <NuxtLink to="https://www.youtube.com/@tacxtv" target="_blank" class="social-link" aria-label="YouTube">
            <Youtube :size="24" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <NuxtLink to="/mentions" class="legal-link">Mentions légales</NuxtLink>
      <p>&copy; {{ currentYear }} Miratopia. Tous droits réservés. France</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--surface-10);
  color: var(--text-primary);
  padding: 3rem 0 1rem;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .footer-section {
    .footer-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
      font-weight: 600;
    }

    .footer-subtitle {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
      font-weight: 500;
    }

    .footer-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-top: 16px;
    }

    .footer-links {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;

          &:hover {
            color: var(--primary-0);
          }
        }
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;

      .social-link {
        color: var(--text-secondary);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          color: var(--primary-0);
          transform: translateY(-2px);
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--surface-20);
    color: var(--text-secondary);
    font-size: 0.9rem;

    .legal-link {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
      margin-bottom: 0.5rem;
      display: block;

      &:hover {
        color: var(--primary-0);
      }
    }
  }
}
</style> 