const target = document.querySelector('.container');

if (target && !document.querySelector("#ins-widget-template")) {
  Reco();
}

function Reco() {
  fetch('https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json')
    .then(response => response.json())
    .then(products => {
      products.sort((a, b) => a.id - b.id);
      initWidget(products);
    })
    .catch(error => console.error('Error fetching products:', error));
}

function initWidget(products) {
  if (products.length > 0 && !document.querySelector("#ins-widget-template")) {
    const titleSection = document.createElement("div");
    titleSection.className = "ins-title-section";
    titleSection.innerHTML = `<div class="ins-header">Sizin için Seçtiklerimiz</div>`;
    
    const style = document.createElement("style");
    style.id = "ins-widget-template-style";
    style.innerHTML = `
        .ins-title-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fef6eb;
            padding: 25px 67px;
            border-top-left-radius: 35px;
            border-top-right-radius: 35px;
        }
        
        .ins-title-section .ins-header {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.11;
            color: #f28e00;
            margin: 0;
        }
    
        #ins-widget-template {
            position: relative;
            margin-bottom: 1em;
            font-size: 16px;
            line-height: normal;
            background-color: white;
            padding: 20px;
            padding-top: 25px;
            border-bottom-left-radius: 35px;
            border-bottom-right-radius: 35px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
    
        #ins-widget-template .ins-product-slide {
            display: flex;
            flex-direction: column;
            gap: 0.8em;
            flex-shrink: 0;
            position: relative;
            transition-property: transform;
            padding: 15px;
            box-sizing: border-box;
            transition: all 0.3s ease;
            background-color: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            cursor: pointer;
        }
        
        #ins-widget-template .ins-product-slide:hover {
            border: 3px solid #f28e00;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
    
        #ins-widget-template .ins-product-slide .ins-img-container {
            position: relative;
            overflow: hidden;
            margin-bottom: 10px;
        }
    
        #ins-widget-template .ins-product-slide .ins-img-container img {
            width: 100%;
            height: auto;
            object-fit: contain;
            transition: transform 0.3s ease;
        }
        
        #ins-widget-template .ins-favorite {
            position: absolute;
            cursor: pointer;
            background-color: #fff;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 #00000024;
            width: 50px;
            height: 50px;
            top: 0px;
            right: 0px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        #ins-widget-template .ins-favorite:hover {
            border-color: #f28e00;
        }
        
        #ins-widget-template .ins-favorite svg {
            width: 25px;
            height: 25px;
            fill: transparent;
            stroke: #f28e00;
            stroke-width: 2;
            transition: all 0.3s ease;
        }
        
        #ins-widget-template .ins-favorite.active svg {
            fill: #f28e00;
        }
        
        #ins-widget-template .ins-favorite:hover svg {
            fill: #f28e00;
        }
        
        #ins-widget-template .ins-product-content {
            padding-left: 5px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-height: 180px;
        }
        
        #ins-widget-template .ins-product-description {
            color: #7d7d7d;
            font-size: 1.3rem;
            line-height: 1.3;
            margin-bottom: 5px;
            min-height: 50px;
        }
        
        #ins-widget-template .ins-product-slide .ins-rating {
            display: flex;
            align-items: center;
            height: 30px;
        }
        
        #ins-widget-template .ins-product-slide .ins-rating .ins-stars {
            color: #fed100;
            margin-right: 10px;
            letter-spacing: 3px;
            font-size: 2.4rem;
        }
        
        #ins-widget-template .ins-product-slide .ins-rating .ins-review-count {
            color: #7d7d7d;
            font-size: 1.2rem;
        }
        
        #ins-widget-template .ins-product-slide .ins-price-container {
            display: flex;
            flex-direction: column;
        }
    
        #ins-widget-template .ins-product-slide .ins-price-row {
            display: flex;
            align-items: center;
            gap: 8px;
            height: 30px;
        }
        
        #ins-widget-template .ins-product-slide .ins-original-price {
            color: #9E9E9E;
            text-decoration: line-through;
            font-size: 1.5rem;
            font-weight: 500;
        }
        
        #ins-widget-template .ins-product-slide .ins-discount {
            color: #00a365;
            font-size: 1.7rem;
            font-weight: bold;
        }
    
        #ins-widget-template .ins-product-slide .ins-price {
            color: #00a365;
            font-weight: bold;
            font-size: 2.1rem;
            line-height: 1;
            margin-top: 5px;
            height: 35px;
        }
        
        #ins-widget-template .ins-product-slide .ins-normal-price {
            color: #7d7d7d;
            font-weight: bold;
            font-size: 2.1rem;
            line-height: 1;
            height: 65px;
            display: flex;
            align-items: center;
        }
        
        #ins-widget-template .ins-product-slide .ins-add-to-cart {
            width: 100%;
            padding: 15px 20px;
            border-radius: 37.5px;
            background-color: #fff7ec;
            color: #f28e00;
            font-size: 1.4rem;
            font-weight: 700;
            border: 1px solid #f28e00;
            cursor: pointer;
            text-align: center;
            margin-top: auto;
            transition: all 0.3s ease;
        }
        
        #ins-widget-template .ins-product-slide .ins-add-to-cart:hover {
            background-color: #f28e00;
            color: white;
        }
    
        #ins-widget-template a {
            text-decoration: none;
            color: inherit;
        }
    
        #ins-widget-template a:hover {
            text-decoration: none;
        }
    
        #ins-widget-template .ins-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            margin-bottom: 1em;
        }
    
        #ins-widget-template .ins-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition: transform 0.3s ease;
            box-sizing: content-box;
            gap: 15px;
        }
    
        #ins-widget-template .ins-btn {
            top: 50%;
            position: absolute;
            z-index: 1;
            width: 45px;
            height: 45px;
            background-color: #fef6eb;
            border: 1px solid #f28e00;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateY(-50%);
            transition: all 0.3s ease;
        }
        
        #ins-widget-template .ins-btn svg {
            width: 28px;
            height: 28px;
            fill: #f28e00;
        }
        
        #ins-widget-template .ins-btn:hover {
            background-color: white;
        }
        
        #ins-widget-template .ins-btn.disabled {
            opacity: 0.5;
            cursor: default;
        }
    
        #ins-widget-template .ins-button-prev {
            left: -60px;
        }
    
        #ins-widget-template .ins-button-next {
            right: -65px;
        }
        
        #ins-widget-template .ins-promo-tag {
            background-color: #e1f5eb;
            color: #00a365;
            padding: 8px 10px;
            border-radius: 5px;
            font-size: 1.2rem;
            font-weight: 500;
            display: inline-block;
            margin-top: 5px;
        }
    
        @media only screen and (max-width: 768px) {
            .ins-title-section {
                padding: 15px 20px;
            }
            
            .ins-title-section .ins-header {
                font-size: 1.8rem;
            }
            
            #ins-widget-template .ins-btn {
                width: 40px;
                height: 40px;
            }
            
            #ins-widget-template .ins-btn svg {
                width: 24px;
                height: 24px;
            }
            
            #ins-widget-template .ins-button-prev {
                left: -25px;
            }
            
            #ins-widget-template .ins-button-next {
                right: -25px;
            }
            
            #ins-widget-template .ins-product-description {
                font-size: 1.1rem;
                min-height: 40px;
            }
            
            #ins-widget-template .ins-product-slide .ins-price {
                font-size: 1.6rem;
            }

            #ins-widget-template .ins-product-slide .ins-normal-price {
                font-size: 1.6rem;
                height: 55px;
            }
            
            #ins-widget-template .ins-product-slide .ins-original-price,
            #ins-widget-template .ins-product-slide .ins-discount {
                font-size: 1.2rem;
            }
            
            #ins-widget-template .ins-product-slide .ins-add-to-cart {
                font-size: 1.1rem;
                padding: 10px 15px;
            }
            
            #ins-widget-template .ins-product-content {
                min-height: 160px;
            }
        }
        `;
    document.head.append(style);

    const formatter = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    let html = "";

    for (const product of products) {
      const price = formatter.format(product.price).replace("₺", "").trim() + " TL";
      const originalPrice = formatter.format(product.original_price).replace("₺", "").trim() + " TL";
      
      const hasDiscount = product.price < product.original_price;
      const discountPercent = hasDiscount ? Math.round((1 - product.price / product.original_price) * 100) : 0;
      
      const reviewCount = Math.floor(Math.random() * 500) + 1;
      
      const isFavorite = localStorage.getItem(`favorite-${product.id}`) ? 'active' : '';

      html += `
            <div class="ins-product-slide" data-id="${product.id}">
                <div class="ins-img-container">
                    <img loading="lazy" src="${product.img}" alt="${product.name}" />
                    <button class="ins-favorite ${isFavorite}" data-id="${product.id}">
                        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </button>
                </div>
                <div class="ins-product-content">
                    <div class="ins-product-description">${product.brand} - ${product.name}</div>
                    <div class="ins-rating">
                        <div class="ins-stars">★★★★★</div>
                        <div class="ins-review-count">(${reviewCount})</div>
                    </div>
                    <div class="ins-price-container">
                        ${
                          hasDiscount
                            ? `<div class="ins-price-row">
                                <span class="ins-original-price">${originalPrice}</span>
                                <span class="ins-discount">%${discountPercent}</span>
                              </div>
                              <div class="ins-price">${price}</div>`
                            : `<div class="ins-normal-price">${price}</div>`
                        }
                    </div>
                    <div class="ins-promo-tag">Farklı Ürünlerde 3 Al 2 Öde</div>
                </div>
                <button class="ins-add-to-cart">Sepete Ekle</button>
            </div>
            `;
    }

    if (html === "") return;

    const widget = document.createElement("section");
    widget.id = "ins-widget-template";
    widget.className = "ins-widget";
    widget.innerHTML = `
        <div class="ins-container">
            <div class="ins-wrapper">
                ${html}
            </div>
        </div>
        <button class="ins-btn ins-button-prev disabled">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button class="ins-btn ins-button-next">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
        `;
    
    target.after(titleSection);
    titleSection.after(widget);

    initCarousel();
    
    document.querySelectorAll('.ins-favorite').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const productId = this.dataset.id;
        const key = `favorite-${productId}`;
        
        if (localStorage.getItem(key)) {
          localStorage.removeItem(key);
          this.classList.remove('active');
        } else {
          localStorage.setItem(key, 'true');
          this.classList.add('active');
        }
      });
    });
    
    document.querySelectorAll('.ins-add-to-cart').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const productId = this.closest('.ins-product-slide').dataset.id;
        console.log(`Added product ${productId} to cart`);
      });
    });
    
    document.querySelectorAll('.ins-product-slide').forEach(slide => {
      slide.addEventListener('click', function() {
        const productId = this.dataset.id;
        console.log(`Clicked on product ${productId}`);
      });
    });
  }
}

