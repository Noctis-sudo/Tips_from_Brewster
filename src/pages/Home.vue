<template>
  <main class="home-page">
    <h1>支持</h1>
    <p class="subtitle">请选择你需要帮助的设备</p>

    <div class="menu">
      <RouterLink to="/mac" class="category-card">
        <img src="/resources/Mac/Mac.png" alt="Mac">
        <span>Mac</span>
      </RouterLink>

      <RouterLink to="/iphone" class="category-card">
        <img src="/resources/iPhone/iPhone.png" alt="iPhone">
        <span>iPhone</span>
      </RouterLink>

      <RouterLink to="/windows" class="category-card">
        <img src="/resources/Windows/Windows.png" alt="Windows">
        <span>Windows</span>
      </RouterLink>

      <RouterLink to="/problem" class="category-card">
        <img src="/resources/problem/problem.png" alt="Problem">
        <span>常见问题</span>
      </RouterLink>

    </div>
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  width: 100%;
  padding: 60px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  text-align: center;
  font-size: clamp(2.5rem, 3.5vw, 4rem);
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 50px;
}

.menu {
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.category-card {
  height: 220px;
  border: none;
  border-radius: 28px;
  background: #f5f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 12px 30px rgba(15, 15, 15, 0.05);
}

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 30px rgba(15, 15, 15, 0.1);
}

.category-card img {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.category-card span {
  font-size: 1.3rem;
  font-weight: 600;
}

@media (max-width: 760px) {
  .menu {
    grid-template-columns: 1fr;
  }

  .home-page {
    padding: 40px 20px;
  }
}
</style>
