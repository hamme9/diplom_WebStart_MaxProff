window.addEventListener('DOMContentLoaded', () => {

    //header spisok

    // const repairHeader = document.querySelector('.select-repair__header');
    // const repairBody = document.querySelector('.select-repair__body');
    // const repairItem = document.querySelectorAll('.select-repair__item');
    // const repairSpan = document.querySelector('.select-repair__title');
    // const repairImg = document.querySelector('.select-repair__header img');
    
    // repairHeader.addEventListener('mouseover', () => {
    
    //     if (repairBody.classList.contains('select-repair__body--active')) {
    //         repairBody.classList.remove('select-repair__body--active');
    //         repairImg.style.transform = 'rotate(0deg)';
    //         repairBody.style.maxHeight = null;
    //     }else {

    //         repairBody.classList.add('select-repair__body--active');
    //         roomBody.classList.remove('select-repair__body--active');
    //         designBody.classList.remove('select-repair__body--active');
    //         repairImg.style.transform = 'rotate(180deg)';
    //         repairBody.style.maxHeight = repairBody.scrollHeight + 'px';
    //     }

    //     window.addEventListener('click', (e) => {
    //         const tar1 = e.target
    //         if (!tar1.closest('.select-repair__body') && !tar1.closest('.select-repair__header') && repairBody.classList.contains('select-repair__body--active')) {
    //             repairBody.classList.remove('select-repair__body--active');
    //         }
    //     })
    // });

    // const designHeader = document.querySelector('.select-design__header');
    // const designBody = document.querySelector('.select-design__body');
    // const designItem = document.querySelectorAll('.select-design__item');
    // const designSpan = document.querySelector('.select-design__title');
    // const designImg = document.querySelector('.select-design__header img');
    
    // designHeader.addEventListener('mouseover', () => {
    
    //     if (designBody.classList.contains('select-repair__body--active')) {
    //         designBody.classList.remove('select-repair__body--active');
    //         designImg.style.transform = 'rotate(0deg)';
    //         designBody.style.maxHeight = null;
    //     }else{
    //         designBody.classList.add('select-repair__body--active');
    //         repairBody.classList.remove('select-repair__body--active');
    //         roomBody.classList.remove('select-repair__body--active');
    //         designImg.style.transform = 'rotate(180deg)';
    //         designBody.style.maxHeight = designBody.scrollHeight + 'px';
    //     }

    //     window.addEventListener('click', (e) => {
    //         const tar2 = e.target
    //         if (!tar2.closest('.select-design__body') && !tar2.closest('.select-design__header') && designBody.classList.contains('select-repair__body--active')) {
    //             designBody.classList.remove('select-repair__body--active');
    //         }
    //     })
    // });

    // const roomHeader = document.querySelector('.select-room__header');
    // const roomBody = document.querySelector('.select-room__body');
    // const roomItem = document.querySelectorAll('.select-room__item');
    // const roomSpan = document.querySelector('.select-room__title');
    // const roomImg = document.querySelector('.select-room__header img');
    
    // roomHeader.addEventListener('mouseover', () => {
    
    //     if (roomBody.classList.contains('select-repair__body--active')) {
    //         roomBody.classList.remove('select-repair__body--active');
    //         roomImg.style.transform = 'rotate(0deg)';
    //         roomBody.style.maxHeight = null;
    //     }else{
    //         roomBody.classList.add('select-repair__body--active');
    //         repairBody.classList.remove('select-repair__body--active');
    //         designBody.classList.remove('select-repair__body--active');
    //         roomImg.style.transform = 'rotate(180deg)';
    //         roomBody.style.maxHeight = roomBody.scrollHeight + 'px';
    //     }

    //     window.addEventListener('click', (e) => {
    //         const tar3 = e.target
    //         if (!tar3.closest('.select-room__body') && !tar3.closest('.select-room__header') && roomBody.classList.contains('select-repair__body--active')) {
    //             roomBody.classList.remove('select-repair__body--active');
    //         }
    //     })
    // });
    
    // selectItem.forEach((item, i) => {
    //     item.addEventListener ('click', () => {
    //         selectSpan.textContent = item.textContent;
    //         selectBody.classList.add('select__body--active');
    //         selectImg.style.transform = 'rotate(0deg)';
    //         selectBody.style.maxHeight = null;
    //     });
    // })

    //mobile spisok

    const repairMobileHeader = document.querySelector('.select-mobile-repair');
    const repairMobileBody = document.querySelector('.select-mobile-repair__body');
    const repairMobileItem = document.querySelectorAll('.select-mobile-repair__item');
    const repairMobileSpan = document.querySelector('.select-mobile-repair__title');
    const repairMobileImg = document.querySelector('.select-mobile-repair__header img');
    
    repairMobileHeader.addEventListener('click', () => {
    
        if (repairMobileBody.classList.contains('select-mobile-repair__body--active')) {
            repairMobileBody.classList.remove('select-mobile-repair__body--active');
            repairMobileImg.style.transform = 'rotate(0deg)';
            repairMobileBody.style.maxHeight = null;
        }else{
            repairMobileBody.classList.add('select-mobile-repair__body--active');
            repairMobileImg.style.transform = 'rotate(270deg)';
            repairMobileBody.style.maxHeight = repairMobileBody.scrollHeight + 'px';
        }
    });

    const designMobileHeader = document.querySelector('.select-mobile-design');
    const designMobileBody = document.querySelector('.select-mobile-design__body');
    const designMobileItem = document.querySelectorAll('.select-mobile-design__item');
    const designMobileSpan = document.querySelector('.select-mobile-design__title');
    const designMobileImg = document.querySelector('.select-mobile-design__header img');
    
    designMobileHeader.addEventListener('click', () => {
    
        if (designMobileBody.classList.contains('select-mobile-repair__body--active')) {
            designMobileBody.classList.remove('select-mobile-repair__body--active');
            designMobileImg.style.transform = 'rotate(0deg)';
            designMobileBody.style.maxHeight = null;
        }else{
            designMobileBody.classList.add('select-mobile-repair__body--active');
            designMobileImg.style.transform = 'rotate(270deg)';
            designMobileBody.style.maxHeight = designMobileBody.scrollHeight + 'px';
        }
    });

    const roomMobileHeader = document.querySelector('.select-mobile-room');
    const roomMobileBody = document.querySelector('.select-mobile-room__body');
    const roomMobileItem = document.querySelectorAll('.select-mobile-room__item');
    const roomMobileSpan = document.querySelector('.select-mobile-room__title');
    const roomMobileImg = document.querySelector('.select-mobile-room__header img');
    
    roomMobileHeader.addEventListener('click', () => {
    
        if (roomMobileBody.classList.contains('select-mobile-repair__body--active')) {
            roomMobileBody.classList.remove('select-mobile-repair__body--active');
            roomMobileImg.style.transform = 'rotate(0deg)';
            roomMobileBody.style.maxHeight = null;
        }else{
            roomMobileBody.classList.add('select-mobile-repair__body--active');
            roomMobileImg.style.transform = 'rotate(270deg)';
            roomMobileBody.style.maxHeight = roomMobileBody.scrollHeight + 'px';
        }
    });

    //menu

    const headerMobile = document.querySelector('.header-mobile');
    const burger = document.querySelector('.header__burger');
    const union = document.querySelector('.mobile-chrest');
    const body = document.querySelector('body');
    const mobileForm = document.querySelector('.container-mobile');

    burger.addEventListener('click', () => {
        headerMobile.classList.toggle('active');
        body.classList.add('noscroll')
        headerMobile.classList.add('noscroll2');
        body.classList.toggle('mobile-back');
        mobileForm.classList.toggle('mobile-back');
    });

    union.addEventListener('click', () => {
        headerMobile.classList.toggle('active');
        body.classList.remove('noscroll')
        body.classList.remove('noscroll2');
        body.classList.remove('mobile-back');
        mobileForm.classList.toggle('mobile-back');
    });

    window.addEventListener('click', (e) => {
        const targ = e.target
        if (!targ.closest('.header-mobile') && !targ.closest('.header__burger')  && !targ.closest('.modal__inner')) {
            headerMobile.classList.remove('active');
            body.classList.remove('noscroll')   
            body.classList.remove('noscroll2');
            body.classList.remove('mobile-back');
            mobileForm.classList.remove('mobile-back');
        }
    });




    //price slider

    const swiper = new Swiper('.price', {
        // loop: true,
        pagination: {
          clickable: true,
          el: '.price__pagination',
        },
        navigation: {
        //   nextEl: '.slider__arrow-right',
        //   prevEl: '.slider__arrow-left',
        },
        breakpoints: {
            320: {
                // loop: true,
                slidesPerView: 1.35,
                // loopedSlides: 1,
                // spaceBetween: 25
              },
            770: {
                // loop: false,
                slidesPerView: 4,
            //   spaceBetween: 40
            }
        }
      });

      const swiper1 = new Swiper('.example-slider', {
        loop: true,
        pagination: {
          clickable: true,
        //   el: '.price__pagination',
        },
        navigation: {
          nextEl: '.example__next',
          prevEl: '.example__prev',
        },
        breakpoints: {
            320: {
                // loop: true,
                slidesPerView: 1,
                // loopedSlides: 1,
                // spaceBetween: 25
              },
            770: {
                // loop: false,
                slidesPerView: 1,
                spaceBetween: 5
            }
        }
      });


      const swiper2 = new Swiper('.discount', {
        // loop: true,
        pagination: {
          clickable: true,
          el: '.discount__pagination',
        },
        navigation: {
        //   nextEl: '.slider__arrow-right',
        //   prevEl: '.slider__arrow-left',
        },
        breakpoints: {
            320: {
                loop: false,
                slidesPerView: 1,
                // loopedSlides: 1,
                spaceBetween: 25
              },
            770: {
                loop: false,
                slidesPerView: 3.1,
                spaceBetween: 0
            }
        }
      });


      const swiper3 = new Swiper('.comments__slider', {
        // loop: true,
        pagination: {
          clickable: true,
          el: '.comments__pagination',
        },
        navigation: {
        //   nextEl: '.slider__arrow-right',
        //   prevEl: '.slider__arrow-left',
        },
        breakpoints: {
            320: {
                // loop: true,
                slidesPerView: 1.028,
                // loopedSlides: 1,
                spaceBetween: 25
              },
            770: {
                loop: false,
                slidesPerView: 4,
                // spaceBetween: 0
            }
        }
      });

    const swiper4 = new Swiper('.team__slider', {
        // loop: true,
        pagination: {
          clickable: true,
          el: '.team__pagination',
        },
        navigation: {
          nextEl: '.team__next',
          prevEl: '.team__prev',
        },
        breakpoints: {
            320: {
                loop: true,
                slidesPerView: 1,
                // loopedSlides: 1,
                // spaceBetween: 25
              },
            770: {
                loop: true,
                slidesPerView: 1,
                // spaceBetween: 0
            }
        }
      });


      const swiper5 = new Swiper('.masters__slider', {
        loop: true,
        pagination: {
          clickable: true,
          el: '.masters__pagination',
        },
        navigation: {
          nextEl: '.masters__next',
          prevEl: '.masters__prev',
        },
        breakpoints: {
            320: {
                // loop: true,
                slidesPerView: 1,
                // loopedSlides: 1,
                spaceBetween: 50
              },
            770: {
                // loop: true,
                slidesPerView: 3,
                centeredSlides: true,
                // slideActiveClass: 'masters-active',
                spaceBetween: 12
            }
        }
      });


      var swiper7 = new Swiper(".channel-mobile", {
        loop: false,
        spaceBetween: 15,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
      });


      const swiper6 = new Swiper('.channel__slider', {
        // loop: true,
        pagination: {
          clickable: true,
          el: '.channel__pagination',
        },
        navigation: {
        //   nextEl: '.slider__arrow-right',
        //   prevEl: '.slider__arrow-left',
        },
        thumbs: {
            swiper: swiper7,
          },
        breakpoints: {
            320: {
                loop: false,
                slidesPerView: 1,
                // loopedSlides: 1,
                // centeredSlides: true,
                spaceBetween: 10
              },
            770: {
                loop: false,
                slidesPerView: 6,
                // centeredSlides: true,
                // slideActiveClass: 'masters-active',
                spaceBetween: 0
            }
        }
      });
    
    //   const uniqueSwiper = new Swiper('.unique__slider', {
    //     loop: true,
    //     pagination: {
    //         clickable: true,
    //         el: '.unique__pagination',
    //       },
    //     spaceBetween: 6,
    //     // centeredSlides: true,
    //     // slidesOffsetBefore: 15,
    //     // slidesOffsetAfter: 500,
    //   });


    //akkordeon

    let accardion = document.querySelector('.akkordeon__items');
    let tab = document.querySelectorAll('.akkordeon__item');
    // let answer = document.querySelectorAll('.akkordeon__answer');
    let plus = document.querySelectorAll('.akkordeon__plus');
    let minus = document.querySelectorAll('.akkordeon__minus');

    accardion.addEventListener('click', (e) => {
        const target = e.target.closest('.akkordeon__item');
        if (target) {
            tab.forEach((item, i) => {
                if (item === target && tab[i].classList.contains('akkordeon__item--active')) {
                    // answer[i].classList.remove('active');
                    tab[i].classList.remove('akkordeon__item--active');
                    plus[i].style.display = 'flex';
                    minus[i].style.display = 'none';
                } else if (item === target) {
                    // answer[i].classList.add('active');
                    tab[i].classList.add('akkordeon__item--active');
                    plus[i].style.display = 'none';
                    minus[i].style.display = 'flex';
                } 
                else {
                    // answer[i].classList.remove('active');
                    tab[i].classList.remove('akkordeon__item--active');
                    plus[i].style.display = 'flex';
                    minus[i].style.display = 'none';
                }
            });
        }

    });


    //modal

    const modal = document.querySelector('.modal');
    const modalButtons = document.querySelectorAll('.button-modal');


    modalButtons.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.add('active');
            body.classList.add('noscroll');
        });
    });

    modal.addEventListener('click', (e) => {
        const isModal = e.target.closest('.modal__inner');

        if (!isModal) {
            modal.classList.remove('active');

            if (!modal.classList.contains('active') && !headerMobile.classList.contains('active')) {
                body.classList.remove('noscroll');
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');

            if (!modal.classList.contains('active') && !headerMobile.classList.contains('active')) {
                body.classList.remove('noscroll');
            }
        }
    });



    //iform send + validation


    const form = document.querySelector('.form-send');


    const telSelector = form.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    const validation = new JustValidate('.form-send');

    validation
    .addField('#square1', [{
        rule: 'minLength',
        value: 1,
        errorMessage: 'Слишком маленькая площадь'
    },
    {
        rule: 'maxLength',
        value: 3,
        errorMessage: 'Слишком большая площадь'
    },
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите площадь'
    }
    ])
    .addField('#square2', [{
        rule: 'minLength',
        value: 1,
        errorMessage: 'Слишком маленькая площадь'
    },
    {
        rule: 'maxLength',
        value: 3,
        errorMessage: 'Слишком большая площадь'
    },
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите площадь'
    }
    ])
    .addField('#telephone', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите номер телефона'
    },
    {
        rule: 'function',
        validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10
        },
        errorMessage: 'Введите корректный номер телефона'
    }
    ]).onSuccess((e) => {
        // if (document.querySelector('#check').checked){
            const sendForm = (data) => {
                return fetch('mail.php', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                }).then(res => res.json());
            };
            // form.addEventListener('submit', (e) => {
            //     e.preventDefault();
            
                const dataForm = new FormData(e.target);
                const user = {};
            
                dataForm.forEach((val, key) => {
                user[key] = val;
                });
                


                msg = 'Сообщение отправлено, ожидайте звонка оператора';
                document.getElementById("form__alarmmsg").innerHTML = msg;

                setTimeout(function(){
                    document.getElementById("form__alarmmsg").innerHTML = '';
                }, 5000);

                
                sendForm(user).then(data => {
                    console.log("Письмо успешно ушло!");
                });
            
                e.target.reset();
            // } else {
            //     formError.classList.add('form__error--active');
            // }
        
        });


        //iform2

        const form2 = document.querySelector('.example-form');

        const sendForm2 = (data2) => {
            return fetch('mail2.php', {
                method: 'POST',
                body: JSON.stringify(data2),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(res => res.json());
        };

        form2.addEventListener('submit', (e) => {
            e.preventDefault();
        
            const dataForm2 = new FormData(e.target);
            const user = {};
        
            dataForm2.forEach((val, key) => {
                user[key] = val;
            });
            
            msg = 'Сообщение отправлено, ожидайте звонка оператора';
            document.getElementById("example__alarmmsg").innerHTML = msg;

            setTimeout(function(){
                document.getElementById("example__alarmmsg").innerHTML = '';
            }, 5000);
            
            sendForm2(user).then(data2 => {
                console.log("Письмо успешно ушло!");
            });
        
            e.target.reset();

        });
        // } else {
        //     formError.classList.add('form__error--active');
        // }







        //input square



        const xx = document.querySelectorAll('.form-send__place')


        xx.forEach((input, i) => {
            // xx[i].addEventListener('mouseout', () => {
            window.addEventListener('click', (e) => {
                const tar = e.target
                if (!tar.closest('.form-send__place')) {
                    if(input.value.length) {
                        xx[i].classList.add('form-send__active')
                    } else {
                        xx[i].classList.remove('form-send__active')
                    }
                }
            })
        })
        // })
        


        //back to top

        function trackScroll() {
            var scrolled = window.pageYOffset;
            var coords = document.documentElement.clientHeight;
        
            if (scrolled > coords) {
              goTopBtn.classList.add('back-to-top-show');
            }
            if (scrolled < coords) {
              goTopBtn.classList.remove('back-to-top-show');
            }
          }
        
          function backToTop() {
            if (window.pageYOffset > 0) {
              window.scrollBy(0, -50);
              setTimeout(backToTop, 0);
            }
          }
        
          var goTopBtn = document.querySelector('.back-to-top');
        
          window.addEventListener('scroll', trackScroll);
          goTopBtn.addEventListener('click', backToTop);
             
        


          //video 

        //   xx.forEach((input, i) => {
        //     // xx[i].addEventListener('mouseout', () => {
        //     window.addEventListener('click', (e) => {
        //         const tar = e.target
        //         if (!tar.closest('.form-send__place')) {
        //             if(input.value.length) {
        //                 xx[i].classList.add('form-send__active')
        //             } else {
        //                 xx[i].classList.remove('form-send__active')
        //             }
        //         }
        //     })
        // })
        // yy.forEac
          document.querySelector('.click-for-video').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube').style.display = 'block';
            document.querySelector('iframe.youtube')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video2').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube2').style.display = 'block';
            document.querySelector('iframe.youtube2')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video3').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube3').style.display = 'block';
            document.querySelector('iframe.youtube3')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video4').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube4').style.display = 'block';
            document.querySelector('iframe.youtube4')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video5').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube5').style.display = 'block';
            document.querySelector('iframe.youtube5')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video6').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube6').style.display = 'block';
            document.querySelector('iframe.youtube6')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video7').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube7').style.display = 'block';
            document.querySelector('iframe.youtube7')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video8').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube8').style.display = 'block';
            document.querySelector('iframe.youtube8')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video9').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube9').style.display = 'block';
            document.querySelector('iframe.youtube9')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video10').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube10').style.display = 'block';
            document.querySelector('iframe.youtube10')
              .src = 'video/videoplayback.mp4';
          };
          document.querySelector('.click-for-video11').onclick = function() {
            this.style.display = 'none';
            document.querySelector('div.youtube11').style.display = 'block';
            document.querySelector('iframe.youtube11')
              .src = 'video/videoplayback.mp4';
          };

});