<script lang="ts">
    function getFact() {
        return fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then((data) => data.json())
            .then((res) => res.text);
    }
</script>

<style>
    .response {
        margin: auto;
        align-items: center;
        font-size: 30px;
    }
</style>

<main>
    {#await getFact()}
        <p class="response">Search for a Fact...</p>
    {:then text}
        <h1 class="response">{text}</h1>
    {/await}
</main>