<template>
    <div class="navigation full-width transition" :class="{'hidden-navbar': !showNavbar, colour: !transparent, scrolled: !scrolledNav}">
        <div class="container flex">
            <nuxt-link to="/" class="logo">
                <div>
                    <img src="https://ik.imagekit.io/alexborecky/Alena/Ent/logo-temp_sNeE9d9OC.png" alt="">
                </div>
            </nuxt-link>
            <ul class="flex center">
                <li
                    v-for="item in items" 
                    :key="item.link"
                >
                    <nuxt-link 
                        :to="item.link">
                        {{item.title}}
                        <div class="underline"></div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import items from '@/assets/data/navigation.js'
const OFFSET = 60
    export default {
        name: 'Navigation',
        data () {
            return {
                colorNav: false,
                showNavbar: true,
                scrolledNav: true,
                lastScrollPosition: 0,
                scrollValue: 0,
                transparent: false,
                items: items
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
            this.transparent = window.pageYOffset > 400
            this.lastScrollPosition = window.pageYOffset
            }
        }
    }
</script>

<style lang="scss" scoped>

.navigation {
    position: fixed;
    height: 80px;
    z-index: 1000 !important;
    top: 0;
    background-color: white;
    transition: .4s ease-in-out;
    .container {
        height: 100%;
        align-items: center;
        justify-content: space-between;
        .logo {
            img {
                max-height: 40px;
            }
            svg {
                transition: .2s ease-in-out;
                path {
                    fill: black;
                }
                &:hover {
                    opacity: .4;
                }
            }
        }
        ul {
            height: 100%;
            padding-left: 0;
            li {
                list-style: none;
                margin: 0 0 0 56px;
                a {
                    color: rgba($color: #000000, $alpha: .8);
                    font-family: 'Raleway';
                    transition: .2s ease-in-out;
                    letter-spacing: .4px;
                    &:hover {
                        color: rgba($color: black, $alpha: .4);
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 960px) {
        display: none;
    }
}

.colorNav {
    .container {
        .logo {
            svg {
                path {
                    fill: white;
                }
            }
        }
        ul {
            li {
                a {
                    color: white;
                }
            }
        }
    }
}

a.nuxt-link-exact-active {
    font-weight: 700 !important;
    color: rgba($color: #000000, $alpha: 1.0);
}

.colour {
    background-color: transparent;
}

.navigation.hidden-navbar {
  transform: translate3d(0, -120px, 0);
}

</style>