var productDetails = [
    {
        name: 'Lapotop',
        price: 2500,
        discountPercent: 10,
        manufacturer: 'Dell',
        sellerName: 'Indian Electronics',
        image: 'https://m.media-amazon.com/images/I/51ovMTXv9RL._AC_UF226,226_FMjpg_.jpg'
    },
    {
        name: 'Bus',
        price: 2500,
        discountPercent: 10,
        manufacturer: 'Dell',
        sellerName: 'Indian Electronics',
        image: 'https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Bus_186x116._SY116_CB618818544_.jpg'
    },
    {
        name: 'Pendrive',
        price: 2500,
        discountPercent: 10,
        manufacturer: 'Dell',
        sellerName: 'Indian Electronics',
        image: 'https://m.media-amazon.com/images/I/21Zm6-TFZEL._AC_SY200_.jpg'
    },
    {
        name: 'House',
        price: 2500,
        discountPercent: 10,
        manufacturer: 'Dell',
        sellerName: 'Indian Electronics',
        image: 'https://m.media-amazon.com/images/I/81uJOXAfODL._AC_SY200_.jpg'
    },
    {
        name: 'Lapotop',
        price: 2500,
        discountPercent: 10,
        manufacturer: 'Dell',
        sellerName: 'Indian Electronics',
        image: 'https://m.media-amazon.com/images/I/51ovMTXv9RL._AC_UF226,226_FMjpg_.jpg'
    },
    {
        name: 'Dinning Table',
        price: 2500,
        discountPercent: 10,
        manufacturer: 'Dell',
        sellerName: 'Indian Electronics',
        image: 'https://m.media-amazon.com/images/I/71Ar15Ki1jL._AC_SY200_.jpg'
    },
    {
        name: 'Lapotop',
        price: 2500,
        discountPercent: 10,
        manufacturer: 'Dell',
        sellerName: 'Indian Electronics',
        image: 'https://m.media-amazon.com/images/I/51ovMTXv9RL._AC_UF226,226_FMjpg_.jpg'
    }
];
var displayProductDetails = (productDetails) => {
    var mainLi = document.createElement("li");
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class","productDetails");

    var li1 = document.createElement("li");
    li1.innerHTML = "Product Name :"+ productDetails.name;
    ulTag.append(li1);
    
    var li2 = document.createElement("li");
    li2.innerHTML = "Product Price :"+ productDetails.price;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerHTML = "Product discountPercent :"+ productDetails.discountPercent;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = "Product manufacturer :"+ productDetails.manufacturer;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    li5.innerHTML = "Product sellerName :"+ productDetails.sellerName;
    ulTag.append(li5);

    var li6 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src",productDetails.image);
    li6.append(imgTag);
    ulTag.append(li6);

    mainLi.append(ulTag);

    document.querySelector(".container").append(mainLi);
}
for(var i = 0; i < productDetails.length; i++ ){
    displayProductDetails(productDetails[i]);
}