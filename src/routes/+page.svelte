<script lang="ts">
  const imgUrl = "https://github.com/Ric5k.png";
</script>

<main>
  <section class="hero">
    <img src={imgUrl} alt="Github Profile" class="profile" />

    <h1 class="title">@Ric5k</h1>
    <p class="subtitle">Enjiner</p>

    <div class="social-links">
      <a href="https://github.com/Ric5k" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/ric5k/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <a href="https://zenn.dev/ric5k" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Zenn-46A0FA?style=flat&logo=zenn&logoColor=white" alt="Zenn" />
      </a>
    </div>
  </section>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
  }

  .hero {
  text-align: center;
  margin-top: 60px;
  will-change: opacity, transform; 
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeInUp { 
   from {
    opacity: 0;
    transform: translateY(900vh); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} 


  .profile {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
    border: 3px solid var(--accent);
  }


  .title {
    font-size: 2.4rem;
    margin: 12px 0 6px;
    font-family: var(--font-heading);
  }

  .subtitle {
    opacity: 0.8;
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  .social-links {
    margin-top: 12px;
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .social-links img {
    width: 110px;
    height: 32px;
    border-radius: 6px;
    transition: transform 0.25s ease, opacity 0.2s;
  }

  .social-links img:hover {
    transform: translateY(-3px) scale(1.03);
    opacity: 0.9;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

</style>
