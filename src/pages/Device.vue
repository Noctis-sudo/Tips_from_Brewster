<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>{{ device }}</h1>

    <section v-if="device == 'iPhone'">
      <h2>iPhone 帮助</h2>
      <div class="topics">
        <RouterLink to="/iphone/vpn" class="topic-card">
          <div class="topic-icon">
            <img src="/resources/iPhone/VPN.png" alt="VPN" />
          </div>
          <p>VPN</p>
        </RouterLink>

        <RouterLink to="iphone/appleid" class="topic-card">
            <div class="topic-icon text-icon"></div>
            <p>Apple ID</p>
        </RouterLink>

        <RouterLink to="/iphone/appstore" class="topic-card">
          <div class="topic-icon">
            <img src="/resources/iPhone/AppStore.png" alt="App Store" />
          </div>
          <p>App Store</p>
        </RouterLink>

      </div>
    </section>

    <section v-if="device == 'Mac'">
      <h2>Mac 帮助</h2>
      <div class="topics">
        <RouterLink to="/mac/vpn" class="topic-card">
          <div class="topic-icon">
            <img src="/resources/iPhone/VPN.png" alt="VPN" />
          </div>
          <p>VPN</p>
        </RouterLink>

      </div>
    </section>

    <section v-if="device == 'Windows'">
      <h2>Windows 帮助</h2>
      <div class="topics">
        <RouterLink to="/windows/vpn" class="topic-card">
          <div class="topic-icon">
            <img src="/resources/iPhone/VPN.png" alt="VPN" />
          </div>
          <p>VPN</p>
        </RouterLink>

      </div>
    </section>

    <section v-if="device == 'Problem'">
      <h2>常见问题帮助</h2>
      <div class="topics">
        <RouterLink to="/problem/webnaaccess" class="article-card">
          <p>浏览器提示无法访问此网站</p>
        </RouterLink>
        <RouterLink to="/problem/internetnaaccess" class="article-card">
          <p>浏览器提示无法访问Internet</p>
        </RouterLink>

      </div>
    </section>

  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  device: { type: String, default: 'iPhone' }
})
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

h2 {
  margin-top: 56px;
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.topics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.topic-card {
  min-height: 150px;
  border-radius: 22px;
  background: #f5f5f7;
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.topic-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 30px rgba(15, 15, 15, 0.08);
}

.topic-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: #fff;
  overflow: hidden;
}

.topic-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.text-icon {
  color: #111;
  font-size: 1.6rem;
  line-height: 1;
}

.topic-card p {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
}

.placeholder {
  margin-top: 40px;
  padding: 28px;
  background: #fff;
  border-radius: 24px;
  border: 1px solid #e5e5ea;
}

.placeholder h2 {
  margin-top: 0;
}

.placeholder p {
  color: #666;
  line-height: 1.8;
}

@media (max-width: 800px) {
  .page {
    padding: 36px 20px;
  }
  .topics {
    grid-template-columns: 1fr;
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