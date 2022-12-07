<template>
    <div class="product">
      <div class="content">
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
    justify-content: center;
    place-content: center;
    place-items: center;
    overflow: hidden;
    padding: 10px;
    transition: 0.5s;
  
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
  .product .content {
    position: relative;
    z-index: 10;
    color: white;
    padding: 10px 30px 0 30px;
    text-align: center;
    overflow: hidden;
  }
  .product{
    transition: 0.5s;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
    &::after{
      content: '';
      z-index: 9;
      position: absolute;
      background-image: linear-gradient(to right,#d1d4c0, #bfcee3);
      inset: 5px;
      border-radius: 10px;
    }
    &::before{
      content: '';
      position: absolute;
      width: 100px;
      background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
      height: 180%;
      animation: lines 3s linear infinite;
      transition: all 0.5s linear;
      opacity: 0;
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