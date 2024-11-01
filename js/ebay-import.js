let hostname = "https://wooshark.website",
  formsToSave = "";
var items = "";
let savedCategories = [],
  generalPreferences = items
    ? items.generalPreferences
    : {
        importSalePriceGeneral: !1,
        importDescriptionGeneral: !0,
        importReviewsGeneral: !0,
        importVariationsGeneral: !0,
        reviewsPerPage: 10,
        setMaximimProductStock: 0,
        importShippingCost: !1
      },
  images = [];

function prepareeBayVariations(e) {
  var t = { variations: [], NameValueList: [] };
  let a = jQuery("#applyPriceFormulawhileImporting").prop("checked");
  return (
    e.VariationSpecificsSet.NameValueList.forEach(function(e, a) {
      t.NameValueList.push({
        name: e.Name.toLowerCase()
          .replace(/ /g, "-")
          .replace("'", "-"),
        values: e.Value,
        variation: !0,
        visible: !0
      });
    }),
    e.Variation.forEach(function(e, r) {
      if (r && r < 100) {
        var o = [];
        e.VariationSpecifics.NameValueList.forEach(function(e, t) {
          o.push({
            name: e.Name.toLowerCase()
              .replace(/ /g, "-")
              .replace("'", "-"),
            value: e.Value[0],
            image: ""
          });
        }),
          t.variations.push({
            identifier: e.SKU,
            SKU: e.SKU,
            availQuantity: e.Quantity,
            salePrice:
              a && e.StartPrice
                ? calculateAppliedPrice(e.StartPrice.Value.toString())
                : e.StartPrice && e.StartPrice.Value
                ? e.StartPrice.Value.toString()
                : "",
            regularPrice:
              a && e.StartPrice
                ? calculateAppliedPrice(e.StartPrice.Value.toString())
                : e.StartPrice && e.StartPrice.Value
                ? e.StartPrice.Value.toString()
                : "",
            attributesVariations: o,
            weight: ""
          });
      }
    }),
    t
  );
}

function prepareSpecifications(e, t) {
  t &&
    t.NameValueList &&
    t.NameValueList.forEach(function(t) {
      e.NameValueList.push({
        name: t.Name,
        visible: !0,
        variation: !1,
        value: t.Value
      });
    });
}
jQuery(document).on("click", "#ebayimportToShopBulk", function(e) {
  prepareModal();
  var t = "";
  try {
    (t = jQuery(this)
      .parents(".card")
      .find("#sku")[0].innerText),
      console.log("------", t),
      t && buildEbayProduct(t);
  } catch (e) {
    jQuery(".ebayImportToS").each(function(e, t) {
      console.log("----- un - disabling 2"), jQuery(t).attr("disabled", !1);
    }),
      displayToast(
        "cannot retrieve product id, please try again, if the issue persists, please contact wooebayimporter@gmail.com",
        "red"
      );
  }
}),
  jQuery(document).on("click", "#seacheBayProductsButton", function(e) {
    searcheBayProducts(1);
  });
var isNotDraw = !1;

function getAlreadyImportedProducts(e) {
  jQuery.ajax({
    url: wooshark_params.ajaxurl,
    type: "POST",
    dataType: "JSON",
    data: { action: "get-already-imported-products_for_ebay", listOfSkus: e },
    success: function(e) {
      let t = e;
      t && t.length && displayAlreadyImportedIcon(t),
        console.log("****response", e);
    },
    error: function(e) {
      e.responseText, console.log("****err", e), stopLoading();
    },
    complete: function() {
      console.log("SSMEerr"), stopLoading();
    }
  });
}

function displayPAginationForSearchByKeyword(e, t) {
  var a = Math.round(e / 40);
  a > 17 && (a = 17);
  for (var r = 1; r < a; r++)
    r == t
      ? jQuery(
          ' <li style="color:red" id="page-' +
            r +
            '" class="ebay-page-item"><a style="color:red" class="page-link">' +
            r +
            "</a></li>"
        ).appendTo("#pagination")
      : jQuery(
          ' <li id="page-' +
            r +
            '" class="ebay-page-item"><a class="page-link">' +
            r +
            "</a></li>"
        ).appendTo("#pagination");
}

function displayAlreadyImportedIcon(e) {
  if (e && e.length) {
    let a = e.map(function(e) {
        return e.sku;
      }),
      r = jQuery("#ebay-product-search-container .card");
    for (var t = 0; t < r.length; t++) {
      let e = jQuery(r[t]).find("#sku")[0].innerText;
      if (a.indexOf(e) > -1) {
        jQuery(
          '<div><a  style="width:100%" id="alreadyImported" class=" btn btn-warning">Already imported</a></div>'
        ).appendTo(jQuery(r[t]));
      }
    }
  }
}

function searcheBayProducts(e) {
  let searchBySellername = jQuery("#searchBySellername").val();

  var t = jQuery('input[name="language"]:checked')[0]
    ? jQuery('input[name="language"]:checked')[0].value
    : "EBAY-US";
  jQuery("#pagination").empty(),
    jQuery("#pagination").show(),
    jQuery("#product-search-container").empty();
  let a = jQuery("#searchKeyword").val(),
    r = jQuery('input[name="sort"]:checked')[0]
      ? jQuery('input[name="sort"]:checked')[0].value
      : "",
    o = jQuery("#minPrice").val(),
    i = jQuery("#maxPrice").val(),
    n = jQuery("#isFreeShipping")[0].checked;
  a || (a = "adidas"),
    a
      ? ((xmlhttp = new XMLHttpRequest()),
        (xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && 200 === xmlhttp.status)
            try {
              let a = JSON.parse(xmlhttp.response);
              data = a.data;
              let r = parseInt(a.totalResults);
              console.log(data);
              try {
                var t = data;
                if (
                  (t.forEach(function(e) {
                    jQuery(
                      '<div class="card text-center" style="flex: 1 1 20%; margin:30px; padding:50px">  <div class="card-body"><h5 class="card-title"> ' +
                        e.title.substring(0, 70) +
                        '</h5><img src="' +
                        e.image +
                        '" width="150"  height="150"></img><div>Price: <p class="card-text" ">' +
                        e.price +
                        '</div></p>Sku: <p class="card-text" id="sku" ">' +
                        e.id +
                        "</p><div><div> <h1>Shipping cost</h1>" +
                        e.shippingInfo +
                        "</div><div> <h1>Seller name</h1>" +
                        e.sellerInfo +
                        "</div><div> <h1>Location</h1>" +
                        e.location +
                        '</div><div><a  style="width:80%" id="ebayimportToShopBulk" class="ebayImportToS btn btn-primary">Import to shop</a></div><div><a  style="width:80%; margin-top:5px"" id="addToWaitingList" class=" disabled btn btn-secondary">Add to waiting list (premuim)</a></div><div><a target="_blank" style="width:80%; margin-top:5px" href="' +
                        e.productURl +
                        '" class="btn btn-primary">Product url</a></div></div></div></div>'
                    ).appendTo("#product-search-container");
                  }),
                  displayPAginationForSearchByKeyword(r, e),
                  jQuery(".loader2").css({ display: "none" }),
                  t && t.length)
                )
                  getAlreadyImportedProducts(
                    t.map(function(e) {
                      return e.id;
                    })
                  );
              } catch (e) {
                console.log("------ error ", e),
                  displayToast("Empty result for this search keyword", "red");
              }
            } catch (e) {}
        }),
        xmlhttp.open("POST", hostname + ":8002/searchEbayProductsByName", !0),
        xmlhttp.setRequestHeader("Content-Type", "application/json"),
        xmlhttp.send(
          JSON.stringify({
            searchKeyword: a,
            globalId: t,
            pageNo: e,
            isFreeShipping: n,
            minPrice: o,
            maxPrice: i,
            sortOrder: r,
            searchBySellername: searchBySellername
          })
        ))
      : displayToast("Search keyword cannot be empty", "red");
}

function importeBayProducts(e) {
  var t = new XMLHttpRequest();
  t.onreadystatechange = function() {
    handleServerResponseebay(t, !0);
  };
  t.open("POST", hostname + ":8002/wordpress", !0),
    t.setRequestHeader("Content-Type", "application/json"),
    t.send(
      JSON.stringify({
        aliExpressProduct: e,
        isPluginWordpress: !0,
        isVariationImage: !1,
        isPublish: !0,
        clientWebsite: website,
        clientKey: key_client,
        clientSecretKey: sec_client
      })
    );
}

function handleServerResponseebay(e, t) {
  if (4 == e.readyState) {
    jQuery(".loader2").css({ display: "none" });
    var a = e.status;
    if (200 === a) {
      if (e.response)
        try {
          (r = JSON.parse(e.response)) && r.data;
          displayToast("Product imported successfully", "green"),
            incrementAllowedImport(),
            jQuery(".loader2").css({ display: "none" });
        } catch (e) {
          displayToast("exception during import", "red"),
            jQuery(".loader2").css({ display: "none" });
        }
    } else if (0 == a)
      displayToast(
        "Error establishing connection to server This can be caused by 1- Firewall block or filtering 2- An installed browser extension is mucking things",
        "red"
      ),
        jQuery(".loader2").css({ display: "none" }),
        jQuery(".ebayImportToS").each(function(e, t) {
          console.log("----- un - disabling"), jQuery(t).attr("disabled", !1);
        });
    else if (500 == a)
      displayToast(
        "The server encountered an unexpected condition which prevented it from fulfilling the request, please try again or inform us by email wooebayimporter@gmail.com",
        "red"
      ),
        jQuery(".loader2").css({ display: "none" }),
        jQuery(".ebayImportToS").each(function(e, t) {
          console.log("----- un - disabling"), jQuery(t).attr("disabled", !1);
        });
    else if (413 == a)
      displayToast(
        "The server is refusing to process a request because the request entity is larger than the server is willing or able to process. The server MAY close the connection to prevent the client from continuing the request.",
        "red"
      ),
        jQuery(".loader2").css({ display: "none" }),
        jQuery(".ebayImportToS").each(function(e, t) {
          console.log("----- un - disabling"), jQuery(t).attr("disabled", !1);
        });
    else if (504 == a)
      displayToast(
        "Gateway Timeout Error, the server, acting as a gateway, timed out waiting for another server to respond",
        "red"
      ),
        jQuery(".loader2").css({ display: "none" }),
        jQuery(".ebayImportToS").each(function(e, t) {
          console.log("----- un - disabling"), jQuery(t).attr("disabled", !1);
        });
    else if (
      (jQuery(".loader2").css({ display: "none" }),
      jQuery(".ebayImportToS").each(function(e, t) {
        console.log("----- un - disabling"), jQuery(t).attr("disabled", !1);
      }),
      e.response)
    )
      try {
        var r;
        displayToast((r = JSON.parse(e.response)) ? r.data : "", "red");
      } catch (e) {
        displayToast("error", "red");
      }
    jQuery(".loader2").css({ display: "none" }),
      jQuery(".ebayImportToS").each(function(e, t) {
        console.log("----- un - disabling"), jQuery(t).attr("disabled", !1);
      });
  }
}

function getCurrentTotalImportItemsValuesebay() {
  var e = localStorage.getItem("totalImportItemseBay");
  return e ? parseInt(e) : 1;
}

function incrementAllowedImport() {
  var e = getCurrentTotalImportItemsValuesebay() + 1;
  localStorage.setItem("totalImportItemseBay", e),
    jQuery("#remaining").text(
      "Imported products: " + localStorage.getItem("totalImportItemseBay") || 1
    );
}

function getEbayProductDetailsByApi(e, t) {
  var a = jQuery('input[name="language"]:checked')[0]
      ? jQuery('input[name="language"]:checked')[0].value
      : "EBAY-US",
    r = new XMLHttpRequest();
  (r.onreadystatechange = function() {
    if (4 == r.readyState)
      if (200 === r.status) {
        var e = JSON.parse(r.response);
        e.variations, e.currentPrice, e.description, e.type;
        t(e);
      } else
        displayToast(
          "Error during eBay api call, please contact wooebayimporter@gmail.com subject: eBay Api call failed"
        );
  }),
    r.open("POST", hostname + ":8002/ebayVariations", !0),
    r.setRequestHeader("Content-Type", "application/json"),
    r.send(JSON.stringify({ productId: e, globlId: a }));
}

function getSalePrice(e) {
  jQuery("#customPrice").val(e);
}

function getRegularPrice(e) {
  jQuery("#customSalePrice").val(e);
}

function getQuantity(e) {
  jQuery("#quantityEbay").val(e);
}

function getSku(e) {
  if (e) {
    e.Value;
    jQuery("#simpleSku");
  }
}
jQuery(document).on("click", ".ebay-page-item", function(e) {
  var t = 1;
  try {
    t = parseInt(jQuery(this)[0].innerText);
  } catch (e) {
    (t = 1),
      displayToast(
        "error while index selection, please contact wooshark, wooebayimporter@gmail.com",
        "red"
      );
  }
  searcheBayProducts(t);
});
var quill = "";

