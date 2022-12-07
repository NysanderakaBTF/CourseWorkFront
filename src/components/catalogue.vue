<template>
      <div class="container">
        <div class="products__article">
          <div class="products-catalog__filter">
            <div class="filter__category">
              <h4 style="margin-top: 0px;">Категория</h4>
              <ul>
                <li><a href="#" class="catsel">Плитки</a></li>
                <li><a href="#" class="catsel">Печенье</a></li>
                <li><a href="#" class="catsel">Конфеты</a></li>
                <li><a href="#" class="catsel">Ручные изделия</a></li>
              </ul>
            </div>
            <div class="price-range" style="border-top: 1px solid grey;">
              <h4>Цена</h4>
              <div class="price-range">
                <div class="from">
                  <p class="price-label">От</p>
                  <input class="left" type="number">
                </div>
                <div class="from">
                  <p class="price-label">До</p>
                  <input class="right" type="number">
                </div>
              </div>
            </div>

            <div class="sort" style="border-top: 1px solid grey;">
                <h4>Сортировать по:</h4>
                <ul>
                    <li>
                        <input type="radio" id="sortPrice" name="contact" >
                        <label for="saleChoice1">Цене</label>
                      </li>
                      <li>
                        <input type="radio" id="sortPop" name="contact" >
                        <label for="saleChoice2">Популярности</label>
                      </li>
                      <li>
                        <input type="radio" id="sortRate" name="contact">
                        <label for="saleChoice3">Отзывам</label>
                      </li>
                </ul>
            </div>
            <div class="cart" style="border-top: 1px solid grey;">
                <button class="cart_b"><router-link class="link" :to="{name : 'cart'}" @click="send()">Перейти к заказу</router-link></button>
            </div>
          </div>
          <div class="priducrGridp">
            <productCard v-for="i in (1, 2, 3 ,4, 5, 6 ,7 ,8 ,9 ,10 ,11 ,12)" :key="i" class="product__grid card"/>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import productCard from "@/components/productCard";

  export default {
    name: "catalogue",
    components: {productCard},
    methods: {
        send() {
            console.log('I must send selected items');
        },
        
    }
    
  }
  </script>
  
  <style lang="scss" scoped>

    .cart{
        display: flex;
        justify-content: center
    }
    .cart_b,.link{
        background-color:  #603e31;;
        color: antiquewhite;
        font-weight: bold;
        border-radius: 5px;
        width: 88%;
        text-decoration: none;
    }
    .container{
        max-width: 1500px;
        margin-bottom: 5%;
    }
    .catsel{
        a{
            text-align: left;
        }
        &:hover{
            color: #603e31;
        }
    }
  li{
    justify-content: left;
    margin-left: 0;
  }
  .left,
  .right {
    width: 90%;
    font-size: 15px;
    text-indent: 5px;
    height: 35px;
    margin-left: 0;
  }
  
  .price-label {
    margin: 0px 0px 2px 0px;
    font-size: 15px;
    font-weight: 200;
  }
  
  .from {
    width: 50%;
  }
  
  .price-range {
    display: flex;
    flex-wrap:wrap ;
  }
  
  h4 {
    font-size: 20px;
    margin: 10px 0px 10px 0px;
    width: 100%;
  }
  
  .price-range {
    margin: 10px 0px;
  }
  
  
  .products-catalog__filter {
    margin-top: 8px;
    padding: 15px;
    border-radius: 15px;
    position: sticky;
    top: 10px;
  }
  
  .product__grid {
    width: 25% !important;
    max-width: none;
    min-width: 250px;
    margin: 1% 1% 0px 0px;
  }
  
  .products__article {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  
  .products-catalog__filter {
    min-width: 280px;
    background: #ffffff;
  
    ul > li > a {
      text-decoration: none;
      color: #999999;
    }
  }

  .priducrGridp {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    justify-content: space-between;
    &:hover .card{
        opacity: 0.5;
        filter: blur(5px);
        scale: 0.9;
    }
    .card:hover{
      opacity: 1;
      filter: blur(0);
      scale: 1.1;
    }
    .card:hover::before{
      opacity: 1;
    }
  }
  
  
  .products-catalog__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  ul {
    margin: 0px;
    list-style-type: none;
    padding: 0px;
  }
  
  
  ul > li {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  
  input[type=radio] {
    width: 15px;
    height: 15px;
  }
  
  
  @media screen and (max-width: 1087px) {
    .product__grid {
      width: 49% !important;
      max-width: none;
      min-width: 200px;
    }
  }
  
  @media screen and (max-width: 800px) {
    .product__grid {
      width: 48% !important;
      max-width: 400px;
      min-width: 200px;
      margin: 1% auto;
    }
    .products-catalog__filter {
        position: inherit;
        margin-bottom: 10px;
    }
    .products__article {
        flex-wrap: wrap;
        flex-direction: column;
    }
  }
  
  @media screen and (max-width: 600px) {
    .priducrGridp {
      margin-left: 0px;
    }
    .products-catalog__filter {
      position: inherit;
      margin-bottom: 10px;
    }
  
    .products__article {
      flex-wrap: wrap;
    }
  
    .product__grid {
      width: 100%;
      max-width: none;
      min-width: 150px;
      margin: 1% auto;
  
    }
  
    .products-catalog__filter {
      width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .product__grid {
        width: 98% !important;
        max-width: 400px;
        min-width: 200px;
        margin: 1% auto;
      }
  }
  @keyframes lines {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
  </style>