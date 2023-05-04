<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

</head>

<body>

  <form method="post" action="">
    <section id="step-1" class="form-step">

      <h2>What plan type can we help you with today</h2>

      <button type="click" onclick="nextStep()">Medicare Advantage</button>

      <button type="click" onclick="nextStep()">Medicare Supplement</button>

      <button type="click" onclick="nextStep()">Prescription Drug Plans</button>

      <button type="click" onclick="nextStep()">I'm Not Sure</button>

    </section>

    <section id="step-2" class="form-step" style="display: none">

      <h2>What is your full name?</h2>

      <label for="first-name"></label>
      <input type="text" id="first-name" name="name">

      <label for="last-name"></label>
      <input type="text" id="last-name" name="name">

      <button id="next-btn" type="button" onclick="nextStep()">Continue </button>
    </section>

    <section id="step-3" class="form-step"  style="display: none">

      <h2>What is your full name?</h2>

      <label for="first-name"></label>
      <input type="text" id="first-name" name="name">

      <label for="last-name"></label>
      <input type="text" id="last-name" name="name">

      <button id="next-btn" type="button" onclick="nextStep()">Continue </button>
    </section>

  </form>
  
</body>

</html>