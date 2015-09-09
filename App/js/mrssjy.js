require(
        [
            'echarts',
            'echarts/chart/line'
        ],
        function (ec) {
            "use strict";
            var main = document.getElementById('main');
                $(main).css({
                    height : function(){
                        return $(document).height()>400?$(document).height() - 40 :400;
                    }
                });
                var myChart = {
                    myChart : main,
                    url : _globaDate.mrssjy.url,
                    option : {
                        title : _globaDate.mrssjy.title,
                        legend: _globaDate.mrssjy.legend,
                        grid: _globaDate.mrssjy.grid,
                        calculable : false,
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap :false,
                                splitLine : {
                                    show : false
                                },
                                axisLabel :{
                                    show :true,
                                    textStyle : {
                                        color :_globaDate.axisLabelColor,
                                        fontSize:20
                                    }
                                },
                                axisLine : {
                                    show : false
                                },
                                axisTick : {
                                    show : false
                                }
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                name : '单位（千元）',
                                axisLine: {
                                    show : true,
                                    lineStyle: _globaDate.lineStyleY2
                                },
                                min : 0,
                                splitNumber : 6,
                                splitLine : {
                                    show : true,
                                    lineStyle: _globaDate.lineStyleY1
                                },
                                axisLabel :{
                                    show :true,
                                    textStyle : {
                                        color :'#77bfbf'
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:_globaDate.mrssjy.legend.data[0],
                                type:'line',
                                smooth:true,
                                zlevel : 1,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default',
                                            color:_globaDate.color.whiteArea,
                                        },
                                        color:_globaDate.color.whiteArea,
                                        lineStyle: {
                                            type: 'default',
                                            color :_globaDate.color.greenArea,
                                            width : 1
                                        }
                                    }
                                },
                                data : [],
                            },
                            {
                                name:_globaDate.mrssjy.legend.data[1],
                                type:'line',
                                zlevel : 2,
                                smooth:true,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default',
                                            color :_globaDate.color.orangeArea,
                                        },
                                        lineStyle: {
                                            type: 'default',
                                            color :_globaDate.color.orangeline,
                                            width : 2
                                        },
                                        color: function(params) {
                                            if(params.dataIndex >= 0){
                                                if(params.dataIndex == new Date().getHours()){
                                                    return _globaDate.color.orangeline;
                                                }else{
                                                    return 'rgba(0,0,0,0)'
                                                }
                                            }else{
                                                return '';
                                            }
                                        }/*,
                                        label: {
                                            show: true,
                                            position: 'top',
                                            textStyle : {
                                                fontSize : 12
                                            }
                                        }*/
                                    }
                                },
                                data : [],
                                markPoint : {
                                    symbol : 'bar',
                                    itemStyle : {
                                        normal :{
                                            color: _globaDate.tmColor
                                        }
                                    },
                                    symbolRotate:30,
                                    data : []
                                }
                            }
                        ]
                    },
                    callback : function(){
                        this.setData().setY().setXDate3().setMakePoint(1);
                        this.myChart.setOption(this.option);
                    }
                };
                var _c1 = new DataInit(ec,myChart);
        }
);
