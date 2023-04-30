var pData = {
    name: 'Lapotop',
    price: 2500,
    discountPercent: 10,
    manufacturer: 'Mi-TV',
    sellerName: 'Indian Electronics',
    image: 'https://m.media-amazon.com/images/I/51ovMTXv9RL._AC_UF226,226_FMjpg_.jpg'
};

var displayProductDetails = () => {
    var mainLi = document.createElement("li");
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", 'productDetails');
    // console.log(ulTag);
    var li1 = document.createElement("li");
    li1.innerHTML = ' Product Name: ' + pData.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerHTML = ' Product Price: $ '+ pData.price;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerHTML = 'discountPercent: '+ pData.discountPercent;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = 'Manufacturer: '+ pData.manufacturer;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    li5.innerHTML = 'sellerName: '+ pData.sellerName;
    ulTag.append(li5);

    var li6 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", pData.image);
    li6.append(imgTag);
    ulTag.append(li6);

    mainLi.append(ulTag);
    document.querySelector(".container").append(mainLi);
    // console.log(ulTag);
    
}

displayProductDetails();