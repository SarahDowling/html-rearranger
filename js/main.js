var $h1 = $('h1');
var $ul = $('ul');

$h1.html('Below ground veggies');
$ul.addClass('underground-veggies');
$h1.html('Above ground veggies');

$('.more-dinos').remove();

dinos.forEach(function (dino) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $caption.html(dino.name);
  $img.attr('src', 'img/' + dino.img);

  $figure.append($img, $caption);
  $li.append($figure);
  $ul.append($li);
});
