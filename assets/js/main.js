$.getJSON("./data/products.json", function (data) {
    data.map((product) => {
      $("#container-product").append(
        "<div class='col-md-3'>" +
          "<div class='card' style=' background: url(./assets/images/banner.jpg); background-size: cover; height: 350px;'>" +
          "<div class='card-body' style='text-align: center; position: relative; top: 40%'>" +
          "<a href='#' style='display: none' class='btn btn-secondary'>Go somewhere</a>" +
          "</div>" +
          "</div>" +
          "<div style='margin-top: 10px'> <p>" +
          product.productName +
          "</p> <div style='display:flex'><p style='padding-right:10px' class='text-danger'>$" +
          product.price +
          "</p><del>" +
          product.salePrice +
          "</del></div> </div></div>"
      );
    });
  });

  