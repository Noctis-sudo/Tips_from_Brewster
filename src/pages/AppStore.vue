<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>App Store</h1>

    <section class="topic-list">
      <h2>App Store 使用帮助</h2>

    <div class="article-card">
        <RouterLink to="/iphone/appstore/foreignapp" class="article-link">
            下载非中国大陆App
        </RouterLink>
    </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => router.back()
</script>

<style scoped>
.page {
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 30px;
  font-family: inherit;
}

.back {
  border: none;
  background: transparent;
  color: #007aff;
  font-size: 17px;
  cursor: pointer;
  padding: 0;
}

h1 {
  margin-top: 28px;
  margin-bottom: 10px;
  font-size: clamp(2.8rem, 4vw, 4.2rem);
}

.description {
  color: #666;
  font-size: 1.1rem;
  max-width: 720px;
}

.topic-list {
  margin-top: 40px;
}

.topic-list h2 {
  margin-bottom: 18px;
  font-size: 1.4rem;
}

.article-card {
  display: block;
  border-radius: 22px;
  background: #ffffff;
  padding: 22px;
  margin: 16px 0 14px;
  color: #111;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
  transition: transform 0.16s ease;
}

.article-card:hover {
  transform: translateY(-2px);
}

.article-card p {
  margin: 0;
  font-size: 1rem;
  text-align: center;
}

.article-link {
  text-decoration: none;
  color: #111;
  font-size: 1.1rem;
  font-weight: 600;
}

@media (max-width: 760px) {
  .page {
    padding: 36px 20px;
  }
}
</style>
