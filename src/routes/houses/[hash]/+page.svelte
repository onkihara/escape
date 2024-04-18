<script>
    
    export let data;

    const house = data.house;
    const riddles = data.riddles;

    function riddleIsOpen(riddle) {
        return riddle.state.state === 1;
    }

    function riddleGain(riddle) {
        return riddle.state.state === 1 ? riddle.state.gain : 0;
    }

    function score() {
        return riddles.reduce((accu, riddle) => accu + riddleGain(riddle),0);
    }
   
</script>



<div class="main">

    {#if house.name}
        <h2><span class="label">{ house.name }</span></h2>
    {/if}

    <div class="content">

        {#each riddles as riddle}

            <a  class="riddle" href="{'/houses/'+house.hash+'/'+riddle.id}">
                {#if riddleIsOpen(riddle) }
                    <span>{ riddle.name }</span>
                    <span class="gain">{ riddleGain(riddle) }</span>
                {:else}
                    <span class="questionmark">?</span>  
                {/if}
            </a>

        {/each}
        
    </div>

    <div class="score label">
        Score: { score() }
    </div>

    <div class="logout label">
        <a href="/logout">logout</a>
    </div>

</div>



<style lang="scss">

    @media (max-width: 768px) {
        .main .content .riddle {
            width:120px !important;
            height:120px !important;
            .questionmark {
                font-size:5em !important;
            }
        } 
    }

    .main {
        font-family: "Source Code Pro";
        color:black;
        text-align:center;
        margin:0px;
        height:100%;
        
        h2 {
            margin: 0 0 50px;
            padding:50px 20px;
        }
        .label {
            padding:10px 20px;
            background-color:rgba(255,255,255,.9);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            border-radius:0 20px;
        }
        .content {
            margin:auto;
            max-width:800px;
            display:flex;
            flex-wrap:wrap;
            gap:40px;
            justify-content:space-evenly;
            align-items:center;
            .riddle {
                display:flex;
                align-items:center;
                justify-content:center;
                flex-flow: column;
                gap:30px;
                width:200px;
                height:200px;
                padding:20px;
                margin-bottom:20px;
                background-color:rgba(255,255,255,0.95);
                border-radius: 0 40px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                text-decoration: none;
                color:#CC0000;
                &:hover {
                    background-color:rgba(255,255,255,1);
                }
                .questionmark {
                    font-size:10em;
                }
                .gain {
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    min-width:60px;
                    height:60px;
                    background-color:#CC0000;
                    color:white;
                    font-size:2em;
                    border-radius:30px;
                }
            }
        }
        .score {
            font-weight:800;
            margin: 50px auto;
            max-width:300px;
        }
        .logout {
            a {
                color:#CC0000;
            }
            max-width:180px;
            margin: auto;
        }
    }
</style>

