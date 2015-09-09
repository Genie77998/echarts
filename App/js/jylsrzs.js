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
                url : _globaDate.jylsrzs.url,
                option : {
                    title: _globaDate.jylsrzs.title,
                    legend: _globaDate.jylsrzs.legend,
                    grid: _globaDate.jylsrzs.grid,
                    calculable: false,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: true,
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: _globaDate.axisLabelColor,
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
                            splitNumber: 10,
                            boundaryGap: true,
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
                            name: _globaDate.jylsrzs.legend.data[0],
                            type: 'bar',
                            smooth: true,
                            zlevel: 1,
                            itemStyle: {
                                normal: {
                                    color: _globaDate.color.whiteArea
                                }
                            },
                            data: []
                        },
                        {
                            name: _globaDate.jylsrzs.legend.data[1],
                            type: 'bar',
                            zlevel: 2,
                            smooth: false,
                            itemStyle: {
                                normal: {
                                    //color: 'rgba(253, 126, 45, 0.8)',
                                    color: function(params) {
                                        // build a color map as your need.
                                        if(params.dataIndex >= 0){
                                            if(params.dataIndex == _globaDate.getToday() -1){
                                                return 'rgba(253, 126, 45, 1)';
                                            }else{
                                                return _globaDate.color.orangeline;
                                            }
                                        }else{
                                            return '';
                                        }
                                    }
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
                    this.setData(10000).setY().setXDate().setMakePoint(1);
                    this.myChart.setOption(this.option);
                }
        };
        var _c1 = new DataInit(ec,myChart);
    }
);
