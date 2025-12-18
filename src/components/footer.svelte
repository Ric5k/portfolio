<script>
  // 必要に応じてリンク先を書き換えてください
  const socialLinks = [
    { name: 'GitHub',  href: 'https://github.com/Ric5k', icon: '/icon/github-mark.svg' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ric5k', icon: '/icon/inlogo.svg' },
    { name: 'Twitter', href: 'https://twitter.com/ric5kdev',  icon: '/icon/xlogo.svg' }
  ];
</script>

<footer class="site-footer">
  <div class="container">
    <div class="social-links">
      {#each socialLinks as link}
        <a 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-link"
        >
          <img src={link.icon} alt={link.name} class="icon" />
          <span class="link-text">{link.name}</span>
        </a>
      {/each}
    </div>
    
    <p class="license">
      © 2025 Ric5k
    </p>
  </div>
</footer>

<style>
  .site-footer {
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    border-top: 2px solid #000;
  }

  .container {
    text-align: center;
  }

  /* リンクを横に並べる設定 */
  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* アイコン同士の間隔 */
    margin-bottom: 1rem;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: #333;
    opacity: 0.4; /* デフォルトは薄く */
    transition: all 0.3s ease;
  }

  .social-link:hover {
    opacity: 1; /* ホバーでハッキリ */
    transform: translateY(-1px);
  }

  .icon {
    width: 18px;
    height: 18px;
    filter: grayscale(1); /* すべてモノクロに統一 */
  }

  .link-text {
    font-size: 0.85rem;
    font-weight: 500;
  }

  .license {
    font-size: 0.7rem;
    color: #999;
    margin: 0;
  }
</style>