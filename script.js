let $carousel = $('#displaying');
let counter = 1;
const size = 500;

setInterval(() => {
  $carousel.css({
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(${-size * counter-65}px)`
  });

  counter++;
  if (counter === 2) { 
    counter = 0;
  }
}, 3000);


let $containers = $('.lowerSection');
let $cursor = $('.cursorText');

$containers.each(function() {
    $(this).on('mousemove', function(e) {
        let altText = "";

        let $galleryImage = $(this).find('.gallery-image');
        if ($galleryImage.length) {
            altText = $galleryImage.attr('alt');
        } else {
            let $galleryImageFirst = $(this).find('.gallery-image-first');
            if ($galleryImageFirst.length) {
                altText = $galleryImageFirst.attr('alt');
            } else {
                let $galleryImageSecond = $(this).find('.gallery-image-second');
                if ($galleryImageSecond.length) {
                    altText = $galleryImageSecond.attr('alt');
                }
            }
        }

        $cursor.find('.cursor-text').text(altText);
        $cursor.css({
            display: 'block',
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        });
    });
    $(this).on('mouseleave', function() {
        $cursor.css('display', 'none');
    });
});

function visitWebsite(link) {
  window.location.href = link;
}