function calculateAppliedPrice(e) {
  var t = (e = e.toString().replace(",", ""));
  if (formsToSave && formsToSave.length) {
    var a = {};
    if (
      (formsToSave.forEach(function(t) {
        t.min < parseFloat(e) && t.max > parseFloat(e) && (a = t);
      }),
      a)
    ) {
      var r = a.multiply || 1,
        o = math.eval(r),
        i = a.addition || 0,
        n = math.eval(i);
      jQuery(".formulaContent").text(
        "Applied Formula = original price [*] (" + r + ") [+]" + i
      ),
        jQuery(".formulatexcontainer").show(),
        (t =
          parseFloat(e) +
          (parseFloat(e) * parseFloat(o)) / 100 +
          parseFloat(n));
    }
  }
  return t ? ((t = Number(t).toFixed(2)), parseFloat(t)) : parseFloat(t);
}

function applyPriceFormulaDefault() {
  var e = jQuery("#table-variations tbody tr"),
    t = jQuery("#table-variations thead tr")[0].cells.length - 6;
  e.each(function(e, a) {
    a.cells[t + 1].textContent = calculateAppliedPrice(
      a.cells[t + 1].textContent
    );
  }),
    e.each(function(e, a) {
      a.cells[t + 2].textContent = calculateAppliedPrice(
        a.cells[t + 2].textContent
      );
    });
}

function getHtmlDescription(e) {
  (descriptionContentFromUrl = e),
    jQuery("#descriptionContent").html(descriptionContentFromUrl);
  quill = new Quill("#editor", {
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ size: ["small", !1, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, !1] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"]
      ]
    },
    theme: "snow"
  });
  const t = Quill.import("formats/image"),
    a = Quill.import("parchment");
  quill &&
    quill.root &&
    quill.root.addEventListener("click", e => {
      let r = a.find(e.target);
      r instanceof t && quill.setSelection(r.offset(quill.scroll), 1, "user");
    });
}

function getVariations(e, t) {
  e &&
    e.length &&
    (e.forEach(function(e) {
      var a = "";
      console.log("//***//**", typeof e.VariationSpecifics),
        e &&
          e.VariationSpecifics &&
          e.VariationSpecifics.NameValueList &&
          e.VariationSpecifics.NameValueList.forEach(function(e, r) {
            if (t) {
              var o = t[0].VariationSpecificPictureSet,
                i = "";
              o.forEach(function(t) {
                t.VariationSpecificValue == e.Value[0] && (i = t.PictureURL[0]);
              }),
                e.Name &&
                  0 == r &&
                  (i
                    ? (a =
                        a +
                        '<td><img height="50px" width="50px" src="' +
                        i +
                        '"></td>')
                    : (a += "<td></td>"));
            } else r || (a += "<td></td>");
            a =
              a +
              '<td contenteditable name="' +
              e.Name +
              '">' +
              e.Value +
              "</td>";
          }),
        (a =
          a +
          "<td contenteditable>" +
          e.Quantity +
          "</td><td contenteditable>" +
          e.StartPrice.Value +
          "</td><td contenteditable>" +
          e.StartPrice.Value +
          '</td><td><button id="removeVariation" class="btn btn-danger">X</button></td><td contenteditable>' +
          e.SKU +
          "</td><td contenteditable>" +
          e.weight +
          '</td><td style="display:none">' +
          e.identifier +
          "</td>"),
        jQuery("#table-variations tbody").append(jQuery("<tr>" + a + "</tr>")),
        jQuery("#table-variations tr td[contenteditable]").css({
          border: "1px solid #51a7e8",
          "box-shadow":
            "inset 0 1px 2px rgba(0,0,0,0.075), 0 0 5px rgba(81,167,232,0.5)"
        });
    }),
    applyPriceFormulaDefault());
}

function getItemSpecific(e) {
  e &&
    e.NameValueList &&
    e.NameValueList.length &&
    (jQuery("#table-specific tbody tr").remove(),
    jQuery("#table-specific thead tr").remove(),
    e.NameValueList.forEach(function(e) {
      e.outerText;
      var t = "<td contenteditable>" + e.Name + "</td>",
        a = "<td contenteditable>" + e.Value + "</td>";
      jQuery("#table-specific tbody").append(
        jQuery(
          "<tr>" +
            t +
            a +
            '<td><button id="removeAttribute" class="btn btn-danger">X</btton><td></tr>'
        )
      );
    }));
}

function getAttributes(e) {
  if (e) {
    jQuery("#table-attributes tbody tr").remove(),
      jQuery("#table-variations thead tr").remove(),
      jQuery("#table-variations tbody tr").remove();
    var t = e.NameValueList,
      a = "",
      r = "";
    t &&
      t.length &&
      (t.forEach(function(e) {
        e.Name &&
          ((a =
            "<td contenteditable>" +
            e.Name +
            "</td><td><span contenteditable> " +
            e.Value +
            "</span></td>"),
          (r =
            r +
            '<td contenteditable name="' +
            e.Name +
            '">' +
            e.Name +
            "</td>")),
          jQuery("#table-attributes tbody").append(
            jQuery(
              "<tr>" +
                a +
                '<td><button id="removeAttribute" class="btn btn-danger">X</btton><td></tr>'
            )
          );
      }),
      jQuery("#table-variations thead").append(
        jQuery(
          "<tr><td>Image</td>" +
            r +
            "<td>quantity</td><td>Price</td><td>Sale price</td><td>Remove</td><td>sku</td><td>weight</td></tr>"
        )
      ));
  }
}

function getTitle(e) {
  jQuery("#customProductTitle").val(e);
}
let currentProductId = "";

function fillTheFormEbay(e, t) {
  jQuery(".loader").remove();
  jQuery("head")
    .find("title")
    .text();
  let a = jQuery("#textToBeReplaced").val(),
    r = jQuery("#textToReplace").val();
  var o = new RegExp(a, "g");
  let i = e.title,
    n = e.description;
  a && r && ((i = e.title.replace(o, r)), (n = e.description.replace(o, r))),
    jQuery("#simpleQuantity").val(e.quantity),
    getTitle(i),
    getHtmlDescription(n),
    getImages(e.images),
    getItemSpecific(e.specifications),
    (currentProductId = t),
    jQuery("#customProductCategory").empty(),
    savedCategories &&
      savedCategories.length &&
      savedCategories.forEach(function(e, t) {
        (items =
          '<div class="checkbox"><label><input type="checkbox" value="' +
          e.term_id +
          '"/>' +
          e.name +
          "</label>"),
          jQuery("#customProductCategory").append(jQuery(items));
      }),
    "simple" == e.type
      ? (getSalePrice(calculateAppliedPrice(e.currentPrice)),
        getRegularPrice(calculateAppliedPrice(e.currentPrice)),
        getQuantity(e.quantity),
        getSku(e.productId),
        jQuery("#simpleSku").val(t),
        jQuery('[href="#menu5"]')
          .closest("li")
          .hide(),
        jQuery("#no-variations").show(),
        jQuery("#applyPriceFormula").hide(),
        jQuery("#applyPriceFormulaRegularPrice").hide(),
        jQuery("#importSalePricecheckbox").hide(),
        jQuery("#applyCharmPricingConainer").hide(),
        jQuery("#priceContainer").show(),
        jQuery("#skuContainer").show(),
        jQuery("#productType").text("Simple Product"))
      : e &&
        e.variations &&
        e.variations.Variation &&
        (getAttributes(e.variations.VariationSpecificsSet),
        getVariations(e.variations.Variation, e.variations.Pictures),
        jQuery("#applyPriceFormula").show(),
        jQuery("#applyPriceFormulaRegularPrice").show(),
        jQuery("#importSalePricecheckbox").show(),
        jQuery("#applyCharmPricingConainer").show(),
        jQuery("#priceContainer").hide(),
        jQuery("#skuContainer").hide(),
        jQuery("#productWeightContainer").hide(),
        jQuery("#productType").text("Variable Product"),
        jQuery("#no-variations").hide(),
        e &&
          e.variations &&
          e.variations.length > 100 &&
          displayToast(
            "This product has more " +
              variations.length +
              " variations, only the first 100 variations will be imported",
            "orange"
          ));
}

function prepareModal() {
  jQuery("#myModaleBay").remove(),
    jQuery("#importModaleBay").remove(),
    jQuery(
      '<button type="button" id="importModaleBay" style="display: none; position:relative" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModaleBay">Import To Shop</button><div class="modal fade" id="myModaleBay" role="dialog" data-backdrop="false" data-dismiss="modal"><div class="modal-dialog"><div class="modal-content" style="width:170%; left:-25%"><div class="modal-header"><button  class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Product customization <span style="color:red" id="productType"></span>  <span style="color:red" id="currencyReturned"> <span></h4> </div><div class="modal-body"> <ul id="tabs" class="nav nav-tabs"><li class="active">    <a data-toggle="tab" href="#home">General</a></li><li >   <a data-toggle="tab" href="#menu1">Description</a></li><li >   <a data-toggle="tab" href="#menu3">Gallery</a></li><li > <a data-toggle="tab" href="#menu5">Variations</a></li><li > <a data-toggle="tab" href="#menu6">Specific attributes</a></li><li > <a data-toggle="tab" href="#menu7">Tags</a></li><li >   <a data-toggle="tab" href="#menu4">Reviews</a></li>     </ul><div class="tab-content"><div id="home" class="tab-pane fade in active">  <div class="form-group" id="priceContainer" style="display:none">  <div class="form-group"> <h5 style="color:brown" for="price">Regular Price: <span style="color:red" id="formulaContent"><span></h5>  </div><input style="display:none" id="simpleQuantity"/> <input style="width:97%" id="customPrice" type="number" class="form-control" id="price">  <div class="form-group"> <h5 style="color:brown" for="price">Sale Price: <span style="color:red" id="formulaContent"><span></h5>  </div> <input style="width:97%" id="customSalePrice" type="number" class="form-control" id="price"><button  id="setFormulaAliexpress" class="btn btn-primary" style="width:100%; margin-top:5px"> Set Formula</button>  </div>  <div class="form-group">       <h5 style="color:brown" for="title">custom Title:</h5>       <input id="customProductTitle" type="text" placeholder="custom title, if empty original title will be displayed" class="form-control" id="title"> </div>  <div class="form-group"  id="skuContainer" style="display:none">  <h5  style="color:brown"  for="title">Sku  <small> (Optional) </small>   </h5>  <input  style ="width: 100%;padding: 12px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; margin-top: 6px; margin-bottom: 16px; resize: vertical;" type="text" placeholder="Sku attribute (optional)" class="form-control" id="simpleSku"> </div>  <div class="form-group" id="productWeightContainer">       <h5  style="color:brown" for="title">Product weight  <small> (Optional) </small> </h5>       <input id="productWeight" type="text" placeholder="product weight" class="form-control" id="title"> </div> <div class="form-group">  <h5  style="color:brown" for="title"> Short Description <small> (Optional) </small> </h5>   <textarea  id="shortDescription" class="form-control" rows="2" id="comment" placeholder="Short description"></textarea> </div><div class="checkbox" ><label><input id="isPublish" type="checkbox" name="remember"> Publish (checked = publish  | unchecked = draft)</label> </div><div class="checkbox" ><label><input id="isFeatured" type="checkbox" name="remember"> Featured product <small>Featuring products on your website is a great way to show your best selling or popular products from your store</small></label> </div><div class="checkbox" ><label><input id="showCategories" type="checkbox" name="remember"> Show categories</label> </div><div class="form-group" id="categoriesContainer"><div class="panel panel-default"> <div class="panel-heading">Select Categories</div> <div id="customProductCategory" style="height:150px; overflow-y:scroll" class="panel-body"> </div> </div> </div>  </div><div id="menu1" class="tab-pane fade in"><div class="form-group" ><div class="checkbox" ><label><input id="removePicture" type="checkbox" name="remember"> Remove Pictures </label> </div><div class="checkbox" ><label><input id="removeDescription" type="checkbox" name="remember"> Remove description </label> </div><div id="editor"><div id="descriptionContent"> </div> </div> </div>  </div><div id="menu3" class="tab-pane fade in"><div class="checkbox" > </div><div id="galleryPicture" style="overflow-y:scroll;height:500px"> </div>  </div><div id="menu4" class="tab-pane fade in"><div id="customReviews" style="overflow-y:scroll;height:500px"><button class="btn btn-primary" id="addReview" style="width:100%;margin-top:10px"> Add Review</button><table id="table-reviews" class="table table-striped"><thead>  <tr>    <th>Review</th>    <th>Username</th>    <th>Date creation</th>    <th>Rating</th>    <th>Remove</th>  </tr> </thead><tbody></tbody></table></div></div><div id="menu5" class="tab-pane fade in"><div id="no-variations" style="text-align:center; display:none; padding:20px; margin:30px; background-color:beige"><span style=" text-align:center">This is a simple product, no variations can be defined</span></div> <h5 class="formulatexcontainer" for="price" style="background-color:beige; padding:15px; margin:20px;  text-align:center"> <span class="formulaContent">No formula defined yet<span></h5><div class="checkbox" id="applyCharmPricingConainer" style="display:none" ><label><input style="opacity:inherit" id="applyCharmPricing" type="checkbox" name="remember"> Apply charm pricing 00  <small>( Example 2.34 ==> 3.00) </small> </label><div></div><label><input style="opacity:inherit" id="applyCharmPricing99" type="checkbox" name="remember"> Apply charm pricing 99  <small>(Example 2.34 ==> 2.99) </small> </label><div><label><input style="opacity:inherit;" id="importVariationImages" type="checkbox" name="remember"> Import images variations  <small style="color:red;"> note that this can increment drastically the time to import the product </small> </label></div> </div><div style="display:flex" > <input style="flex: 1 1  100px; width:50%;  margin: 5px" id="globalRegularPriceValue" placeholder="Apply Regular price for all variations" type="number" class="form-control" ><button style="flex: 1 1  100px; margin: 5px" class="btn btn-primary" id="globalRegularPrice"> Apply</button> </div><div style="display:flex" > <input style="flex: 1 1  100px; width:50%;  margin: 5px" id="globalSalePriceValue" placeholder="Apply Sale price for all variations"  type="number" class="form-control" ><button style="flex: 1 1  100px; margin: 5px" class="btn btn-primary" id="globalSalePrice"> Apply</button> </div><div style="display:flex" > <input style="flex: 1 1  100px; width:50%;  margin: 5px" id="addShippingPriceValue" placeholder="Add shipping price"  type="number" class="form-control" ><button style="flex: 1 1  100px; margin: 5px" class="btn btn-primary" id="addShippingPrice"> Apply</button> </div><div style="height:400px; overflow-y:scroll"> <table id="table-variations" style="margin-top:20px" class="table table-striped"><thead></thead><tbody></tbody></table> </div><button id="displayAdvancedVariations" style="width:100%" class="btn btn-primary"> Edit Attributes </button><small> <u> Note: </u> Any modification of the attributes values on the variations table (such as color and size, etc..) need to be reflected on the attribute table below (click edit Attributes). the value must be available on the list of possible values on the table below. use a semi colon to add a new value</small> <table id="table-attributes" style="display:none; margin-top:20px" class="table table-striped"><thead> <tr> <th>name</th> <th>values</th> <th>Remove this from all variations</th> </tr></thead><tbody></tbody></table> </div><div id="menu6" class="tab-pane fade in"><button class="btn btn-primary" id="addSpecific" style="width:100%"> Add specification</button> <table id="table-specific" style="margin-top:20px" class="table table-striped"><thead> <tr> <th>property</th> <th>values</th> <th>Remove</th> </tr></thead><tbody></tbody></table> </div><div id="menu7" class="tab-pane fade in"><label> Add Tag to product</label><input  id="tagInput" type="text" class="form-control" /><button class="btn btn-primary" id="addTagToProduct" style="width:100%"> Add tags</button><div id="tagInputDisplayed" style="color:red"></div> </div><div id="advanced" class="tab-pane fade in"> <div class="form-group" style="margin-top:5px">  <h5  style="color:brown" for="title"> Tags <small> (Optional) </small> </h5>   <textarea  id="tags" class="form-control" rows="2" id="comment" placeholder="Place tags separated by commas"></textarea> </div> <div style="margin-top:5px">  <h5  style="color:brown" for="title"> Sale price (Optional) </small> </h5> <input style="width:97%" id="salePrice" type="number" class="form-control" id="price"> </div> <div style="margin-top:5px">  <h5  style="color:brown" for="title"> Sale start date </small> </h5> <input  id="saleStartDate" type="date" class="form-control" id="price"> </div> <div style="margin-top:5px">  <h5  style="color:brown" for="title"> Sale end date </small> </h5> <input  id="saleEndDate" type="date" class="form-control" id="price"> </div> </div>  <div class="modal-footer">     <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>     <button type="button" id="totoButton" class="btn btn-primary" data-dismiss="modal">Import</button> </div>  </div>  </div> </div>'
    ).appendTo(jQuery("#modal-container"));
}
let currentEbayProductUrl = "";

