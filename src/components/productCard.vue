<template>
    <div class="product">
      <div class="product__image">
        <img src="@/assets/product.jpg" style=" border-radius: 5px; width: 100%;">
      </div>
      <div class="description">
        <div class="product__title">
          <h3>Горький Элит</h3>
        </div>
        <div class="info">
          <h4>3.25 руб</h4>
          <button class="add_cart">В корзину</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard"
  }
  </script>
  
  <style lang="scss" scoped>
  $base-background: rgb(255, 251, 247);
  $dark-background: #603e31;

  .add_cart{
    background-color: $dark-background;
    color: antiquewhite;
    font-weight: bold;
    border-radius: 5px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    align-items: center;
  }
  
  
  .product {
    margin: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
    background: white;
    border-radius: 15px;
    max-width: 300px;
    min-width: 300px;
    padding: 10px;
  
    h3 {
      margin: 0;
    }
  
    h4 {
      margin: 0;
    }
  }
  
  .description {
    h4 {
      font-weight: 500;
    }
    h3 {
      font-size: 20px;
      font-weight: 500;
    }
  }
  
  @media (max-width: 600px) {
    .product {
      margin: 5px;
      padding: 10px;
      min-width: 160px;
    }
    .description {
      h3 {
        font-size: 17px;
      }
    }
    .info {
      padding-top: 10px;
      font-size: 17px;
    }
  }
  </style>