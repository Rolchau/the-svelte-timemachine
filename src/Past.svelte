<script>
  import { scene } from './scene-store.js';
  const flameSrc="assets/flame.gif";
  const constructionSrc="assets/under-construction.gif";
  const starsSrc="assets/stars.png";
</script>

<div class="wrapper" style="background: url({starsSrc}">
  <center class="center">
    <h2 class="header">It is 1999!</h2>
    <img width="100px"  src={constructionSrc} alt="This page is under construction" />
    <p style="background-color: black">Back then, I made something that would resemble a homepage. 80% of all homepages was made of tables and under construction images, and my own was no exception.</p>
    <p style="background-color: black">If you wanted it to be fancy, then you added animations with <b><code>&lt;marquee&gt;</code></b></p>
    <marquee>
      <b>Weeeeeee......that was cool!</b>
    </marquee>
        
    <table class="tablesRock">
      <tbody>
        <tr>
          <td><img width="100px" src={flameSrc} alt="Flames!"/></td>
          <td style="background-color: black">Tables was used for everything - especially layout for a complicated design.</td>
          <td><img width="100px" src={flameSrc} alt="Flames!"/></td>
        </tr>
        <tr>
          <td><img width="100px" src={flameSrc} alt="Flames!"/></td>
          <td style="background-color: black">The wow-factor on your homepage was measured off from how many animated GIF's you had inserted. Flames was a must have!</td>
          <td><img width="100px" src={flameSrc} alt="Flames!"/></td>
        </tr>
      </tbody>
    </table>
    <br/>
    <p>
      <a href="javascript:void(0)" on:click={() => scene.set(9)} style="color: red; font-size: 24px">Ok, seen enough! Let's get out of here</a>
    </p>

  </center>
</div>
<style>
  .wrapper { 
    color: cornsilk;
    background-color: black;
    padding: 30px;
    height: 100%;
  }

  .center { 
    font-size: 16px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

  }

  .header { 
    color: white;
    font-size: 30px;
  }  

  .tablesRock { 
    font-size: 16px;
    line-height: 1;
    margin-bottom: 0;
  }
  td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  img {
    margin-bottom: 0;
  }
</style>
