/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "select":*/

x = document.getElementsByClassName('select');
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/

  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected input placeholder');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/

  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');

  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener('click', function (e) {
      a.classList.remove('placeholder');
      /*when an item is clicked, update the original select box,
      and the selected item:*/

      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName('same-as-selected');
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class');
          }

          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }

      h.click();
    });
    b.appendChild(c);
  }

  x[i].appendChild(b);
  a.addEventListener('click', function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/


document.addEventListener('click', closeAllSelect);
$(document).ready(function () {
  AOS.init();
  var prefs = {
    element: '.circlebar'
  };

  if ($('.circlebar').length) {
    $('.circlebar').each(function () {
      prefs.element = $(this);
      new Circlebar(prefs);
    });
  }

  $('.rating-tabs__item').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active');
    $(this).siblings('.active').removeClass('active');
    $('.rating-tab.active').slideToggle('slow').removeClass('active');
    $('.rating-tab[data-tab="' + $(this).data('tab-target') + '"]').slideToggle('slow').addClass('active');
  });
  var flagMenuOpen = false;
  $('.burger').click(function () {
    $(this).toggleClass('active');
    $('body').toggleClass('lock');
    $('.nav').toggleClass('active');
    flagMenuOpen = flagMenuOpen ? false : true;
  });
  $('.nav__link').on('click', function (e) {
    if (flagMenuOpen) {
      $('.burger').toggleClass('active');
      $('body').toggleClass('lock');
      $('.nav').toggleClass('active');
      flagMenuOpen = false;
    }
  });

  if (window.outerWidth > 768) {
    var parallaxScenes = {};
    var scenes = document.querySelectorAll('.scene');
    scenes.forEach(function (el, i) {
      parallaxScenes['el' + i] = new Parallax(el);
    });
  }
  /* Modals */


  $('.modal__close').on('click', function (e) {
    e.preventDefault();
    modalClose();
  });
  $('.modal').on('click', function (e) {
    if ($(e.target).hasClass('modal_active')) {
      modalClose();
    }
  });

  function modalClose() {
    $('body').css('overflow', 'auto');
    $('.modal').hasClass('modal_active') ? $('.modal').removeClass('modal_active') : $('.modal').addClass('modal_active');
    $('.modal__body').slideUp();
  }

  $('.modal-trigger').on('click', function (e) {
    e.preventDefault();
    $('body').css('overflow', 'hidden');
    var target = $(this).attr('modal-target');
    $('.modal').addClass('modal_active');
    $(target).slideDown();
  });
});

