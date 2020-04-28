<script>
let norsk = () => {
    fetch('/api/nb')
    window.location.href = "/landing"
}

let engelsk = () => {
    fetch('/api/en')
    window.location.href = "/landing"
}

</script>

<style>
.footer {
    width: 100%;
    height: 6em;
    background-color: #1d3244;
    text-align: center;
}

.footer-content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
</style>
<div class="footer">
<div class="footer-content">
    <button on:click={norsk}>
    norsk
    </button>

    <button on:click={engelsk}>
    engelsk
    </button>
</div>
</div>