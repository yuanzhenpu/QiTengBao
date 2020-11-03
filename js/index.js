var app = new Vue({
    el: '#app',
    data: {
        // 其他城市
        provinceArr: [{
                proName: '北京',
                class: 'beijing',
                teamArr: [{
                        img: '../img/5d8c18e67dc08.jpg',
                        name: '杨业',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }, {
                        img: '../img/5eb4efbeb2621.png',
                        name: '廖桂英',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5ea19fafedad9.png',
                        name: '王乙涵',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5ea278e19bd21.jpg',
                        name: '陈永麟',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }
                ],
            },
            {
                proName: '上海',
                class: 'shanghai',
                teamArr: [{
                        img: '../img/5eb4ee659d63c.png',
                        name: '陈超',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5caf07f25e36c.jpg',
                        name: '唐鑫',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5ec1f0b579e2a.png',
                        name: '严成林',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5ec1efbd5001e.png',
                        name: '李成圆',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }
                ],
            },
            {
                proName: '广州',
                class: 'guangzhou',
                teamArr: [{
                        img: '../img/5e721bad2d187.jpg',
                        name: '郭志强',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5ea2a5b8803ee.jpg',
                        name: '陈谦',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5e92c5ad3b4a0.png',
                        name: '羊浩宇',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5e721b0b9d908.jpg',
                        name: '胡芳梨',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }
                ],
            },
            {
                proName: '深圳',
                class: 'shenzhen',
                teamArr: [{
                        img: '../img/5caf09e0c7a2b.jpg',
                        name: '陈春梅',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5caf09890b319.jpg',
                        name: '严茜',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5eb519dec7b55.jpg',
                        name: '陈枭雄',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5caf087439446.jpg',
                        name: '杨超',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }
                ],
            },
            {
                proName: '武汉',
                class: 'wuhan',
                teamArr: [{
                        img: '../img/5b3b1a20ee719.jpg',
                        name: '王浪涛',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5eb518a122004.jpg',
                        name: '龙香伶',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5caf077b9bff2.jpg',
                        name: '李意丹',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5b3b1bf1893c6.jpg',
                        name: '何刚',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }
                ],
            },
            {
                proName: '杭州',
                class: 'hangzhou',
                teamArr: [{
                        img: '../img/5b6578af88d21.jpg',
                        name: '胡智明',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5caf09c6e1330.jpg',
                        name: '钟昊辰',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5d8d774e5a101.jpg',
                        name: '罗阳',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5c734b9ab802e.jpg',
                        name: '蔡福场',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }
                ],
            },
            {
                proName: '佛山',
                class: 'foshan',
                teamArr: [{
                        img: '../img/5caf07aef1f2d.jpg',
                        name: '刘东林',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5caf071087905.jpg',
                        name: '杜旭',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5caf07c70f6f0.jpg',
                        name: '罗江',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5c9451c168965.jpg',
                        name: '余波',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }
                ],
            },
            {
                proName: '义乌',
                class: 'yiwu',
                teamArr: [{
                        img: '../img/5cb56d3bc3919.jpg',
                        name: '苏莉',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5ce3d54cb9c69.jpg',
                        name: '杨仲康',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5d1d94f18c4dc.jpg',
                        name: '谢六芳',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    },
                    {
                        img: '../img/5d1d9f253bd1c.jpg',
                        name: '何川',
                        deas: '企腾宝专业客服为您服务',
                        btn: '立即预约',
                    }
                ],
            }
        ],
        // 成都
        chengDuTeamInfoArr: [],
        // 工商服务
        commerceServiceArr: [],
        // 我们的客户
        ourClientsImgArr: [],
    },
    methods: {
        // 成都团队json请求
        getChengDuTeam: function () {
            $.ajax({
                url: '/json/chengduTeam.json',
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    app.chengDuTeamInfoArr = res.chengduTeam;
                }
            })
        },
        // 工商服务json请求你
        getCommerceService: function () {
            $.ajax({
                url: '/json/commerceService.json',
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    app.commerceServiceArr = res.commerceService;
                }
            })
        },
        // 我们的客户json请求你
        getOurClients: function () {
            $.ajax({
                url: '/json/ourClients.json',
                type: 'get',
                dataType: 'json',
                success: function (res) {
                    app.ourClientsImgArr = res.ourClients;
                }
            })
        }
    }
})

// 成都团队json请求
app.getChengDuTeam();
// 工商服务json请求你
app.getCommerceService();
// 我们的客户json请求你
app.getOurClients();


// 滚动文字
function scrollingText() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var successLoanTextBox = document.getElementById('successLoanTextBox');
    var successLoantextContent = document.getElementById('successLoantextContent');
    var successLoanCopy = document.getElementById('successLoanCopyBox');
    successLoanCopy.innerHTML = successLoantextContent.innerHTML;
    if (($('#successLoantextContent').height() > 0) && ($('#successLoantextContent').height() < $(
            '#successLoanTextBox').height())) {
        $('#successLoanTextBox').css('height', $('#successLoantextContent').height());
        setInterval(Marquee, 200);
    } else if (($('#successLoantextContent').height() > 0) && ($('#successLoantextContent').height() >= $(
            '#successLoanTextBox').height())) {
        setInterval(Marquee, 200);
    }

    function Marquee() {
        if ((successLoanCopy.offsetTop - successLoantextContent.offsetTop) < successLoanTextBox.scrollTop)
            successLoanTextBox.scrollTop = 0;
        else {
            successLoanTextBox.scrollTop++;
        }
    }
}

// 专业团队
function teamTab() {
    $(".team_select_one1").hover(function () {
        if ($(this).hasClass('chengdu')) {
            $('.level').removeClass('active')
        } else {
            for (var i = 0; i < 8; i++) {
                if ($(this).hasClass(app.provinceArr[i].class)) {
                    $('.level').removeClass('active')
                }
            }
        }

        $(".team_select_one1").css({
            "background": "#fff",
            "color": "#999",
            "position": "static"
        })

        $(this).css({
            "background": "#2c6ae9",
            "color": "#fff",
            "position": "relative"
        });

        if ($(this).hasClass('chengdu')) {
            $('.chengdu1').addClass('active')
        } else {
            for (var i = 0; i < 8; i++) {
                if ($(this).hasClass(app.provinceArr[i].class)) {
                    $('.' + app.provinceArr[i].class + '1').addClass('active')
                }
            }
        }
    }, function () {
        $(".team_select_one1").css({
            "background": "#fff",
            "color": "#999",
            "position": "static"
        })
        $(this).css({
            "background": "#2c6ae9",
            "color": "#fff",
            "position": "relative"
        });
    });
}

// layui的Tab
//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function () {
    var element = layui.element;
});