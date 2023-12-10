<!-- This is an example player attempted to be built: By Everett Tsosie -->
<script>
    var SPOTIFY_ACCESS_TOKEN = "";
    function getPlaybackState(){

    }



</script>

<div class="player">
    <div>
        <!-- Display current song info -->
    </div>
    <div class="buttons">
        <button>&lt&lt</button>
        <button>Play/Pause</button>
        <button>&gt&gt</button>
    </div>
</div>
    
    

<style>
    .player {
        display: inline-grid;
        grid-template-columns: 100%;
        grid-template-rows: 80% 20%;
        min-width: 60%;
        max-width: 100%;
        min-height: 130px;
        max-height: 20%;
        border-style: solid;
        border-width: 1px;
        border-radius: 20px;
        border-color: white;
        margin: 15px;
    }
    .buttons {
        /* grid-row-start: 2;
        grid-row-end: 2; */
    }
</style>