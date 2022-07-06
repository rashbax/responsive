/*let menu_left=document.querySelector('.menu__left');
let menu_lang=document.querySelector('.link__language-body');
let menu_right=document.querySelector('.menu__right');
let burger_menu=document.querySelector('.burger__menu');
let lang_col=document.querySelector('.lang__col');
let header_menu=document.querySelector('.header__menu');
let header_burger=document.querySelector('.header__burger');


console.log(w);

/*console.log(menu_left.classList.contains('left__column'));*/

/*
/*if(w<875){
    burger_menu.before(menu_lang);
        }
        else{
            lang_col.before(menu_lang)
        };*/
        /*if (w<875) {
            burger_menu.append(menu_left);
        } else{
            header_menu.before(menu_left);
        };*/
       
  
        /*if (w<875) {
            header_menu.append(menu_right);
        }*/

       /* window.addEventListener('load', function(){
            let header_menu=document.querySelector('.header__menu');
            let menu_left=document.querySelector('.menu__left');
            let burger_menu=document.querySelector('.burger__menu');

            this.window.addEventListener('resize', function(event){
                if(875>=window.innerWidth){
                    burger_menu.append(menu_left);
                }else if(875 < window.innerWidth){
                    header_menu.before(menu_left);
                };
            })
        });*/

        window.addEventListener('resize',  isSmallScreen
        );

        const matchResult=window.matchMedia('(max-width:875px)');
        let burger_menu=document.querySelector('.burger__menu');
        let menu_left=document.querySelector('.menu__left');
        let header_menu=document.querySelector('.header__menu');
        let header_burger=document.querySelector('.header__burger');
        let menu_right=document.querySelector('.menu__right');
        let lang_col=document.querySelector('.lang__col');
        let link_body=document.querySelector('.header__link-body');
        let fch=link_body.firstElementChild;
        console.log(fch);
        
        
        function isSmallScreen() {
            if ( window.matchMedia('(max-width:875px)').matches) {
                burger_menu.append(menu_left);
                burger_menu.append(menu_right);
                burger_menu.prepend(fch);
            } else {
                header_menu.prepend(menu_left);
                header_menu.append(menu_right);
                link_body.prepend(fch);
            }
        }
        isSmallScreen();
       
        let w=window.outerWidth;
        header_burger.addEventListener('click',function burgerR(){
            header_burger.classList.toggle('active');
            document.body.classList.toggle('lock')
        });
        
        header_burger.addEventListener('click',function burgerR(){
            burger_menu.classList.toggle('active')
        })