function getREviewsFRomEbayOfficialApi(e) {
  var t = new XMLHttpRequest();
  (t.onreadystatechange = function() {
    if (4 == t.readyState && 200 === t.status) {
      var e = JSON.parse(t.response);
      console.log("------ddd---", e);
    }
  }),
    t.open("POST", hostname + ":8002/getREviewsFRomEbayOfficialApi", !0),
    t.setRequestHeader("Content-Type", "application/json"),
    t.send(JSON.stringify({ productId: e }));
}

function buildEbayProduct(e) {
  alreadyImportedProduct < 45
    ? (jQuery(".loader2").css({
        display: "block",
        position: "fixed",
        "z-index": 9999,
        top: "50px",
        right: "50px",
        "border-radius": "35px",
        "background-color": "black"
      }),
      getREviewsFRomEbayOfficialApi(e),
      getEbayProductDetailsByApi(e, function(t) {
        t && t.title
          ? (jQuery("#importModaleBay").click(),
            stopLoading(),
            fillTheFormEbay(t, e),
            (currentEbayProductUrl = t.productUrl))
          : t && t.data && t.data[0] && t.data[0].ErrorCode
          ? (displayToast(
              "Product id not valid, please make sure you introduce a valid product id",
              "red"
            ),
            jQuery(".loader2").css({ display: "none" }))
          : (jQuery(".importToS").each(function(e, t) {
              console.log("----- un - disabling"),
                jQuery(t).attr("disabled", !1);
            }),
            jQuery(".loader2").css({ display: "none" }),
            displayToast("cannot get product deails", "red"));
      }))
    : (jQuery(".importToS").each(function(e, t) {
        console.log("----- un - disabling"), jQuery(t).attr("disabled", !1);
      }),
      jQuery(".loader2").css({ display: "none" }),
      displayToast(
        "You have reached the maximum number of products to import using the free version. please upgrade to pro version or wait the next month",
        "red"
      ),
      setTimeout(function() {
        window.open("https://www.wooshark.com/ebay");
      }, 3e3));
}

function getImages(e) {
  e &&
    e.length &&
    ((images = e),
    jQuery("#galleryPicture").empty(),
    images.forEach(function(e) {
      jQuery(
        '<div><button type="button" class="btn btn-primary" id="removeImage" ><i style="font-size:15px ; margin:5px">Remove Image</i></button><img  src=' +
          e +
          " /><div>"
      ).appendTo(jQuery("#galleryPicture"));
    }));
}

function getCurrentTotalImportItemsValues() {
  var e = localStorage.getItem("totalImportItems");
  return e ? parseInt(e) : 1;
}
jQuery(document).on("click", "#goToExtension", function(e) {
  window.open("https://www.wooshark.com/eBay");
}),
  jQuery(document).on("click", "#close-1", function(e) {
    jQuery("#section-1").hide();
  }),
  jQuery(document).on("click", "#close-2", function(e) {
    jQuery("#section-2").hide();
  }),
  jQuery(document).on("click", "#importToShopBulk", function(e) {
    (productId = jQuery(this)
      .parents(".card")
      .find("#sku")[0].innerText),
      productId
        ? importProductGlobally(productId)
        : displayToast("Cannot get product sku", "red");
  }),
  jQuery(document).on("click", ".product-page-item", function(e) {
    jQuery("#product-pagination").empty(),
      jQuery("#product-pagination").show(),
      jQuery(".loader2").css({
        display: "block",
        position: "fixed",
        "z-index": 9999,
        top: "50px",
        right: "50px",
        "border-radius": "35px",
        "background-color": "green"
      });
    var t = 1;
    try {
      (t = parseInt(jQuery(this)[0].innerText)),
        displayPaginationSection(totalproductsCounts, t),
        getAllProducts(t);
    } catch (e) {
      (t = 1),
        displayToast(
          "error while index selection, please contact wooshark, wooebayimporter@gmail.com",
          "red"
        ),
        jQuery(".loader2").css({ display: "none" });
    }
  }),
  jQuery(document).on("click", ".page-item", function(e) {
    var t = 1;
    try {
      t = parseInt(jQuery(this)[0].innerText);
    } catch (e) {
      (t = 1),
        displayToast(
          "error while index selection, please contact wooshark, wooebayimporter@gmail.com",
          "red"
        );
    }
    searchProducts(t);
  });
var index = 0;

function displayPaginationSection(e, t) {
  let a = Math.ceil(e / 20);
  for (var r = 1; r < a + 1; r++)
    r == t
      ? jQuery(
          ' <li style="color:red" id="product-page-' +
            r +
            '" class="product-page-item"><a style="color:red" class="page-link">' +
            r +
            "</a></li>"
        ).appendTo("#product-pagination")
      : jQuery(
          ' <li id="product-page-' +
            r +
            '" class="product-page-item"><a class="page-link">' +
            r +
            "</a></li>"
        ).appendTo("#product-pagination");
  jQuery('.nav-item a[id="pills-connect-products"]').html(
    'products <span class="badge badge-light">' + e + "</span>"
  );
}

function displayToast(e, t) {
  jQuery.toast({
    text: e,
    bgColor: "grey",
    textColor: t,
    hideAfter: 5e3,
    stack: 5,
    textAlign: "left",
    position: "bottom-right"
  });
}

function startLoading(e) {
  e || (e = "loader2"),
    jQuery("." + e).css({
      display: "block",
      position: "fixed",
      "z-index": 9999,
      top: "50px",
      right: "50px",
      "border-radius": "35px",
      "background-color": "black"
    });
}

function stopLoading(e) {
  e || (e = "loader2"), jQuery("." + e).css({ display: "none" });
}

function getAllProducts(e) {
  jQuery.ajax({
    url: wooshark_params.ajaxurl,
    type: "POST",
    dataType: "JSON",
    data: { action: "get_products_for_ebay", paged: e },
    success: function(e) {
      if ((console.log("----response", e), e)) {
        var t = jQuery("#products-wooshark");
        t.find("tbody tr").remove(),
          e.forEach(function(e, a) {
            0;
            t.append(
              "<tr><td ><img width='80px' height='80px' src=" +
                e.image +
                "></img></td><td>" +
                e.sku +
                "</td><td>" +
                e.id +
                "</td> <td>" +
                e.title.substring(0, 50) +
                "</td><td><button class='btn btn-primary' ><a style='color:white' href=" +
                e.productUrl +
                "  target='_blank'> Original product url </a></button></td><td><button class='btn btn-primary' style='width:100%' id='sync-product-stock-and-price'><a style='color:white'  target='_blank'> Update product stock and price</a></button></td><td><button class='btn btn-success' id='insert-product-reviews' style='width:100%'><a style='color:white'  data-toggle='modal' data-target='#myModalReviews'> Insert Reviews </a></button></td><td style='text-align:center'> - </td></tr>"
            );
          });
      }
    },
    error: function(e) {
      console.log("****err", e),
        displayToast(e.responseText, "red"),
        stopLoading();
    },
    complete: function() {
      console.log("SSMEerr"), stopLoading();
    }
  });
}
jQuery(document).on("click", "#addReview", function(e) {
  e.preventDefault(),
    jQuery("#table-reviews tbody").append(
      '<tr><td style="width:65%"  contenteditable> <div id="editorReview' +
        index +
        '"> </div> </td><td contenteditable style="width:10%"> test@test.com </td></td><td contenteditable style="width:10%">' +
        getUsername() +
        '</td><td contenteditable style="width:10%">' +
        new Date().toISOString().slice(0, 10) +
        '</td></td><td style="width:5%"><input style="width:100%" type="number" min="1" max="5" value="5"></td><td><button class="btn btn-danger" id="removeReview">X</button></td></tr>'
    ),
    jQuery("#table-reviews tr td[contenteditable]").css({
      border: "1px solid #51a7e8",
      "box-shadow":
        "inset 0 1px 2px rgba(0,0,0,0.075), 0 0 5px rgba(81,167,232,0.5)"
    });
}),
  jQuery(document).on("click", "#seachProductsButton", function(e) {
    searcheBayProducts(1);
  }),
  jQuery(document).on("click", "#importProductToShopByUrl", function(e) {
    var t = jQuery("#productUrl").val();
    if (t) {
      prepareModal();
      var a = getProductIdFRomUrl(t);
      getEpidFromUrl(t),
        a ? buildEbayProduct(a) : displayToast("Cannot get product sku", "red");
    } else displayToast("please make sure you have introduce a valid url, if issue persist, please contact wooshark", "red");
  }),
  jQuery(document).on("click", "#importProductToShopBySky", function(e) {
    prepareModal(), (waitingListProducts = []);
    var t = jQuery("#productSku").val();
    t ? buildEbayProduct(t) : displayToast("Cannot get product sku", "red");
  }),
  jQuery(document).ready(function() {
    jQuery("#searcheBayKeyword").val("Samsung"),
      getProductsCount(),
      restoreeBayConfiguration(),
      getAllProducts(1),
      searcheBayProducts(1),
      restoreFormula();
  });
let alreadyImportedProduct = 0;

