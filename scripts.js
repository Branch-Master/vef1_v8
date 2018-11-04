const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    _items.addEventListener('change',finish);
    
    var spans = document.getElementsByClassName("item__text");

    for(var i=0; i<spans.length;i++){
      spans[i].onclick = edit;
      
    }
    
  
  }

  function formHandler(e) {
   e.preventDefault();

    var value = document.getElementsByClassName('form__input')[0].value;
   
    if(value.trim().length > 0 ){
      add(value); 
    }
   

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.preventDefault();
    console.log("finish");
    

    var checkboxes = document.getElementsByClassName("item__checkbox");

    for(var i =0; i< checkboxes.length; i++){
      if(checkboxes[i].checked === true){
          checkboxes[i].parentElement.className="item item--done";
      }
      else if(checkboxes[i].checked === false){
          checkboxes[i].parentElement.className="item";
      }
    }

}

  // event handler fyrir það að breyta færslu
  function edit(e) {
    e.preventDefault();
    
    console.log(this);

    var $input = ("<input>", {val: (this).innerHTML ,type: "text"});

  $input.className="item__text";
  this.replaceWith($input);
  $input.click("blur", commit);
  $input.select();
   
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    var $span = $("<span>", {text: $(this).val()});

  $span.addClass("loadNum");
  $(this).replaceWith($span);
  $span.on("click", switchToInput);
    

  }

  // fall sem sér um að bæta við nýju item
  function add(value) {

    var ul = document.getElementById("item__list");
    var li = document.createElement("li");
    li.className = "item";

    var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = 0;
        checkbox.className = "item__checkbox";
    
    li.appendChild(checkbox);

    var text = document.createElement("span");
    text.className = "item__text";
    text.innerHTML = value;

    li.appendChild(text);

    var button = document.createElement("button");
        button.className = "item__button";
        button.innerHTML = "Eyða";
    li.appendChild(button);

    ul.appendChild(li);
    
  }

  var add_button = document.getElementsByClassName('form__button');
  add_button.onclick = add;
  // event handler til að eyða færslu
  function deleteItem(e) {
    console.log("delete");

  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
