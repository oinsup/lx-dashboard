$(document).ready(function(){
    $('.menuLeft .btnToggle, .menuRight .btnToggle').on({
        'click':function(){
            $(this).toggleClass('active');
            $(this).closest('.menu').toggleClass('wide');
        }
    });

    $('.tab > ul > li').on({
        "click":function (){

            let idx = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tab').siblings('.boardArea').children('.board').eq(idx).addClass('active').siblings('.board').removeClass('active');
        }
    })
    $('.btnSetting').on({
        "click":function (){
            $(this).closest('.settingGroup').toggleClass('active')
        }
    })
    $('.btnMore').on({
        "click":function (){
            $(this).siblings('.btnGroup').addClass('active')
        }
    })

    $('.grid-stack-item-content').on({
        "mouseleave":function (){
            $(this).find('.settingGroup').removeClass('active');
            $(this).find('.btnGroup').removeClass('active');
        }
    })
    $('.tabList > li').on({
        "click":function (){
            let idx = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq(idx).addClass('active').siblings('.tabCont').removeClass('active');
            if($(this).closest('.tabContWrap').hasClass('slide')){
                if(idx === 0){
                    $(this).closest('.tabContWrap').find('.tabCont').animate({height:228},100)
                    //height:130 -> 228
                }else{
                    $(this).closest('.tabContWrap').find('.tabCont').animate({height:429},100)
                    //height:300 -> 429
                }
            }else{
            }
        }
    })
    $('button.chartType').on({
        "click":function (){
            $(this).addClass('active').closest('li').siblings('li').children('.chartType').removeClass('active');
        }
    })
    $('button.toggle').on({
        "click":function(){
            $(this).toggleClass('active');
        }
    })
    $('.btnSlideAdd').on({
        "click":function (){
            grid.addWidget({
                w:4,
                h:3,
                minH:2,
                content:
                '<div class="newCont">' +
                '   <button type="button" class="btnContAdd"><span>추가</span></button> ' +
                '   <button type="button" class="btnContClose"><span>닫기</span></button> ' +
                '</div>' +
                '<div class="popGraph noData">' +
                '  <canvas id="myChart"></canvas>' +
                '</div>'
            })
        }
    })
    $('.btnDataboardClose').on({
        "click":function (){
            $(this).closest('.dataBoard').removeClass('active').removeClass('full');
            $('#content').removeClass('hide');
        }
    })
    $('.popGraph canvas').on({
        "click":function (){
            $('.dataBoard').addClass('active');
        }
    })
    $('.btnDataboardResize').on({
        "click":function (){
            $(this).closest('.dataBoard').toggleClass('full');
            $('#content').toggleClass('hide');
        }
    })
    $('.comboBox span').on({
        "click":function (){
            $(this).closest('.comboBox').toggleClass('active');
        }
    })
    $('.colorPickArea li span').on({
        "click":function (){
            $(this).addClass('active').closest('li').siblings('li').children('span').removeClass('active');
        }
    })

    $('.btnWidgetAdd').on({
        "click":function (){
            $('.widget').addClass('active');
        }
    });
    $('.widget .btnToggle').on({
        "click":function (){
            $(this).closest('.widget').removeClass('active');
        }
    })

    // $('.popup .gridArea.import .grid .imgBox').on({
    //     "click":function (){
    //         $(this).closest('.imgBox').toggleClass('active');
    //     }
    // })

    $('.popup .gridArea.layout .grid').on({
        "click":function (){
            $(this).closest('.grid').toggleClass('active');
        }
    })

    $('.popup .gridArea.import .grid').on({
        "click":function (){
            $(this).closest('.grid').toggleClass('active');
        }
    })

    $('.popup .gridArea.chart .grid').on({
        "click":function (){
            $(this).closest('.grid').toggleClass('active')/*.siblings('.grid').removeClass('active')*/;
            // $(this).closest('.grid').siblings('.grid').removeClass('active')
        }
    })

    $('.tableList.type01 .row').on({
        "click":function (){
            $(this).closest('.row').toggleClass('active');
        }
    })

    $('.editArea .row .btnModify').on({
        "click":function (){
            let val = $(this).closest('.btnGroup').siblings('.editForm').val();
            if($(this).closest('.editArea .row').hasClass('active')){
                if(val !== ''){
                    $(this).closest('.btnGroup').siblings('.dashName').html(val);
                    $(this).closest('.editArea .row').removeClass('active');
                }else{
                    alert('변경할 대시보드 제목을 입력하세요.');
                }
            }else{
                $(this).closest('.editArea .row').addClass('active');
            }
        }
    })

    $('.btnClose').on({
        "click": function click() {
            $(this).closest('.popup').hide();
            $('#dimmed').remove();
        }
    });

    $('.btnSlide').on({
        "click": function click() {
            $(this).toggleClass('active');
        }
    });

})
