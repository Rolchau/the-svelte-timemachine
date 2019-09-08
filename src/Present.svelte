<script>
  import { fly } from 'svelte/transition';
  const migSrc = 'assets/mig.jpg';
  const boligSrc = 'assets/bolig-beregneren.jpg';
  const quantSrc = 'assets/quant-app.jpg'
</script>

<div class="page" in:fly="{{duration: 300, y: 200, opacity: 0}}">
  <div class="lego-hero">
    <div class="lego-wrapper">
      <h1>Yes, it was terrible!</h1>
      <p>And I jumped on the Java train instead for a couple of years, but I never lost interest in web development. </p>
      <p>Around <a href="https://web.archive.org/web/20070711090643/http://www.rolchau.dk/about/index.html">2006</a> I had another go at it. At that time Firefox was the name of my browser, my code should pass the dreaded W3C validator and I hated IE6
        like everybody else, but very determined I put all my strength in learning frontend developement, and I fell very much in love with it. Haven't looked back since. 
      </p>
      <h2>
        Some references
      </h2>
      <p>
        Thank you for taking your time to get through this little time journey. You can find the code to the journey on my <a href="https://github.com/Rolchau/lego">github page</a>. It was made with <a href="https://www.gatsbyjs.org/">GatsbyJS</a> and React.
      </p>
      <p>Sadly, much of my work is behind closed doors at Jyskebank, but here are a few examples of what I have worked with:</p>
    </div>
  </div>
  <div class="reference-wrapper">
    <div class="reference-box">
      <h2>Quant Score - Vanilla ES6 webapp</h2>
      <p>I implemented the complete frontend part. Data is fetched with JSON from a Java backend.</p>
      <img src={quantSrc} class="reference-img" alt="Quant Web App example"/>
      <div class="flex-wrapper">
        <h4>Technology stack</h4>
        <ul>
          <li><a href="http://vanilla-js.com/">VanillaJS</a></li>
          <li>Webpack & Grunt</li>
          <li>Pug for template files</li>
          <li>SASS for CSS</li>
          <li>BEM for CSS structuring</li>
        </ul>
        <a href="https://jyske-bank.surge.sh/WebContent/resources/_examples/jyskebank-flex/50-quant.html">Example &raquo;</a>
      </div>
    </div>
    <div class="reference-box">
      <h2>Loan calculator - PreactJS webapp</h2>
      <p>I implemented the frontend together with a developer from DesignIt. Data is delivered by a JSP Servlet.</p>
      <img src={boligSrc} class="reference-img" alt="Boligberegner eksempel"/>
      <div class="flex-wrapper">
        <h4>Technology stack</h4>
        <ul>
          <li><a href="https://preactjs.com/">PreactJS</a></li>
          <li>Webpack & Grunt</li>
          <li>Pug for template files</li>
          <li>SASS for CSS</li>
          <li>BEM/Smacss for CSS structuring</li>
        </ul>
        <a href="https://www.jyskebank.dk/bolig/regn-paa-bolig/beregn-laan-til-ny-bolig">Example &raquo;</a>
      </div>
    </div>
  </div>
  <div class="lego-hero">
    <div class="lego-wrapper">
      <h1>Hoping to hear from you!</h1>
      <div class="about-wrapper">
        <dl>
          <dt><small>Phone</small></dt>
          <dd>21 93 21 79</dd>
          <dt><small>Email</small></dt>
          <dd>rolchau@gmail.com</dd>
        </dl>
        <img src={migSrc} class="about-img" alt="Tommy R. Mathiesen og his daughter Alva"/>
      </div>
      <p>Kind regards, Tommy Rolchau Mathiesen</p>
    </div>
  </div>
</div>

<style>
.page {
  color: #333;
  background-image: linear-gradient(rgba(0,0,0,0.71),rgba(0,0,0,0.14)),url(assets/code-bg.jpg);
  background-attachment: fixed;  
}

.lego-hero {
  background-color: white;
  box-shadow: 0 0 10px;
}

.lego-wrapper {
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}

.lego-wrapper *:first-child {
  margin-top: 1rem;
}

.reference-wrapper {
  max-width: 62rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.reference-wrapper h2 {
  margin-top: 0.66667rem;
  width: 100%;
}

.reference-box {
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  flex: 1 1 25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.reference-box img {
  width: 100%;
}

.reference-img {
  max-width: 20rem;
  border: 2px solid #efefef;
  align-self: flex-start;
  margin: 0 1rem 1rem 0;
}

.flex-wrapper h4 {
  margin-top: 0;
}

.about-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.about-img {
  width: 16.66rem;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  transform: rotate(2deg);
  border: 4px solid white;
  align-self: flex-start;
  margin-left: 1rem;
}
</style>