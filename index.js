const express = require("express"); //this imports the express package that was installed within your application
const exphbs = require("express-handlebars")
const app = express(); // this creates your express app object

//this function returns the HTML (with injected data) for every web page
const htmlTemplate = obj => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${obj.title}</title>
    </head>
    <body>
            <header>
                <h1>${obj.headingInfo}</h1>
            </header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/hotels">Hotels</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Sign up</a></li>
                </ul>
            </nav>
            <main>
                ${obj.HTML}
            </main>
            <footer>
            All rights reserved. Terms | Privacy | Site Map         
               </footer>
    </body>
</html>`;

}

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public")); //this will come before all other 

//Route for the Home Page
app.get("/", (req, res) => {

    const data = {
        title: `Home Page`,
        headingInfo: `Home Page`,
    };
});

app.get("/login", (req, res) => {
    //res.render("login",{ //we are calling login handlebars

    const data = {
        title: `Login`,
        headingInfo: `Login`,
        HTML: `
        <section>
            <form method="POST" action="/contact-us">
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required><br>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Create Password" name="psw" required><br>

    <button type="button" class="cancelbtn">Cancel</button>
    <button type="submit" class="signupbtn">Sign Up</button>

</form>
                
        </section>`
    };

    res.send(htmlTemplate(data));
});

app.get("/hotels", (req, res) => {
    title: "Hotels"

        const hotelsDB = [{
            hotelId: 101,
            imageUrl: `/img/hotel1.jpeg`,
            title: "Heart Lake Hotel",
            description: "Private pool house with amazing views",
            price: 150
        },
        {
            hotelId: 102,
            imageUrl: `/img/hotel2.jpeg`,
            title: "Park Regis Hotel",
            description: "Romentic 1-bed with stunning views",
            price: 250,
            rating: 4

        },
        {
            hotelId: 103,
            imageUrl: `/img/hotel3.jpeg`,
            title: "Redissan Hotel",
            description: "Classic hotel on the Royal Mile",
            price: 303,
            rating: 5
        },
        {
            hotelId: 104,
            imageUrl: `/img/hotel3.jpeg`,
            title: "Anantara Hotel",
            description: "Romentic 1-bed with stunning views",
            price: 200,
            rating: 3
        },
        {
            hotelId: 105,
            imageUrl: `/img/hotel1.jpeg`,
            title: "Hamilton Hotel",
            description: "Classic hotel on the Royal Mile",
            price: 100,
            rating: 5
        },
        {
            hotelId: 106,
            imageUrl: `/img/hotel2.jpeg`,
            title: "Ramada Hotel",
            description: "Private pool house with amazing views",
            price: 170,
            rating: 3
        }
    ]


    // hotelsDB.push({ title: 'XPS 13', description: `Our smallest 13-inch laptops feature a virtually 
    // borderless InfinityEdge display and up to 10th gen Intel® processors. 
    // Touch, silver, rose gold and frost options available
    // `, price: `1349.99` });

    // hotelsDB.push({ title: 'XPS 15', description: `Powerhouse performance with the latest processors and NVIDIA 
    // graphics paired with a stunning 4K Ultra HD display.

    // `, price: `1749.99` });

    // hotelsDB.push({ title: 'XPS 17', description: `XPS 17 is designed to keep you entertained for more than 9 hours 
    // with a 9-cell battery upgrade.`, price: `1949.99` });

    let htmlSnippet = ``;

    //pulls data from database and bill the html string that will be injected into the section
    for (let i = 0; i < hotelsDB.length; i++) {
        htmlSnippet +=
            ` <div>

                <h3>Product Title :${hotelsDB[i].title} </h3>
                <p>Description : ${hotelsDB[i].description} </p>
                <p>Price : ${hotelsDB[i].price} </p>
          </div>
        `;
    }

    const data = {

        title: `Hotels`,
        headingInfo: `Products`,
        HTML: `
        <section>
            ${htmlSnippet}
        </section>`
    };

    res.send(htmlTemplate(data));
});



const PORT = 3000;
//This creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT, () => {
    console.log(`Web Server Started`);
});