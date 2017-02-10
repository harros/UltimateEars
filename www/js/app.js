"use strict";

function init()
{
    var app=new App();
}
class App {
    constructor() {
        this.timeout=120; //seconds
        this.lastAction = new Date().getTime();
        this.idleInterval=0;
        $('#page1_button').on('click', this.showMain.bind(this));
        //$('#main_menu').text('dimensions : ' + screen.width + ' , ' + screen.height);

        $('#product_video_close').on('click', this.hideVideo.bind(this)).hide();
        $('#product1').on('click', this.showVideo.bind(this));
        $('#product2').on('click', this.showVideo.bind(this));
        $('#product3').on('click', this.showVideo.bind(this));
        $('#product4').on('click', this.showVideo.bind(this));
        $('#product5').on('click', this.showVideo.bind(this));


        $('#page1').show();

        var contentWidth = document.body.scrollWidth;
        var contentHeight = document.body.scrollHeight;
        var windowWidth = window.innerWidth;
        this.newScale = windowWidth / contentWidth;

        document.body.style.zoom = this.newScale;


        this.main_video_playing = false;
        this.reviews_animated = false;


        this.showIntro();

    }


    showIntro()
    {
        if(this.idleInterval)
        {
            clearInterval(this.idleInterval);
            this.idleInterval=0;
        }
        $('#page1').show();
        $('#main').hide();
        var video = $('<video/>', {
            id: 'page1Video',
            src: 'videos/normal_800.mp4',
            type: 'video/mp4',
            loop: true,
            autoplay: true
        });
        video.appendTo($('#page1'));
    }
    showMain() {
        $('#page1Video').remove();

        this.lastAction=new Date().getTime();
        if(this.idleInterval)
        {
            clearInterval(this.idleInterval);
            this.idleInterval=0;
        }
        this.idleInterval = setInterval(this.checkInterval.bind(this),1000);
        $('#page1').hide();
        $('#main').show();

        this.showMenu();
    }

    checkInterval()
    {
        var now = new Date().getTime();
        if(now-this.lastAction>this.timeout*1000)
        {
            this.showIntro();
        }
    }
    showMenu() {
        var menu = $('#main_menu');
        menu.show();

        menu.addClass('main_menu1');
        $(window).on('scroll', this.scrolled.bind(this));

    }

    scrolled(e) {

        this.lastAction=new Date().getTime();

        //var section = 1 + Math.round((e.currentTarget.scrollY*this.newScaleHeight)/(900*this.newScaleHeight));
        var section = 1 + Math.round((e.currentTarget.scrollY / (900 * this.newScale)));
        section = section > 5 ? 5 : section;
        $('#main_menu').removeClass().addClass('main_menu' + section);
        if (section == 4 && !this.reviews_animated) {
            this.reviews_animated = true;
            this.animateReviews();
        }
        if (section == 5) {
            if (!this.main_video_playing) {
                var video = $('#videosrc').get(0);


                video.src = './videos/normal_800.mp4';
                video.load();
                video.play();
                this.main_video_playing = true;
            }
        }
    }

    showVideo(e) {
        this.lastAction=new Date().getTime();
        var videoid = $(e.currentTarget).attr('id');
        var videobox = $('#product_video_holder');
        videobox.show();
        TweenMax.fromTo(videobox, 0.5, {x: 400, y: 530, width: 0, height: 0}, {
            x: 0,
            y: 0,
            width: 800,
            height: 1060,
            onComplete: this.showAnimationEnded.bind(this)
        });
        $('#product_video').hide();
        var video = $('#product_video').get(0);
        video.src = './videos/' + videoid + '.mp4';

    }

    showAnimationEnded() {
        $('#product_video_close').show();
        $('#product_video').show();
        var video = $('#product_video').get(0);
        video.load();
        video.play();
    }

    hideVideo() {
        var video = $('#product_video').get(0);
        video.pause();
        $('#product_video_holder').hide();
    }

    animateReviews() {
        return;
        this.typingDelay = 0.5;
        this.animateReview1();
    }

    animateReview1() {
        $('#review1a').show();
        $('#review1a').html($('#review1a').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review1a').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview1b.bind(this));
    }

    animateReview1b() {
        $('#review1b').show();
        $('#review1b').html($('#review1b').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review1b').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview2.bind(this));
    }

    animateReview2() {

        $('#review2a').show();
        $('#review2a').html($('#review2a').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review2a').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview2b.bind(this));
    }

    animateReview2b() {
        $('#review2b').show();
        $('#review2b').html($('#review2b').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review2b').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview3.bind(this));
    }

    animateReview3() {

        $('#review3a').show();
        $('#review3a').html($('#review3a').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review3a').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview3b.bind(this));
    }

    animateReview3b() {
        $('#review3b').show();
        $('#review3b').html($('#review3b').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review3b').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview4.bind(this));
    }
    animateReview4() {

        $('#review4a').show();
        $('#review4a').html($('#review4a').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review4a').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview4b.bind(this));
    }

    animateReview4b() {
        $('#review4b').show();
        $('#review4b').html($('#review4b').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review4b').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview5.bind(this));
    }
    animateReview5() {

        $('#review5a').show();
        $('#review5a').html($('#review5a').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review5a').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02, this.animateReview5b.bind(this));
    }

    animateReview5b() {
        $('#review5b').show();
        $('#review5b').html($('#review5b').html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
        TweenMax.staggerFromTo($('#review5b').find("span"), this.typingDelay, {autoAlpha: 0, scale: 7}, {
            autoAlpha: 1,
            scale: 1
        }, 0.02);
    }
}