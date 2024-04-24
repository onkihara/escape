<script>
	import { page } from '$app/stores';
    import { onNavigate } from '$app/navigation';
    
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

    function createStyles() {
        if (! $page.data.house) return '';
        const styles = JSON.parse($page.data.house.styles);
        let res = '';
        for (const style in styles) {
            res += style+':';
            if (style === 'background-image') {
                res += 'url(/assets/'+$page.data.house.hash+'/'+styles[style]+')'
            } else {
                res += styles[style];
            }
            res += ';';
        }
        // body-height
        res += 'height:'+document.body.scrollHeight+'px;';
        document.body.setAttribute("style",res);
    }

</script>

<svelte:body use:createStyles  />

<slot></slot>

<style global lang="scss">

    @media (max-width: 1250px) {
        body {
            background-repeat:repeat-y !important;
        } 
    }

    @media (max-width: 480px) {
        .content {
            width:95% !important;
            padding:10px !important;
        }
        .template_content {
            .background_img {
                width:100% !important;
            }
        }
    }

    @font-face {
        font-family: "Source Code Pro", monospace;
        font-optical-sizing: auto;
        font-style: normal;
        font-weight: 400;
        src: url('../assets/SourceCodePro-Regular.ttf') format('ttf');
    }

    html, body {
        margin:0;
        width:100%;
        height:100%;
        color:white;
        background-color:black;
        font-family: "Source Code Pro", monospace;
    }
    .esc_center {
        display:flex;
        flex-direction:column;
        text-align:center;
        width:100%;
        height:100%;
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        
        h1 {
            max-width:80%;
            margin-right:auto;
            margin-left:auto;
        }
        .content {
            text-align: left;
        }
        form {
            text-align:center;
        }
        label {
            display:block;
            margin-top:20px;
            input {
                display:block;
                width:200px;
                height:40px;
                margin:20px auto 50px;
                padding: 10px;
                text-align:center;
                font-size:1.2em;
                border-radius:7px;
                border-color:#C00;
                background-color:black;
                color:white;
            }
            textarea {
                display:block;
                width:300px;
                height:100px;
                margin:20px auto 20px;
                padding: 10px;
                font-size:1.2em;
                border-radius:7px;
                border-color:#C00;
                background-color:black;
                color:white;
            }
        }
        .esc_description {
            color:white;
            max-width:80%;
            margin:auto;
            background-color:rgba(0,0,0,.6);
            padding:15px;
            border-radius:5px;
        }
        button {
            width:80px;
            height:40px;
            margin-top:10px;
            background-color:#C00;
            border: none;
            color:white;
            border-radius: 0 10px;
            cursor:pointer;
            font-family: "Source Code Pro", monospace;
        }
    }
    .highlight {
        color:#CC0000;
        font-weight:bold;
    }
    a.closer {
        width:25px;
        height:25px;
        position: absolute;
        top:5px;
        right:5px;
        cursor:pointer;
        color:black;
        &:hover {
            color:#CC0000;
        }
    }
    .error {
        color: red;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }

    @keyframes slide-from-right {
        from {
            transform: translateX(30px);
        }
    }

    @keyframes slide-to-left {
        to {
            transform: translateX(-30px);
        }
    }

    :root::view-transition-old(root) {
        animation: 500ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
    }

    :root::view-transition-new(root) {
        animation: 810ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms cubic-bezier(0.4, 0, 0.2, 1) both
                slide-from-right;
    }
</style>