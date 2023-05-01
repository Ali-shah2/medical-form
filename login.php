<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    
    <form id="multi-step-form" method="post">
        <div class="step">
            <h2>Step 1: What plan type can we help you with today?</h2>
            <button type="button" class="step-btn">Medicare Advantage</button>
            <button type="button" class="step-btn">Medicare Supplement</button>
            <button type="button" class="step-btn">Prescription Drug Plans</button>
            <button type="button" class="step-btn">I'm Not Sure</button>
        </div>

        <div class="step">
            <h2>Step 2: Enter your personal details</h2>
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name">
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name">
            <button type="button" class="prev-btn">Previous</button>
            <button type="button" class="next-btn">Next</button>
        </div>

        <div class="step">
            <h2>Step 3: Enter your contact details</h2>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone">
            <button type="button" class="prev-btn">Previous</button>
            <button type="button" class="next-btn">Next</button>
        </div>

        <div class="step">
            <h2>Step 4: Review and submit</h2>
            <p>First Name: <span id="first-name-review"></span></p>
            <p>Last Name: <span id="last-name-review"></span></p>
            <p>Email: <span id="email-review"></span></p>
            <p>Phone: <span id="phone-review"></span></p>
            <button type="button" class="prev-btn">Previous</button>
            <button type="submit" class="submit-btn">Submit</button>
        </div>
    </form>

    <script>
        const form = document.getElementById("multi-step-form");
        const stepBtns = form.querySelectorAll(".step-btn");
        const prevBtns

    </script>
</body>

</html>