function getData() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1');
    request.addEventListener('load', function() {
        let delivery = JSON.parse(request.responseText);
        delivery = delivery.productList;
        console.log(delivery);
        let listParent = document.querySelector('#list');
        let heroParent = document.querySelector('#hero');
        for (let i = 0; i < delivery.length; i++) {
            let section = document.createElement("section");





            section.onmouseover = function() {
                heroParent.innerHTML = "";

                //----Section 1/3 in hero//----
                let picBox = document.createElement("div");
                picBox.className = "picBox";
                let pic = document.createElement("img");
                pic.src = delivery[i].imageUrls.md;
                pic.className = "pic";
                picBox.appendChild(pic);
                //----Section 1/3 in hero//----

                //----Section 2/3 in hero//----
                let detailsBox = document.createElement("div");
                detailsBox.className = "detailsBox";

                let heroText = document.createElement("p");
                heroText.innerHTML = delivery[i].description;
                heroText.className = "heroText";

                let heroBullets = document.createElement("ul");
                heroBullets.innerHTML = 
                    "<li>" + "ENERGY STAR® qualified" + "</li>" +
                    "<li>" + "NSF® Certified Sanitary cycles" + "</li>" +
                    "<li>" + "FanFresh? option" + "</li>";
                heroBullets.className = "heroBullets";

                detailsBox.appendChild(heroText);
                detailsBox.appendChild(heroBullets);
                //----Section 2/3 in hero//----

                //----Section 3/3 in hero//----                
                let cartBox = document.createElement("div");
                cartBox.className = "cartBox";

                let cartButton = document.createElement("button");
                cartButton.innerHTML = "Add to Cart";
                cartButton.className = "cartButton";

                let cartPrice = document.createElement("p");
                cartPrice.innerHTML = "$" + delivery[i].pricing.price.retail;
                cartPrice.className = "cartPrice";

                cartBox.appendChild(cartButton);
                cartBox.appendChild(cartPrice);
                //----Section 3/3 in hero//----                

                heroParent.appendChild(picBox);
                heroParent.appendChild(detailsBox);
                heroParent.appendChild(cartBox);                
            }








            section.className = "productBox";

            // adds image to each section
            let picture = document.createElement("img");
            picture.src = delivery[i].imageUrls.sm;
            picture.className = "picture";
            section.appendChild(picture);

            // adds description to each section
            let description = document.createElement("p");
            description.innerHTML = delivery[i].description;
            description.className = "description";
            section.appendChild(description);

            // adds price to each section
            let cost = document.createElement("p");
            cost.innerHTML = "$" + delivery[i].pricing.price.retail;
            cost.className = "cost";
            section.appendChild(cost);

            let viewButton = document.createElement("p");
            viewButton.innerHTML = "View More";
            viewButton.className = "viewButton";
            section.appendChild(viewButton);

            listParent.appendChild(section);
        }
    });
    request.send();
}

window.addEventListener("load", function() {
    getData();
});