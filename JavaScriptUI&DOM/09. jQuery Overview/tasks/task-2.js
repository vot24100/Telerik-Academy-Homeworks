/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {

    var $button,
        $target,
        $next;

    if ((typeof selector) !== 'string' || $(selector).length === 0) {
      throw new Error();
    }

    $button = $('.button');
    $button.text('hide');

    $(selector).on('click', onClick);

    function onClick(ev){
      $target = $(ev.target);

      if ($target.hasClass('button')){
        $next = $target;

        while($next){
          if ($next.hasClass('content')){
            break;
          }
          $next = $next.next();
        }

        if($next.css('display') === 'none'){
          $target.text('hide');
          $next.css('display', '');
        }
        else{
          $target.text('show');
          $next.css('display', 'none');
        }
      }
    }


  };
};

module.exports = solve;