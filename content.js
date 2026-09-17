(function() {
  try {
    // Extract product title
    let title = '';
    const titleSelectors = [
      '#productTitle',
      '[data-cy="product-title"]',
      '#titleSection #productTitle',
      '.product-title-word-break',
      '#productTitle span',
      '[data-testid="product-title"]',
      'h1#title span',
      '#centerCol #productTitle',
      '[data-component-type="s-search-results"] h2 a span',
      '[data-cy="title-recipe"] span',
      'span.a-text-normal'
    ];

    for (const selector of titleSelectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        title = element.textContent.trim();
        break;
      }
    }

    // Extract price
    let price = '';
    const priceSelectors = [
      '.a-price .a-offscreen',
      '[data-cy="price-recipe"] .a-offscreen',
      '.priceToPay .a-offscreen',
      '.a-price[data-a-strike="false"] .a-offscreen',
      '#corePriceDisplay_desktop_feature_div .a-offscreen',
      '#corePrice_feature_div .a-offscreen',
      '.a-price .a-offscreen[aria-hidden="true"]',
      '#priceblock_ourprice',
      '#priceblock_dealprice',
      '.a-price-range .a-offscreen',
      '.a-color-price',
      '.a-text-price .a-offscreen',
      '#newBuyBoxPrice',
      '#priceblock_ourprice_row .a-color-price'
    ];

    for (const selector of priceSelectors) {
      const element = document.querySelector(selector);
      if (element && element.textContent.trim()) {
        price = element.textContent.trim();
        break;
      }
    }

    // Extract ASIN
    let asin = '';
    const url = window.location.href;
    const urlAsinMatch = url.match(/\/dp\/([A-Z0-9]{10})/) || url.match(/\/gp\/product\/([A-Z0-9]{10})/) || url.match(/[?&]asin=([A-Z0-9]{10})/);
    if (urlAsinMatch) {
      asin = urlAsinMatch[1];
    }

    if (!asin) {
      const asinSelectors = [
        '[data-asin]',
        '#ASIN',
        'input[name="asin"]',
        '[data-testid="product-asin"]',
        '#productDetails_techSpec_section_1 [data-asin]',
        '#detailBullets_feature_div [data-asin]',
        '[data-csa-c-asin]',
        'meta[name="asin"]',
        '[data-asin-value]'
      ];

      for (const selector of asinSelectors) {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
          const content = element.getAttribute('content')
            || element.getAttribute('data-asin')
            || element.getAttribute('data-csa-c-asin')
            || element.getAttribute('data-asin-value')
            || element.value
            || element.textContent || '';

          const match = content.match(/\b([A-Z0-9]{10})\b/);
          if (match && match[1].startsWith('B')) {
            asin = match[1];
            break;
          }
        }
        if (asin) break;
      }
    }

    // Validate we have actual data
    const hasRealTitle = title && title.length > 3;
    const hasRealPrice = price && price.length > 1;
    const hasRealAsin = asin && asin.match(/^B[A-Z0-9]{9}$/) ? true : false;

    return {
      title: title || 'Title not found',
      price: price || 'Price not available',
      asin: asin || 'ASIN not found',
      _meta: {
        hasRealTitle: !!hasRealTitle,
        hasRealPrice: !!hasRealPrice,
        hasRealAsin: !!hasRealAsin,
        url: window.location.href
      }
    };
  } catch (error) {
    return {
      title: 'Error',
      price: 'Error',
      asin: 'Error',
      _meta: {
        hasRealTitle: false,
        hasRealPrice: false,
        hasRealAsin: false,
        error: error.message
      }
    };
  }
})();