function Circlebar(prefs) {
  this.element = $(prefs.element);
  this.element.append('<div class="spinner-holder-one animate-0-25-a"><div class="spinner-holder-two animate-0-25-b"><div class="loader-spinner" style=""></div></div></div><div class="spinner-holder-one animate-25-50-a"><div class="spinner-holder-two animate-25-50-b"><div class="loader-spinner"></div></div></div><div class="spinner-holder-one animate-50-75-a"><div class="spinner-holder-two animate-50-75-b"><div class="loader-spinner"></div></div></div><div class="spinner-holder-one animate-75-100-a"><div class="spinner-holder-two animate-75-100-b"><div class="loader-spinner"></div></div></div>');
  this.value, this.maxValue, this.counter, this.dialWidth, this.size, this.fontSize, this.fontColor, this.skin, this.triggerPercentage, this.type, this.timer; // var attribs = this.element.find("div")[0].parentNode.dataset;

  var attribs = this.element[0].dataset,
      that = this;

  this.initialise = function () {
    that.value = parseInt(attribs.circleStarttime) || parseInt(prefs.startTime) || 0;
    that.maxValue = parseInt(attribs.circleMaxvalue) || parseInt(prefs.maxValue) || 60;
    that.counter = parseInt(attribs.circleCounter) || parseInt(prefs.counter) || 1000;
    that.dialWidth = parseInt(attribs.circleDialwidth) || parseInt(prefs.dialWidth) || 5;
    that.size = attribs.circleSize || prefs.size || '150px';
    that.fontSize = attribs.circleFontsize || prefs.fontSize || '20px';
    that.fontColor = attribs.circleFontcolor || prefs.fontColor || '#2499E4';
    that.skin = attribs.circleSkin || prefs.skin || ' ';
    that.triggerPercentage = attribs.circleTriggerpercentage || prefs.triggerPercentage || false;
    that.type = attribs.circleType || prefs.type || 'timer';
    that.element.addClass(that.skin).addClass('loader');
    that.element.find('.loader-bg').css('border-width', that.dialWidth + 'px');
    that.element.find('.loader-spinner').css('border-width', that.dialWidth + 'px');
    that.element.css({
      width: that.size,
      height: that.size
    });
    that.element.find('.loader-bg .circle-text').css({
      'font-size': that.fontSize,
      color: that.fontColor
    });
  };

  this.initialise();

  this.renderProgress = function (progress) {
    progress = Math.floor(progress);
    var angle = 0;

    if (progress < 25) {
      angle = -90 + progress / 100 * 360;
      that.element.find('.animate-0-25-b').css('transform', 'rotate(' + angle + 'deg)');

      if (that.triggerPercentage) {
        that.element.addClass('circle-loaded-0');
      }
    } else if (progress >= 25 && progress < 50) {
      angle = -90 + (progress - 25) / 100 * 360;
      that.element.find('.animate-0-25-b').css('transform', 'rotate(0deg)');
      that.element.find('.animate-25-50-b').css('transform', 'rotate(' + angle + 'deg)');

      if (that.triggerPercentage) {
        that.element.removeClass('circle-loaded-0').addClass('circle-loaded-25');
      }
    } else if (progress >= 50 && progress < 75) {
      angle = -90 + (progress - 50) / 100 * 360;
      that.element.find('.animate-25-50-b, .animate-0-25-b').css('transform', 'rotate(0deg)');
      that.element.find('.animate-50-75-b').css('transform', 'rotate(' + angle + 'deg)');

      if (that.triggerPercentage) {
        that.element.removeClass('circle-loaded-25').addClass('circle-loaded-50');
      }
    } else if (progress >= 75 && progress <= 100) {
      angle = -90 + (progress - 75) / 100 * 360;
      that.element.find('.animate-50-75-b, .animate-25-50-b, .animate-0-25-b').css('transform', 'rotate(0deg)');
      that.element.find('.animate-75-100-b').css('transform', 'rotate(' + angle + 'deg)');

      if (that.triggerPercentage) {
        that.element.removeClass('circle-loaded-50').addClass('circle-loaded-75');
      }
    }
  };

  this.textFilter = function () {
    var percentage = 0,
        date = 0,
        text = that.element.find('.circle-text');

    if (that.type == 'timer') {
      that.timer = setInterval(function () {
        if (that.value < that.maxValue) {
          that.value += parseInt(that.counter / 1000);
          percentage = that.value * 100 / that.maxValue;
          that.renderProgress(percentage);
          text[0].dataset.value = that.value;
          date = new Date(null);
          date.setSeconds(that.value); // specify value for seconds here

          text.html(date.toISOString().substr(11, 8));
        } else {
          clearInterval(that.timer);
        }
      }, that.counter);
    }

    if (that.type == 'progress') {
      var setDeceleratingTimeout = function setDeceleratingTimeout(factor, times) {
        var internalCallback = function (counter) {
          return function () {
            if (that.value < that.maxValue && that.value < 1000) {
              that.value += 1;
              that.renderProgress(that.value);
              text[0].dataset.value = that.value;
              text.html(Math.floor(that.value));
              setTimeout(internalCallback, ++counter * factor);
            }
          };
        }(times, 0);

        setTimeout(internalCallback, factor);
      };

      setDeceleratingTimeout(0.1, 100);
    }
  };

  this.textFilter();

  this.setValue = function (val) {
    text = that.element.find('.circle-text');
    that.value = val;
    that.renderProgress(that.value);
    text[0].dataset.value = that.value;
    text.html(that.value);
  };
}

(function ($) {
  $.fn.Circlebar = function (prefs) {
    prefs.element = this.selector;
    new Circlebar(prefs);
  };
})(jQuery);

if ($('#circle-1').length) {
  var currentLevel = parseInt($('#circle-1').data('current'));
  new Circlebar({
    element: '#circle-1',
    type: 'progress',
    maxValue: currentLevel,
    size: 70,
    fontSize: '20px',
    fontColor: '#fff'
  });
}

if ($('#circle-2').length) {
  var currentExp = parseInt($('#circle-2').data('current'));
  new Circlebar({
    element: '#circle-2',
    type: 'progress',
    maxValue: currentExp,
    size: 70,
    fontSize: '20px',
    fontColor: '#fff'
  });
}

$(document).ready(function () {
  $(window).resize(function () {
    mobProfileToggle();
  });
});
mobProfileToggle();

function mobProfileToggle() {
  if ($(window).width() < 992) {
    $('.user__info .user__list').prepend($('.user__circle-list'));
  } else {
    $('.user__circles-wrap').append($('.user__circle-list'));
  }
}

document.addEventListener('DOMContentLoaded', donateFunction);

