<script>
  import { scene } from './scene-store.js'
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function startTalking() {
    console.log('Started talking');
    setTimeout(() => {
      dispatch('done-talking');
      console.log('Dispatches done-talking...');
    }, 2000)
  }

  onMount(()=> {
    startTalking();
  });

  export let inside = true;
</script>

<div class="legoman" class:legoman--inside-screen="{inside}">
  <div class="legoman__hat"></div>
  <div class="legoman__head">
    <div class="legoman__left-eye"></div>
    <div class="legoman__right-eye"></div>
    <div class="legoman__mouth"></div>
  </div>
  <div class="legoman__neck"></div>
  <div class="legoman__shirt">
    <div class="legoman__left-arm">
      <div class="legoman__left-hand"></div>
    </div>
    <div class="legoman__right-arm">
      <div class="legoman__right-hand"></div>
    </div>
  </div>
  <div class="legoman__pants">
    <div class="legoman__left-leg"></div>
    <div class="legoman__right-leg"></div>
  </div>
</div>

<style>
  .legoman {
    position: absolute;
    top: calc(100% - 35px);
    left: 0;
    opacity: 1;
    transform: translateX(25%) translateY(-50%) scale(0.35);
    transform-origin: 0 0;
  }

  .legoman--inside-screen {
    top: calc(100% - 20px);
    left: 0;
    opacity: 0.6;
    transform: translateX(-50%) translateY(-50%) rotate(20deg) scale(0.35);
    transform-origin: 0 0;
    animation: legofigure-entry 2s cubic-bezier(0,0,0.3,1) 0.5s forwards;
  }

  .legoman__hat {
    width: 110px;
    height: 38px;
    margin-left: auto;
    margin-right: auto;
    background-color: #e8c802;
    border-radius: 61% 61% 0 0 / 31% 31% 0 0;
    background-image: linear-gradient(to right, #e8c802 23%, #feed85 30%, #e8c802 35%, #feed85 79%, #e8c802 100%);
    box-shadow: inset 0 -6px 13px 3px #d3b413;
  }
  .legoman__head {
    width: 230px;
    height: 200px;
    background-color: #e8c802;
    border-radius: 21%;
    position: relative;
    box-shadow: inset 0 0 60px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  .legoman__head:before {
    background-color: white;
    position: absolute;
    width: 100%;
    height: 24%;
    top: -15px;
    content: "";
    left: 0;
    opacity: 0.5;
    background-image: linear-gradient(white 29%, #e7c703 64%);
  }
  .legoman__head:after {
    background-color: #e8c802;
    position: absolute;
    width: 37px;
    height: 70%;
    top: 34px;
    content: "";
    left: 5%;
    border-radius: 50px;
    border-left: 11px solid white;
    opacity: 0.5;
  }
  .legoman__left-eye, .legoman__right-eye {
    background-color: black;
    position: absolute;
    top: 75px;
    width: 25px;
    height: 30px;
    left: 68px;
    border-radius: 50%;
  }
  .legoman__left-eye:after, .legoman__right-eye:after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 5px;
    left: 7px;
    border-radius: 50%;
    background-color: white;
  }

  .legoman__left-eye:before,
  .legoman__right-eye:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: #e8c802;
    right: -2px;
    height: 102%;
    z-index: 3;
    transform: scaleY(0);
    transform-origin: 0 0;
    animation: legofigure-blink 4s ease-in-out infinite;
  }

  .legoman__right-eye {
    left: 130px;
  }
  .legoman__mouth {
    position: absolute;
    bottom: 20%;
    left: 42%;
    transform: translateX(-50%) skewX(17deg) rotate(15deg);
    background-color: white;
    height: 30px;
    width: 90px;
    border: 5px solid black;
    border-top-color: transparent;
    border-radius: 0% 12% 130% 78% / 92% 115%;
  }
  .legoman__mouth:after {
    content: "";
    position: absolute;
    width: 125%;
    height: 100%;
    background-color: #e8c802;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    top: -14px;
    left: -14%;
    border: 5px solid transparent;
    border-bottom-color: black;
    transform: rotate(-1deg);
  }
  .legoman__mouth:before {
    content: "";
    position: absolute;
    width: 50%;
    height: 5px;
    background-color: black;
    position: absolute;
    top: 34%;
    left: -3px;
    width: 16px;
    height: 4px;
    border-radius: 0% 15% 96% 0%;
    transform: rotate(10deg);
  }
  .legoman__neck {
    height: 27px;
    background-color: #e7c703;
    width: 148px;
    background-image: linear-gradient(to right, #dab907 0%, #ffe126 50%, #dab907 100%);
    margin-left: auto;
    margin-right: auto;
    box-shadow: inset 0px 5px 15px 4px rgba(0, 0, 0, 0.1);
    z-index: 2;
    position: relative;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
    margin-bottom: 2px;
  }
  .legoman__shirt {
    width: 364px;
    border-bottom: 300px solid red;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    border-radius: 10px;
    position: relative;
  }
  .legoman__shirt:before {
    content: "";
    position: absolute;
    top: -10px;
    height: 10px;
    width: 100%;
    background-color: #ff3333;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .legoman__left-arm, .legoman__right-arm {
    position: absolute;
    background-color: #bda9a9;
    width: 81px;
    height: 179px;
    top: 0;
    left: -98px;
    border-radius: 89% 4% 15% 2% / 70% 5% 2% 27%;
    transform: rotate(11deg);
    border-right: 2px solid #990000;
    background-image: radial-gradient(circle at 10% 16%, rgba(255, 255, 255, 0.3) 0%, red 30%, transparent), linear-gradient(105deg, red 34%, #ffcccc 47%, red 54%, #990000 77%);
  }
  .legoman__left-arm::after, .legoman__right-arm::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 76px;
    background-color: red;
    top: 99%;
    left: 1px;
    background-image: linear-gradient(to right, red -8%, #ffcccc 14%, red 32%, #990000 77%);
    box-shadow: 0 -4px 7px -5px #990000;
  }
  .legoman__left-arm::before, .legoman__right-arm::before {
    position: absolute;
    background-color: #660000;
    width: 100%;
    height: 20px;
    top: calc(99% + 66px);
    content: "";
    border-radius: 50%;
    transform: rotateX(52deg);
    z-index: -1;
    border: 6px solid #990000;
    box-sizing: border-box;
  }

  .legoman__right-arm {
    left: auto;
    right: -98px;
    transform: rotateY(180deg) rotateZ(11deg);
  }

  .legoman--inside-screen .legoman__right-arm {
    animation: legofigure-wave 0.3s cubic-bezier(0,0,0.3,1) 1s;
    animation-iteration-count: 3;
  }

  .legoman__left-hand, .legoman__right-hand {
    position: absolute;
    background-color: #e8c802;
    left: 10%;
    width: 80%;
    height: 35px;
    top: calc(179px + 75px);
    z-index: 4;
    background-image: linear-gradient(to right, #dab907 13%, #ffe126 34%, #dab907 71%);
    box-shadow: inset 0 5px 8px -1px rgba(0, 0, 0, 0.4);
  }
  .legoman__left-hand::after, .legoman__right-hand::after {
    content: "";
    position: absolute;
    top: 83%;
    left: -45%;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 20px solid #e0c624;
    border-bottom-color: transparent;
    box-shadow: inset 6px 3px 0 -4px #f1e290, inset 13px 13px 0 -4px #a69116, 15px -7px 0 -6px #a69116;
  }
  .legoman__pants {
    background-color: #3974f5;
    width: 92%;
    height: 40px;
    margin: 0 auto;
    position: relative;
  }
  .legoman__pants:after {
    content: "";
    background-color: #3974f5;
    position: absolute;
    width: 9%;
    left: 50%;
    transform: translateX(-50%);
    top: 100%;
    height: 120px;
  }
  .legoman__left-leg, .legoman__right-leg {
    position: absolute;
    width: 45%;
    background-color: #3974f5;
    height: 355px;
    top: 100%;
    background-image: linear-gradient(to bottom, #353e91 0%, #1e7bf5 6%, #6dafff 15%, #2c71f8 34%, #4383ff 34%, #5ba2ff 82%, #436da5 84%, #1e7bf5 84%, #5fa7ff 85%);
  }
  .legoman__right-leg {
    right: 0;
  }

  @keyframes legofigure-entry {
    0% {
      transform: translateX(-50%) translateY(-50%) rotate(20deg) scale(0.35);
    }
    10% {
      transform: translateX(0%) translateY(-50%) rotate(20deg) scale(0.35);
    }
    90% {
      transform: translateX(0%) translateY(-50%) rotate(20deg) scale(0.35);
    }
    91% {
      transform: translateX(0%) translateY(-50%) rotate(0deg) scale(0.35);
    }
    100% {
      transform: translateX(10%) translateY(-50%) rotate(0deg) scale(0.35);
    }
  }

  @keyframes legofigure-wave {
    0% {
      transform: translateY(-56px) rotateY(0) rotateZ(11deg) scale(-1)
    }
    50% {
      transform: translateY(-56px) rotateY(0) rotateZ(-2deg) scale(-1)
    }
    100% {
      transform: translateY(-56px) rotateY(0) rotateZ(11deg) scale(-1)
    }  
  }

  @keyframes legofigure-blink {
    0% {
      transform: scaleY(0);
    }
    10% {
      transform: scaleY(0);
    }
    15% {
      transform: scaleY(0.9);
    }
    18% {
      transform: scaleY(0);
    }
  }  
</style>