function getProductsCount() {
  jQuery.ajax({
    url: wooshark_params.ajaxurl,
    type: "POST",
    dataType: "JSON",
    data: { action: "getProductsCount_for_ebay" },
    success: function(e) {
      console.log("----response", e),
        (totalproductsCounts = e),
        (alreadyImportedProduct = totalproductsCounts),
        displayPaginationSection(totalproductsCounts, 1);
    },
    error: function(e) {
      console.log("****err", e),
        displayToast(e.responseText, "red"),
        stopLoading();
    },
    complete: function() {
      console.log("SSMEerr"), stopLoading();
    }
  });
}
jQuery(document).on("click", "#insert-product-reviews", function(e) {
  currentProductId = jQuery(this).parents("tr")[0].cells[2].innerText;
}),
  jQuery(document).on("click", "#removeVariations", function(e) {
    if (jQuery("#table-attributes tr").length > 2) {
      var t = jQuery(this).parents("tr")[0].cells[0].innerText;
      jQuery(this)
        .parents("tr")
        .remove(),
        jQuery("#table-variations tr").each(function() {
          var e = attributesNamesArray.indexOf(t) + 1;
          e > -1
            ? jQuery(this)
                .find("td:eq(" + e + ")")
                .remove()
            : displayToast(
                "cannot remove this attribute, the name does not match, please contact wooshark: reference- issue with removing an attributes",
                "red"
              );
        });
    } else displayToast("need at least one attribute to insert this product");
  }),
  jQuery(document).on("click", "#removeAttribute", function(e) {
    jQuery(this)
      .parents("tr")
      .remove();
  }),
  jQuery(document).on("click", "#removeVariation", function(e) {
    jQuery(this)
      .parents("tr")
      .remove();
  }),
  jQuery(document).on("click", "#removeImage", function(e) {
    var t = jQuery(this).parent()[0].children[2].currentSrc,
      a = images.indexOf(t);
    a > -1 && images.splice(a, 1),
      jQuery("#galleryPicture").empty(),
      images.forEach(function(e) {
        jQuery(
          '<div><button type="button" class="btn btn-primary" id="removeImage" ><i style="font-size:15px ; margin:5px">Remove Image</i></button><button type="button" class="btn btn-info" id="editImageAliexpress" ><i style="font-size:15px ; margin:5px; margin:5px" disabled>Edit image (new feature | testing phase) </i></button><img  src=' +
            e +
            " /><div>"
        ).appendTo(jQuery("#galleryPicture"));
      });
  }),
  jQuery(document).on("click", "#removeDescription", function(e) {
    jQuery("#removeDescription")[0].checked
      ? ((htmlEditor = quill.root.innerHTML), quill.setContents([]))
      : (quill.setContents([]),
        quill.clipboard.dangerouslyPasteHTML(0, htmlEditor));
  }),
  jQuery(document).on("click", "#removeText", function(e) {
    jQuery("#removeText")[0].checked && jQuery("#descriptionContent").html("");
  }),
  jQuery(document).on("click", "#includeImageFromDescription", function(e) {
    jQuery("#includeImageFromDescription")[0].checked &&
      imagesFromDescription.forEach(function(e, t) {
        t < 10 &&
          (jQuery(
            '<div><button type="button" class="btn btn-primary" id="removeImage" ><i style="font-size:15px ; margin:5px">Remove Image</i></button><button type="button" class="btn btn-info" id="editImageAliexpress" ><i style="font-size:15px ; margin:5px; margin:5px" disabled>Edit image (testing phase) </i></button><img  src=' +
              e.currentSrc +
              " /><div>"
          ).appendTo(jQuery("#galleryPicture")),
          images.push(e.currentSrc));
      });
  });
var copiedObject = "";
jQuery(document).on("click", "#applyCharmPricing99", function(e) {
  var t = jQuery("#applyCharmPricing99")[0].checked,
    a = jQuery("#table-variations tbody tr");
  copiedObject || (copiedObject = a.clone());
  var r = jQuery("#table-variations thead tr")[0].cells.length - 6;
  t
    ? (a.each(function(e, t) {
        t.cells[r + 1].textContent =
          Math.ceil(t.cells[r + 1].textContent).toFixed(2) - 0.01;
      }),
      a.each(function(e, t) {
        t.cells[r + 2].textContent =
          Math.ceil(t.cells[r + 2].textContent).toFixed(2) - 0.01;
      }))
    : (a.each(function(e, t) {
        t.cells[r + 1].textContent = copiedObject[e].cells[r + 1].textContent;
      }),
      a.each(function(e, t) {
        t.cells[r + 2].textContent = copiedObject[e].cells[r + 2].textContent;
      }));
});
copiedObject = "";

function getItemSpecificfromTable(e) {
  var t = jQuery("#table-specific tbody tr"),
    a = e.NameValueList.map(function(e) {
      return e.name;
    });
  return (
    t &&
      t.length &&
      t.each(function(t, r) {
        t &&
          -1 == a.indexOf(r.cells[0].textContent) &&
          e.NameValueList.push({
            name: r.cells[0].textContent || "-",
            visible: !0,
            variation: !1,
            value: [r.cells[1].textContent]
          });
      }),
    e
  );
}

function restoreFormula(e) {
  if (e) {
    formsToSave = e;
    try {
      e &&
        e.length &&
        (jQuery("#formula tbody tr").remove(),
        e.forEach(function(e) {
          e &&
            e.min &&
            e.max &&
            e.multiply &&
            jQuery("#formula tbody").append(
              '<tr><th style="width:15%"> <input class="custom-form-control" name="min" placeholder="Min price" value="' +
                e.min +
                '"></th><th style="width:2%">-</th><th style="width:15%"><input class="custom-form-control" name="max" placeholder="Max price" value="' +
                e.max +
                '"></th><th style="width:16%"><div style="display:flex"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-light"> Increase by  </button><input value="' +
                e.multiply +
                '" style="flex: 1 1 78%; border: 1px solid #ccc;" class="multiply custom-form-control" type="number" name="multiply" placeholder="Increase percentage"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-default">  <i class="fa fa-percent fa-2x"></i> </button></div></th><th style="width:15%"><div style="display:flex"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-light">  <i class="fa fa-plus"></i> </button><input value="' +
                e.addition +
                '" style="flex: 1 1 90%; border: 1px solid #ccc;" class="addition custom-form-control" type="number" name="addition" placeholder="Add number"></div></th><th style="width:3%"><button id="removeFormulaLine" style="border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-danger">  <i class="fa fa-trash"></i> </button></th></tr>'
            );
        }));
    } catch (e) {
      displayToast(
        "Error while restoring formula, please contact wooshark support subject error while restoring formula"
      );
    }
  }
}

function setFormulaAliexpress(e) {
  var t = e.skuVal.skuMultiCurrencyCalPrice,
    a = e.skuVal.actSkuMultiCurrencyCalPrice;
  if (
    ((availQuantitySingleProduct = e.skuVal.availQuantity),
    generalPreferences.setMaximimProductStock &&
      0 != generalPreferences.setMaximimProductStock &&
      (availQuantitySingleProduct = generalPreferences.setMaximimProductStock),
    formsToSave && formsToSave.length)
  ) {
    var r = {};
    formsToSave.forEach(function(e) {
      if (e.min < parseFloat(t) && e.max > parseFloat(t)) {
        var o = (r = e).multiply || 1,
          i = math.eval(o),
          n = r.addition || 0,
          l = math.eval(n);
        jQuery(".formulaContent").text(
          "Applied Formula = original price [*] (" + o + ") [+]" + n
        ),
          jQuery(".formulatexcontainer").show(),
          (t = parseFloat(t) * parseFloat(i) + parseFloat(l));
      }
      if (e.min < parseFloat(a) && e.max > parseFloat(a)) {
        (o = (r = e).multiply || 1),
          (i = math.eval(o)),
          (n = r.addition || 0),
          (l = math.eval(n));
        a = parseFloat(a) * parseFloat(i) + parseFloat(l);
      }
    });
  }
  t &&
    (generalPreferences.importShippingCost && (t = parseFloat(t)),
    (t = Number(t).toFixed(2)),
    jQuery("#customPrice").val(parseFloat(t))),
    a &&
      (generalPreferences.importShippingCost && (a = parseFloat(a)),
      (a = Number(a).toFixed(2)),
      jQuery("#customSalePrice").val(parseFloat(a)));
}

function buildVariations() {
  var e = { variations: [], NameValueList: [] };
  jQuery("#table-attributes tr").each(function(t, a) {
    t &&
      e.NameValueList.push({
        name: a.cells[0].textContent
          .toLowerCase()
          .replace(/ /g, "-")
          .replace("'", "-"),
        values: a.cells[1].textContent.split(","),
        variation: !0,
        visible: !0
      });
  });
  var t = e.NameValueList.length;
  return (
    jQuery("#table-variations tr").each(function(a, r) {
      if (a && a < 100) {
        var o = [];
        e.NameValueList.forEach(function(e, t) {
          o.push({
            name: e.name
              .toLowerCase()
              .replace(/ /g, "-")
              .replace("'", "-"),
            value: r.cells[t + 1].textContent.trim(),
            image:
              r.cells[0] &&
              r.cells[0].children &&
              r.cells[0].children[0] &&
              r.cells[0].children[0].currentSrc
                ? r.cells[0].children[0].currentSrc
                : ""
          });
        }),
          r.cells[t + 1].textContent &&
            e.variations.push({
              SKU: r.cells[t + 5].textContent,
              availQuantity: r.cells[t + 1].textContent || 1,
              salePrice: r.cells[t + 3].textContent,
              regularPrice: r.cells[t + 2].textContent,
              attributesVariations: o,
              weight:
                r.cells[t + 6].textContent || jQuery("#productWeight").val()
            });
      }
    }),
    e
  );
}
jQuery(document).on("click", "#applyCharmPricing", function(e) {
  var t = jQuery("#applyCharmPricing")[0].checked,
    a = jQuery("#table-variations tbody tr");
  copiedObject || (copiedObject = a.clone());
  var r = jQuery("#table-variations thead tr")[0].cells.length - 6;
  t
    ? (a.each(function(e, t) {
        t.cells[r + 1].textContent = Math.ceil(
          t.cells[r + 1].textContent
        ).toFixed(2);
      }),
      a.each(function(e, t) {
        t.cells[r + 2].textContent = Math.ceil(
          t.cells[r + 2].textContent
        ).toFixed(2);
      }))
    : (a.each(function(e, t) {
        t.cells[r + 1].textContent = copiedObject[e].cells[r + 1].textContent;
      }),
      a.each(function(e, t) {
        t.cells[r + 2].textContent = copiedObject[e].cells[r + 2].textContent;
      }));
}),
  jQuery(document).on("click", "#applyPriceFormulaRegularPrice", function(e) {
    if (jQuery("#applyPriceFormulaRegularPrice")[0].checked) {
      var t = jQuery("#table-variations tbody tr"),
        a = jQuery("#table-variations thead tr")[0].cells.length - 6;
      t.each(function(e, t) {
        t.cells[a + 1].textContent = calculateAppliedPrice(
          t.cells[a + 1].textContent
        );
      }),
        jQuery("#applyPriceFormulaRegularPrice").prop("disabled", !0);
    }
  }),
  jQuery(document).on("click", "#globalRegularPrice", function(e) {
    jQuery("#globalRegularPriceValue").val();
    if (jQuery("#globalRegularPriceValue").val()) {
      var t = jQuery("#table-variations tbody tr"),
        a = jQuery("#table-variations thead tr")[0].cells.length - 6;
      t.each(function(e, t) {
        t.cells[a + 1].textContent = jQuery("#globalRegularPriceValue").val();
      });
    }
  }),
  jQuery(document).on("click", "#globalSalePrice", function(e) {
    if (jQuery("#globalSalePriceValue").val()) {
      var t = jQuery("#table-variations tbody tr"),
        a = jQuery("#table-variations thead tr")[0].cells.length - 6;
      t.each(function(e, t) {
        t.cells[a + 2].textContent = jQuery("#globalSalePriceValue").val();
      });
    }
  }),
  jQuery(document).on("click", "#displayAdvancedVariations", function(e) {
    jQuery("#table-attributes").show();
  }),
  jQuery(document).on("click", "#addShippingPrice", function(e) {
    if (jQuery("#addShippingPriceValue").val()) {
      var t = jQuery("#table-variations tbody tr"),
        a = jQuery("#table-variations thead tr")[0].cells.length - 6;
      t.each(function(e, t) {
        t.cells[a + 2].textContent =
          parseFloat(t.cells[a + 2].textContent) +
          parseFloat(jQuery("#addShippingPriceValue").val());
      }),
        (t = jQuery("#table-variations tbody tr")).each(function(e, t) {
          t.cells[a + 1].textContent =
            parseFloat(t.cells[a + 1].textContent) +
            parseFloat(jQuery("#addShippingPriceValue").val());
        });
    }
  }),
  jQuery(document).on("click", "#addSpecific", function(e) {
    jQuery("#table-specific tbody").append(
      '<tr><td style="width:50%" contenteditable>    </td><td contenteditable style="width:50%"></td><td><button id="removeAttribute" class="btn btn-danger">X</btton></td></tr>'
    ),
      jQuery("#table-specific tr td[contenteditable]").css({
        border: "1px solid #51a7e8",
        "box-shadow":
          "inset 0 1px 2px rgba(0,0,0,0.075), 0 0 5px rgba(81,167,232,0.5)"
      });
  }),
  jQuery(document).on("click", "#totoButton", function(e) {
    startLoading();
    var t = [];
    let a = "";
    var r = buildVariations(),
      o =
        jQuery("#customProductTitle").val() ||
        jQuery("head")
          .find("title")
          .text(),
      i = jQuery("#shortDescription").val() || "",
      n = jQuery("#customPrice").val() || "",
      l = jQuery("#customSalePrice").val() || "";
    jQuery("#simpleSku").val();
    let s = [];
    jQuery("#customProductCategory input:checked").each(function() {
      s.push(jQuery(this).attr("value"));
    });
    var c = jQuery("#isFeatured")[0].checked,
      d = (r = getItemSpecificfromTableAliexpress(r)).NameValueList;
    let u = currentEbayProductUrl;
    jQuery('input[name="categoryChoice"]:checked')[0] &&
      jQuery('input[name="categoryChoice"]:checked')[0].value;
    let p = !1;
    jQuery("#isImportReviewsSingleImport").prop("checked") &&
      (t = getReviews()),
      jQuery("#isImportProductDescriptionSingleImport").prop("checked") &&
        (a = quill.root.innerHTML),
      jQuery("#isImportProductSpecificationSingleImport").prop("checked") &&
        (r = getItemSpecificfromTable(r));
    var y = (p = !!jQuery("#isPublishProductSingleImport").prop("checked"))
      ? "publish"
      : "draft";
    let m = [];
    tagsProduct && tagsProduct.length && (m = tagsProduct),
      jQuery.ajax({
        url: wooshark_params.ajaxurl,
        type: "POST",
        dataType: "JSON",
        data: {
          action: "wooshark-insert-product_for_ebay",
          sku: currentProductId,
          title: o,
          description: quill.root.innerHTML,
          productType:
            r.variations && r.variations.length ? "variable" : "simple",
          images:
            images && images.length > 2 ? images.slice(0, 3) : images || [],
          categories: s,
          regularPrice: n.toString(),
          salePrice: l.toString(),
          quantity: jQuery("#simpleQuantity").val(),
          isFeatured: c,
          postStatus: y,
          shortDescription: i || "",
          productUrl: u,
          importVariationImages: jQuery("#ebaybulkIsPublish").prop("checked"),
          reviews: t,
          tags: m,
          attributes: d && d.length ? d : [],
          variations: r.variations && r.variations.length ? r.variations : []
        },
        success: function(e) {
          e && e.error && e.error_msg && displayToast(e.error_msg, "red"),
            e && !e.error && e.data && displayToast(e.data, "green"),
            stopLoading();
        },
        error: function(e) {
          console.log("****err", e),
            stopLoading(),
            e && e.responseText && displayToast(e.responseText, "red");
        }
      });
  }),
  jQuery(document).on("click", "#resetFormula", function(e) {
    localStorage.setItem("formsToSave", ""), restoreFormula();
  });
