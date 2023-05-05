<slot></slot>

<style global lang="scss">
    html, body {
        margin:0;
        width:100%;
        height:100%;
        color:white;
    }
    .esc_center {
        h1 {
            max-width:80%;
            margin-right:auto;
            margin-left:auto;
        }
        display:flex;
        flex-direction:column;
        text-align:center;
        align-self:center;
        font-family:Helvetica, sans-serif;
        width:100%;
        height:100%;
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;

        label {
            display:block;
            margin-top:20px;
            input {
                display:block;
                width:200px;
                height:40px;
                margin:20px auto 50px;
                text-align:center;
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
            margin-top:25px;
        }
    }
    .error {
        color: red;
    }
</style>