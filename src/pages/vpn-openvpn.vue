<template>
  <main class="page">
    <button type="button" class="back" @click="goBack">← 返回</button>

    <h1>如何打开 VPN</h1>

    <section v-if="device === 'Windows'">
      <section class="step-card">
        <h2>1.</h2>
          <img src="/resources/iPhone/VPN.png" alt="VPN" />
        <p>双击打开桌面上的VPN图标</p>
      </section>

      <section class="step-card">
        <h2>2.</h2>
          <img src="/resources/Windows/vpn/1.png" alt="choice" />
        <p>选择套餐和目标位置（如图）</p>
        <p>点击红框位置打开VPN</p>
        <p>台湾地区可以访问大部分网站（香港略有限制）</p>
        <p style="color: red;">部分政府网站与银行需要当地IP，更改绿框中的目标位置</p>
      </section>

      <section class="step-card">
        <h2>3.</h2>
          <img src="/resources/Windows/vpn/2.png" alt="where?" />
        <p>打开后软件自动进入系统托盘 单击打开</p>
        <p style="color: red;">⚠️使用完成后请一定打开托盘关闭VPN后再关闭软件</p>
      </section>

      <section class="step-card">
        <h2>详见下方视频</h2>
          <video class="responsive-video" src="/resources/problem/1.mp4" controls playsinline preload="metadata" />
      </section>

      <section class="step-card">
          <RouterLink to="/problem/webnaaccess" class="category-card">
            VPN常见问题请点这里
          </RouterLink>
      </section>
    </section>

    <section v-else-if="device === 'iPhone'">
      <section class="step-card">
        <h2>1.</h2>
          <img src="/resources/iPhone/vpn/3.png" alt="icon" />
        <p>点击图标打开代理软件并登录</p>
      </section>

      <section class="step-card">
        <h2>2. 选择节点</h2>
        <RouterLink to="/iphone/vpn/vpnregion" class="category-card">
          详见此处
        </RouterLink>
      </section>

      <section class="step-card">
        <h2>3. 点击打开</h2>
        <img src="/resources/iPhone/vpn/1.png" alt="open" />
      </section>
    </section>

  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  device: { type: String, default: '' }
})

const device = computed(() => props.device)
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

p {
  line-height: 1.8;
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

.step-card .responsive-video {
  width: 100%;
  max-width: 100%;
  max-height: 60vh;
  height: auto;
  display: block;
  margin: 12px 0 0 0;
  border-radius: 12px;
  background: #000;
}

.step-card img {
  width: 100%;
  max-width: 560px;
  height: auto;
  display: block;
  margin: 12px 0 0 0;
  border-radius: 12px;
}
</style>
