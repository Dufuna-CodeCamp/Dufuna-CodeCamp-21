const productList = [
(Shoe {
productName:"Nike Running Shoe",
imageUrl: "https://www.mrporter.com/en-us/mens/product/nike-running/sport/running-shoes/air-zoom-terra-kiger-8-rubber-trimmed-mesh-trail-running-sneakers/1647597293734957?cm_mmc=PartnerizeAM-_-shopstyle-_-Comparison%2FReview-_-1101l510&utm_source=partnerize&utm_medium=affiliation&utm_campaign=xq_1101l510&utm_content=shopstyle&clickref=1101lwqaiHyg",
productPrice: `$165`,
}),

(ZoomPegasus {
productName:"Nike Air Zoom Pegasus",
imageUrl: "https://www.mrporter.com/en-us/mens/product/nike-running/sport/running-shoes/air-zoom-pegasus-39-rubber-trimmed-mesh-running-sneakers/43769801096765360?cm_mmc=PartnerizeAM-_-shopstyle-_-Comparison%2FReview-_-1101l510&utm_source=partnerize&utm_medium=affiliation&utm_campaign=xq_1101l510&utm_content=shopstyle&clickref=1101lwqaiWHw",
productPrice: `$98`,
}),

(AirHola {
productName: "Nike Running A.I.R Hola Lou Zoom",
imageUrl: "https://www.asos.com/us/nike-running/nike-running-air-hola-lou-zoom-fly-5-sneakers-in-multi/prd/202926236?irgwc=1&clickid=_f16utlo1b0kfbgfcr36ohzax9f2xcgy261r1siuc00&affid=25379&pubref=57486",
productPrice: `$170`,
}),
];

productlist.forEach(productlist => {
    document.write(
      `<h2>${productlist.productName}</h2> with ${productlist.imageUrl} is sold for <strong>${productlist.productPrice}</strong>`
    );
  })
