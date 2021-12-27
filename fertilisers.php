<?php include 'include/header.php'; ?>
      

      <div class="banner clearfix">
        <div class="banner-bg g-prod-compression-packing" style="background-image:URL(images/fertilisers/ban_ind_fertilisers.jpg)"><!--<img src="img/ban-industried-served.jpg" alt="">-->
          <div class="container"> 
            <!--<div class="carousel-caption animated fadeInDown">
              <h1>EXCELLENT DIMENSIONAL STABILITY</h1>
            </div>--> 
            <!-- carousel-caption --> 
          </div>
          <!-- .container --> 
        </div>
    </div>



    <div class="container space-bttm-40 content-body">
        <div class="row">
          <div class="headline text-center clearfix">
            <h2 class="cross-line"><span>Fertilisers</span></h2>
          </div>
          <div class="clearfix">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <figure>
                <div><img class="img-circle" src="images/fertilisers/logo_ind_fertilisers.jpg"></div>
              </figure>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 pull-right">
              <p class="lead semibold">Application</p>
                            <button class="accordion accbtn" rel="Bitumen Carbonate Ammonia Pump and other Plunger Pumps">
                    <pan>Bitumen Carbonate Ammonia Pump and other Plunger Pumps</pan>
                  </button>
                  <div class="panel">
                    <div>
                      <ul class="clearfix">
                        <li><a href="/our-products/compression-packing/na-745pp">NA 745PP</a></li><li><a href="/our-products/compression-packing/na-781pp">NA 781PP</a></li>				  </ul>
                    </div>
                  </div>
                                <button class="accordion accbtn" rel="Acid Pumps">
                    <pan>Acid Pumps</pan>
                  </button>
                  <div class="panel">
                    <div>
                      <ul class="clearfix">
                        <li><a href="/our-products/compression-packing/na-737">NA 737</a></li><li><a href="/our-products/compression-packing/na-757">NA 757</a></li><li><a href="/our-products/compression-packing/na-758h">NA 758H</a></li>				  </ul>
                    </div>
                  </div>
                            
        </div>
        <!-- /.row --> 
      </div>
      <!-- .container -->
     </div>
     </div>

     <script>

        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          }
        }
        jQuery(document).ready(function(){
            jQuery(".accbtn").click(function(e){
                location.hash = jQuery(this).attr("rel"); // get the clicked link id
                e.preventDefault();
            })
            var hash = window.location.hash;
            hash = hash.substr(1)
            if(hash != ""){
                jQuery('.accbtn[rel="'+hash+'"]').trigger("click")
            }
            
        })
        </script>

    













      
<?php include 'include/footer.php'; ?>