/**
 * Simple Slides
 * Written By: Andrew Spittal
 * Date: May 1st 2012
 * Description: A simple plugin which ties into a preformatted 
 * DOM with slides and next and previous buttons. The elements can be
 * any classname if you pass in the alternate class names as an option.
 *
 * Default options are:
 * slide: '.slide' - The class name for the div of slide
 * nextSlide: '.nextSlide' - The class name for the next slide button
 * previousSlide: '.previousSlide' - The class name for the previous slide button
 *
 * Assumptions:
 * Buttons are contained within a 'slide' div
 *
 * Example Usage:
 *
 * --HTML--
 * <div class="presentation"> 
 *      <div class="slide">
 *          <!-- Slide Content -->
 *          <button class="nextSlide">Next</button>
 *      </div>
 *      <div class="slide">
 *          <!-- Slide Content -->
 *          <button class="previousSlide">Back</button>
 *          <button class="nextSlide">Next</button>
 *      </div>
 *      <div class="slide">
 *          <!-- Slide Content -->
 *          <button class="nextSlide">Next</button>
 *      </div>
 * </div>
 *
 * --Jquery--
 * $(document).ready( function() {
 *      $('.presentation').simpleSlides();
 * });
 */
;(function( $ ) {
    $.fn.simpleSlides = function( options ) {
        // Protect this from the outside world
        var $simpleSlides = $(this);

        // Initialize defaults
        var defaults = {
            slide: '.slide',
            nextSlide: '.nextSlide',
            previousSlide: '.previousSlide'
        };

        // Initialize
        $simpleSlides.init = function() {
            $simpleSlides.options = $.extend(defaults, options);

            // Hide all the slides
            $simpleSlides.find($simpleSlides.options.slide).hide();

            // Show the first slide
            $simpleSlides.find($simpleSlides.options.slide).first().show();
        }
        $simpleSlides.init();

        // Methods

        // changeSlide
        // Changes a slide
        // params:  slideButton - the button that was pressed
        //          next - the next slide class (whether prev or next slide)
        $simpleSlides.changeSlide = function(slideButton, next) {
            slideButton.parents($simpleSlides.options.slide).slideUp("slow", function(){
                next.slideDown("slow");
            });
        }

        // Event Binding
        // Setup the next and previous events
        $simpleSlides.find($simpleSlides.options.nextSlide).click(function(){
            $simpleSlides.changeSlide(
                $(this),
                $(this).parents($simpleSlides.options.slide).next()
            );
        });

        $simpleSlides.find($simpleSlides.options.previousSlide).click(function(){
            $simpleSlides.changeSlide(
                $(this),
                $(this).parents($simpleSlides.options.slide).prev()
            );
        });
    };
})( jQuery );