let _saveEbayConfiguration = {};

function restoreeBayConfiguration() {
  let e = {};
  jQuery.ajax({
    url: wooshark_params.ajaxurl,
    type: "POST",
    dataType: "JSON",
    data: { action: "restoreConfiguration_for_ebay" },
    success: function(t) {
      if (
        (console.log("response---", t),
        t && t._savedConfiguration && t._savedConfiguration.commonConfiguration)
      ) {
        let a = (e = t._savedConfiguration).commonConfiguration,
          r = e.sinleUpdateConfiguration,
          o = e.singleImportonfiguration,
          i = e.bulkCategories,
          n = e.savedFormula;
        a &&
          a.language &&
          (jQuery("[name=language][value=" + a.language + "]").attr(
            "checked",
            !0
          ),
          jQuery(
            '<h4 style="font-weight:bold;"> Current Locale: ' +
              a.language +
              "  </h4>"
          ).appendTo(".currencyDetails")),
          a &&
            a.currency &&
            jQuery("[name=currency][value=" + a.currency + "]").attr(
              "checked",
              !0
            ),
          r
            ? (jQuery("#applyPriceFormulaWhileUpdatingProduct").prop(
                "checked",
                "true" == r.applyPriceFormulaWhileUpdatingProduct
              ),
              jQuery("#setVariationsToOutOfStock").prop(
                "checked",
                "true" == r.setVariationsToOutOfStock
              ),
              jQuery("#updateSalePrice").prop(
                "checked",
                "true" == r.updateSalePrice
              ),
              jQuery("#updateRegularPrice").prop(
                "checked",
                "true" == r.updateRegularPrice
              ))
            : (jQuery("#applyPriceFormulaWhileUpdatingProduct").prop(
                "checked",
                !0
              ),
              jQuery("#setVariationsToOutOfStock").prop("checked", !0),
              jQuery("#updateSalePrice").prop("checked", !0),
              jQuery("#updateRegularPrice").prop("checked", !0)),
          o
            ? (jQuery("#isImportReviewsSingleImport").prop(
                "checked",
                "true" == o.isImportReviewsSingleImport
              ),
              jQuery("#isImportImageVariationsSingleImport").prop(
                "checked",
                "true" == o.isImportImageVariationsSingleImport
              ),
              jQuery("#isImportProductSpecificationSingleImport").prop(
                "checked",
                "true" == o.isImportProductSpecificationSingleImport
              ),
              jQuery("#isImportProductDescriptionSingleImport").prop(
                "checked",
                "true" == o.isImportProductDescriptionSingleImport
              ),
              jQuery("#isPublishProductSingleImport").prop(
                "checked",
                "true" == o.isPublishProductSingleImport
              ),
              jQuery("#applyPriceFormulawhileImporting").prop(
                "checked",
                "true" == o.applyPriceFormulawhileImporting
              ),
              jQuery("#isFeaturedProduct").prop(
                "checked",
                "true" == o.isFeaturedProduct
              ),
              jQuery("#includeShippingCostIntoFinalPrice").prop(
                "checked",
                "true" == o.includeShippingCostIntoFinalPrice
              ),
              jQuery("#isEnableAutomaticUpdateForAvailability").prop(
                "checked",
                "true" == o.isEnableAutomaticUpdateForAvailability
              ),
              jQuery("#enableAutomaticUpdates").prop(
                "checked",
                "true" == o.enableAutomaticUpdates
              ),
              jQuery("#applyPriceFormulaAutomaticUpdate").prop(
                "checked",
                "true" == o.applyPriceFormulaAutomaticUpdate
              ),
              jQuery("#syncSalePrice").prop(
                "checked",
                "true" == o.syncSalePrice
              ),
              jQuery("#syncRegularPrice").prop(
                "checked",
                "true" == o.syncRegularPrice
              ),
              jQuery("#syncStock").prop("checked", "true" == o.syncStock),
              jQuery("#onlyPublishProductWillSync").prop(
                "checked",
                "true" == o.onlyPublishProductWillSync
              ),
              jQuery("[name=destination][value=" + o.destination + "]").attr(
                "checked",
                !0
              ),
              jQuery("#textToBeReplaced").val(o.textToBeReplaced),
              jQuery("#textToReplace").val(o.textToReplace))
            : (jQuery("#isImportReviewsSingleImport").prop("checked", !1),
              jQuery("#isImportImageVariationsSingleImport").prop(
                "checked",
                !1
              ),
              jQuery("#isImportProductSpecificationSingleImport").prop(
                "checked",
                !0
              ),
              jQuery("#isImportProductDescriptionSingleImport").prop(
                "checked",
                !0
              ),
              jQuery("#isPublishProductSingleImport").prop("checked", !0),
              jQuery("#applyPriceFormulawhileImporting").prop("checked", !0),
              jQuery("#isFeaturedProduct").prop("checked", !1),
              jQuery("#includeShippingCostIntoFinalPrice").prop("checked", !1),
              jQuery("#isEnableAutomaticUpdateForAvailability").prop(
                "checked",
                !1
              ),
              jQuery("#enableAutomaticUpdates").prop("checked", !1),
              jQuery("#applyPriceFormulaAutomaticUpdate").prop("checked", !0),
              jQuery("#syncRegularPrice").prop("checked", !0),
              jQuery("#syncStock").prop("checked", !0),
              jQuery("#syncSalePrice").prop("checked", !0),
              jQuery("#onlyPublishProductWillSync").prop("checked", !0),
              jQuery("[name=destination][value=US]").attr("checked", !0));
        localStorage.getItem("licenseValue");
        restoreFormula(n),
          getCategories(function(e) {
            savedCategories &&
              savedCategories.length &&
              (jQuery("#table-categories tbody").empty(),
              savedCategories.forEach(function(e) {
                jQuery("#table-categories tbody").append(
                  '<tr><td style="width:20%">' +
                    e.term_id +
                    '</td><td style="width:20%">' +
                    e.name +
                    '</td><td  style="width:20%">' +
                    e.count +
                    ' </td></td><td  style="width:40%"><button class="btn btn-primary" style="width:100%" id="updateProductOfThisCategory" categoryID="' +
                    e.term_id +
                    '"> Update Products of this category</button></td></tr>'
                );
              }),
              i && i.length && savedCategories && savedCategories.length
                ? (jQuery("#bulkCategories").empty(),
                  savedCategories.forEach(function(e, t) {
                    var a;
                    (a =
                      '<div class="checkbox"><label><input id="category' +
                      e.term_id +
                      '" type="checkbox" style="width:17px; height:17px" class="chk" value="' +
                      e.term_id +
                      ' "/>' +
                      e.name +
                      "</label>"),
                      jQuery("#bulkCategories").append(jQuery(a));
                  }),
                  i &&
                    i.length &&
                    i.forEach(function(e) {
                      jQuery("#category" + e).prop("checked", !0);
                    }))
                : (jQuery("#bulkCategories").empty(),
                  savedCategories.forEach(function(e, t) {
                    var a;
                    (a =
                      '<div class="checkbox"><label><input id="category' +
                      e.term_id +
                      '" type="checkbox" style="width:17px; height:17px" class="chk" value="' +
                      e.term_id +
                      ' "/>' +
                      e.name +
                      "</label>"),
                      jQuery("#bulkCategories").append(jQuery(a));
                  })));
          });
      } else
        getCategories(function(e) {
          savedCategories &&
            savedCategories.length &&
            (jQuery("#table-categories tbody").empty(),
            savedCategories.forEach(function(e) {
              jQuery("#table-categories tbody").append(
                '<tr><td style="width:20%">' +
                  e.term_id +
                  '</td><td style="width:20%">' +
                  e.name +
                  '</td><td  style="width:20%">' +
                  e.count +
                  ' </td></td><td  style="width:40%"><button class="btn btn-primary" style="width:100%" id="updateProductOfThisCategory" categoryID="' +
                  e.term_id +
                  '"> Update Products of this category</button></td></tr>'
              );
            }),
            bulkCategories &&
            bulkCategories.length &&
            savedCategories &&
            savedCategories.length
              ? (jQuery("#bulkCategories").empty(),
                savedCategories.forEach(function(e, t) {
                  var a;
                  (a =
                    '<div class="checkbox"><label><input id="category' +
                    e.term_id +
                    '" type="checkbox" style="width:17px; height:17px" class="chk" value="' +
                    e.term_id +
                    ' "/>' +
                    e.name +
                    "</label>"),
                    jQuery("#bulkCategories").append(jQuery(a));
                }),
                bulkCategories &&
                  bulkCategories.length &&
                  bulkCategories.forEach(function(e) {
                    jQuery("#category" + e).prop("checked", !0);
                  }))
              : (jQuery("#bulkCategories").empty(),
                savedCategories.forEach(function(e, t) {
                  var a;
                  (a =
                    '<div class="checkbox"><label><input id="category' +
                    e.term_id +
                    '" type="checkbox" style="width:17px; height:17px" class="chk" value="' +
                    e.term_id +
                    ' "/>' +
                    e.name +
                    "</label>"),
                    jQuery("#bulkCategories").append(jQuery(a));
                })));
        }),
          displayToast(
            "Cannot find any saved configuration, please ensure you save your preference on the configuration tab"
          );
    },
    error: function(e) {
      displayToast(
        "Error while retrieving configuration from server, please erload your page"
      );
    },
    complete: function() {}
  }),
    getCategories(function(e) {
      savedCategories &&
        savedCategories.length &&
        (jQuery("#table-categories tbody").empty(),
        savedCategories.forEach(function(e) {
          jQuery("#table-categories tbody").append(
            '<tr><td style="width:20%">' +
              e.term_id +
              '</td><td style="width:20%">' +
              e.name +
              '</td><td  style="width:20%">' +
              e.count +
              ' </td></td><td  style="width:40%"><button class="btn btn-primary" style="width:100%" id="updateProductOfThisCategory" categoryID="' +
              e.term_id +
              '"> Update Products of this category</button></td></tr>'
          );
        }),
        bulkCategories &&
        bulkCategories.length &&
        savedCategories &&
        savedCategories.length
          ? (jQuery("#bulkCategories").empty(),
            savedCategories.forEach(function(e, t) {
              var a;
              (a =
                '<div class="checkbox"><label><input id="category' +
                e.term_id +
                '" type="checkbox" style="width:17px; height:17px" class="chk" value="' +
                e.term_id +
                ' "/>' +
                e.name +
                "</label>"),
                jQuery("#bulkCategories").append(jQuery(a));
            }),
            bulkCategories &&
              bulkCategories.length &&
              bulkCategories.forEach(function(e) {
                jQuery("#category" + e).prop("checked", !0);
              }))
          : (jQuery("#bulkCategories").empty(),
            savedCategories.forEach(function(e, t) {
              var a;
              (a =
                '<div class="checkbox"><label><input id="category' +
                e.term_id +
                '" type="checkbox" style="width:17px; height:17px" class="chk" value="' +
                e.term_id +
                ' "/>' +
                e.name +
                "</label>"),
                jQuery("#bulkCategories").append(jQuery(a));
            })));
    });
}

