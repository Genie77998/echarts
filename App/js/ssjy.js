require(
    [
        'echarts',
        'echarts/chart/map',
    ],
    function(ec, common) {
        "use strict";
        var main1 = document.getElementById('main1'),
            $resultBox = $('#resultMoney'),
            box = document.getElementById('resultCity'),
            $resultShow = $('#resultMoney .odometer'),
            resultCheck = document.getElementById('resultCheck'),
            cacha = [],
            autoTime = 5000,
            provinceData = [
                {name: '北京'},
                {name: '天津'},
                {name: '上海'},
                {name: '重庆'},
                {name: '河北',},
                {name: '河南'},
                {name: '云南',},
                {name: '辽宁',},
                {name: '黑龙江'},
                {name: '湖南',},
                {name: '安徽'},
                {name: '山东'},
                {name: '新疆'},
                {name: '江苏'},
                {name: '浙江'},
                {name: '江西'},
                {name: '湖北'},
                {name: '广西'},
                {name: '甘肃'},
                {name: '山西'},
                {name: '内蒙古'},
                {name: '陕西'},
                {name: '吉林'},
                {name: '福建'},
                {name: '贵州'},
                {name: '广东'},
                {name: '青海'},
                {name: '西藏'},
                {name: '四川'},
                {name: '宁夏'},
                {name: '海南'},
                {name: '台湾'},
                {name: '香港'},
                {name: '澳门'}
            ],
            myData = [[{
                city : '杭州',
                province : '浙江',
                value : 180,
                phone : 13202063849
            },{
                city : '广州',
                province : '广东',
                value : 230,
                phone : 13202063849
            },{
                city : '成都',
                province : '四川',
                value : 150,
                phone : 13202063849
            }],[{
                city : '北京',
                province : '北京',
                value : 180,
                phone : 13202063849
            },{
                city : '南宁',
                province : '广西',
                value : 230,
                phone : 13202063849
            },{
                city : '香港',
                province : '香港',
                value : 150,
                phone : 13202063849
            }],[{
                city : '澳门',
                province : '澳门',
                value : 180,
                phone : 13202063849
            },{
                city : '兰州',
                province : '甘肃',
                value : 230,
                phone : 13202063849
            },{
                city : '武汉',
                province : '湖北',
                value : 150,
                phone : 13202063849
            }]],
            _color  = ['#ff5621','#fd7e2e','#ffb718','#ffea3a','#77bfbf'];
        $('section').css({
            height: function() {
                return $(document).height() > 500 ? $(document).height() : 500;
            }
        });
        var myChart = {
            myChart: main1,
            autoTime : autoTime,
            autoSend : true,
            url: _globaDate.hyyh._fgl.url,
            option: {
                legend: {
                    orient: 'vertical',
                    x:-100,
                    data:['订单量']
                },
                series : [
                    {
                        name: '订单量',
                        type: 'map',
                        hoverable: false,
                        roam: false,
                        itemStyle:{
                            normal:{
                                areaStyle: {
                                    color: '#224046'
                                },
                                borderColor: '#142b32',
                                borderWidth: 2,
                                label:{
                                    show:true,
                                    textStyle: {
                                        fontSize : 0,
                                        color: "rgba(0,0,0,0)"
                                    }
                                }
                            }
                        },
                        data:provinceData
                    }
                ]
            },
            callback: function() {
                resultFn.call(this);
                this.myChart.setOption(this.option);
            },
            before:function(){
                $('dialog').remove();
            }
        };
        function getMoney(){ //实时数据
            var setMakepoint = this.setMakepoint;
            if(!setMakepoint){
                return false;
            }
            $.ajax({
              url: _globaDate.ssjy._1.url,
              timeout: 5000,
              success: function(data){
                var datar = _globaDate.thousands(data.sum);
                $resultBox.show();
                $resultShow.html(datar);
              },
              error: function(xhr, type){
                console.log('加载错误')
              }
            });
        };

        function getCity(){
            var setMakepoint = this.setMakepoint;
            $.ajax({
                url: _globaDate.ssjy._4.url,
                success : function(data){
                    var arr = data.data,
                        html = '',
                        totalMoney = 0 ,
                        _width = $(window).width() * 0.3 * 0.6,
                        len = arr.length > 10 ? 10 : arr.length;
                        for(var s = 0 ; s < len ; s++){
                            totalMoney += arr[s].value;
                        }
                        for(var i = 0 ; i < len ; i++){
                            var width = arr[i].value/totalMoney  * _width;
                            html += '<dd><span class="xl">'+(i+1)+'</span><span class="sf">'+arr[i].province+'</span><div class="jdt" style="width:'+width+'%"><span class="jd"></span></div><p>'+(setMakepoint ? (arr[i].value/1000).toFixed(1) : "")+'</p></dd>';
                        }
                        box.innerHTML = html;
                }
            });
        }

        function getCheck(){
            $.ajax({
                url: _globaDate.ssjy._2.url,
                success : function(result){
                    if(!result || !result.data){return}
                    if(result.data.length != 2){return}
                    var _data = result.data[0],
                        __data = result.data[1],
                        html = '';
                    if(!_data.rows && !__data.rows && !_data.rows.length && !__data.rows.length){return}
                        var len = _data.rows.length > 10 ? 10 : _data.rows.length;
                    for(var i = 0 ; i < len ; i++){
                        var name = typeof _data.rows[i].name != 'undefined' ?_data.rows[i].name : '未知',
                            bf1 = typeof _data.rows[i].number != 'undefined' ? (_data.rows[i].number*100).toFixed(1) : 0,
                            bf2 = typeof __data.rows[i].number != 'undefined' ? (__data.rows[i].number*100).toFixed(1) : 0;
                        html += '<dd><span class="xl">'+(i+1)+'</span><span class="sf">'+name+'</span><div class="jdt"><span class="jd jd1" style="width:'+bf1+'%"></span><span class="jd jd2" style="width:'+bf2+'%"></span></div><p class="p1">'+bf1+'%</p><p class="p2">'+bf2+'%</p></dd>';
                    }
                    resultCheck.innerHTML = html;
                }
            });
        }

        function resultFn(){
            var _this = this;
            getMoney.call(_this);
            getCity.call(_this);
            getCheck.call(_this);
            setTimeout(function(){
                setTips.call(_this);
            },800);
            main2.style.display = 'block';
        }

        function setTips(data){
            var left = _globaDate.mapLeft || 50,
                top = _globaDate.mapTop || 50;
                //index = _globaDate.roundNum(0,(myData.length-1)),
                //_result = myData[index],
                //len = _result.length > 3 ? 3 : _result.length;
                for(var i = 0 ; i < 3 ; i++){
                    var prv = recordRound(),
                        _arr = searchPos(prv.province),
                        _X = _arr[0] + left - 2,
                        _Y = _arr[1] + top - 15,
                        _ele = creatTips();
                        _ele.dialog.style.left = _X +'px';
                        _ele.dialog.style.top = _Y +'px';
                        _ele.dialog.style.zIndex = 500 - i;
                        _ele.dialog.style.opacity = i ==0 ? 1 : 0.5;
                        _ele.span.innerHTML = prv.html;
                        //_ele.span.innerHTML = _result[i].city+'用户'+_result[i].phone+',<br>'+'在线充值'+'<i>'+ _result[i].value +'</i>';
                        _ele.dialog.appendChild(_ele.span);
                        document.body.appendChild(_ele.dialog);
                }
        }

        function creatTips(){
            var dialog = document.createElement('dialog'),
                span = document.createElement('span');
                dialog.className="tips";
                return  {
                    dialog : dialog,
                    span : span
                };
        }

        function searchPos(province){
            var _arr = _globaDate.posArr,
                arr = [];
            for(var i = 0 ; i < _arr.length; i++){
                if(_arr[i].name == province){
                    arr.push(_arr[i].textX,_arr[i].textY);
                    break;
                }
            }
            return arr;
        }

        function recordRound(){
            var arr = [130,131,132,133,134,135,136,137,138,139,150,151,152,153,155,156,157,158,159,170,176,177,178,180,181,182,183,184,185,186,187,188,189],
                arr3 = [100,200,500,1000],
                roundNumber = function(start, end){
                    var total = end - start + 1;
                    return Math.floor(Math.random() * total + start);
                },
                province = provinceData[roundNumber(0,provinceData.length-4)].name,
                str = '';
                str += province;
                str += '用户<br/>';
                str += arr[roundNumber(0,arr.length-1)];
                str += '****';
                str += roundNumber(0,9);
                str += roundNumber(0,9);
                str += roundNumber(0,9);
                str += roundNumber(0,9);
                str += '<br/>在线缴费';
                str += arr3[roundNumber(0,arr3.length-1)];
            return {
                html : str,
                province : province
            };
        }
        console.log(recordRound());

        var _c1 = new DataInit(ec, myChart);
    }
);
