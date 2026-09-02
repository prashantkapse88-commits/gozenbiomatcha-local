
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.uV-pN8XV.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DYvBbere.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.CerKYpGQ.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser-legacy.5ifmx0FJ.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-policy-legacy.COeIDlh6.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.ikvsGnwy.js","/cdn/shopifycloud/checkout-web/assets/c1/types-ShopPayInstallments-legacy.BQz1i_Lq.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery-legacy.1YUe4nKI.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers-legacy.iHUMgu7O.js","/cdn/shopifycloud/checkout-web/assets/c1/sections-shared-legacy.DzmE-G8e.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared-legacy.Bm3bIz7L.js","/cdn/shopifycloud/checkout-web/assets/c1/error-logger-report-graphql-error-legacy.DyF4Ey5M.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails-legacy.DStk4DAJ.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations-legacy.DjKsoiTv.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge-legacy.DpG8nYt8.js","/cdn/shopifycloud/checkout-web/assets/c1/color-contrast-colorContrast-legacy.VvZHw4Io.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-redeemable-legacy.D_MahVRY.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate-legacy.BmWsXJaN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext-legacy.BmBNjsq7.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.D7JojuYM.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage-legacy.D-CyGTe5.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition-legacy.2mmNcA55.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.B7QwaDNQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad-legacy.C-3nuxtH.js","/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks-legacy.DEOvKECh.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePickupPoints-legacy.DSgCNk6q.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.DAyjVQ-W.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm-legacy.CpG-FZQC.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField-legacy.WHGKrhr5.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture-legacy.5lYuiMIx.js","/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module-legacy.BwFQcu4P.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice-legacy.Dk-BVsai.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox-legacy.CpxPr10L.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation-legacy.CYEkyuif.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.CmTDa3O3.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo-legacy.EeqxNCgA.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.CuWYC8g1.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase-legacy.C79zLK62.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel-legacy.Gv197ZAH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack-legacy.CcnCcvyb.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge-legacy.BDkBe4ES.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.-l3AsPX4.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping-legacy.jJ-5rzS1.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation-legacy.B3oaLu0e.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon-legacy.CNM4hcnY.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine-legacy.BJwCWy3o.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride-legacy.DnmwPrBH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.HlCQ5JhP.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason-legacy.DRFUlLPq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts-legacy.DgR5X8ws.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.DpmytcdE.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride-legacy.DMPaxitG.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-stopwatch-legacy.BStqg4ME.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.ERAnZXNK.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.CIpP_CQd.js","/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module-legacy.D-0vL1Yd.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButton-helpers-legacy.CAtm36_a.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button-legacy.Cvl68sD7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi-legacy.xaeNYd3J.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch-legacy.4kQwJWnX.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts-legacy.BtmUOZ1J.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay-legacy.DGjifacL.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot-legacy.B_Lg-w6y.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent-legacy.Eno36bbe.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel-legacy.CfpmX23q.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included-legacy.hF6F0U9B.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines-legacy.BmbhSVve.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.8BvCjNto.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.Bi9UNc0o.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.CMvtnce8.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea-legacy.D59bHkVg.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.CDuS20DT.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment-legacy.CLRAEK4q.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.BxFyjreD.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-browser-engine-legacy.Pfoqxv1R.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-extension-execution-errors-legacy.4OdS_T-b.js","/cdn/shopifycloud/checkout-web/assets/c1/performance-index-legacy.PDqIxjRH.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc-legacy.xUqs5jaF.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.CkUl1Fww.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions-legacy.B_XIPo_w.js","/cdn/shopifycloud/checkout-web/assets/c1/QRCode-legacy.BebnJupb.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-dates-legacy.DCA0mtXE.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField-legacy.DUWYPASv.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom-legacy.B9q-gRx4.js","/cdn/shopifycloud/checkout-web/assets/c1/EmailField-legacy.BKsGwdZr.js","/cdn/shopifycloud/checkout-web/assets/c1/Sheet-legacy.Cuu5qEGG.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage-legacy.DlklYjXV.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets-legacy.BDbtpBQi.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-v4-legacy.hxLzMo8h.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.BQDqJkWt.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-host-legacy.BcmJF-xx.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.CwYRPRdN.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.6kKHlBw6.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-legacy.Cd7rW3DK.worker.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0963/6282/3972/files/Untitled_design_8_9378f8f6-cff4-43b2-8beb-f547ec67b42f_x320.png?v=1773499522"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  