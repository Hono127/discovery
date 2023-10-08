<template>
  <div class="container">
    <header>ヘッダー</header>
    <slot />
    <footer>&copy; hiroki</footer>
  </div>
</template>

<script></script>

<style>
header {
  background-color: aqua;
}
footer {
  background-color: aqua;
}
.container {
  font-size: 24px;
  border: solid 1px orange;
}
</style>