function initCarousel() {
  const carouselContainer = document.querySelector('#ins-widget-template .ins-container');
  const carouselWrapper = document.querySelector('#ins-widget-template .ins-wrapper');
  const productSlides = document.querySelectorAll('#ins-widget-template .ins-product-slide');
  const prevButton = document.querySelector('#ins-widget-template .ins-button-prev');
  const nextButton = document.querySelector('#ins-widget-template .ins-button-next');
  
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;
  
  const totalProducts = productSlides.length;
  const viewportWidth = window.innerWidth;
  const isMobile = viewportWidth <= 768;
  const itemsPerView = isMobile ? 2 : 5;
  
  function setupCarousel() {
    const containerWidth = carouselContainer.offsetWidth;
    const itemWidth = (containerWidth / itemsPerView) - (isMobile ? 8 : 12);
    
    productSlides.forEach(slide => {
      slide.style.width = `${itemWidth}px`;
      slide.style.flexShrink = "0";
      slide.style.flexGrow = "0";
    });
    
    prevButton.classList.add('disabled');
    
    if (totalProducts <= itemsPerView) {
      nextButton.classList.add('disabled');
    } else {
      nextButton.classList.remove('disabled');
    }
    
    updateCarouselPosition();
  }
  
  function updateCarouselPosition() {
    if (productSlides.length === 0) return;
    
    const slideWidth = productSlides[0].offsetWidth;
    const gapWidth = 15;
    
    const translateX = currentIndex * (slideWidth + gapWidth);
    carouselWrapper.style.transform = `translateX(-${translateX}px)`;
    
    prevButton.classList.toggle('disabled', currentIndex === 0);
    nextButton.classList.toggle('disabled', currentIndex + itemsPerView >= totalProducts);
  }
  
  nextButton.addEventListener('click', () => {
    if (currentIndex + itemsPerView < totalProducts) {
      currentIndex += 1;
      updateCarouselPosition();
    }
  });
  
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateCarouselPosition();
    }
  });
  
  carouselWrapper.addEventListener('mousedown', startDrag);
  carouselWrapper.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('mousemove', drag);
  window.addEventListener('touchmove', drag, { passive: true });
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);
  
  function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    carouselWrapper.style.transition = 'none';
    
    e.preventDefault();
  }
  
  function drag(e) {
    if (!isDragging) return;
    
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX;
    
    if (Math.abs(diff) > 5) {
      e.preventDefault();
    }
    
    if (productSlides.length === 0) return;
    
    const slideWidth = productSlides[0].offsetWidth;
    const gapWidth = 15;
    const baseTranslate = currentIndex * (slideWidth + gapWidth);
    const translate = baseTranslate - diff;
    
    if (
      (currentIndex === 0 && diff > 0) || 
      (currentIndex + itemsPerView >= totalProducts && diff < 0)
    ) {
      carouselWrapper.style.transform = `translateX(-${baseTranslate - diff / 4}px)`;
    } else {
      carouselWrapper.style.transform = `translateX(-${translate}px)`;
    }
  }
  
  function endDrag(e) {
    if (!isDragging) return;
    
    isDragging = false;
    carouselWrapper.style.transition = 'transform 0.3s ease';
    
    const currentX = e.type.includes('mouse') ? e.pageX : (e.changedTouches ? e.changedTouches[0].pageX : startX);
    const diff = currentX - startX;
    
    if (productSlides.length === 0) return;
    
    const slideWidth = productSlides[0].offsetWidth;
    
    if (diff < -slideWidth / 3 && currentIndex + itemsPerView < totalProducts) {
      currentIndex += 1;
    } else if (diff > slideWidth / 3 && currentIndex > 0) {
      currentIndex -= 1;
    }
    
    updateCarouselPosition();
  }
  
  window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 768;
    
    if (newIsMobile !== isMobile) {
      location.reload();
    } else {
      setupCarousel();
    }
  });
  
  setupCarousel();
}