function getCreationDate(e) {
  e = dates[Math.floor(Math.random() * dates.length)];
  var t = dates.indexOf(e);
  return dates.splice(t, 1), e;
}

function getUsername() {
  var e = names[Math.floor(Math.random() * names.length)],
    t = names.indexOf(e);
  return names.splice(t, 1), e;
}
jQuery(document).on("click", "#saveFormula", function(e) {
  var t = jQuery("form"),
    a = [];
  t.each(function(e, t) {
    t[4] ||
      (t[0].value &&
        t[0].value &&
        a.push({
          min: t[0].value,
          max: t[1].value,
          multiply: t[2]
            ? t[2].value
              ? t[2].value.replace(/,/g, ".")
              : t[2].value
            : 1,
          addition: t[3]
            ? t[3].value
              ? t[3].value.replace(/,/g, ".")
              : t[3].value
            : 0
        }));
  }),
    a &&
      a.length &&
      (jQuery("#reload").css({ display: "block" }),
      jQuery("#empty").css({ display: "none" }),
      localStorage.setItem("formsToSave", JSON.stringify(a)));
});
var names = [
    "Craig Piro",
    "Cindi Mcfarlin",
    "Maximilien Chopin",
    "Alfonso Villapol",
    "Gayla Tincher",
    "Lelah Pelosi",
    "Kholmatzhon Daniarov",
    "Klemens Totleben",
    "Émeric Figuier",
    "Joseph Garreau",
    "Moriya Masanobu",
    "Fernand Aveline",
    "Germain Beaumont",
    "Finn Junkermann",
    "Benoît Cortot",
    "Kawano Tanyu",
    "Gérald Noir",
    "Lisabeth Brennen",
    "Jaqueline Phipps",
    "Roderick Roth",
    "Adella Tarry",
    "Rudolf Kirsch",
    "Fritz Filippi",
    "Gérald Courbet",
    "Dastan Nurbolatev",
    "Oscar Álvarez",
    "Devon Huntoon",
    "Marlen Akhmetov",
    "Cassey Odle",
    "Patty Balser",
    "Néo Lortie",
    "Dieter Krist",
    "Speranzio Bartolone",
    "Iside Casaletto",
    "Durante Sciara",
    "Ildefonso Sollami",
    "Xose Mendez",
    "Vladimiro De Angelo",
    "Gianmaria De Sario",
    "Anacleto Adornetto",
    "Sigmund Bruckmann",
    "Valtena Amodei",
    "Liberatore Accordino",
    "Alfredo Lamanna",
    "Kemberly Roza",
    "Lluciano Marcos",
    "Fukumoto Shusake",
    "Branda Goshorn",
    "Isadora Heer",
    "Micael Montes",
    "Derrick Sclafani",
    "Thibault Silvestre",
    "Wendelin Jonas",
    "Coleen Dragon",
    "Ted Basye",
    "Emmanuel Gillie",
    "Lorean Soni",
    "Reiko Jeanlouis",
    "Olevia Lauder",
    "Savannah Brotherton",
    "Franchesca Schwebach",
    "Chae Jiang",
    "Jaimee Harter",
    "Windy Milnes",
    "Takako Ream",
    "Zoraida Swick",
    "Mammie Aguiniga",
    "Wendi Raver",
    "Clarita Pursell",
    "Diedra Spath",
    "Tandy Hoyte",
    "Lanie Edwin",
    "Marchelle Dowden",
    "Susann Masson",
    "Jannette Wilmes",
    "Lakisha Mullenix",
    "Shanda Gatling",
    "Kathi Okamura",
    "Ellie Julius",
    "Demarcus Mcmullen",
    "Major Woodrum",
    "Alpha Um",
    "Prudence Rodden",
    "Shante Dezern",
    "Emma Carra",
    "Starr Lheureux",
    "Verline Cordon",
    "Carla Poole",
    "Alisa Watts",
    "Maariya Kramer",
    "Aamir Boyd",
    "Antonio Levine",
    "Della Drew",
    "Miriam Perry",
    "Sarina Santos",
    "Armaan Ellison",
    "Graham Rankin",
    "Aasiyah Haney",
    "Debbie Tanner",
    "Yuvraj Wolf",
    "Eleri Barnes",
    "Ira Forster",
    "Gage Edmonds",
    "Nour Hartman",
    "Niam Mullins",
    "Mahi Reid",
    "Winston Hyde",
    "Rosalie Robertson",
    "Samirah Hood",
    "Bonnie Montes",
    "Aliya Fernandez",
    "Renesmae Knapp",
    "Enrique Lutz",
    "Korey Wu",
    "Andrea Xiong",
    "Daanyal Shepard",
    "Efan Wharton"
  ],
  dates = [
    "2018-10-26",
    "2019-1-1",
    "2018-11-15",
    "2018-11-6",
    "2019-01-7",
    "2019-1-13",
    "2019-2-12",
    "2019-1-17",
    "2018-2-19",
    "2019-3-16",
    "2019-1-14",
    "2018-2-25",
    "2019-3-5",
    "2018-1-18",
    "2019-2-22",
    "2018-1-11",
    "2018-12-12",
    "2018-11-8",
    "2019-1-2",
    "2019-01-13",
    "2019-05-19",
    "2019-04-29",
    "2019-06-12",
    "2019-07-01",
    "2019-06-23",
    "2019-05-24",
    "2018-10-29",
    "2019-3-3",
    "2019-1-7",
    "2018-10-27",
    "2019-2-17",
    "2019-05-24",
    "2019-06-06",
    "2019-06-19",
    "2019-06-22",
    "2019-06-13",
    "2019-05-13",
    "2019-07-01",
    "2019-04-25",
    "2019-04-04",
    "2019-05-05",
    "2019-05-19",
    "2019-06-01",
    "2019-05-27",
    "2019-03-27",
    "2019-04-01",
    "2019-05-30",
    "2019-06-04"
  ];

function getItemSpecificfromTableAliexpress(e) {
  var t = jQuery("#table-specific tbody tr"),
    a = e.NameValueList.map(function(e) {
      return e.name;
    });
  return (
    t &&
      t.length &&
      t.each(function(t, r) {
        -1 == a.indexOf(r.cells[0].textContent) &&
          e.NameValueList.push({
            name: r.cells[0].textContent || "-",
            visible: !0,
            variation: !1,
            values: [r.cells[1].textContent]
          });
      }),
    e
  );
}
jQuery(document).on("click", "#confirmReviewInsertion", function(e) {
  e.preventDefault();
  var t = getReviews();
  (postId = currentProductId),
    console.log("---------reviews", t),
    console.log("---------postId", postId),
    postId
      ? insertReviewsIntoWordpress(t, postId)
      : displayToast("cannot get post id, please contact wooshark", "red");
});
let tagsProduct = [];

function getCategories(e) {
  jQuery.ajax({
    url: wooshark_params.ajaxurl,
    type: "POST",
    dataType: "JSON",
    data: { action: "get_categories_for_ebay" },
    success: function(t) {
      console.log("----response", t), (savedCategories = t), e();
    },
    error: function(t) {
      console.log("****err", t),
        displayToast(t.responseText, "red"),
        stopLoading(),
        e();
    },
    complete: function() {
      console.log("SSMEerr"), stopLoading(), e();
    }
  });
}

function getSelectedLanguage() {
  return jQuery('input[name="language"]:checked')[0]
    ? jQuery('input[name="language"]:checked')[0].value
    : "EBAY_US";
}

function getProductIdFRomUrl(e) {
  let t = "";
  if (e && e.includes("?") && e.includes(".ebay.")) {
    let a = e.indexOf("?");
    if (a > -1) return (t = e.substring(a - 12, a)), console.log(t), t;
  } else
    e &&
      !e.includes("?") &&
      e.includes(".ebay.") &&
      (t = e.substring(e.length - 12, e.length));
  return "";
}

function getEpidFromUrl(e) {
  let t = "";
  if (e && e.includes("epid=")) {
    let a = e.indexOf("epid=");
    if (a > -1)
      return (t = e.substring(a + 4, a + 13)), console.log("ePid", t), t;
  }
  return "";
}

function getReviews() {
  var e = jQuery("#customReviews tbody tr"),
    t = [];
  return e && e.length
    ? (e.each(function(e, a) {
        e &&
          t.push({
            review: a.cells[0].innerHTML || "-",
            rating:
              jQuery(a)
                .find("input")
                .val() || 5,
            datecreation: a.cells[2].outerText,
            username: a.cells[1].outerText || "unknown",
            email: "test@test.com"
          });
      }),
      t)
    : [];
}

function insertReviewsIntoWordpress(e, t) {
  startLoading(),
    jQuery.ajax({
      url: wooshark_params.ajaxurl,
      type: "POST",
      dataType: "JSON",
      data: { action: "insert-reviews-to-productRM", post_id: t, reviews: e },
      success: function(e) {
        e && !e.error && e.insertedSuccessfully && e.insertedSuccessfully.length
          ? displayToast(
              e.insertedSuccessfully.length +
                " reviews are imported successfully",
              "black"
            )
          : displayToast("Error while uploading reviews.", "red"),
          stopLoading(),
          jQuery("#table-reviews tbody").empty();
      },
      error: function(e) {
        console.log("****err", e),
          stopLoading(),
          e && e.responseText && displayToast(e.responseText, "red");
      }
    });
}

