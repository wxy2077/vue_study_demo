<template>
    <div>
        <div id="editor" style="height: 350px">

        </div>
    </div>
</template>

<script>
    // 因为要有网页 原代码编辑 所以选择2版本
    // npm install --save wangeditor@2.1.23
    import E from 'wangeditor'
    import uploadUrl from '../../config/config'

    export default {
        name: 'wangEditor',
        data() {
            return {
                editor: null,
            }
        },
        props: {
            editorDefault: {
                type: String,
                default: '<p><br/></p>'
            },
        },
        mounted() {
            this.editor = new E('editor');
            this.editor.config = {
                ...this.editor.config,     //
                uploadImgTimeout: 3000,    // 上传超时时间
                pasteFilter: false,        //关闭样式过滤
                uploadImgUrl: uploadUrl,　　　　//上传图片地址
                uploadHeaders : {　　　　　　//数据流名称
                    'name' : 'file'
                },
            };

            this.editor.config.uploadImgFns.onload =  (resultText, xhr) =>{
                // resultText 服务器端返回的text
                // xhr 是 xmlHttpRequest 对象，IE8、9中不支持

                // 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
                // var originalName = this.editor.uploadImgOriginalName || '';

                // 如果 resultText 是图片的url地址，可以这样插入图片：
                console.log(resultText);
                const url = JSON.parse(resultText).data[0];
                // this.editor.command(null, 'insertHtml', '<img src="' + url + '" style="max-width:100%;"/>');
                // 如果不想要 img 的 max-width 样式，也可以这样插入：
                this.editor.command(null, 'InsertImage', url);
            };

            // 自定义timeout事件
            this.editor.config.uploadImgFns.ontimeout = function (xhr) {
                // xhr 是 xmlHttpRequest 对象，IE8、9中不支持
                alert('上传超时');
            };

            // 自定义error事件
            this.editor.config.uploadImgFns.onerror = function (xhr) {
                // xhr 是 xmlHttpRequest 对象，IE8、9中不支持
                alert('上传错误'+xhr);
            };
            this.editor.create();
            this.$emit('ready');
            this.editor.$txt.html(this.editorDefault)
        },
        created(){
        },
        methods: {
            setContent(val) {　　　　//设置内容
                this.editor.$txt.html(val)
            },
            clearContent() {　　　　//清空内容
                // this.editor.txt.clear()
                this.editor.$txt.html(this.editorDefault)
            },
            getContent() {　　　　　　//获取内容
                var content = this.editor.$txt.html();
                if (content.replace("<p><br></p>","").trim() !="" ) {
                    return this.editor.$txt.html()
                }else{
                    return ""
                }
            }
        }

    }
</script>

<style scoped>

</style>