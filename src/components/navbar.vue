<template>
    <header>
        <div class="navbar-fixed-top">
            <div class="content">
                <div class="brand">
                    <img src="../assets/sparrow.png" alt="Логотип" width="100">
                    <h1 >Шоколадная Фабрика Могилева им. Григория</h1>           
                </div>
            </div>
            <hr>
            
            <div class="content nli">
                <nav >
                    <ul class="nav mynav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name :'Mainpage'}"> <span>О нас</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name :'visit'}"><span>Посетить фабрику</span> </router-link>
                        </li>
                        <li class="nav-item dropdown" >
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Купить наш шоколад</a>
                            <ul class="dropdown-menu" style="margin-top: 35px;">
                                <li> <router-link class="dropdown-item" :to="{name :'catalogue'}">Онлайн</router-link></li>
                                <li> <router-link class="dropdown-item" :to="{name :'flagman'}">Фирменный магазин</router-link></li>
                                <li> <router-link class="dropdown-item" :to="{name :'Patner'}">Магазины-партнеры</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="content_nav">
                
                <button class="navbar__hamburger" :class="{'navbar__hamburger--toggled': isOpenBurger}"
                @click="this.isOpenBurger = !this.isOpenBurger" aria-label="menu" aria-controls="navigation">
                <span class="navbar__hamburger-top" :class="{'navbar__hamburger-top--toggled': isOpenBurger}"></span>
                <span class="navbar__hamburger-middle"
                :class="{'navbar__hamburger-middle--toggled': isOpenBurger}"></span>
                <span class="navbar__hamburger-bottom"
                :class="{'navbar__hamburger-bottom--toggled': isOpenBurger}"></span>
                </button>
                <transition name="hidden-navbar">
                <div :class="{'navbar__categories': isOpenBurger, 'navbar__categories__hidden': !isOpenBurger}">
                <a class="navbar__menuitem" role="menuitem" :class="{'navbar__menuitem--toggled': isOpenBurger}"><router-link  @click="this.isOpenBurger = false" class="nav-link" :to="{name :'Mainpage'}"> <span>О нас</span></router-link></a>
                <hr>
                <a class="navbar__menuitem" role="menuitem"
                :class="{'navbar__menuitem--toggled': isOpenBurger}"><router-link class="dropdown-item" @click="this.isOpenBurger = false" :to="{name :'Patner'}">Магазины-партнеры</router-link></a>
                <a class="navbar__menuitem" role="menuitem"
                :class="{'navbar__menuitem--toggled': isOpenBurger}"><router-link class="dropdown-item" @click="this.isOpenBurger = false" :to="{name :'flagman'}">Фирменный магазин</router-link></a>
                <a class="navbar__menuitem" role="menuitem"
                :class="{'navbar__menuitem--toggled': isOpenBurger}"><router-link class="dropdown-item" @click="this.isOpenBurger = false" :to="{name :'catalogue'}">Онлайн магазин</router-link></a>
                <hr>
                <a class="navbar__menuitem" role="menuitem"
                :class="{'navbar__menuitem--toggled': isOpenBurger}"><router-link class="nav-link" :to="{name :'visit'}" @click="this.isOpenBurger = false"><span>Посетить фабрику</span> </router-link></a>
                
            </div>
          </transition>
        
            </div>
        <hr style="width: 100%;">
        </div>
        
    </header>

</template>

<script>
export default{

    name: "navigation",
      data() {
        return {
            isOpenBurger: false,
            isVisibleNavbar: true,
        }
     },

    onScroll() {
      if (window.pageYOffset > 200) {
        this.isVisibleNavbar = false;
        this.isVisibleUpButton = true;
      } else {
        this.isVisibleNavbar = true;
        this.isVisibleUpButton = false;
      }
    },
  
  mounted() {
    setInterval(this.nextSliderSale, 5000);
    window.addEventListener('scroll', this.onScroll);
  },
}

</script>

