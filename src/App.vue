<template>
  <div id="app">
    <div id="nav">
      <ul class="nav justify-content-center navbar-dark bg-dark mb-5">
        <li class="nav-item">
          <router-link to="/" class="nav-lnk">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog/1" class="nav-lnk">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/servicio" class="nav-lnk">Servicios</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacto" class="nav-lnk">Contacto</router-link>
        </li>
      </ul>
    </div>
    <div class="container">
    <router-view />
    </div>
  </div>
</template>

<style>
a.nav-lnk{
  color: white;
  display: block;
  padding: .5rem 1rem;
  text-decoration: none;
}

</style>
