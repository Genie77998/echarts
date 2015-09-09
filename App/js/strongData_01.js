require(
    [
        'echarts',
        'echarts/chart/line'
    ],
    function(ec, common) {
        "use strict";
        var main1 = document.getElementById('main1'),
            main2 = document.getElementById('main2'),
            main3 = document.getElementById('main3'),
            main4 = document.getElementById('main4');
            $('#content').css({
                height : function(){
                    return $(window).height() > 400 ? $(window).height() : 400;
                }
            });
            var myChart1 = {
                    myChart : main1,
                    url : _globaDate.strongData_01._1.url,
                    option : {
                        title : _globaDate.strongData_01._1.title,
                        legend: _globaDate.strongData_01._1.legend,
                        grid: _globaDate.strongData_01._1.grid,
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
                                        color : _globaDate.axisLabelColor,
                                        fontSize:12
                                    },
                                    rotate : 45
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
                                name : '单位（个）',
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
                                        color : _globaDate.axisLabelColor
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:_globaDate.strongData_01._1.legend.data[0],
                                type:'line',
                                zlevel : 2,
                                smooth:true,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default',
                                            color : _globaDate.color.orangeArea
                                        },
                                        lineStyle: {
                                            type: 'default',
                                            color : _globaDate.color.orangeline,
                                            width : 1
                                        },
                                        color: function(params) {
                                            // build a color map as your need.
                                            if(params.dataIndex >= 0){
                                                if(params.dataIndex == _globaDate.getToday() -1){
                                                    return _globaDate.color.orangeline;
                                                }else{
                                                    return _globaDate.color.whiteline;
                                                }
                                            }else{
                                                return '';
                                            }
                                        },
                                        label: {
                                            show: true,
                                            position: 'top',
                                            textStyle : {
                                                fontSize : 10
                                            }
                                        }
                                    }
                                },
                                data : []
                            }
                        ]
                    },
                    callback : function(){
                        this.setData(1,0).setY().setXDate();
                        this.myChart.setOption(this.option);
                    }
            },
            myChart2 = {
                    myChart : main2,
                    url : _globaDate.strongData_01._2.url,
                    option : {
                        title : _globaDate.strongData_01._2.title,
                        legend: _globaDate.strongData_01._2.legend,
                        grid: _globaDate.strongData_01._2.grid,
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
                                        fontSize:10
                                    },
                                    rotate : 45
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
                                name : '单位（千）',
                                axisLine: {
                                    show : true,
                                    lineStyle: _globaDate.lineStyleY1
                                },
                                min : 0,
                                splitNumber : 10,
                                splitLine : {
                                    show : true,
                                    lineStyle: _globaDate.lineStyleY2
                                },
                                axisLabel :{
                                    show :true,
                                    textStyle : {
                                        color :_globaDate.axisLabelColor
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:_globaDate.strongData_01._2.legend.data[0],
                                type:'line',
                                zlevel : 2,
                                smooth:true,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default',
                                            color : _globaDate.color.greenArea,
                                        },
                                        lineStyle: {
                                            type: 'default',
                                            color : _globaDate.color.greenline,
                                            width : 1
                                        },
                                        color: function(params) {
                                            // build a color map as your need.
                                            if(params.dataIndex >= 0){
                                                if(params.dataIndex == _globaDate.getToday() -1){
                                                    return _globaDate.color.greenArea;
                                                }else{
                                                    return '#fff'
                                                }
                                            }else{
                                                return '';
                                            }
                                        },
                                        label: {
                                            show: true,
                                            position: 'top',
                                            textStyle : {
                                                fontSize : 12
                                            }
                                        }
                                    }
                                },
                                data : []
                            }
                        ]
                    },
                    callback : function(){
                        this.setData().setY().setXDate();
                        this.myChart.setOption(this.option);
                    }
            },
            myChart3 = {
                    myChart : main3,
                    url : _globaDate.strongData_01._3.url,
                    option : {
                        title : _globaDate.strongData_01._3.title,
                        legend: _globaDate.strongData_01._3.legend,
                        grid: _globaDate.strongData_01._3.grid,
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
                                        fontSize:10
                                    },
                                    rotate : 45
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
                                name : '单位（千）',
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
                                        color :_globaDate.axisLabelColor
                                    }
                                }
                            }
                        ],
                        series : [
                            {
                                name:_globaDate.strongData_01._3.legend.data[0],
                                type:'line',
                                zlevel : 1,
                                smooth:true,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default',
                                            color : _globaDate.color.whiteArea,
                                        },
                                        lineStyle: {
                                            type: 'default',
                                            color : _globaDate.color.greenline,
                                            width : 1
                                        },
                                        color : '#fff',
                                        label: {
                                            show: true,
                                            position: 'top',
                                            textStyle : {
                                                fontSize : 10
                                            }
                                        }
                                    }
                                },
                                data : []
                            },
                            {
                                name:_globaDate.strongData_01._3.legend.data[1],
                                type:'line',
                                zlevel : 2,
                                smooth:true,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default',
                                            color : _globaDate.color.orangeArea,
                                        },
                                        lineStyle: {
                                            type: 'default',
                                            color : _globaDate.color.orangeline,
                                            width : 1
                                        },
                                        color : '#fd7e2d',
                                        label : {
                                            show: true,
                                            position: 'top',
                                            textStyle : {
                                                fontSize : 10
                                            }
                                        }
                                    }
                                },
                                data : []
                            }
                        ]
                    },
                    callback : function(result){
                        this.setData().setY().setXDate();
                        this.myChart.setOption(this.option);
                    }
            },
            myChart4 = {
                    myChart : main4,
                    url : _globaDate.strongData_01._4.url,
                    option : {
                        title : _globaDate.strongData_01._4.title,
                        legend: _globaDate.strongData_01._4.legend,
                        grid: _globaDate.strongData_01._4.grid,
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
                                        color : _globaDate.axisLabelColor,
                                        fontSize:10
                                    },
                                    rotate : 45
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
                                name : '单位（千）',
                                axisLine: {
                                    show : true,
                                    lineStyle: _globaDate.lineStyleY2
                                },
                                min : 0,
                                splitNumber : 11,
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
                                name:_globaDate.strongData_01._4.legend.data[0],
                                type:'line',
                                zlevel : 2,
                                smooth:true,
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default',
                                            color : _globaDate.color.blueArea,
                                        },
                                        lineStyle: {
                                            type: 'default',
                                            color :_globaDate.color.blueline,
                                            width : 1
                                        },
                                        color: function(params) {
                                            // build a color map as your need.
                                            if(params.dataIndex >= 0){
                                                if(params.dataIndex == _globaDate.getToday() -1){
                                                    return _globaDate.color.blueline;
                                                }else{
                                                    return '#fff'
                                                }
                                            }else{
                                                return '';
                                            }
                                        },
                                        label: {
                                            show: true,
                                            position: 'top',
                                            textStyle : {
                                                fontSize : 10
                                            }
                                        }
                                    }
                                },
                                data : []
                            }
                        ]
                    },
                    callback : function(result){
                        this.setData().setY().setXDate();
                        this.myChart.setOption(this.option);
                    }
            }
            var _c1 = new DataInit(ec,myChart1),
                _c2 = new DataInit(ec,myChart2),
                _c3 = new DataInit(ec,myChart3),
                _c4 = new DataInit(ec,myChart4);
    }
);