<style lang="scss">
    .nav-item{
        display: flex;
        flex-direction: column;
    }
    .mynav{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        --bs-nav-link-color:  #4b3f2c;
        --bs-nav-link-hover-color:  #ceb997;
    }
    .content_nav{
        max-width: 1500px;
        display: flex;
        flex-direction: column;
    }
    .content{
        max-width: 1500px;
    }
    .navbar-fixed-top{
        //max-width: 1500px;
        margin: 0 auto;
       // background-color: rgb(255, 251, 247);
        background-color: rgb(255, 246, 237);
    hr{
        background:#4b3f2c;
        margin: 1px;
    }
    .brand{
        display: flex;
        justify-content: space-evenly;
        img {
            height: 50px;
            width: 50px;
        }
        align-items: center;
    }
    h1{
        font-family: 'Lobster', cursive;
        color: #9d8660;
    }

    
    .dropdown-menu{
        border-radius: 0;
        //background-color: rgb(255, 251, 247);
        background-color: rgb(255, 246, 237);
        margin-top: 35px;
    }
    .nav-link{
        display: block;
        cursor: pointer;
        color: #4b3f2c;
        :hover{
            color: #ceb997;
        } 
        :active{
            color: #ceb997;
        }
        :visited{
            color:#ceb997;
        }
    
        --bs-nav-link-active-color: #4b3f2c;
    }
    .dropdown:hover .dropdown-menu{
        margin-top: 35px;
        display: block;
        margin: 0;
        padding: 0;
    }
    .dropdown-item{
        cursor: pointer;
        :hover{
            color: #ceb997;
        } 
        :active{
            color: #ceb997;
        }
        :visited{
            color:#ceb997;
        }
        --bs-dropdown-link-hover-bg: rgba(62, 48, 48, 0);
        --bs-dropdown-link-active-bg:  rgba(62, 48, 48, 0);
        --bs-dropdown-link-hover-color:  #ceb997;
        --bs-link-hover-color:  #ceb997;
        --bs-link-visited-color:  #ceb997;

    }
    .nav{
        font-family: "Open Sans", serif;
        text-transform: uppercase;
        --bs-nav-link-hover-color:#ceb997;
    }
   button{
    width: 100%;
    margin: 0 auto;
   }
    .navbar__hamburger {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        float: right;
        width: 1em;
        height: 1em;
        padding: 0;
        cursor: pointer;
        transition: transform .2s ease-in-out;
        border: 0 none;
        background: transparent;
        margin-bottom: 20px;
        
    }
    .navbar__hamburger-top,
  .navbar__hamburger-middle,
  .navbar__hamburger-bottom {
    display: block;
    width: 20px;
    height: .2em;
    margin-bottom: .2em;
    transition: transform .2s ease-in-out;
    border-radius: .05em;
    background: #4b3f2c;
  }
  .navbar__hamburger-top,
  .navbar__hamburger-bottom {
    content: '';
  }
  .navbar__hamburger-top--toggled {
    transform: translateY(.4em) rotate(135deg);
  }
  .navbar__hamburger-middle--toggled {
    transform: scale(0);
  }
  .navbar__hamburger-bottom--toggled {
    transform: translateY(-.4em) rotate(-135deg);
  }
  .navbar__logo,
  .navbar__menuitem {
    padding: 15px 15px 15px 0px;
    border-left: 5px solid transparent;
    color: #4b3f2c;
    text-decoration: none;
    font-size: 17px;
  }
  .navbar__menuitem {
    display: none;
  }
  .navbar__menuitem--toggled {
   // background-color:#ceb997;
    background-color: rgb(255, 246, 237);
    display: block;
  }
  .navbar__menuitem:hover {
    color: #ceb997;
  }
      .hidden-navbar-enter-active, .hidden-navbar-leave-active {
        transition: opacity .5s;
      }
      .hidden-navbar-enter, .hidden-navbar-leave-to {
        opacity: 0;
      }

      .navbar__categories {
            margin-top: 10px;
            position: relative;
            z-index: 2;
            overflow: hidden;
      }
      .navbar__categories__hidden {
        display: none;
      }
      @media (min-width: 600px) {
        .navbar__menuitem {
          display: inline-block;
          //background-color: #2196F3;
        }
        .navbar__menuitem:hover {
          background-color: #2196F3;
          box-shadow: inset 0 -5px 0 0 #FFF;
          border-left-color: transparent;
        }
        .navbar__hamburger {
          display: none;
        }
      }
      @media (max-width: 600px) {
        .nli{
            display: none;
        }
        .navbar__profile {
          width: 25px;
          height: 25px;
        }
        .navbar__cart {
          width: 25px;
          height: 25px;
        }
    }
}   
</style>