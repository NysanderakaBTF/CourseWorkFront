<template>
    <div class="navbar-fixed-top">
        <div class="brand">
            <img src="../assets/sparrow.png" alt="Логотип" width="100">
            <h1 >Шоколадная Фабрика Могилева им. Григория</h1>           
        </div>
        <hr>
        <nav >
            <ul class="nav mynav">
                <li class="nav-item">
                    <rourer-link class="nav-link" :to="{name :'Mainpage'}"> О нас</rourer-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Продукция</a>
                    <ul class="dropdown-menu">
                        <li> <rourer-link class="dropdown-item" :to="{name :'Mainpage'}">Шоколадные плитки</rourer-link></li>
                        <li><rourer-link class="dropdown-item" :to="{name :'Mainpage'}">Сиропы</rourer-link></li>
                        <li> <rourer-link class="dropdown-item" :to="{name :'Mainpage'}">Другое</rourer-link></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <rourer-link class="nav-link" :to="{name :'Mainpage'}">Посетить фабрику</rourer-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Купить наш шоколад</a>
                    <ul class="dropdown-menu">
                        <li> <rourer-link class="dropdown-item" :to="{name :'Mainpage'}">Онлайн</rourer-link></li>
                        <li> <rourer-link class="dropdown-item" :to="{name :'Mainpage'}">Фирменные магазины</rourer-link></li>
                        <li> <rourer-link class="dropdown-item" :to="{name :'Mainpage'}">Магазины-партнеры</rourer-link></li>
                    </ul>
                </li>
            </ul>
        </nav>
       <hr>
    </div>
</template>

<script>
import Mainpage from './mainpage.vue';
export default{
    name: "navigation"
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');
    .navbar-fixed-top{
        max-width: 1500px;
        margin: 0 auto;
    }
    hr{
        background:#4b3f2c;
        margin: 1px;
    }
    .brand{
        display: flex;
        justify-content: space-evenly;
    }
    h1{
        font-family: 'Lobster', cursive;
        color: #9d8660;
    }
    .mynav{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        --bs-nav-link-color:  #4b3f2c
        --bs-nav-link-hover-color:  #ceb997;
    }
    .dropdown-menu{
        border-radius: 0;
    }
    .nav-link{
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
        display: block;
        margin: 0;
        padding: 0;
        box-shadow: 20px;
    }
    .dropdown-item{
        cursor: pointer;
        &:hover{
            color: #ceb997;
        } 
        &:active{
            color: #ceb997;
        }
        &:visited{
            color:#ceb997;
        }
        --bs-dropdown-link-hover-bg: rgba(62, 48, 48, 0);
        --bs-dropdown-link-active-bg:  rgba(62, 48, 48, 0);
        --bs-dropdown-link-hover-color:  #ceb997;

    }
    nav{
        font-family: "Open Sans", serif;
        text-transform: uppercase;
    }
    .nav-link{
        display: block;
        &:hover{
           color: #ceb997;
        }
    }
</style>