function donateFunction() {
  if (document.querySelector('#money')) {
    document.querySelector('#money').addEventListener('input', function () {
      this.value = this.value.replace(/\D/g, '');
    });
  }

  var donateForm = document.querySelector('.donate-form');

  if (!!donateForm) {
    donateForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (validate(this)) {
        var ajax_link = window.location.protocol + '//' + window.location.host + '/donate_api/ajax.php?ajax_pay=check';
        var request = new XMLHttpRequest();
        var formData = new FormData(this);
        request.open('POST', ajax_link);
        request.addEventListener('readystatechange', function () {
          if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.response);

            if (res.result === 'ok') {
              window.location.href = res.link;
            } else {
              document.querySelector('#name').classList.add('error');
            }
          }
        });
        request.send(formData);
      }
    });
  }

  function preparePayment(form, payment) {
    var ajax_link = window.location.protocol + '//' + window.location.host + '/donate_api/multy.php';
    var userName = form.querySelector("input[name='name']").value;
    var userMoney = form.querySelector("input[name='money']").value;
    var paymentId = payment.getAttribute('id');

    if (paymentId == 'interkassa') {
      var interForm = document.querySelector('#interkassa-form');
      interForm.querySelector("input[name='ik_pm_no']").value = userName;
      interForm.querySelector("input[name='ik_am']").value = userMoney;
      interForm.submit();
    }

    if (paymentId == 'enot') {
      var formData = 'userMoney=' + userMoney + '&userName=' + userName + '&paymentId=' + paymentId;
      var request = new XMLHttpRequest();
      request.open('POST', ajax_link);
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      request.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
          var res = JSON.parse(this.response);

          if (res.status == true) {
            window.location.href = res.data;
          }
        }
      });
      request.send(formData);
    }

    if (paymentId == 'kapusta') {
      var _formData = 'userMoney=' + userMoney + '&userName=' + userName + '&paymentId=' + paymentId;

      var _request = new XMLHttpRequest();

      _request.open('POST', ajax_link);

      _request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      _request.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
          var res = JSON.parse(this.response);

          if (res.status == true) {
            window.location.href = res.data;
          }
        }
      });

      _request.send(_formData);
    } // let formData = 'userName='+userName+'&userMoney='+userMoney+'&paymentId='+paymentId;
    // request.open('POST', ajax_link);
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // request.addEventListener('readystatechange', function() {
    // 	if (this.readyState == 4 && this.status == 200) {
    // 		let res = JSON.parse(this.response);
    // 		if (res.result === 'ok') {
    // 			window.location.href = res.link;
    // 		}
    // 	}
    // });
    // request.send(formData);

  }

  var donateMultyForm = document.querySelector('.donate-multy');

  if (!!donateMultyForm) {
    donateMultyForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (validate(this)) {
        var paymentIems = document.querySelectorAll('.payment-item');

        if (!!paymentIems) {
          paymentIems.forEach(function (item, idx) {
            item.addEventListener('click', function () {
              preparePayment(donateMultyForm, item);
            });
          });
        }

        document.querySelector('#modal-payments').style.opacity = '1';
        document.querySelector('#modal-payments').style.pointerEvents = 'auto';
      }
    });
  }

  var modalClose = document.querySelector('.modal-payment-close');

  if (!!modalClose) {
    modalClose.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#modal-payments').style.opacity = '0';
      document.querySelector('#modal-payments').style.pointerEvents = 'none';
    });
  }

  var donateInterForm = document.querySelector('.donate-interkassa');

  if (!!donateInterForm) {
    donateInterForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (validate(this)) {
        donateInterForm.querySelector("input[name='ik_pm_no']").value = donateInterForm.querySelector('#name').value;
        donateInterForm.querySelector("input[name='ik_am']").value = donateInterForm.querySelector('#money').value;
        donateInterForm.submit();
      }
    });
  }
}

function validate(form) {
  var name = form.querySelector('#name');
  var server = form.querySelector('#server');
  var money = form.querySelector('#money');
  var privacy = form.querySelector('#privacy');
  var formIsCorrect = true;

  if (name.value.length <= 6) {
    name.classList.add('error');
    formIsCorrect = false;
  } else {
    name.classList.remove('error');
  }

  if (server.value.length <= 3) {
    document.querySelector('.select-selected').classList.add('error');
    formIsCorrect = false;
  } else {
    document.querySelector('.select-selected').classList.remove('error');
  }

  if (money.value.length <= 1) {
    money.classList.add('error');
    formIsCorrect = false;
  } else {
    money.classList.remove('error');
  }

  if (privacy.checked !== true) {
    document.querySelector('.checkbox__mark').classList.add('error');
    formIsCorrect = false;
  } else {
    document.querySelector('.checkbox__mark').classList.remove('error');
  }

  return formIsCorrect;
}

$(document).ready(function () {
  $('svg.radial-progress').each(function (index, value) {
    $(this).find($('circle.complete')).removeAttr('style');
  });
  $('svg.radial-progress').each(function (index, value) {
    // Get percentage of progress
    percent = $(value).data('percentage'); // Get radius of the svg's circle.complete

    radius = $(this).find($('circle.complete')).attr('r'); // Get circumference (2ПЂr)

    circumference = 2 * Math.PI * radius; // Get stroke-dashoffset value based on the percentage of the circumference

    strokeDashOffset = circumference - percent * circumference / 100; // Transition progress for 1.25 seconds

    $(this).find($('circle.complete')).animate({
      'stroke-dashoffset': strokeDashOffset
    }, 1250);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map