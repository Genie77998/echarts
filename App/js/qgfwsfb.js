require(
    [
        'echarts',
        'echarts/chart/map'
    ],
    function(ec, common) {
        "use strict";
        var main = document.getElementById('main');
        $(main).css({
            height: function() {
                return $(document).height() > 400 ? $(document).height() : 400;
            }
        });
        var myChart = {
            myChart: main,
            url: _globaDate.qgfwsfb.url,
            option: {
                title: _globaDate.qgfwsfb.title,
                series: [{
                    name: '全国服务商分布图',
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
                    data: [],
                    markPoint: {
                        symbolSize: 30, // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                        symbol: 'image://./images/flag.png',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'inside',
                                    textStyle: {
                                        fontSize: 14,
                                        color: 'white'
                                    }
                                }
                            }
                        },
                        data: []
                    },
                    geoCoord: {
                        "新疆": [84.90231, 41.748],
                        "西藏": [88.7695, 31.6846],
                        "内蒙古": [117.5977, 44.3408],
                        "青海": [96.2402, 35.4199],
                        "四川": [102.9199, 30.1904],
                        "黑龙江": [128.1445, 48.5156],
                        "甘肃": [95.7129, 40.166],
                        "云南": [101.8652, 25.1807],
                        "广西": [108.2813, 23.6426],
                        "湖南": [111.5332, 27.3779],
                        "陕西": [109.5996, 35.6396],
                        "广东": [113.4668, 22.8076],
                        "吉林": [126.4746, 43.5938],
                        "河北": [115.4004, 37.9688],
                        "湖北": [112.2363, 31.1572],
                        "贵州": [106.6113, 26.9385],
                        "山东": [118.7402, 36.4307],
                        "江西": [116.0156, 27.29],
                        "河南": [113.4668, 33.8818],
                        "辽宁": [122.3438, 41.0889],
                        "山西": [112.4121, 37.6611],
                        "安徽": [117.2461, 32.0361],
                        "福建": [118.3008, 25.9277],
                        "浙江": [120.498, 29.0918],
                        "江苏": [120.0586, 32.915],
                        "重庆": [107.7539, 30.1904],
                        "宁夏": [105.9961, 37.3096],
                        "海南": [109.9512, 19.2041],
                        "台湾": [121.0254, 23.5986],
                        "北京": [116.4551, 40.2539],
                        "天津": [117.4219, 39.4189],
                        "上海": [121.4648, 31.2891],
                        "香港": [114.2578, 22.3242],
                        "澳门": [113.5547, 22.1484]
                    }
                }]
            },
            callback: function() {
                resuleFn.call(this);
                this.myChart.setOption(this.option);
            }
        };

        function resuleFn() {
            var _arr = [],
                data = this.result.data;
            if (data && data.length) {
                for (var i = 0; i < data.length; i++) {
                    var obj = {};
                    if (data[i].province && data[i]['province'] != '未知') {
                        obj.name = data[i].province;
                        obj.value = data[i].value;
                        _arr.push(obj);
                    }
                }
            }
            this.option.series[0].markPoint.data = _arr;
        }
        var _c1 = new DataInit(ec, myChart);
    }
);