function startLoadingText() {
  jQuery(
    '<h5  id="loading-variation" style="color:green;">  Loading .... </h5>'
  ).appendTo(".log-sync-product");
}
jQuery(document).on("click", "#addTagToProduct", function(e) {
  let t = jQuery("#tagInput").val();
  t &&
    (tagsProduct.push(t),
    jQuery("#tagInput").val(""),
    jQuery("#tagInputDisplayed").append(jQuery("<div>" + t + "</div>")));
}),
  jQuery(document).on("click", "#addInterval", function(e) {
    jQuery("#formula tbody").append(
      '<tr><th style="width:15%"> <input class="custom-form-control" name="min" placeholder="Min price"></th><th style="width:2%">-</th><th style="width:15%"><input class="custom-form-control" name="max" placeholder="Max price"></th><th style="width:16%"><div style="display:flex"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-light"> Increase by  </button><input style="flex: 1 1 78%; border: 1px solid #ccc;" class="multiply custom-form-control" type="number" name="multiply" placeholder="Increase percentage"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-default">  <i class="fa fa-percent fa-2x"></i> </button></div></th><th style="width:15%"><div style="display:flex"><button style="flex: 1 1 10%;border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-light">  <i class="fa fa-plus"></i> </button><input style="flex: 1 1 90%; border: 1px solid #ccc;" class="addition custom-form-control" type="number" name="addition" placeholder="Add number"></div></th><th style="width:3%"><button id="removeFormulaLine" style="border-radius: 1px;margin-top: 0;margin-bottom: 0;margin-right:5px" class="btn btn-danger">  <i class="fa fa-trash"></i> </button></th></tr>'
    );
  }),
  jQuery(document).on("click", "#saveGlobalConfiguration", function(e) {
    let t = {};
    var a = {
      isImportReviewsSingleImport: jQuery("#isImportReviewsSingleImport").prop(
        "checked"
      ),
      isImportImageVariationsSingleImport: jQuery(
        "#isImportImageVariationsSingleImport"
      ).prop("checked"),
      isImportProductSpecificationSingleImport: jQuery(
        "#isImportProductSpecificationSingleImport"
      ).prop("checked"),
      isImportProductDescriptionSingleImport: jQuery(
        "#isImportProductDescriptionSingleImport"
      ).prop("checked"),
      isPublishProductSingleImport: jQuery(
        "#isPublishProductSingleImport"
      ).prop("checked"),
      applyPriceFormulawhileImporting: jQuery(
        "#applyPriceFormulawhileImporting"
      ).prop("checked"),
      isFeaturedProduct: jQuery("#isFeaturedProduct").prop("checked"),
      textToBeReplaced: jQuery("#textToBeReplaced").val(),
      textToReplace: jQuery("#textToReplace").val(),
      includeShippingCostIntoFinalPrice: jQuery(
        "#includeShippingCostIntoFinalPrice"
      ).prop("checked"),
      destination: jQuery('input[name="destination"]:checked').val(),
      isEnableAutomaticUpdateForAvailability: jQuery(
        "#isEnableAutomaticUpdateForAvailability"
      ).prop("checked"),
      enableAutomaticUpdates: jQuery("#enableAutomaticUpdates").prop("checked"),
      onlyPublishProductWillSync: jQuery("#onlyPublishProductWillSync").prop(
        "checked"
      ),
      applyPriceFormulaAutomaticUpdate: jQuery(
        "#applyPriceFormulaAutomaticUpdate"
      ).prop("checked"),
      syncRegularPrice: jQuery("#syncRegularPrice").prop("checked"),
      syncSalePrice: jQuery("#syncSalePrice").prop("checked"),
      syncStock: jQuery("#syncStock").prop("checked")
    };
    let r = {
        language: getSelectedLanguage(),
        currency:
          jQuery('input[name="currency"]:checked') &&
          jQuery('input[name="currency"]:checked')[0]
            ? jQuery('input[name="currency"]:checked')[0].value
            : "USD"
      },
      o = {
        applyPriceFormulaWhileUpdatingProduct: jQuery(
          "#applyPriceFormulaWhileUpdatingProduct"
        ).prop("checked"),
        setVariationsToOutOfStock: jQuery("#setVariationsToOutOfStock").prop(
          "checked"
        ),
        updateSalePrice: jQuery("#updateSalePrice").prop("checked"),
        updateRegularPrice: jQuery("#updateRegularPrice").prop("checked")
      };
    (t.commonConfiguration = r),
      (t.sinleUpdateConfiguration = o),
      (t.singleImportonfiguration = a),
      displayToast("save global configuration", "green");
    var i = [];
    jQuery(".chk:input:checked").each(function() {
      jQuery(this) && jQuery(this).val() && i.push(jQuery(this).val());
    }),
      (t.bulkCategories = i),
      displayToast("save categories", "green");
    var n = jQuery("#formula tbody tr"),
      l = [];
    n &&
      n.length &&
      n.each(function(e, t) {
        if (t && t.cells && t.cells.length > 3) {
          let e = jQuery(t.cells[0])
              .find("input")
              .val(),
            a = jQuery(t.cells[2])
              .find("input")
              .val(),
            r = jQuery(t.cells[3])
              .find("input")
              .val(),
            o = jQuery(t.cells[4])
              .find("input")
              .val();
          e &&
            a &&
            r &&
            l.push({ min: e, max: a, multiply: r || 1, addition: o || 0 });
        }
      }),
      (t.savedFormula = l),
      displayToast("save price markup formula"),
      jQuery.ajax({
        url: wooshark_params.ajaxurl,
        type: "POST",
        dataType: "JSON",
        data: {
          action: "saveOptionsDB_for_ebay",
          isShippingCostEnabled: jQuery(
            "#includeShippingCostIntoFinalPrice"
          ).prop("checked")
            ? "Y"
            : "N",
          isEnableAutomaticUpdateForAvailability: jQuery(
            "#isEnableAutomaticUpdateForAvailability"
          ).prop("checked")
            ? "Y"
            : "N",
          priceFormulaIntervalls: l,
          _savedConfiguration: t,
          onlyPublishProductWillSync: jQuery(
            "#onlyPublishProductWillSync"
          ).prop("checked")
            ? "Y"
            : "N",
          enableAutomaticUpdates: jQuery("#enableAutomaticUpdates").prop(
            "checked"
          )
            ? "Y"
            : "N",
          applyPriceFormulaAutomaticUpdate: jQuery(
            "#applyPriceFormulaAutomaticUpdate"
          ).prop("checked")
            ? "Y"
            : "N",
          syncRegularPrice: jQuery("#syncRegularPrice").prop("checked")
            ? "Y"
            : "N",
          syncSalePrice: jQuery("#syncSalePrice").prop("checked") ? "Y" : "N",
          syncStock: jQuery("#syncStock").prop("checked") ? "Y" : "N"
        },
        success: function(e) {
          console.log("----saved formula--------", e);
        },
        error: function(e) {},
        complete: function() {
          document.location.reload(!0),
            displayToast("Configuration saved successfully"),
            jQuery("#savedCorrectlySection").show();
        }
      });
  }),
  jQuery(document).on("click", "#searchBySku", function(e) {
    if ("false" != localStorage.getItem("_isAuthorized")) {
      jQuery("#product-pagination").empty(),
        jQuery(".loader2").css({
          display: "block",
          position: "fixed",
          "z-index": 9999,
          top: "50px",
          right: "50px",
          "border-radius": "35px",
          "background-color": "red"
        });
      let e = jQuery("#skusearchValue").val();
      e
        ? jQuery.ajax({
            url: wooshark_params.ajaxurl,
            type: "POST",
            dataType: "JSON",
            data: {
              action: "search-product-by-sku_for_ebay",
              searchSkuValue: e
            },
            success: function(e) {
              if ((stopLoading(), e)) {
                var t = jQuery("#products-wooshark");
                t.find("tbody tr").remove(),
                  e.forEach(function(e, a) {
                    t.append(
                      "<tr><td ><img style='border:1px solid grey' width='80px' height='80px' src=" +
                        e.image +
                        "></img></td><td>" +
                        e.sku +
                        "</td><td>" +
                        e.id +
                        "</td> <td>" +
                        e.title.substring(0, 50) +
                        ' <div style="color:blue"> ( ' +
                        e.status +
                        " ) </div></td><td><button class='btn btn-primary' ><a style='color:white' href=" +
                        e.productUrl +
                        "  target='_blank'> Original product url </a></button></td><td><button class='btn btn-primary' id='sync-product-stock-and-price'><a style='color:white'  target='_blank'> Update product stock and price</a></button></td><td><button class='btn btn-success' id='insert-product-reviews' style='width:100%'><a style='color:white'  data-toggle='modal' data-target='#myModalReviews'> Insert Reviews </a></button></td><td>last updated: " +
                        e.lastUpdated +
                        "</td></tr>"
                    );
                  });
              }
            },
            error: function(e) {
              e && e.responseText && displayToast(e.responseText, "red"),
                stopLoading();
            },
            complete: function() {
              console.log("SSMEerr"), stopLoading();
            }
          })
        : getAllProducts(1);
    } else displayToast("please activate your account", "red");
  });
let productDetailsOldVariationsAndNewVariations = [];

function getOldProductDetails(e, t, a) {
  t && 1 == t.length && (t[0].productId = a.sku);
  jQuery.ajax({
    url: wooshark_params.ajaxurl,
    type: "POST",
    dataType: "JSON",
    data: { action: "get-old-product-details_for_ebay", post_id: a.id },
    success: function(e) {
      let r = [];
      if ((stopLoadingText(), e && e.length && "simple" != e.type)) {
        logGettingNewProductVariations(!0, e.length);
        let o = t.find(function(e) {
          return e.productId == a.sku;
        });
        if (
          o &&
          o.variations &&
          o.variations.Variation &&
          o.variations.Variation.length
        ) {
          (o.oldVariations = e),
            stopLoadingText(),
            o.variations.Variation &&
              o.variations.Variation.length &&
              o.variations.Variation.forEach(function(e) {
                r.push({
                  skuId: e.SKU,
                  regularPrice: e.StartPrice.Value,
                  salePrice: e.StartPrice.Value,
                  availQuantity: e.Quantity
                });
              });
          let t = [];
          o.oldVariations.forEach(function(e) {
            e.variation_id;
            let a = r.find(function(t) {
              return t.skuId == e.sku;
            });
            if (a) {
              let r = {};
              a.regularPrice &&
                jQuery("#updateRegularPrice").prop("checked") &&
                (jQuery("#applyPriceFormulaWhileUpdatingProduct").prop(
                  "checked"
                )
                  ? (r.regularPrice = calculateAppliedPrice(a.regularPrice))
                  : (r.regularPrice = a.regularPrice)),
                a.salePrice &&
                  jQuery("#updateSalePrice").prop("checked") &&
                  (jQuery("#applyPriceFormulaWhileUpdatingProduct").prop(
                    "checked"
                  )
                    ? (r.salePrice = calculateAppliedPrice(a.salePrice))
                    : (r.salePrice = a.salePrice)),
                a.availQuantity > -1 && (r.availQuantity = a.availQuantity),
                (r.variation_id = e.variation_id),
                t.push(r);
            }
          }),
            t.length
              ? (totalUpdatedProducts++,
                jQuery("#productUpdatedCount").text(
                  totalUpdatedProducts + " products are updated "
                ),
                logStartCallingServerToUpdateAlreadyMatchedVariations(
                  !0,
                  o.productId,
                  t
                ),
                updateVariationsOnServer(
                  t,
                  o.productId,
                  !0,
                  o.oldVariations.length
                ))
              : (totalUpdatedProducts++,
                jQuery("#productUpdatedCount").text(
                  totalUpdatedProducts + " products are updated "
                ),
                logCouldNotMatchAnyOldVariationWithAnyNewVariation(
                  !0,
                  o.productId
                ));
        } else
          (o && "simple" == o.type) ||
            (o && o.notFound
              ? logUnknownError(currentProductId, productUrl)
              : displayToast(
                  "unknown error, please contact wooshark support for more details if this issue persist"
                ));
      } else if (e && "simple" == e.type) {
        let e = t.find(function(e) {
            return e.productId == a.sku;
          }),
          r = e.currentPrice;
        e.currentPrice &&
          jQuery("#updateRegularPrice").prop("checked") &&
          jQuery("#applyPriceFormulaWhileUpdatingProduct").prop("checked") &&
          (r = calculateAppliedPrice(r)),
          updateSimpleProductOnServer({
            regularPrice: r,
            quantity: e.quantity,
            productSku: a.sku,
            id: a.id
          });
      }
    },
    error: function(e) {
      stopLoading();
    },
    complete: function() {
      console.log("SSMEerr");
    }
  });
}

function logStartUpdateInit(e, t) {
  jQuery(
    '<h5 style="color:orange;">   Estimated Time to finish: ' +
      Math.ceil(e / 60) +
      " minutes  - Number of products to update:  " +
      t +
      "   </h5>"
  ).appendTo(".log-sync-product"),
    jQuery("#applyPriceFormulaWhileUpdatingProduct").prop("checked")
      ? jQuery(
          '<h5 style="color:orange;"> Update products using markup formula is activated   </h5>'
        ).appendTo(".log-sync-product")
      : jQuery(
          '<h5 style="color:orange;"> Formula:  No formula will be applied option is disabled from configuration  </h5>'
        ).appendTo(".log-sync-product");
  var a = getSelectedLanguage();
  jQuery(
    '<h5 style="color:orange;"> Current language: ' + a + "   </h5>"
  ).appendTo(".log-sync-product");
  jQuery('input[name="currency"]:checked')[0] &&
    jQuery('input[name="currency"]:checked')[0].value;
  let r = jQuery("#updateRegularPrice").prop("checked");
  jQuery(
    '<h5 style="color:orange;"> Update regular price: ' + r + "   </h5>"
  ).appendTo(".log-sync-product");
  let o = jQuery("#updateSalePrice").prop("checked");
  jQuery(
    '<h5 style="color:orange;"> Update Sale price: ' + o + "   </h5>"
  ).appendTo(".log-sync-product");
}

function logStartCallingServerToUpdateAlreadyMatchedVariations(e, t, a) {}

function logCouldNotMatchAnyOldVariationWithAnyNewVariation(e, t) {
  e
    ? jQuery(
        '<h5 style="color:green;"> ID: ' +
          t +
          " 1-  No variations to update (variations sku id are missing)...</h5>"
      ).appendTo(".log-sync-product")
    : jQuery(
        '<h5 style="color:green;"> ID: ' +
          t +
          " 5-  No variations to update (variations sku id are missing)...</h5>"
      ).appendTo(".log-sync-product"),
    stopLoading();
}

function logCannotFinfProductWithTheSkuFromTheListOfalreadyResolvedOldVariations(
  e
) {
  e
    ? jQuery(
        '<h5 style="color:green;"> ID:  1-  No variations to update (variations sku id are missing)...</h5>'
      ).appendTo(".log-sync-product")
    : jQuery(
        '<h5 style="color:green;"> ID: 5-  No variations to update (variations sku id are missing)...</h5>'
      ).appendTo(".log-sync-product");
}

function logCannotFindVariationsOfExistingProduct(e) {
  jQuery(
    '<h5 style="color:red;"> ID: ' +
      e +
      " 2- Could not find variations, please verify that the produdct is not out of stock </h5>"
  ).appendTo(".log-sync-product"),
    jQuery(
      '<h5 style="color:red;"> ID: ' +
        e +
        " 3- Update done with status failure </h5>"
    ).appendTo(".log-sync-product"),
    jQuery(
      '<button id="remove-product-from-wp" idOfPRoductToRemove="' +
        e +
        '" class="btn btn-danger" style="margin-top:10px;"> Remove product from your shop </button >'
    ).appendTo(".log-sync-product"),
    stopLoading();
}

