<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>如何下载境外App</h1>

    <section class="step-card">
      <h2>1. 检查你的Apple ID地区</h2>
            <RouterLink to="/iphone/appleid/region" class="article-card">
                <p>详见此处</p>
            </RouterLink>
    </section>

    <section class="step-card">
      <h2>2. 请将Apple ID地区改为正确的地区</h2>
            <RouterLink to="/iphone/appleid/changeregion" class="article-card">
                <p>详见此处</p>
            </RouterLink>
      <p>若已经相同，请跳过这一步</p>
    </section>

    <section class="step-card">
      <h2>3. 进行安装</h2>
        <a href="https://support.apple.com/zh-cn/guide/iphone/iphc90580097/26/ios/26" target="_blank" rel="noopener noreferrer" class="article-card">
            <p>详见此处</p>
        </a>
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
  font-size: 1.05rem;
  max-width: 720px;
}

.step-card {
  margin-top: 30px;
  padding: 24px;
  border-radius: 24px;
  background: #f5f5f7;
}

.step-card h2 {
  margin-top: 0;
}

.image-placeholder {
  margin: 18px 0;
  min-height: 180px;
  border-radius: 18px;
  background: #e9e9ef;
  display: grid;
  place-items: center;
  color: #666;
  font-weight: 600;
}

p {
  line-height: 1.8;
}

@media (max-width: 760px) {
  .page {
    padding: 36px 20px;
  }
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

</style>