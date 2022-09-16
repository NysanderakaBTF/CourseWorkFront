<template>
    <div id="#maindiv">
        <Navbar/>
        <body>
            Lorem5000!
        </body>
        <Foot/>
    </div>
</template>

<script>
import Navbar from './navbar.vue';
import Foot from './foot.vue';
export default{
    name: "visit",
    components: {
    Navbar,
    Foot
}
}
var w = window.innerWidth;
</script>

<style lang="scss">
    *{
        max-width: 1500px;
        margin: 0 auto;
    }
    #maindiv{
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans';
        background-color: rgb(255, 246, 237);
        color:rgb(81, 51, 46);
    }
.text{
    p{
        background-color: transparent;
        font-weight: bolder;
        margin-left: 10%;
        margin-right: 10%;
    }
    h2{background-color: transparent;text-align: center;font-weight: bolder}
    .now{
        margin-left: 10%;
        margin-right: 10%;
        font-size: large;
        font-weight: bold;
    }

    background-color: rgba(256 , 256,256,0.5);
    backdrop-filter: blur(1px);
    
}
.ourHistory{
    background-image: url('../assets/Mahilo.jpg');
    background-color: transparent;
    background-size: cover;
    
}
.row{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 10px;
    max-width: 1500px;
}
.lefttext{
    margin:0;
    padding: 0;
    width: 60%;  

}
.imgright{
    width: 30%;
    margin:0;
    padding: 0;    
}
.wgood{
    text-align: center;
    background-color: #603e31;
    color: beige;
}
h3{
    text-align: center;
}
@media screen and (max-width: 1000px) {
    #maindiv{
        flex-wrap: wrap;
        flex-direction: column;
    }  
    .row{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .now{
        margin: 0;
    }
    .imgright{
        margin: 0;
        justify-self: center;
        padding: 0;
        margin-left: 2%;
        margin-right: 2%;
        width: min-content;
    }
    .lefttext{
        width: auto;
        margin:2%;
        padding: 0;
             
    }
    .lefttext{
        text-align: justify;
    }
}
@media screen and (max-width: 400px) {
    #maindiv{
        flex-wrap: wrap;
        flex-direction: column;
    }  
    .row{
        flex-wrap: wrap;
        flex-direction: column;
        margin: 0;
    }
    .now{
        margin: 0;
    }
    .imgright img{
        width: 95vw;
        height :min-content
    }
    .lefttext{
        width: auto;
        margin:2%;
        padding: 0;
             
    }
    .lefttext{
        text-align: justify;
    }
}
</style>