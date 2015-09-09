module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.file.defaultEncoding = 'utf-8';
    var config = {
        'filePath': {
            cwd: 'App/',
            dest: 'dev'
                //dest : '<%= grunt.template.today("yyyymmdd") %>/'
        },
        'name': 'chengniu.com',
        'version': new Date().toString(),
        'seajsVersion': grunt.template.today("yyyymmdd")
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: config,
        connect: {
            server: {
                options: {
                    protocol: 'https',
                    port: 8443
                }
            }
        },
        jsdoc: {
            dist: {
                src: '**/*.js',
                options: {
                    destination: 'doc'
                }
            }
        },
        watch: {
            sass: {
                files: ['<%=config.filePath.cwd%>/scss/**/*.scss'],
                tasks: ['compass:dist']
            },
            css: {
                files: ['<%=config.filePath.cwd%>/**/*.css'],
                tasks: ['copy:dev']
            },
            js: {
                files: ['<%=config.filePath.cwd%>/**/*.js'],
                tasks: ['copy:dev']
            },
            html: {
                files: ['<%=config.filePath.cwd%>/**/*.html'],
                tasks: ['copy:dev']
            }
        },
        imagemin: { // 压缩图片大小
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true, //相对路径
                    cwd: '<%=config.filePath.cwd%>', //路劲
                    src: '**/*.{jpeg,jpg,png,gif}', //文件
                    dest: '<%=config.filePath.dest%>' //输出路劲
                }]
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true, //eqeqeq: 对于简单类型，使用===和!==，而不是==和!=
                newcap: true, //newcap: 对于首字母大写的函数（声明的类），强制使用new
                noarg: true, //noarg: 禁用arguments.caller和arguments.callee
                sub: true, //sub: 对于属性使用aaa.bbb而不是aaa['bbb']
                undef: true, //undef: 查找所有未定义变量
                boss: true, //boss: 查找类似与if(a = 0)这样的代码
                node: true //node: 指定运行环境为node.js
            },
            globals: {
                exports: true,
                jQuery: true
            },
            files: {

            },
        },
        uglify: { //压缩js
            //文件头部输出信息
            my_target: {
                options: {
                    report: "gzip", //输出压缩率，可选的值有 false(不输出信息)，gzip min
                    banner: '/*\n @info: <%= config.name %> \n @version: <%= config.version %> \n*/\n',
                    ASCIIOnly: true,
                    beautify: false,
                    mangle: {
                        except: ["require"] //如果是多个可以使用 ["require","exports","module","jQuery"]
                    },
                    preserveComments: 'false', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    footer: '\n/* @Author <%= pkg.author %> @time of last unpdate:<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */', //添加footer
                    compress: {
                        global_defs: {
                            "DEBUG": false,
                            PROD: true
                        },
                        dead_code: true,
                        pure_funcs: ['console.log'] //["console.log","console.time","console.timeEnd","console.info"]//去除语句
                    }
                },
                files: [{
                    /*
						expand: true,//相对路径
						cwd: '<%=pkg.filePath.js.default%>',//路劲
						src: '<%=pkg.filePath.js.src%>',//文件
						dest: '<%=pkg.filePath.js.output%>',//输出路劲
						ext: '<%=pkg.filePath.js.ext%>'//后缀
					*/
                    expand: true,
                    cwd: '<%=config.filePath.cwd%>',
                    src: '**/*.js',
                    dest: '<%=config.filePath.dest%>'
                }]
            }
        },
        less: { //less生产css
            my_target: {
                files: [{
                    expand: true, //相对路径
                    cwd: '<%=config.filePath.cwd%>/less', //路劲
                    src: '**/*.less', //文件
                    dest: '<%=config.filePath.cwd%>/css', //输出路劲
                    ext: '.css'
                }]
            }
        },
        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            assets: {
                files: [{
                    src: ['<%=config.filePath.dest%>/**/*.{js,css,png,jpg}', '!<%=config.filePath.dest%>/js//lib/echarts/**/*.{js,css}', '!<%=config.filePath.dest%>/js//lib/jquery/**/*.{js,css}']
                }]
            }
        },
        cssmin: {
            dist: {
                options: {
                    report: 'gzip'
                },
                files: [{
                    expand: true, //相对路径
                    cwd: '<%=config.filePath.cwd%>', //路劲
                    src: '**/*.css', //文件
                    dest: '<%=config.filePath.dest%>' //输出路劲
                }]
            }
        },
        md5: {
            compile: {
                files: [{
                    expand: true, //相对路径
                    cwd: '<%=config.filePath.dest%>', //路劲
                    src: '**/*.{js.css}', //文件
                    dest: '<%=config.filePath.dest%>' //输出路劲
                }],
                options: {
                    callback: function(newPath, oldPath) {
                        // do something with the generated file 
                    },
                    keepExtension: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    '<%=config.filePath.cwd%>/css/**/*.css': '<%=config.filePath.cwd%>/scss/**/*.scss'
                }
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        copy: {
            dev: {
                expand: true,
                cwd: '<%=config.filePath.cwd%>',
                src: '**',
                dest: '<%=config.filePath.dest%>',
                flatten: false,
                filter: 'isFile'
            },
            defaults: {
                expand: true,
                cwd: '<%=config.filePath.cwd%>/',
                src: ['!**/*.css', '!**/*.js', '!**/*.sass'],
                dest: '<%=config.filePath.dest%>',
                flatten: false,
                filter: 'isFile'
            },
            main: {
                expand: true,
                cwd: '<%=config.filePath.cwd%>',
                src: '**/*.{swf,map,xml,json,mp3,mp4,rar,eot,svg,ttf,woff,html}',
                dest: '<%=config.filePath.dest%>',
                flatten: false,
                filter: 'isFile'
            }
        },
        clean: {
            /*dest: {
				expand: true,
				cwd: '<%=config.filePath.dest%>',
				src: '**',
				flatten: false,
				filter: 'isDirectory'//isDirectory isFile
			},*/
            normal: {
                src: 'dev'
            }
        },
        usemin: {
            css: {
                files: {
                    src: ['<%=config.filePath.dest%>/css/*.css']
                }
            },
            js: ['<%=config.filePath.dest%>/js/**/*.js'],
            html: ['**/*.html'],
            options: { //替换静态文件引地址前缀
                filePrefixer: function(url) {
                    if (!url) {
                        return '';
                    }
                    return url.replace('../..', '<%=request.getContextPath()%>');
                },
                patterns: {
                    js: [
                        [/(images\.png)/, 'Replacing reference to image.png']
                    ]
                }
            }
        }
    });

    grunt.registerTask('default', ['clean', 'uglify', 'imagemin', 'copy:main', 'cssmin']);
    grunt.registerTask('dev', ['clean', 'copy:dev', 'watch']);
};
