<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>Apple Pay</h1>

    <section class="topic-list">
      <h2>Apple Pay 与 NFC</h2>
    
    <div class="article-card">
        Apple Pay是一种通过NFC在刷卡机上进行支付的支付方法，常见场景例如：银联支付、八达通、公交卡、Visa、Mastercard等。
    </div>
    <div class="article-card">
        将手机代替卡节省很多时间：在解锁iPhone后将iPhone放在检票闸机刷卡处可以直接进站。
    </div>
    <div class="article-card">
        <RouterLink to="/iphone/applepay/where" class="article-link">
            在哪里可以使用？（请先阅读此文档）
        </RouterLink>
    </div>
    <div class="article-card">
        <RouterLink to="/iphone/applepay/card" class="article-link">
          设置交通卡或八达通
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
