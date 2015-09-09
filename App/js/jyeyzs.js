require(
    [
        'echarts',
        'echarts/chart/bar'
    ],
    function(ec, common) {
        "use strict";
        var main = document.getElementById('main');
        $(main).css({
            height: function() {
                return $(document).height() > 400 ? $(document).height() - 40 : 400;
            }
        });
        var myChart = {
                myChart : main,
                url : _globaDate.jyeyzs.url,
                option : {
                    title: _globaDate.jyeyzs.title,
                    legend: _globaDate.jyeyzs.legend,
                    grid: _globaDate.jyeyzs.grid,
                    calculable: false,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: true,
                        data: [],
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#77bfbf',
                                fontSize:20
                            }
                        },
                        axisLine: _globaDate.axisLine,
                        axisTick: {
                            show: false
                        }
                    }],
                    yAxis: [{
                            type: 'value',
                            name: '单位（万元）',
                            axisLine: {
                                show: true,
                                lineStyle: _globaDate.lineStyleY2
                            },
                            min: 0,
                            boundaryGap: true,
                            splitNumber: 10,
                            splitLine: {
                                show: true,
                                lineStyle: _globaDate.lineStyleY1
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: _globaDate.axisLabelColor,
                                    fontWeight: 'bold'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: _globaDate.jyeyzs.legend.data[0],
                            type: 'bar',
                            smooth: true,
                            zlevel: 1,
                            itemStyle: {
                                normal: {
                                    color: _globaDate.color.whiteArea,
                                    label: {
                                        show: false,
                                        position: 'top',
                                        textStyle: {
                                            fontSize: 15,
                                            //color : '#fff'
                                        }
                                    }
                                },
                            },
                            markPoint : {
                                symbol : 'bar',
                                itemStyle : {
                                    normal :{
                                        color: _globaDate.tmColor
                                    }
                                },
                                symbolRotate:30,
                                data : []
                            },
                            data: []
                        },
                        {
                            name: _globaDate.jyeyzs.legend.data[1],
                            type: 'bar',
                            zlevel: 2,
                            smooth: false,
                            itemStyle: {
                                normal: {
                                    color: _globaDate.color.orangeline
                                }
                            },
                            markPoint : {
                                symbol : 'bar',
                                itemStyle : {
                                    normal :{
                                        color: _globaDate.tmColor
                                    }
                                },
                                symbolRotate:30,
                                data : []
                            },
                            data: []
                        }
                    ]
                },
                callback : function(){
                    this.setMonth().setData(10000).setY().setMakePoint(0).setMakePoint(1);
                    this.myChart.setOption(this.option);
                }
        }
        var _c1 = new DataInit(ec,myChart);
    }
);
