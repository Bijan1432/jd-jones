<?php include 'include/header.php'; ?>
        <div class="banner clearfix">
            <div class="banner-bg g-prod-compression-packing" style="background-image:URL(images/sugar/ban_ind_sugar.jpg)">
                <!--<img src="img/ban-industried-served.jpg" alt="">-->
                <div class="container">
                    <!--<div class="carousel-caption animated fadeInDown">
		  <h1>EXCELLENT DIMENSIONAL STABILITY</h1>
		</div>-->
                    <!-- carousel-caption -->
                </div>
                <!-- .container -->
            </div>
        </div>

        <!-- /.carousel -->
        <div class="container space-bttm-40 content-body">
            <div class="row">
                <div class="headline text-center clearfix">
                    <h2 class="cross-line"><span>Sugar Plant</span></h2>
                </div>
                <div class="clearfix">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <figure>
                            <div><img class="img-circle" src="images/sugar/logo_ind_sugar.jpg"></div>
                        </figure>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 pull-right">
                        <p class="lead semibold">Application</p>
                        <button class="accordion accbtn" rel="Vacuum Pumps Inner Lube">
				<pan>Vacuum Pumps Inner Lube</pan>
			  </button>
                        <div class="panel">
                            <div>
                                <ul class="clearfix">
                                    <li><a href="/our-products/compression-packing/na-730">NA 730</a></li>
                                    <li><a href="/our-products/compression-packing/na-751">NA 751</a></li>
                                    <li><a href="/our-products/compression-packing/na-758h">NA 758H</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="accordion accbtn" rel="Cold Water, Raw Water, Worm Water">
				<pan>Cold Water, Raw Water, Worm Water</pan>
			  </button>
                        <div class="panel">
                            <div>
                                <ul class="clearfix">
                                    <li><a href="/our-products/compression-packing/na-768">NA 768</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="accordion accbtn" rel="Superheated and Saturated Steam, Acid and Alkali, Dyes and Chemical Oil">
				<pan>Superheated and Saturated Steam, Acid and Alkali, Dyes and Chemical Oil</pan>
			  </button>
                        <div class="panel">
                            <div>
                                <ul class="clearfix">
                                    <li><a href="/our-products/compression-packing/na-701">NA 701</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="accordion accbtn" rel="Caustics, Acid and Alkali, Boiler Feed Water, Condensate, DM Water, Solvents and Chemical">
				<pan>Caustics, Acid and Alkali, Boiler Feed Water, Condensate, DM Water, Solvents and Chemical</pan>
			  </button>
                        <div class="panel">
                            <div>
                                <ul class="clearfix">
                                    <li><a href="/our-products/compression-packing/na-758h">NA 758H</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="accordion accbtn" rel="Acid and Alkali of any Concentration, Corrosive Gases, Imbibition Juice, Raw Juice, Syrup, Unstrained and Strained Juice">
				<pan>Acid and Alkali of any Concentration, Corrosive Gases, Imbibition Juice, Raw Juice, Syrup, Unstrained and Strained Juice</pan>
			  </button>
                        <div class="panel">
                            <div>
                                <ul class="clearfix">
                                    <li><a href="/our-products/compression-packing/na-737">NA 737</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="accordion accbtn" rel="Superheated and Saturated Steam, Acid and Alkali">
				<pan>Superheated and Saturated Steam, Acid and Alkali</pan>
			  </button>
                        <div class="panel">
                            <div>
                                <ul class="clearfix">
                                    <li><a href="/our-products/graphite-sealing-products/na-710-pressure-seal-ring">NA 710 Pressure Seal Ring</a></li>
                                    <li><a href="/our-products/graphite-sealing-products/na-710v">NA 710V</a></li>
                                </ul>
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
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                }
            }
            jQuery(document).ready(function() {
                jQuery(".accbtn").click(function(e) {
                    location.hash = jQuery(this).attr("rel"); // get the clicked link id
                    e.preventDefault();
                })
                var hash = window.location.hash;
                hash = hash.substr(1)
                if (hash != "") {
                    jQuery('.accbtn[rel="' + hash + '"]').trigger("click")
                }

            })
        </script>










        <style>
            .section-intro h1 {
                line-height: 46px;
            }

            .section-intro p {
                line-height: 24px;
                font-size: 16px;
                /* letter-spacing: 1px; */
                font-weight: 400;
            }

            .section-intro h2 {
                /* line-height: 24px; */
                font-size: 30px;
                /* letter-spacing: 1px; */
            }

            .section-intro h3 {
                /* line-height: 24px; */
                font-size: 26px;
                /* letter-spacing: 1px; */
            }

            .btn-primary {
                border: 0px solid transparent;
                background-color: #f26522;
                background-image: none;
                transition: background-color 0.5s ease;
                padding: 8px 14px;
                font-size: 16px;
                line-height: 22px;
                font-weight: 600;
            }

            .btn-lg {
                border-radius: 26px;
            }
        </style>



        <div class="section section-intro content">
            <div class="container">
                <h1 style="margin-bottom: 20px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iusto, doloremque reprehenderit reiciendis vitae ipsam.</h1>
                <div class="row">
                    <div class="col-md-6">
                        <div class="intro-content">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum voluptatem sunt corrupti minus sint omnis voluptates nulla impedit. Quae, odio. Recusandae facere, ullam explicabo blanditiis cum laudantium voluptates perspiciatis
                                quaerat ad exercitationem hic illo suscipit ratione fugiat similique ducimus adipisci, totam fugit temporibus possimus!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet magnam impedit assumenda nesciunt id nam eaque facilis ipsam maxime exercitationem eum commodi at tenetur nobis, reiciendis sit? Distinctio magnam autem dolorem?
                                Omnis, inventore fugiat perspiciatis magnam libero error quaerat tempora exercitationem est magni. &amp; Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Commodi ut exercitationem ab!</p>
                            <a href="#" class="btn btn-primary btn-lg" style="color:#fff;">Lorem, ipsum dolor.</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="basic-padding">
                            <img src="images/sugar/styles/large/public/logo_prod_compression_packing_0.jpg?itok=-rkx5ZEk" class="img-responsive" alt="banner">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">




                        <h2 style="margin-top: 50px;margin-bottom: 10px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit provident possimus.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur porro dignissimos et consequuntur sapiente, sequi, illo, reiciendis alias iusto ut reprehenderit atque aut mollitia. Architecto aliquid ratione sapiente eaque
                            cumque quidem consequuntur a earum aut, illo incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed mollitia sequi in praesentium beatae nesciunt ut a at doloremque! Ducimus quaerat magnam est eius praesentium
                            voluptatem mollitia eligendi, a, eum corrupti consequatur quas laudantium hic.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum voluptate porro nostrum facilis ipsa excepturi fugit odio aliquid, distinctio omnis cumque sapiente! Assumenda, doloribus cumque distinctio architecto laborum
                            consequuntur delectus minus, nemo dignissimos repellendus quibusdam, illo nostrum iste rerum molestias. Earum alias, temporibus repudiandae enim molestiae fugit facere! Neque maiores accusantium itaque atque amet repudiandae
                            perferendis, at a quo quas animi recusandae sapiente. Libero iste est corrupti itaque pariatur? Est distinctio ipsam laudantium ut dolor dicta dignissimos enim temporibus debitis odit? Expedita aliquid pariatur non magni ad
                            reprehenderit consectetur repellat! Officiis error ipsa temporibus atque illum consequuntur quae maxime aperiam! Pariatur animi labore quas eos tempore assumenda atque vero architecto velit ad!<a href="#">For Her</a> Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam maxime nostrum dicta? Quidem ullam eius aspernatur pariatur dolorem et quam veniam debitis porro architecto in corrupti error suscipit dolores asperiores,
                            numquam praesentium quo officiis possimus fugiat assumenda! Voluptate maxime consequatur fugit eos harum atque voluptatibus dicta assumenda repellat explicabo earum minus consectetur quo, error saepe temporibus. Doloribus,
                            assumenda atque. A at reprehenderit beatae magni incidunt maxime quis cum, explicabo iure eum nobis, quaerat dolor, veniam quibusdam!</p>
                        <h2 style="margin-top: 50px;margin-bottom: 10px;">Stylish Mens Formal Leather Shoes Designed to Last
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quod mollitia, libero veritatis minima, fugiat temporibus aperiam veniam voluptatem dicta molestias? Minima aperiam odio ex molestias quas, dolores nobis voluptatum
                            sit sunt itaque debitis doloremque a odit quae quisquam dolor est deserunt iure, eligendi sint ad voluptates! Voluptas, repudiandae ullam! Accusamus doloribus blanditiis aut eaque nihil ex, harum dolorum officia perspiciatis
                            odit facere beatae quisquam cumque expedita sunt ratione veritatis.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tenetur nihil provident consequuntur eum velit, voluptatem quae perspiciatis, exercitationem, molestiae ipsum quibusdam?
                            <a href="#">lorem</a> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure accusantium officia placeat ipsum. <a href="#">get in contact</a>Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nam officia ullam adipisci eos et omnis harum quas!</p>
                        <h2 style="margin-top: 50px;margin-bottom: 10px;">Lorem ipsum dolor sit amet consectetur, adipisicing elit.- FAQS</h2>
                        <h3 style="margin-top: 20px;margin-bottom: 10px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus ea ut quasi totam odio in!
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae, ipsam saepe incidunt fugit soluta expedita tempora et, aperiam vitae necessitatibus sequi nisi hic repellendus.<a href="#">ipsum lorem</a>, <a href="#">lorem</a>,
                            <a href="#">snelorem</a>, <a href="#">lifestyle lorem</a> &amp; <a href="#">salorem</a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore eligendi delectus illum natus vero dolore.</p>
                        <h3 style="margin-top: 20px;margin-bottom: 10px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero, commodi enim laboriosam placeat aut.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sed expedita vero quae dolor iure illo consequuntur nemo nobis quisquam optio fugit, porro rem laborum.</p>
                        <h3 style="margin-top: 20px;margin-bottom: 10px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, harum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas soluta temporibus voluptatum quaerat eius voluptatem excepturi placeat eligendi beatae nesciunt, tempore, aspernatur rerum officia. Enim nulla asperiores voluptatibus
                            architecto. Vitae inventore maxime ratione, numquam voluptatum accusantium cumque quod, vero consectetur consequatur dolore dolorum aspernatur ipsa at, libero recusandae doloremque magni praesentium neque odit nulla.</p>



                    </div>
                </div>
            </div>
        </div>

        <?php include 'include/footer.php'; ?>