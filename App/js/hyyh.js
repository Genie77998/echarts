require(
    [
        'echarts',
        'echarts/chart/map'
    ],
    function(ec, common) {
        "use strict";
        var main1 = document.getElementById('main1'),
            main2 = document.getElementById('main2'),
            box = document.getElementById('resultBox'),
            appNumber = document.getElementById('appNumber'),
            cacha = [],
            autoTime = 5000,
            _color  = ['#ff5621','#fd7e2e','#ffb718','#ffea3a','#77bfbf'];
        $('section').css({
            height: function() {
                return $(document).height() > 400 ? $(document).height() : 400;
            }
        });
        var myChart = {
            myChart: main1,
            autoTime : autoTime,
            url: _globaDate.hyyh._fgl.url,
            autoSend : true,
            option: {
                series: [{
                    name: 'App活跃用户覆盖率',
                    type: 'map',
                    mapType: 'china',
                    hoverable: false,
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color: '#224046'
                            },
                            borderColor: '#142b32',
                            borderWidth: 2
                        }
                    },
                    data: []
                }]
            },
            callback: function() {
                resuleFn.call(this);
                this.myChart.setOption(this.option);
            }
        };

        function getNumber(){
            var setMakepoint = this.setMakepoint;
            $.ajax({
                url: _globaDate.hyyh._yh.url,
                success:function(data){
                    var sum = 0;
                    if(data && data.sum){
                        sum = data.sum;
                    }
                    if(!setMakepoint){
                        var _xs = Math.ceil(100000/sum);
                        sum = sum * _xs;
                    }
                    $('.odometer').html(_globaDate.thousands(sum));
                }
            })
        }

        function resuleFn() {
            getNumber.call(this);
            var arr = this.result.data,
                html = '',
                len = arr.length > 10 ? 10 : arr.length,
                _arr = [];
            for(var i = 0; i < len; i++){
                var o = {
                        name: '',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        }
                    };
                    o.name = arr[i].province;
                if(i<4){
                    o.itemStyle.normal.color = _color[i]
                }else{
                    o.itemStyle.normal.color = _color[4]
                }
                _arr.push(o);
            }
            this.option.series[0].data = _arr;
            for(var i = 0 ; i < len ; i++){
                var width = 0,
                    name = arr[i].province ? arr[i].province : '未知';
                if(typeof cacha[i] != 'undefined'){
                    width = cacha[i]
                }else{
                    cacha[i] = arr[i].value;
                }
                html += '<dd><span class="xl">'+(i+1)+'</span><span class="sf">'+name+'</span><div class="jdt"><span class="jd" style="width:'+width+'"></span></div><p>'+arr[i].value+'</p></dd>';
            }
            box.innerHTML = html;
            main2.style.display = 'block';
            $(box).find('.jd').each(function(index, el) {
                $(this).animate({
                    width : arr[index].value
                },800);
            });
        }
        var _c1 = new DataInit(ec, myChart);
    }
);
