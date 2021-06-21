<template>
    <div class="mobile-nav navigation full-width flex" :class="{'hidden-navbar': !showNavbar, scrolled: !scrolledNav, colour: !transparent,}">
      <div class="container flex">
        <nuxt-link to="/" class="logo">
                <img src="https://ik.imagekit.io/alexborecky/Alena/Ent/logo-final_ja1PomJDC.png" alt="">
            </nuxt-link>
        <div class="open">
            <div class="flex middle open-button" @click="isPassive = !isPassive" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div> 
        </div>
      <transition name="fade">
        <div class="nav-container flex center-column-top" :class="{ passive: isPassive }">
            <div class="container flex column">
                <div class="close flex ">
                    <div class="flex middle" @click="isPassive = !isPassive" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> 
                </div>
              <div class="mobile-links flex center column">
                  <nuxt-link to="/" class="logo"> 
                        <img @click="isPassive = !isPassive" src="https://ik.imagekit.io/alexborecky/Alena/Ent/logo-final_ja1PomJDC.png" alt="shoptetak.cz logo">
                    </nuxt-link>
                  <ul>
                    <li 
                      @click="isPassive = !isPassive"
                      v-for="item in items" 
                      :key="item.link"
                    >
                      <nuxt-link 
                        :to="item.link">
                        {{item.title}}
                      </nuxt-link>
                    </li>
                  </ul>
              </div>
            </div>
        </div> 
      </transition>
      </div>
    </div>
</template>

<script>

import items from '@/assets/data/navigation.js'
const OFFSET = 10
    export default {
        name: 'sideBar',
        data () {
            return {
                isPassive: true,
                items: items,
                showNavbar: true,
                scrolledNav: true,
                lastScrollPosition: 0,
                scrollValue: 0,
                transparent: false
            }
        },
        mounted () {
            this.lastScrollPosition = window.pageYOffset
            window.addEventListener('scroll', this.onScroll)
            const viewportMeta = document.createElement('meta')
            viewportMeta.name = 'viewport'
            viewportMeta.content = 'width=device-width, initial-scale=1'
            document.head.appendChild(viewportMeta)
        },

        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll () {
                if (window.pageYOffset < 0) {
                    return
                }
                if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
                    return 
                }
                this.showNavbar = window.pageYOffset < this.lastScrollPosition
                this.scrolledNav = window.pageYOffset < this.lastScrollPosition
                this.transparent = window.pageYOffset > 100
                this.lastScrollPosition = window.pageYOffset
            },
        }
    }
</script>



<style lang="scss">

.mobile-nav {
  height: 80px;
  z-index: 100;
  position: fixed;
  top: 0;
  transition: .4s ease-in-out;
  background-color: white;
  @media only screen and (min-width: 960px) {
    display: none;
  }
  .container {
    height: 100%;
    justify-content: center;
    align-items: center;
    .logo {
      img {
        height: 40px;
        margin-top: 8px;
      }
    }
    .open {
      width: 100%;
      height: 100%;
      float: right;
      z-index: 100 !important;
      display: flex;
      justify-content: flex-end;
      align-items: center;
  }
  }
  .nav-container {
    position: fixed;
    height: 130vh;
    top: 0 !important;
    left: 100%;
    width: 100% !important;
    background-color: white;
    z-index: 100;
    transition: .4s ease-in;
    transform: translateX(-100%);
    z-index: 200;
    .container {
      max-height: 100vh;
      .close {
        position: fixed;
        top: 28px;
        height: 56px;
        width: 40px;
        justify-content: flex-end;
        align-self: flex-end;
      }
      .mobile-links {
        display: flex; 
        justify-content: center;
        text-align: center;
        padding: 0;
        text-align: center;
        margin-top: -40px;
        width: 100%;
        .logo {
            svg {
                height: 64px;
                @media only screen and (max-width: 560px) {
                  
                }
              }
          }
          ul {
              margin-top: 32px;
              padding-left: 0;
              list-style-type: none;
          a {
            margin-top: 24px;
            display: flex;
            justify-content: center;
            text-decoration: none;
            font-size: 24px;
          }
        }
      }

    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}

.passive {
  opacity: 0;
  z-index: -1000;
  height: 0vh;
  transform: translateX(100%) !important;
  position: absolute;
}

.nuxt-link-exact-active {
  color: black ;
  font-weight: 800;
}


@media only screen and (max-width: 960px) {
    .mobile-nav {
        display: block;
    }
}

.colour {
    background-color: transparent;
}

.navigation.hidden-navbar {
  transform: translate3d(0, -80px, 0);
}

</style>
