// carousel tee shirt women / men defilement
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})




// image carousel teeshit men
let secondCarousel = document.querySelector('.secondCarousel');
    teeshirt_men.forEach(function (element) {
    
        secondCarousel.innerHTML += 
              `<div class=" carousel-item ${element.id == 1 ? "active" : ""}">
                  <div class="col-md-3">
                      <div class="card m-auto" id="${element.id}">
                          <div class="card-img">
                              <img src="${element.attachment}" class="img-fluid" alt="${element.alt}">
                          </div>
                      </div>
                  </div>
              </div>`
    })