function logProductNotFound(e, t) {
  jQuery(
    '<h5 style="color:red;"> ID: ' +
      e +
      " 4-  Cannot retrieve new product variations - It seems that the product does not exist anymore on AliExpress, Product will be set to draft and will be available on the tab draft products</h5>"
  ).appendTo(".log-sync-product"),
    jQuery(
      '<button  class="btn btn-danger" style="margin-top:10px; margin-right:5px" ><a href="' +
        t +
        '" target="_blank">Open product page on Aliexpress</a>  </button >'
    ).appendTo(".log-sync-product"),
    jQuery(
      '<button id="remove-product-from-wp" idOfPRoductToRemove="' +
        e +
        '" class="btn btn-danger" style="margin-top:10px;"> Remove product from your shop </button >'
    ).appendTo(".log-sync-product"),
    jQuery.ajax({
      url: wooshark_params.ajaxurl,
      type: "POST",
      dataType: "JSON",
      data: { action: "set-to-draft", post_id: e },
      success: function(e) {
        console.log("----response", e);
      },
      complete: function() {
        console.log("complete");
      }
    });
}

function logGettingNewProductVariations(e, t) {
  e ||
    (jQuery(
      '<h5 style="color:green;"> ID: ' +
        currentProductId +
        " 2- " +
        t +
        " Variations are loaded </h5>"
    ).appendTo(".log-sync-product"),
    jQuery(
      '<h5 style="color:green;"> ID: ' +
        currentProductId +
        " 3-  Getting new product variations ...</h5>"
    ).appendTo(".log-sync-product"),
    startLoadingText());
}
jQuery(document).on("click", "#sync-product-stock-and-price", function(e) {
  let t = jQuery(this).parents("tr")[0].cells[2].innerText,
    a = jQuery(this).parents("tr")[0].cells[1].innerText;
  startLoading(),
    getEbayProductDetailsByApi(a, function(e) {
      if (e && e.title) {
        let r = [{ sku: a, id: t }];
        getOldProductDetails(r, [e], r[0]);
      }
    });
}),
  jQuery(document).on("click", "#updateCurrentPage", function(e) {
    let t = jQuery("#products-wooshark tbody tr"),
      a = [],
      r = [];
    if (
      (t.each(function(e, t) {
        r.push({ id: t.cells[2].innerText, sku: t.cells[1].innerText });
      }),
      (a = r.map(function(e) {
        return e.sku;
      })))
    ) {
      let e = a.length;
      logStartUpdateInit(5 * e, e);
      let t = [];
      var o = new XMLHttpRequest();
      (o.onreadystatechange = function() {
        if (4 == o.readyState && 200 === o.status) {
          var e = JSON.parse(o.response);
          let i = e.data;
          if (i && i.length)
            if (
              (console.log("-&&&&&&&&", e),
              (t = e.data) && t.length && r && r.length)
            )
              for (var a = 0; a < r.length; a++)
                !(function(e) {
                  window.setTimeout(function() {
                    getOldProductDetails(r, t, r[e]);
                  }, 1e3 * e);
                })(a);
            else
              displayToast(
                "Cannot get products details from server, please contact wooshark for more details"
              );
          else
            displayToast(
              "Cannot get products details, please contact wooshark for more details"
            );
        }
      }),
        o.open("POST", hostname + ":8002/getEbayDEtailsInBulk", !0),
        o.setRequestHeader("Content-Type", "application/json"),
        o.send(
          JSON.stringify({ productIds: a, globalId: getSelectedLanguage() })
        );
    }
  });
let totalUpdatedProducts = 0;

function stopLoadingText() {
  jQuery("#loading-variation").remove();
}

function updateSimpleProductOnServer(e) {
  jQuery.ajax({
    url: wooshark_params.ajaxurl,
    type: "POST",
    dataType: "JSON",
    data: { action: "update-product-simple_for_ebay", newProduct: [e] },
    success: function(e) {
      stopLoadingText(),
        e.data &&
          e.data.success &&
          jQuery(
            '<h5 style="color:green;"> ID: ' +
              e.data.sku +
              " 2- SUCCESS: (simple product)  product updated successfully </h5>"
          ).appendTo(".log-sync-product");
    },
    error: function(t) {
      jQuery(
        '<h5 style="color:red;"> ID: ' +
          e.productId +
          " 6-  cannot update product </h5>"
      ).appendTo(".log-sync-product"),
        stopLoading();
    },
    complete: function() {
      console.log("SSMEerr"), stopLoading();
    }
  });
}

function updateVariationsOnServer(e, t, a, r) {
  jQuery.ajax({
    url: wooshark_params.ajaxurl,
    type: "POST",
    dataType: "JSON",
    data: {
      action: "update-product-variations_for_ebay",
      updateVariationsOnServer: e,
      totalOldVariations: r
    },
    success: function(e) {
      stopLoadingText(),
        e.data &&
          e.data.success &&
          e.data.success.length &&
          (a
            ? jQuery(
                '<h5 style="color:green;"> ID: ' +
                  t +
                  " 2- SUCCESS: (variable product) " +
                  e.data.success.length +
                  " variations are updated successfully out of " +
                  e.data.totalOldVariations +
                  " </h5>"
              ).appendTo(".log-sync-product")
            : jQuery(
                '<h5 style="color:green;"> ID: ' +
                  t +
                  " 6- SUCCESS: (variable product) " +
                  e.data.success.length +
                  " variations are updated successfully out of " +
                  e.data.totalOldVariations +
                  " </h5>"
              ).appendTo(".log-sync-product")),
        e.data &&
          e.data.error &&
          e.data.error.length &&
          jQuery(
            '<h5 style="color:red;"> ID: ' +
              t +
              " 6-  FAILURE: " +
              e.data.error.length +
              " variations were not updated </h5>"
          ).appendTo(".log-sync-product"),
        e.data &&
          e.data.outOfStock &&
          e.data.outOfStock.length &&
          jQuery(
            '<h5 style="color:orange;"> ID: ' +
              t +
              " 6-  OUT OF STOCK: " +
              e.data.outOfStock.length +
              " variations are out of stock  => already updated</h5>"
          ).appendTo(".log-sync-product");
    },
    error: function(e) {
      jQuery(
        '<h5 style="color:red;"> ID: ' + t + " 6-  Unknown error </h5>"
      ).appendTo(".log-sync-product"),
        stopLoading();
    },
    complete: function() {
      console.log("SSMEerr"), stopLoading();
    }
  });
}

function buildProduct(e) {
  var t = e.title,
    a = e.description,
    r = [],
    o =
      (prepareSpecifications(
        (r = e.variations
          ? prepareeBayVariations(e.variations)
          : { variations: [], NameValueList: [] }),
        e.specifications
      ),
      e.currentPrice),
    i = e.currentPrice,
    n = e.productUrl,
    l = e.quantity,
    s = [];
  e.images && e.images.length > 11 && (s = e.images.slice(0, 10));
  var c = s && s.length ? s : e.images,
    d = [];
  jQuery(".categories input:checked").each(function() {
    d.push(
      jQuery(this)
        .attr("value")
        .trim()
    );
  });
  var u = d,
    p =
      !(!jQuery("#isFeatured") || !jQuery("#isFeatured")[0]) &&
      jQuery("#isFeatured")[0].checked;
  addToWaitingList({
    variations: r,
    currentPrice: o,
    originalPrice: i,
    title: t,
    description: a,
    productUrl: n,
    productId: e.productId,
    productCategoies: u,
    shortDescription: "",
    importSalePrice: !0,
    totalAvailQuantity: l || 1,
    images: c,
    simpleSku: e.productId,
    featured: p
  });
}
jQuery(document).on("click", "#removeFormulaLine", function(e) {
  jQuery(this)
    .parents("tr")
    .remove();
}),
  jQuery(document).on("click", "#importAllProductOnThisPage", function(e) {
    if (alreadyImportedProduct < 45) {
      let e = jQuery("#product-search-container .card");
      startLoading();
      let r = [];
      for (var t = 0; t < e.length; t++) {
        console.log("------------------11");
        let a = jQuery(e[t]).find("#sku")[0].innerText;
        a && r.push(a);
      }
      if (r && r.length) {
        let e = [];
        var a = new XMLHttpRequest();
        (a.onreadystatechange = function() {
          if (4 == a.readyState && 200 === a.status) {
            var t = JSON.parse(a.response);
            let r = t.data;
            r && r.length
              ? (console.log("-&&&&&&&&", t),
                (e = t.data),
                stopLoading(),
                e && e.length
                  ? e.forEach(function(e) {
                      buildProduct(e);
                    })
                  : displayToast(
                      "Cannot get products details from server, please contact wooshark for more details"
                    ))
              : displayToast(
                  "Cannot get products details, please contact wooshark for more details"
                );
          }
        }),
          a.open("POST", hostname + ":8002/getEbayDEtailsInBulk", !0),
          a.setRequestHeader("Content-Type", "application/json"),
          a.send(
            JSON.stringify({ productIds: r, globalId: getSelectedLanguage() })
          );
      }
    } else
      jQuery(".loader2").css({ display: "none" }),
        displayToast(
          "You have reached the maximum number of product to import using the free version. please upgrade to pro version",
          "red"
        ),
        setTimeout(function() {
          window.open("https://www.wooshark.com/ebay");
        }, 3e3);
  });
var globalWaitingList = [];

function addToWaitingList(e) {
  globalWaitingList.push(e),
    jQuery("#importProductInWaitingListToShop").remove(),
    jQuery("#emptyWaitingListProduct").remove(),
    jQuery(
      '<button type="button" id="importProductInWaitingListToShop" style="position:fixed; border-raduis:0px; right: 1%; bottom: 60px; width:15%;z-index:9999" class="waitingListClass btn btn-primary btn-lg"><i class="fa fa-envelope fa-3px"> Import waiting List <span badge badge-primary>' +
        globalWaitingList.length +
        "</span></i></button>"
    ).appendTo(jQuery("html")),
    jQuery(
      '<button type="button" id="emptyWaitingListProduct" style=" position:fixed; border-raduis:0px; bottom: 10px; right: 1%;  width:15%;z-index:9999" class="waitingListClass btn btn-danger btn-lg"><i class="fa fa-trash-o fa-3px">  Reset Waiting list </span></i></button>'
    ).appendTo(jQuery("html"));
}
jQuery(document).on("click", "#emptyWaitingListProduct", function(e) {
  jQuery("#emptyWaitingListProduct").remove(),
    jQuery("#importProductInWaitingListToShop").remove(),
    (globalWaitingList = []);
}),
  (indexStopLoading = 0),
  jQuery(document).on("click", "#importProductInWaitingListToShop", function(
    e
  ) {
    startLoading(),
      jQuery("#emptyWaitingListProduct").remove(),
      jQuery("#importProductInWaitingListToShop").remove();
    for (var t = 0; t < globalWaitingList.length; t++)
      !(function(e) {
        window.setTimeout(function() {
          jQuery("#isImportImageVariationsSingleImport").prop("checked");
          let t = jQuery("#isFeaturedProduct").prop("checked"),
            a = jQuery("#isPublishProductSingleImport").prop("checked"),
            r = jQuery("#applyPriceFormulawhileImporting").prop("checked");
          var o = [];
          jQuery(".chk:input:checked").each(function() {
            jQuery(this) && jQuery(this).val() && o.push(jQuery(this).val());
          });
          var i = {
            title: globalWaitingList[e].title,
            description: globalWaitingList[e].description,
            images: globalWaitingList[e].images,
            variations: globalWaitingList[e].variations.variations,
            prductUrl: globalWaitingList[e].productUrl,
            mainImage: globalWaitingList[e].mainImage,
            simpleSku: globalWaitingList[e].simpleSku,
            quantity: globalWaitingList[e].totalAvailQuantity,
            regularPrice: globalWaitingList[e].originalPrice,
            productType: "variable",
            attributes: globalWaitingList[e].variations.NameValueList,
            shortDescription: "",
            isFeatured: !0,
            postStatus: !0,
            postStatus: "publish"
          };
          let n = i.regularPrice ? i.regularPrice.toString() : "";
          jQuery.ajax({
            url: wooshark_params.ajaxurl,
            type: "POST",
            dataType: "JSON",
            data: {
              action: "wooshark-insert-product_for_ebay",
              sku: i.simpleSku.toString(),
              title: i.title,
              description: i.description || "",
              productType:
                i.variations && i.variations.length ? "variable" : "simple",
              mainImage: i.mainImage,
              images:
                i.images && i.images.length > 2
                  ? i.images.slice(0, 2)
                  : i.images || [],
              postStatus: a ? "publish" : "draft",
              shortDescription: i.shortDescription || "",
              productUrl: i.prductUrl,
              categories: o,
              isFeatured: t,
              importVariationImages: !1,
              regularPrice: r ? calculateAppliedPrice(n) : n,
              quantity: i.quantity,
              attributes: i.attributes,
              variations: i.variations
            },
            success: function(e) {
              e && e.error && e.error_msg && displayToast(e.error_msg, "red"),
                e && !e.error && e.data && displayToast(e.data, "green");
            },
            error: function(e) {
              console.log("****err", e),
                e &&
                  displayToast(
                    "error while inserting products, please retry",
                    "red"
                  );
            },
            complete: function() {
              console.log("SSMEerr"),
                indexStopLoading++,
                indexStopLoading == globalWaitingList.length &&
                  (stopLoading(), (globalWaitingList = []));
            }
          });
        }, 3e3 * e);
      })(t);
  });
