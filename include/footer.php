<div class="contextual-links-wrapper">
            <ul class="contextual-links">
                <li class="block-configure first last"><a
                        href="/admin/structure/block/manage/custom_blocks/common_footer/configure?destination=node/7">Configure
                        block</a></li>
            </ul>
        </div>
        <div class="container-fluid">
            <div class="row">
                <footer class="clearfix" style="background-image: url('images/bg-footer.jpg');">
                    <div class="container footer-nav clearfix">
                        <div class="col-xs-12 col-sm-2 col-md-3 col-lg-3">
                            <h4><span class="glyphicon glyphicon-map-marker"></span><a href="/contact-us"> Location</h4>
                            </a>
                            <p>9B Dr Martin Luther King Sarani<br> 2nd Floor Kolkata 700 016<br> India
                            </p>
                        </div>
                        <!-- /.col-lg-3 -->
                        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                            <h4> <span class="glyphicon glyphicon-earphone"></span><a href="/contact-us">Contact</h4>
                            </a>
                            <ul>
                                <li>Phone +91 33 4050 1000</li>
                                <li>Fax +91 33 4050 1075</li>
                                <li>Email <a href="mailto:comments@jdjones.com">comments@jdjones.com</a></li>
                                <li>Connect with us &nbsp;
                                    <a href="https://www.linkedin.com/in/j-d-jones-co-p-ltd-7373a8165/" target="_blank">
                                        <h4 style="display:inline-block;"><span class="fa fa-linkedin">&nbsp;</span>
                                        </h4>
                                    </a>
                                    Follow us &nbsp;
                                    <a href="https://www.linkedin.com/company/jdjones" target="_blank">
                                        <h4 style="display:inline-block;"><span class="fa fa-linkedin">&nbsp;</span>
                                        </h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- /.col-lg-3 -->
                        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                            <h4><span class="glyphicon glyphicon-download-alt"></span> Downloads</h4>
                            <ul>
                                <li><a href="/sites/all/themes/contrib/jones/pdfs/Catalogue_general_new.pdf"
                                        target="_blank">Product Catalogue</a></li>
                                <!--<li><a href="#">Newsletter May 2017</a></li>-->
                            </ul>
                        </div>
                        <!-- /.col-lg-2 -->
                        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                            <h4><span class="lineheightzero"><img
                                        src="images/ico-jdjones.png"
                                        alt="JD Jones Events"></span> Events</h4>
                            <ul>
                                <!--<li><a href="#">Latest Events</a></li>-->
                                <li><a href="/upcoming-events">Upcoming Events</a></li>
                                <!--<li><img src="./sites/all/themes/contrib/jones/img/event-valveworld-2018.png" alt="Valve World 2018"></li>-->
                            </ul>
                        </div>
                        <!-- /.col-lg-2 -->
                        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                            <h4><span class="fa fa-rss" aria-hidden="true"></span> Subscribe</h4>
                            <p>Subscribe to receive corporate &amp; division news, job postings and other updates.</p>
                        </div>
                        <!-- /.col-lg-2 -->
                    </div>
                    <!-- .container / .clearfix -->
                    <div class="copyright col-lg-12 text-center">Designed &amp; Powered by Marko & Brando &copy; 2021
                    </div>
                </footer>
                <!-- #footer -->
            </div>
            <!-- .row -->
        </div>
    </div>




    <script type="text/javascript">
//<![CDATA[
jQuery(window).on('load', function() { // makes sure the whole site is loaded 
	jQuery('#status').delay(500).fadeOut(); // will first fade out the loading animation 
	jQuery('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	//jQuery('body').delay(350).css({'overflow':'visible'});
})
//]]>
jQuery(function(){
  SyntaxHighlighter.all();
});
jQuery(window).load(function(){
  jQuery('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 109,
    itemMargin: 21,
    asNavFor: '#slider'
  });

  jQuery('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    start: function(slider){
      jQuery('body').removeClass('loading');
    }
  });
});
</script>


</body>

</html>